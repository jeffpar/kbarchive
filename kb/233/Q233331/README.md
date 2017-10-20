---
layout: page
title: "Q233331: XADM: How to Configure a View-Only Admin to Create Mailboxes"
permalink: /kb/233/Q233331/
---

## Q233331: XADM: How to Configure a View-Only Admin to Create Mailboxes

{% raw %}

	Article: Q233331
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to configure Exchange Server permissions to allow an
	end user, like a secretary, to use the Microsoft Exchange Server Administrator
	program (Admin.exe) to create, modify, and delete mailboxes in the Recipients
	container.
	
	MORE INFORMATION
	================
	
	To configure an end user to be allowed to create mailboxes using the view-only
	permissions in Exchange Server:
	
	1. At the Site level, give the Windows NT account View-only Admin permissions.
	
	2. At the Site's Recipients container, add the Windows NT account with Admin
	  permissions under "Windows NT accounts with permissions."
	
	To ensure the Permissions tab is visible for all objects in the Exchange Server
	directory:
	
	1. On the Tools menu, click Options.
	
	2. Click the Permissions tab.
	
	3. Click to select the "Show Permissions page for all objects" and "Display
	  rights for roles on Permissions page" check boxes.
	
	4. Click OK to close the dialog box.
	
	For additional information, please refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q161495 XADM: Setting Up Exchange View-Only Administrators
	
	NOTE: An Exchange Server administrator with View-only permissions needs at a
	minimum Account Operator permissions to create a new Windows NT Account. If the
	administrator does not need to create new Windows NT accounts, Domain User
	permissions are sufficient.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
