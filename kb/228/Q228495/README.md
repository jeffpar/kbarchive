---
layout: page
title: "Q228495: After Upgrade to SNA Server 4.0 SP2, COMTI Application Fails"
permalink: kb/228/Q228495/
---

## Q228495: After Upgrade to SNA Server 4.0 SP2, COMTI Application Fails

	Article: Q228495
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Upon invocation of a method of a COMTI component library, an "Out of memory"
	message is returned to the client application, and Microsoft Transaction Server
	writes event 4104 to the application event log. The following are examples of
	such event log entries.
	
	The first two examples contain "eyecatchers": "KERNEL32!Interlocked..." and
	"(Exception: C0000005)." However, these are not necessarily present, as in the
	third example below.
	
	Example 1.
	
	  Event ID: 4104
	  Source: Transaction Server
	  Type: Error Category:
	  Context Wrapper
	
	  An object call caused an exception. (Package: BroncBuster)
	  (ProgId: Library.Interface.1) (CLSID:
	  {014A26B5-C2A4-11D2-81C2-0001FA37721E}) (Interface: IDispatch)
	  (IID: {00020400-0000-0000-C000-000000000046}) (Method: 6)
	  (Microsoft Transaction Server Internals Information: File:
	  d:\viper\src\runtime\cw\cwlib.cpp, Line: 935) (Exception: C0000005)
	  (Address: 0x77f051a9)
	  KERNEL32!InterlockedExchangeAdd + 0x9
	  tagen!Ordinal95 + 0x5477 tagen!Ordinal95 + 0x216F
	  mtxex!DllUnregisterServer + 0xB393
	  mtxex!DllUnregisterServer + 0x102EC
	
	In the above description, "Library.Interface.1" is the ProgID of the COMTI
	component library. Also, "Exception: C0000005" indicates an access violation.
	
	Example 2.
	
	  Event ID: 4104
	  Source: Transaction Server
	  Type: Error Category:
	  Context Wrapper
	
	  An object call caused an exception. (Package: CedarBank) (ProgId:
	  Cedar.Bank.1) (CLSID: {EEB4EBF3-9A63-11D0-AB6F-00AA00C1479E}) (Interface:
	  IDispatch) (IID: {00020400-0000-0000-C000-000000000046}) (Method: 6)
	  (Microsoft Transaction Server Internals Information: File:
	  d:\viper\src\runtime\cw\cwlib.cpp, Line: 935) (Exception: C0000005)
	  (Address: 0x77f0515a)
	  KERNEL32!InterlockedIncrement + 0xA
	  mtxex!DllUnregisterServer + 0xB393
	  mtxex!DllUnregisterServer + 0x102EC
	
	Example 3.
	
	  Event ID: 4104
	  Source: Transaction Server
	  Type: Error Category:
	  Context Wrapper
	
	  An object call caused an exception. (Package: TestVB)(ProgId:
	  TestPilote_COMTI.MCVB.1) (CLSID: {8D79A611-E784-11D2-9BD2-0008C7F7EC7C})
	  (Interface: _MCVB) (IID: {8D79A600-E784-11D2-9BD2-0008C7F7EC7C}) (Method:
	  6) (Microsoft Transaction Server Internals Information: File:
	  d:\viper\src\runtime\cw\cwlib.cpp, Line: 861)
	
	CAUSE
	=====
	
	COMTI runtime components try to manipulate Performance Monitor object counters
	in shared memory. The shared memory does not have appropriate access tokens,
	which leads to an access violation. The access violation is caught by Microsoft
	Transaction Server (MTS), which causes the "Out of memory" message to be
	presented. Simultaneously, MTS writes an event 4104 record to the Event Log.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS, version 4.0 SP2. This problem was first corrected in SNA Server
	version 4.0 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbComSearch
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
