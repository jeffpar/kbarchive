---
layout: page
title: "Q150518: NetLogon Service Fails When Secure Channel Not Functioning"
permalink: kb/150/Q150518/
---

## Q150518: NetLogon Service Fails When Secure Channel Not Functioning

	Article: Q150518
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NetLogon service fails to start on a backup domain controller (BDC) with
	NetLogon error 3210 or 5721, whereas, in the system event logs of the primary
	domain controller (PDC,) the NetLogon service logs errors 5722 or At the same
	time, the Service Control Manager logs error 7023 on the BDC because the
	NetLogon service could not be started.
	
	For each BDC, there is a discrete communication channel (the secure channel) with
	the PDC. The secure channel is used by the NetLogon service on the BDC and on
	the PDC in order to communicate.
	
	The procedure described below resets the BDC secure channel using a single
	command line instead of many operations within the Server Manager. It requires
	the NETDOM utility provided with Windows NT 4.0 Resource Kit Supplement 2.
	
	CAUSE
	=====
	
	For the purpose of this article assume the following configuration:
	
	  Domain = DOMAIN
	  PDC    = DOMAINPDC
	  BDC    = DOMAINBDC
	
	When a BDC is part of a domain, a computer account is created (the computer
	account can be seen with Server Manager.) A default password is given to the
	computer account and the BDC stores the password in LSA secret storage
	$machine.acc. The password is then changed every seven days.
	
	Each BDC maintains such an LSA secret, which is used by the NetLogon service in
	order to establish a secure channel. If the computer account's password and the
	LSA secret are not synchronized, the NetLogon service fails to start on the BDC
	with the following error message:
	
	  NETLOGON Event 3210
	
	  Failed to authenticate with \\DOMAINPDC, a Windows NT domain controller for
	  domain DOMAIN.
	
	If the computer account has been deleted, one of the following error messages are
	logged by the BDC NetLogon service:
	
	  NETLOGON Event 5721
	
	  The session setup to the Windows NT Domain Controller \\DOMAINPDC for the
	  domain DOMAIN failed because the Windows NT Domain Controller does not have
	  an account for the computer DOMAINBDC.
	
	-or-
	
	  NETLOGON Event 5723
	
	  The session setup from the computer DOMAINBDC failed because there is no trust
	  account in the security database for this computer. The name of the account
	  referenced in the security database is DOMAINBDC$.
	
	Similarly, the NetLogon service on the PDC logs the following error message when
	the password is not synchronized:
	
	  NETLOGON Event 5722
	
	  The session setup from the computer DOMAINBDC failed to authenticate. The name
	  of the account referenced in the security database is DOMAINBDC$. The
	  following error occurred:
	
	  Access is denied.
	
	In all cases, the event data contains the error. For example, the error
	0xC0000022 means the computer account's password is invalid, while the error
	0xC000018B means the computer account has been deleted, and so on.
	
	
	For more information on secure channels, please see the following article(s) in
	the Microsoft Knowledge Base:
	
	Q131366Event Error 5712 with Status Access
	
	Q142869Event ID 3210 and 5722 Appear When Synchronizing Entire Domain
	
	Q149664Verifying Domain Netlogon
	
	Q158148Domain Secure Channel Utility -- NLTEST.EXE
	
	Q160324Event ID 5721 After Deleting Computer
	
	RESOLUTION
	==========
	
	WARNING: The solution included in this article has not been extensively tested
	in large installations. Microsoft cannot guarantee that modifications of domains
	as recommended herein will accomplish the objective described in this article
	under all circumstances and in all configurations.
	
	The NETDOM command line utility makes it possible to reset the secure channel of
	the BDC. This can be very useful when the NetLogon service on the BDC cannot
	start due to a secure channel problem.
	
	The BDC secure channel can be reset as follows:
	
	  NETDOM BDC mybdc /RESET
	
	The command above may be run on the PDC, BDC, or any member of the domain,
	provided that you are logged on as a user who is a member of the Domain Admins
	group. The output looks similar to the following:
	
	  NetDom 1.2 @1997.
	  Querying domain information on computer \\MYBDC ...
	  The computer \\MYBDC is a domain controller of THEDOMAIN.
	  Searching PDC for domain THEDOMAIN ...
	  Found PDC \\THEPDC
	  Verifying secure channel on \\MYBDC ...
	  Verifying the computer account on the PDC \\THEPDC ...
	  The computer account for \\MYBDC doesn't exist or has an invalid
	  password.
	  Resetting secure channel ...
	  Changing computer account on PDC \\THEPDC ...
	  Stopping service NETLOGON on \\MYBDC .... stopped.
	  Starting service NETLOGON on \\MYBDC .... started.
	  The BDC \\MYBDC secure channel was reset successfully.
	  Logoff/Logon \\MYBDC to take modifications into effect.
	
	The command above resets BDC secure channels only if required. If the password
	for the BDC secure channel was good, then you receive a message silimar to the
	following:
	
	  NetDom 1.2 @1997.
	  Querying domain information on computer \\MYBDC ...
	  The computer \\MYBDC is a domain controller of THEDOMAIN.
	  Searching PDC for domain THEDOMAIN ...
	  Found PDC \\THEPDC
	  Verifying secure channel on \\MYBDC ...
	  Verifying the computer account on the PDC \\THEPDC ...
	  Secure channel checked successfully.
	
	
	Additional query words: 4.00 prodnt ntfaqdom
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
