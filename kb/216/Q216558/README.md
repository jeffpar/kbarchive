---
layout: page
title: "Q216558: Recycling Server Causes Invalid RPC Binding for Host Security"
permalink: /kb/216/Q216558/
---

## Q216558: Recycling Server Causes Invalid RPC Binding for Host Security

	Article: Q216558
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fixkbfaq
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Password changes initiated from either direction (from Windows NT to host
	systems or from host systems to Windows NT) may not complete properly, causing
	single sign-on (SSO) to fail.
	
	CAUSE
	=====
	
	If Host Security Services are running on different computers running Windows NT
	Server, recycling (rebooting) one of these servers may cause the internal remote
	procedure call (RPC) binding to break between the other server or servers,
	causing password synchronization and single sign-on (SSO) to fail.
	
	For additional information on Host Security Services in a multi-domain
	environment, see the following article in the Microsoft Knowledge Base:
	
	  Q194695 How to Configure Host Security for a Multi-Domain Environment
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, and 4.0 SP2. This problem was first
	corrected in SNA Server version 3.0 Service Pack 4 and SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	An example of where RPC bindings are used is when a password change request is
	initiated. For example, the .dll that intercepts password changes is
	Snapwchg.dll. This .dll relies upon the RPC service and will not be able to
	carry out its function if the underlying RPC bindings break.
	
	Snapwchg.dll is installed on the same domain controller where the Windows NT
	Account Synchronization Service (SNAPMP) is installed. If a failure occurs
	during this time, the following will be observed in the application log on that
	domain controller.
	
	  Event 630
	
	  RPC Layer returned error 0x5 (Access is denied.) This may happen if host
	  security is not installed or the user account the service is running under,
	  is not privileged to send messages to the remote end.
	
	On the SNA Server where Host Account Synchronization Service is installed
	(SNAHOSTPROCESS), the following error will be recorded in the application log of
	that computer.
	
	  Event 401
	
	  Single Sign-On request for [Domain_Name]\[User_Id] failed - failed to
	  communicate with the host account cache for host domain
	  [Host_Security_Domain_Name]
	
	In addition to these event errors, if a internal Host Security trace
	(Hprintx.atf) is run during this time, it will show the following:
	
	  SendGenericMessage About to invoke RPC on binding
	  dc76dcd0-c084-11cf-a65e-0020afc28c52@ncacn_ip_tcp:[Server_Name]
	  013a:0148 11:23:27.0139 stisupp.cpp(2612)
	
	  SendGenericMessage RPC on binding
	  dc76dcd0-c084-11cf-a65e-0020afc28c52@ncacn_ip_tcp:[Server_Name]
	  returned error: 0x6BE (The remote procedure call failed. )
	
	Additional query words: hostsec
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
