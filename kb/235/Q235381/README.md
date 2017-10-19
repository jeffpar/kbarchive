---
layout: page
title: "Q235381: SNA Server Access Violation While Determining Proxy Privilege"
permalink: /kb/235/Q235381/
---

## Q235381: SNA Server Access Violation While Determining Proxy Privilege

	Article: Q235381
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may unexpectedly fail with an access
	violation, causing an SNA Server Event 624 to be logged in the Windows NT
	application event log, and a log entry to be written to the Winroot\Drwtsn32.log
	file. This specific problem only occurs when SNA Server is supporting an
	application that is attempting to use "privileged proxy" security, as described
	in the following Knowledge Base article:
	
	  Q165385 Single Signon for APPC Applications Using Privileged Proxy
	
	For example, this could occur if COM Transaction Integrator (COMTI) is being used
	and a COMTI Remote Environment is configured to authenticate with user
	credentials.
	
	When this failure occurs, all SNA client users who are currently accessing this
	server lose their SNA sessions. Note that the stack-back trace indicates that
	the Snasii.dll (SNA Server Host Security DLL) has been called by the SNA Server
	service.
	
	Application exception occurred:
	       App: exe\snaservr.dbg (pid)
	       Exception number: c0000005 (access violation)
	
	function: nosymbols
	       77820998 804d0d02         or      byte ptr [ebp+0xd],0x2
	       7782099c 53               push    ebx
	       7782099d 56               push    esi
	       7782099e 57               push    edi
	       7782099f 68d85f8377       push    0x77835fd8
	       778209a4 ff15f0928277     call    dword ptr [778292f0]
	       778209aa 8b7508           mov     esi,[ebp+0x8]
	       778209ad 85f6             test    esi,esi
	       778209af 7505             jnz     778209b6
	       778209b1 bebc948277       mov     esi,0x778294bc
	FAULT ->778209b6 668b0e           mov     cx,[esi]   ds:000307cf=????
	
	*---- Stack Back Trace ----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0dd8f8f4 7781d016 000307cf 00000200 00000001 000f36b8 netapi32!nosymbols
	0dd8f938 6198305c 000307cf 0010bcf6 00000000 0dd8f980 netapi32!NetGroupGetUsers 
	0dd8f970 61983966 0dd8fccc 00000000 00000000 00000000 snasii!nosymbols  (FPO: [EBP 0x00000000] [5,1,4])
	0dd8faa4 619847f7 0dd8fccc 0dd8fcf6 0dd8fac8 61988078 snasii!nosymbols  (FPO: [EBP 0x602027a0] [5,67,4])
	0dd8fcc4 61985503 006c0066 002d006c 00730061 00610070 snasii!nosymbols  (FPO: [85,128,2])
	
	CAUSE
	=====
	
	When SNA Server receives a "privileged proxy" host security request from an APPC
	application, the SNA Server first verifies if the application's user context is
	authorized to make the request. As part of this verification, SNA Server
	attempts to determine what groups the user is a member of. If the Windows NT
	primary domain controller (PDC) for the user domain is inactive, SNA Server
	passes an invalid server name to the NetGroupGetUsers function, leading to an
	access violation.
	
	The actual access violation occurs in netapi32!UaspOpenDomain(), an internal
	function called by netapi32!NetGroupGetUsers().
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1 and 4.0 SP2. This problem was first corrected in SNA Server version
	4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	With this update applied, the SNA Server host security DLL (Snasii.dll) no
	longer encounters an access violation if the Windows NT PDC is down and the
	COMTI user authentication is being used. In addition, Snasii attempts to use the
	closest domain controller (including backup domain controllers), not relying on
	the PDC, and find another domain controller if the one becomes unavailable.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
