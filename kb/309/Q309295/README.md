---
layout: page
title: "Q309295: Microsoft DB2OLEDB Provider Stops Responding Under Stress"
permalink: /kb/309/Q309295/
---

## Q309295: Microsoft DB2OLEDB Provider Stops Responding Under Stress

	Article: Q309295
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call a COM object very frequently (that is, more than 10 times per
	second) in an environment that includes the following:
	
	- A BizTalk server that is using Windows 2000 Server Service Pack 2 and that is
	  running orchestration processes
	
	- A COM+ application server that is using Windows 2000 Server Service Pack 1
	  and that is running multiple COM applications, each of which is using the
	  DB2OLEDB Provider
	
	- A SQL server that is using Windows 2000 Server Service Pack 1
	
	the server may stop responding (hang). A debug of the hang may show a stack trace
	that resembles the following:
	
	  Access violation - code c0000005 (!!! second chance !!!)
	  eax=0104e438 ebx=00000000 ecx=00000135 edx=00000001 esi=00000135 edi=0104e458
	  eip=7801888c esp=0104e3a8 ebp=0104e408 iopl=0         nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000             efl=00010246
	  MSVCRT!_wchdir+56:
	  7801888c 8b01             mov     eax,[ecx]         ds:0023:00000135=????????
	  0:010> kvn
	   # ChildEBP RetAddr  Args to Child              
	  00 0104e408 7520363a 00000135 00000000 7522f090 MSVCRT!_wchdir+0x56
	  01 0104e444 7a11788b 0104e458 00000001 05ccb008 MSEIDRDA!DRDAFreeStmt+0x7a (FPO: [Non-Fpo])
	  02 0104e45c 7a1572b5 05cf8bc0 00000135 00000001 db2oledb!sqlFreeStmt+0x2b (FPO: [3,2,1])
	  03 0104e470 7a1564a0 05ccb008 05ccb008 0104e4b8 db2oledb!CODBSchemaRowsetProcedures__CleanUpProcedureInfo+0x35 (FPO: [0,0,1])
	  04 0104e488 7a1563c8 05accedc 7a13c84e 00000001 db2oledb!CODBSchemaRowsetPrimaryKeys__~CODBSchemaRowsetPrimaryKeys+0x30 (FPO: [0,4,1])
	  05 0104e490 7a13c84e 00000001 00000000 05accedc db2oledb!CODBSchemaRowsetPrimaryKeys__`vector deleting destructor'+0x8 (FPO: [1,0,1])
	  06 0104e4c0 7a121f4b 05acced0 00000000 00000000 db2oledb!CODBRowset__FinalRelease+0xde (FPO: [EBP 0x0104e4c4] [0,6,4])
	  07 0104e4f0 7a12226d 05acced0 1f35a180 05accf20 db2oledb!ATL__CComPolyObject<CODBRowset>__~CComPolyObject<CODBRowset>+0x3b (FPO: [0,6,3])
	  08 0104e4f8 1f35a180 05accf20 068589c0 068589b8 db2oledb!ATL__CComContainedObject<CODBRowset>__Release+0xd (FPO: [1,0,0])
	  09 0104e56c 1f35a432 068589b8 068cd8d0 068c5fc0 msadce!updGetKeyFields+0x20b (FPO: [Non-Fpo])
	  0a 0104e58c 1f35b08f 068589b8 068cd8b0 068cd8b0 msadce!updGetKeys+0x39 (FPO: [Non-Fpo])
	  0b 0104e5ac 1f35b10b 00000001 068cd8b0 00000007 msadce!updBuildUpdateProp+0x92 (FPO: [Non-Fpo])
	  0c 0104e5e4 1f35b43e 068c5f98 068cd8b0 001100e8 msadce!updSQLStringProps+0x6a (FPO: [Non-Fpo])
	  0d 0104e614 1f34fa9f 068bb468 001100e8 068cd8b0 msadce!updSQLParseProps+0x68 (FPO: [Non-Fpo])
	  0e 0104e654 1f3270d8 068cd8b0 05e1dec4 00000000 msadce!DBUpdates__duBuildUpdateProperties+0xee (FPO: [Non-Fpo])
	  0f 0104e684 1f3264a3 06894950 01fbb400 068bb408 msadce!CFetchBindingOLEDB__fbGetUpdateProps+0x75 (FPO: [Non-Fpo])
	  10 0104e694 1f323edc 0104e6b0 068bb540 068bb408 msadce!CFoxRowset__rsInitFetch+0x40 (FPO: [1,0,2])
	  11 0104e6cc 1f346d3b 01fbb400 00000000 05e1dec4 msadce!CFoxRowset__rsInit+0x64 (FPO: [Non-Fpo])
	  12 0104e720 1f465346 06488bb8 1f456f88 01fbb400 msadce!CFoxRowset__InvokeService+0x350 (FPO: [Non-Fpo])
	  13 0104e75c 1f4768c4 01fa7f80 070fbfe0 00000000 msado15!GetFxRowset+0x10c (FPO: [Non-Fpo])
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix kbnofix
	
	=============================================================================
	
