---
layout: page
title: "Q254251: XADM: LDAP Err. on Mailbox Manager on Windows 2000 Server DC"
permalink: /kb/254/Q254251/
---

## Q254251: XADM: LDAP Err. on Mailbox Manager on Windows 2000 Server DC

	Article: Q254251
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 27-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Exchange Server 5.5 Service Pack 3 Mailbox Manager is installed on a
	Microsoft Windows 2000 Server-based computer that is a domain controller, the
	following error message may be displayed on the Server Selections tab in the
	Mailbox Manager properties:
	
	  LDAP: Operations Error.
	
	On the same tab, no servers are displayed to manage while this error message is
	displayed.
	
	CAUSE
	=====
	
	This issue can occur because Exchange Server 5.5 Service Pack 3 Mailbox Manager
	uses the default Lightweight Directory Access Protocol (LDAP) port 389 to query
	the Exchange Server directory. The Windows 2000 Server-based computer that is a
	domain controller also uses LDAP port 389 to make queries on the Active
	Directory.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the Exchange Server site protocols LDAP port
	number to another number:
	
	1. Change the site LDAP port number:
	
	  a. Start the Microsoft Exchange Server Administrator program.
	
	  b. Navigate to the site in which Mailbox Manager is installed.
	
	  c. Navigate to the Site Defaults object by using the following path:
	
	  Configuration\Protocols\LDAP (Directory)
	
	  d. In the right pane, click LDAP (Directory) Site Defaults.
	
	  e. On the File menu, click Properties to open the LDAP properties.
	
	  f. The LDAP (Directory) Site Defaults Properties dialog box is displayed. On
	     the General tab, 389 is displayed in the Port Number box.
	
	  g. Change the port number to a different number (for example, 390).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q224447 How To Change LDAP Port Assignments in Exchange Server
	
	  h. Stop and restart the Exchange Server directory service and any dependent
	     services by using Control Panel. This causes the new port number to take
	     effect.
	
	2. Check Mailbox Manager for errors:
	
	  a. Start the Exchange Server Administrator program.
	
	  b. Navigate to the site in which Mailbox Manager is installed.
	
	  c. Click to expand the Configuration container, and then click to expand the
	     Add-Ins container.
	
	  d. In the right pane, click Microsoft Exchange Server Mailbox Manager.
	
	  e. On the File menu, click Properties to open the Mailbox Manager properties.
	
	  f. Click the Server Selections tab, and make sure that there are no error
	     messages, and that there are servers to manage displayed in the Servers
	     list.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :2000,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
