---
layout: page
title: "Q236797: THREAD_BLOCKING Error After WinAPPCCleanup Issued"
permalink: kb/236/Q236797/
---

## Q236797: THREAD_BLOCKING Error After WinAPPCCleanup Issued

	Article: Q236797
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An APPC or CPI-C application may receive the following error message when it
	issues a TP_STARTED call that informs the APPC library that the TP (Transaction
	Program) is starting:
	
	  Primary Return Code = F006 (AP_THREAD_BLOCKING)
	
	The following is an excerpt of a SNA Server APPC API trace that captures the
	failing TP_STARTED call:
	
	APPC  TP_STARTED request
	APPC  
	APPC  Type:Sync                                  VerbID:0001C000
	APPC  
	APPC  ---- Verb Parameter Block at address 0EF40000 ----
	APPC  14000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 C3D7C9C3     <............CPIC>
	APPC  6DC4C5C6 C1D3E36D E3D72020 20202040     <mDEFALTmTP     @>
	APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	APPC  40404040 40404040 40404040              <@@@@@@@@@@@@    >
	APPC  --------------------------------------------------------------------------------
	APPC  TP_STARTED response, result = THREAD_BLOCKING
	APPC  
	APPC  Type:Sync                                  VerbID:0001C000
	APPC  
	APPC  ---- Verb Parameter Block at address 0EF40000 ----
	APPC  14000000 F0060000 00000000 00000000     <....0...........>
	APPC  00000000 00000000 00000000 C3D7C9C3     <............CPIC>
	APPC  6DC4C5C6 C1D3E36D E3D72020 20202040     <mDEFALTmTP     @>
	APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	APPC  40404040 40404040 40404040              <@@@@@@@@@@@@    >
	
	If a CPI-C application is being used when this occurs, the following error
	message is returned by the CPI-C library after it receives the THREAD_BLOCKING
	error from the APPC library:
	
	  Primary Return Code = 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	NOTE: There might be other reasons for getting a PRODUCT_SPECIFIC_ERROR(20) that
	are not necessarily related to this article. Further reasons for getting a
	PRODUCT_SPECIFIC_ERROR(20) can be found in Microsoft Knowledge Base articles by
	searching for "CM_PRODUCT_SPECIFIC_ERROR".
	
	This problem can occur when an APPC or CPI-C application has previously called
	WinAPPCCleanup or WinCPICCleanup to deregister the application from the APPC or
	CPI-C library. If the application subsequently calls WinAPPCStartup or
	WinCPICStartup to reregister the application, the next APPC or CPI-C call may
	fail with the THREAD_BLOCKING error.
	
	CAUSE
	=====
	
	This problem occurs because the APPC library is not properly clearing the
	internal IS_BLOCKING flag when WinAPPCCleanup is called. The IS_BLOCKING flag is
	used by the APPC library to determine whether another APPC blocking call is
	already outstanding on the thread that a next APPC call is being issued on.
	
	This problem has only been reported when the APPC or CPI-C application is
	designed to issue multiple WinAPPCStartup/WinAPPCCleanup or
	WinCPICStartup/WinCPICCleanup sequences for each process. WinAPPCStartup or
	WinCPICStartup should only be issued when the process (that is, application)
	starts. WinAPPCCleanup or WinCPICCleanup should only be issued when the process
	is terminating. They should not be issued for each thread that starts or ends
	within the process.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+--------------------------------+
	| File name   | Date     | Time  | 
	+--------------------------------+
	| Wappc32.dll | xx/xx/xx | xx:xx | 
	+--------------------------------+
	
	NOTE: Date and time information will be provided as soon as it becomes
	available.
	
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	
	WORKAROUND
	==========
	
	Modify the APPC or CPI-C application such that it only calls the
	WinAPPCStartup/WinAPPCCleanup or WinCPICStartup/WinCPICCleanup sequence once for
	each process startup or termination.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
