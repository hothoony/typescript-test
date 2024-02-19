## interface
```typescript
// DashBoardDtoInf.ts

interface ResponseDtoInf {
  statusCd: string,
  resultCd: string,
  resultMsg?: string,
  totalCnt?: number,
}

interface DashboardPayInfoDayResDtoInf extends ResponseDtoInf {
  data: {
    status: string,
    message: string,
    data: DashboardPayInfoResDataInf,
  }
}

interface DashboardPayInfoResDataInf {
  result: number,
  resultStatus: number,
  listSummaryBill: {
    dtYmd?: number,
    dtYy?: number,
    dtMm?: number,
    onceBasicCount: number,
    onceBasicCost: number,
  }[]
}

export type {
  ResponseDtoInf,
  DashboardPayInfoDayResDtoInf,
  DashboardPayInfoResDataInf,
}
```


```typescript
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { atom } from 'recoil';
import { RememberIdType, rememberIdAtom } from '@/store';

const [loading, setLoading] = useState(true);
const refUsernameInput = useRef<HTMLInputElement>(null);
const refPasswordInput = useRef<HTMLInputElement>(null);
const [failCount, setFailCount] = useState<number>(0);
const [rememberId, setRememberId] = useRecoilState<RememberIdType>(rememberIdAtom);

export interface RememberIdType {
  isRemember: boolean,
  emailId: string,
}
```

## Util.ts
```typescript
// Util.ts

import { serviceTypeArray } from "@/array/searchFormArray";
import { OptionType } from "@/components/common/search-form/SelectBox";
import moment from "moment";

export const validateEmail = (email:string):boolean => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(mailformat))
  {
    return true;
  }
  else
  {
    return false;
  }
}

export const isBlank = (param: any) => {
  return (param == null || String(param).trim() == '');
}

export const hasValue = (param: any) => {
  return !isBlank(param);
}

```
