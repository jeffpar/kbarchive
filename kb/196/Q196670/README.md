---
layout: page
title: "Q196670: XWEB: OWA Causes an Access Violation in MAPI"
permalink: /kb/196/Q196670/
---

## Q196670: XWEB: OWA Causes an Access Violation in MAPI

	Article: Q196670
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access on a separate computer to access the Microsoft
	Exchange Server computer, an access violation may occur. The access violation
	may result in a Dr.Watson error message being displayed with the following
	information in the Drwtsn32.log file:
	
	  Microsoft (R) Windows NT (TM) Version 4.00 DrWtsn32
	  Copyright (C) 1985-1996 Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	     App: exe\inetinfo.dbg (pid=542)
	     When: 10/20/1998 @ 9:46:4.78
	     Exception number: c0000005 (access violation)
	
	Below is the thread that caused the fault. Please note that the thread
	information below was seen on an Alpha platform, however the problem exists in
	both the x86 and Alpha builds of Outlook Web Access.
	
	  function: RtlpWaitForCriticalSection
	     77f1c4bc: a48421c0 ldq     t3,21c0(t3)
	     77f1c4c0: 20e72348 lda     t6,2348(t6)
	     77f1c4c4: 47ff0412 bis     zero,zero,a2
	     77f1c4c8: 449ff004 and     t3,#ff,t3
	     77f1c4cc: 44870492 cmoveq  t3,t6,a2
	     77f1c4d0: 47e90410 bis     zero,s0,a0
	     77f1c4d4: 47f2040c bis     zero,a2,s3
	     77f1c4d8: f4c00001 bne     t5,77f1c4e0
	      RtlpWaitForCriticalSection+b0
	     77f1c4dc: d35fff7e bsr     ra,77f1c2d8
	      RtlSetCriticalSectionSpinCount+d8
	     77f1c4e0: a0290000 ldl     t0,0(s0)
	FAULT ->77f1c4e4: a0610010 ldl     t2,10(t0)
	     77f1c4e8: 40603003 addl    t2,#1,t2
	     77f1c4ec: b0610010 stl     t2,10(t0)
	     77f1c4f0: a0a90000 ldl     t4,0(s0)
	     77f1c4f4: 47ff0411 bis     zero,zero,a1
	     77f1c4f8: 47ec0412 bis     zero,s3,a2
	     77f1c4fc: a0e50014 ldl     t6,14(t4)
	     77f1c500: 40e03007 addl    t6,#1,t6
	     77f1c504: b0e50014 stl     t6,14(t4)
	     77f1c508: a2090010 ldl     a0,10(s0)
	     77f1c50c: d34044b0 bsr     ra,77f2d7d0  ZwWaitForSingleObject
	     77f1c510: 2020fefe lda     t0,-102(v0)
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0328eda0  77f2c9e0  77f72110 00000000 00000000
	   NTDLL!RtlpWaitForCriticalSection
	  0328ee20  6fb21384  77f72110 00000000 00000000
	   NTDLL!RtlEnterCriticalSection
	  0328ee40  6fb210b8  77f72110 00000000 00000000 MAPI32!ScInitMapiX
	  0328ef50  6f09320c  77f72110 00000000 00000000 MAPI32!MAPIInitialize
	  0328ef70  6f08ec60  77f72110 00000000 00000000
	   CDO!CSession__M_ScLoadUserProfile
	  0328f600  6f08db04  77f72110 00000000 00000000
	   CDO!CSession__M_ScDo_Logon
	  0328f6d0  6f06db88  77f72110 00000000 00000000 CDO!CSession__V_HrInvoke
	  0328f6e0  6b616d08  77f72110 00000000 00000000 CDO!CDispatchObj__Invoke
	  0328f710  6b616d0c  77f72110 00000000 00000000 0x6b616d0c
	
	CAUSE
	=====
	
	During the release of a handle, Outlook Web Access may lose security context as
	a result of a messaging call, which eventually leads to an access violation in
	Inetinfo.exe.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: MAPI
	
	  File Name    Version
	  -----------------------
	  Mapi32.dll   5.5.2446.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: exfclnfaq Drwtsn32 OWA
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
