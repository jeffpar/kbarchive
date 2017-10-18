---
layout: page
title: "Q192775: XCLN: Outlook Web Access Cannot Use Contacts in Public Folder"
permalink: kb/192/Q192775/
---

## Q192775: XCLN: Outlook Web Access Cannot Use Contacts in Public Folder

	Article: Q192775
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you access a public contact folder by using the Outlook Web Access (OWA)
	client, or access a custom contact folder or subfolder that contains contacts,
	one of the following error messages may be displayed:
	
	  This version of Outlook Web Access only supports your primary contact folder.
	
	  - or -
	
	  Public Contact folders are not supported by Outlook Web Access.
	
	The error message that is displayed depends on the service pack that is installed
	on the Exchange Server Outlook Web Access computer.
	
	This error message may also be displayed if you configure your mailbox to use
	Schedule+ as your primary calendar.
	
	CAUSE
	=====
	
	Outlook Web Access only allows access to contacts that are contained in the
	primary contact folder in your mailbox. Public contacts are not available.
	Custom contact folders and subfolders are also not available.
	
	WORKAROUND
	==========
	
	To work around this problem, use an Outlook client to access public contacts, or
	custom contact folders.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
