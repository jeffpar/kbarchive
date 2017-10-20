---
layout: page
title: "Q242876: Access Violation in SNA Host Account Cache (SNAUDB) Service"
permalink: /kb/242/Q242876/
---

## Q242876: Access Violation in SNA Host Account Cache (SNAUDB) Service

{% raw %}

	Article: Q242876
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Host Account Cache (Snaudb.exe) may stop unexpectedly. When this occurs,
	the following Host Security features may stop functioning until the service is
	restarted:
	
	- Single Sign-On (SSO)
	- Password Replication to/from a host (for example, Mainframe, AS/400) system
	
	If Drwtsn32.exe is configured as the default debugger on the Windows NT Server
	running the SNA Host Account Cache service, a Drwtsn32.log file similar to the
	following is generated in the Windows NT system directory:
	
	  Application exception occurred:
	  App: exe\snaudb.dbg (pid=<process ID>)
	  When: <date> @ <time>
	  Exception number: c0000005 (access violation)
	
	  [data omitted]
	
	  function: SendRegisterMessage
	  6178c4e7 6a01 push 0x1
	  6178c4e9 6894a07961 push 0x6179a094
	  6178c4ee 68c2030000 push 0x3c2
	  6178c4f3 682ca27961 push 0x6179a22c
	  6178c4f8 ffd3 call ebx
	  6178c4fa 85c0 test eax,eax
	  6178c4fc 0f84cc000000 je SendRegisterMessage+0x38e (6178c5ce)
	  6178c502 a1d4ed7961 ds:6179edd4=00000000 mov eax,[g_pfnProcessRequest+0x14
	  (6179edd4)]
	  6178c507 8d542428 lea edx,[esp+0x28] ss:0239cc1f=????????
	  6178c50b 52 push edx
	  FAULT ->6178c50c 8b8800250000 mov ecx,[eax+0x2500] ds:00002500=????????
	  6178c512 51 push ecx
	  6178c513 6850a27961 push 0x6179a250
	  6178c518 56 push esi
	  6178c519 e8a25cffff call PreAsyncTrace (617821c0)
	  6178c51e 83c410 add esp,0x10
	  6178c521 e9a8000000 jmp SendRegisterMessage+0x38e (6178c5ce)
	  6178c526 8b15c4117861 ds:617811c4=6020fcdc mov edx,[_imp____dwEnabledTraces
	  (617811c4)]
	  6178c52c f60202 test byte ptr [edx],0x2 ds:0138e244=53
	  6178c52f 7431 jz SendRegisterMessage+0x322 (6178c562)
	  6178c531 6a02 push 0x2
	  6178c533 6894a07961 push 0x6179a094
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1 Param#2 Param#3 Param#4 Function Name
	  0138fc40 6178bca0 010ec3f0 0110665c 602012a0 00000102
	  snarpc!SendRegisterMessage (FPO: [EBP 0x602012a0] [2,1670,4])
	  0138fe64 6178b9c4 010ec3f0 00000000 00230000 002416f0 snarpc!RegisterServer
	  (FPO: [EBP 0x602012a0] [2,130,4])
	
	In addition, an event similar to the following is logged in the Windows NT
	application event log when the Access Violation error occurs:
	
	  Event ID: 4097
	  Source: DrWatson
	  Description: The application, exe\snaudb.dbg, generated an application error.
	  The error occurred on <date> @ <time>. The exception generated
	  was c0000005 at address 6178c50c (SendRegisterMessage).
	
	CAUSE
	=====
	
	The Access Violation error occurs if a Host Security component (for example, the
	Backup Host Account Cache service, SNA WinNT Account Synchronization service,
	and so on) attempts to register with the Master (or Primary) SNA Host Account
	database immediately after the component un-registers itself with the Master
	Host Account database.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This fix corrects the timing window that can cause the Access Violation error to
	occur when a Host Security component tries to register itself with the Master
	Database (MDB) immediately after it un-registers itself.
	
	The following is an excerpt from a SNA Host Account Cache internal message trace
	(Udbmsg1.atf) that captures a UDI_REGISTER message that immediately follows a
	UDI_UNREGISTER message from a backup SNA Host Account Cache Database:
	
	  MSG_OUTGOING to ServerType: MDB, Address: 0x27e4b0
	  Message Type: UDI_UNREGISTER. Sequence Number: 0
	  Request: Number of UnRegistration Vectors: 1, Status: 0
	  RegistrationVector #0: DomainName: USPASS, ResourceType: SDB, Address: USFLPK1DEVPD05
	  ____________________________________________________________
	  MSG_OUTGOING to ServerType: MDB, Address: 0x27ed50
	  Message Type: UDI_REGISTER. Sequence Number: 0
	  Request: Number of Registration Vectors: 1, Status: 0
	  RegistrationVector #0: DomainName: USPASS, ResourceType: SDB, Address: USFLPK1DEVPD05
	  MSG_OUTGOING to ServerType: MDB - Error: ErrorCode: 1722
	  MSG_OUTGOING to ServerType: MDB - Error: ErrorCode: 1722
	  ___________________________________________________________
	
	The ResourceType of Secondary Database (SDB) correlates to a Backup SNA Host
	Account Cache service.
	
	The timestamps in the trace file show that these messages were received at
	approximately the same time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
