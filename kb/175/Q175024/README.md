---
layout: page
title: "Q175024: Resetting Domain Member Secure Channel"
permalink: /kb/175/Q175024/
---

## Q175024: Resetting Domain Member Secure Channel

	Article: Q175024
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The domain member Netlogon service may log error 3210 or 5721, but the Netlogon
	service logs error 5722 in the system event log of the domain controller.
	
	You may also receive the following logon message when you attempt to log on to
	your Windows NT domain from a computer running Windows NT Workstation or Windows
	NT Server that is a member of the domain:
	
	  The system cannot log you on to this domain because the system's
	  computer account in its primary domain is missing or the password on
	  that account is incorrect.
	
	These problems may occur if any of the following conditions is true:
	
	- The name of the domain member was recently changed.
	
	- The Emergency Repair Disk was used, but it contained old information.
	
	- The domain member computer account was removed.
	
	The procedure described in this article resets the member secure channel using a
	single command line instead of many operations within the Server Manager. This
	procedure requires the NETDOM utility that is provided with Windows NT 4.0
	Resource Kit Supplement 2.
	
	
	RESOLUTION
	==========
	
	CAUTION: The solution included in this article has not been extensively tested
	in large installations. Microsoft cannot guarantee that modification of domains
	as recommended herein will accomplish the objective described in this article
	under all circumstances and in all configurations.
	
	For each member, there is a discrete communication channel (that is, the secure
	channel) with a domain controller. The secure channel is used by the Netlogon
	service on the member and on the domain controller to communicate. The NETDOM
	command line utility makes it possible to reset the secure channel of the
	member.
	
	Suppose you have a domain member named DOMAINMEMBER. You can reset the member
	secure channel by using the following command:
	
	  NETDOM MEMBER \\DOMAINMEMBER /JOINDOMAIN
	
	You can run the command above on the member DOMAINMEMBER or on any other member
	or domain controller of the domain, provided that you are logged on with an
	account that has administrator access to DOMAINMEMBER.
	
	The output received from the command should be similar to the following:
	
	  Searching PDC for domain DOMAIN ...
	  Found PDC \\DOMAINPDC
	  Querying domain information on PDC \\DOMAINPDC ...
	  Querying domain information on computer \\DOMAINMEMBER ...
	  Computer \\DOMAINMEMBER is already a member of domain DOMAIN.
	  Verifying secure channel on \\DOMAINMEMBER ...
	  Verifying the computer account on the PDC \\DOMAINPDC ...
	  Resetting secure channel ...
	  Changing computer account on PDC \\DOMAINPDC ...
	  Stopping service NETLOGON on \\DOMAINMEMBER .... stopped.
	  Starting service NETLOGON on \\DOMAINMEMBER .... started.
	  Querying user groups of \\DOMAINMEMBER ...
	  Adding DOMAIN domain groups on \\DOMAINMEMBER ...
	
	  The computer \\DOMAINMEMBER joined the domain DOMAIN successfully.
	
	  Logoff/Logon \\DOMAINMEMBER to take modifications into effect.
	
	MORE INFORMATION
	================
	
	
	Assume you have the following configuration:
	
	  Domain = DOMAIN
	  DC = DOMAINDC (domain controller)
	  MEMBER = DOMAINMEMBER
	
	When a member server joins a domain, a computer account is created (you can use
	Server Manager to see the computer account). A default password is given to the
	computer account, and the member stores the password in the Local Security
	Authority (LSA) secret storage $MACHINE.ACC. By default, the password is changed
	every seven days.
	
	Each member maintains such an LSA secret, which is used by the Netlogon service
	to establish a secure channel. If, for some reason, the computer account's
	password and the LSA secret are not synchronized, the Netlogon service logs the
	following error:
	
	  NETLOGON Event ID 3210:
	
	  Failed to authenticate with \\DOMAINDC, a Windows NT domain controller
	  for domain DOMAIN.
	
	If the computer account has been deleted, the following error is logged by the
	member Netlogon service:
	
	  NETLOGON Event ID 5721:
	
	  The session setup to the Windows NT Domain Controller <Unknown> for the
	  domain DOMAIN failed because the Windows NT Domain Controller does not
	  have an account for the computer DOMAINMEMBER.
	
	Similarly, the Netlogon service on the domain controller logs the following error
	when the password is not synchronized:
	
	  NETLOGON Event 5722
	
	  The session setup from the computer DOMAINMEMBER failed to authenticate.
	  The name of the account referenced in the security database is
	  DOMAINMEMBER$. The following error occurred: Access is denied.
	
	In all cases, the event data contains the error. For example, error 0xC0000022
	means that the computer account's password is invalid; error 0xC000018B means
	that the computer account has been deleted, and so on.
	
	
	For more information about secure channels, see the following articles in the
	Microsoft Knowledge Base:
	
	ARTICLE-ID: Q131366
	TITLE : Event Error 5712 with Status Access Denied
	
	ARTICLE-ID: Q142869
	TITLE : Event ID 3210 and 5722 Appear When Synchronizing Entire Domain
	
	ARTICLE-ID: Q149664
	TITLE : Verifying Domain Netlogon Synchronization
	
	ARTICLE-ID: Q158148
	TITLE : Domain Secure Channel Utility -- Nltest.exe
	
	
	Additional query words: prodnt reskit util resource 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
