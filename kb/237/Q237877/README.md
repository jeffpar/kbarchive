---
layout: page
title: "Q237877: XADM: How to Create a Windows NT User Account in Mixed Site"
permalink: kb/237/Q237877/
---

## Q237877: XADM: How to Create a Windows NT User Account in Mixed Site

	Article: Q237877
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a user on a computer running Microsoft Windows NT Server 4.0 and
	Microsoft Exchange Server 5.5, the corresponding Microsoft Windows 2000 Active
	Directory user logon name is not present.
	
	CAUSE
	=====
	
	When you use the Windows NT 4.0 security account manager (SAM) application
	programming interface (API) to create a Windows 2000 account, there is no way to
	specify the user logon name during creation; therefore, none is created.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	1. Install a Windows 2000 domain controller, a Windows 2000 member server with
	  Microsoft Exchange 2000 Server, and a Windows NT 4.0 member server with
	  Exchange Server 5.5 into the this domain and organization (site).
	
	2. Create a new mailbox on the Exchange Server 5.5 computer, and then create a
	  new Windows NT account.
	
	Note that no corresponding user logon name has been created. To verify:
	
	1. Start the Active Directory Users and Computers Microsoft Management Console
	  (MMC) snap-in.
	
	2. Click the newly created user account.
	
	3. Click Properties, and then view the Account tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
