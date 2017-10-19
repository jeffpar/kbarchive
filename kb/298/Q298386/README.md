---
layout: page
title: "Q298386: XADM: Error Message: Extension 'MBClean99' Could Not Be Loaded"
permalink: /kb/298/Q298386/
---

## Q298386: XADM: Error Message: Extension 'MBClean99' Could Not Be Loaded

	Article: Q298386
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to use the Microsoft Exchange Server Administrator program to
	administer a site after you used the Administrator program to delete either of
	the following extensions (depending on the server hardware platforms for the
	site), you may receive an error message:
	
	- Extension for Microsoft Exchange Mailbox Manager for i386
	
	- Extension for Microsoft Exchange Mailbox Manager for Alpha
	
	- Both of the preceding extensions.
	
	The error message that you may receive is:
	
	  Extension 'MBClean99' could not be loaded. The extension for Microsoft
	  Exchange Administrator's CPU type has not been installed in the site.
	  Microsoft Exchange Administrator ID no: c1031667
	
	If you click Ignore on the error message, the Mailbox Manager properties are
	open; however, the tabs that are displayed in the properties are the tabs that
	are usually displayed in the mailbox properties (for example, General,
	Distribution Lists, E-mail Addresses, and so on), instead of the Mailbox Manager
	properties tabs (for example, General, Policies, Schedule, Notification, and so
	on).
	
	CAUSE
	=====
	
	This issue can occur if the extensions for the administrator's central
	processing unit (CPU) type, either i386 or Alpha, are not available. More
	specifically, this issue can occur if you used the Administrator program to
	delete either the i386 extension, Alpha extension, or both from the Add-Ins
	container. This issue can also occur if the Administrator program is focused on
	a site that does not have Mailbox Manager installed, but you are trying to
	access the Mailbox Manager properties in another site.
	
	RESOLUTION
	==========
	
	To resolve this issue if the Extensions for Mailbox Manager are missing, run
	Mailbox Manager Setup on a server in the site that does not currently have
	Mailbox Manager installed or remove and reinstall Mailbox Manager on a computer
	that is currently running Mailbox Manager in the site.
	
	WARNING: If you remove Mailbox Manager from a server that is currently running
	Mailbox Manager, when you try to reinstall the component, all settings are lost
	including excluded mailboxes, excluded message classes, custom notifications,
	and so on.
	
	WORKAROUND
	==========
	
	To work around this issue if Mailbox Manager is not installed on any server in
	the site that the Administrator program is currently focused on, change the
	focus of the Administrator program to focus on a site that has Mailbox Manager
	installed.
	
	
	Additional query words: mbclean, mbclean99, c1031667
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
