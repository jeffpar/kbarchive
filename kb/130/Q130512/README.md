---
layout: page
title: "Q130512: PC NTMMTA: Cannot Browse Service Accounts on NT Server"
permalink: kb/130/Q130512/
---

## Q130512: PC NTMMTA: Cannot Browse Service Accounts on NT Server

	Article: Q130512
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a service in Service Manager, and if you press the Browse button
	on the Service Account line, the Add Users and Groups dialog box will not
	appear. The Create Service screen border will blink (change colors), and nothing
	else will happen.
	
	CAUSE
	=====
	
	The browse button will not allow browsing of a server account database. If the
	computer is logged into a domain, then browsing will display users in the domain
	account database. If it is part of a workgroup, the account needs to be entered
	manually.
	
	RESOLUTION
	==========
	
	To enter a user from the server account database, type in the service account.
	For example, in the Create Service dialog box, the Service Account option would
	be WORKSTATION\USERNAME.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
