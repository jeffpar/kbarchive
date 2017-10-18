---
layout: page
title: "Q271073: XWEB: OWA Logon Page Does Not Display Graphics"
permalink: kb/271/Q271073/
---

## Q271073: XWEB: OWA Logon Page Does Not Display Graphics

	Article: Q271073
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Microsoft Outlook Web Access (OWA), graphics are not
	displayed on the logon page; only text and background are displayed. When you
	enter an e-mail alias, you receive the following error message:
	
	  The page could not be found
	
	CAUSE
	=====
	
	This issue occurs because the default document has been changed from Default.htm
	to Logon.asp in the Internet Information Services (IIS) Manager.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the default document back to default.htm. To do
	this:
	
	1. In IIS Manager, right-click Exchange virtual root, and then click Properties.
	
	2. Click the Documents tab, remove Logon.asp from the list, and then add
	  Default.htm.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
