---
layout: page
title: "Q255234: XFOR: Internet Mail Service Setup Can't Authenticate Password"
permalink: /kb/255/Q255234/
---

## Q255234: XFOR: Internet Mail Service Setup Can't Authenticate Password

	Article: Q255234
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Internet Mail Service on a Microsoft Exchange Server that
	is running on a Windows 2000 Server-based computer, Setup may stop with the
	following error when authenticating the service account password:
	
	  Logon failure: Unknown user name or bad password. ID no. 0xc002052e
	
	CAUSE
	=====
	
	The service account user name for the System Attendant is in the format of
	<user>@<domain>.com. The Internet Mail Service Setup wizard
	references the System Attendant's service account and only understands the
	format of <domain>\<user>.
	
	RESOLUTION
	==========
	
	1. In the Microsoft Management Console, edit the properties of the Exchange
	  System Attendant service.
	
	2. On the Log On tab, type the service account name in the format of
	  <domain>\<user>
	
	3. Restart the System Attendant service and rerun the Internet Mail Service
	  Setup wizard.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
