---
layout: page
title: "Q154298: XFOR: Mail Going to IMC or MSMail Stays in Outbox"
permalink: /kb/154/Q154298/
---

## Q154298: XFOR: Mail Going to IMC or MSMail Stays in Outbox

	Article: Q154298
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 23-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send mail to an Internet address, the message stays in the
	Outbox. Mail sent to a MSMail 3.2 postoffice through the MSMail Connector also
	stays in the Outbox.
	
	CAUSE
	=====
	
	This occurs when the Microsoft Exchange Service Account does not have the
	correct permissions on the Configuration object. The Microsoft Exchange Service
	Account requires Service Account Admin permissions.
	
	RESOLUTION
	==========
	
	To correct the permission problems:
	
	1. Select the Configuration Container in the Microsoft Exchange Administrator
	  program.
	
	2. Click the File menu, and then click Properties. Click the Permissions tab and
	  give the Microsoft Exchange Service Account the service account
	  administration role.
	
	3. Stop and restart both the Microsoft Exchange Message Transfer Agent (MTA) and
	  Microsoft Exchange Internet Mail Connector (IMC) for the change to take
	  effect.
	
	NOTE: This can also occur if the account used for any of the related Microsoft
	Exchange services has been changed. To verify that the appropriate account has
	been specified, check the startup of each Microsoft Exchange service in the
	Services control panel.
	
	
	
	MORE INFORMATION
	================
	
	The same problem occurs when sending mail to an MS Mail postoffice. The
	Application Log in Event Viewer will log the following 2 warnings:
	
	  Event ID: 9297
	  Source: MSExchangeMTA
	  The user... Private MDB has caused a security violation...
	
	  Event ID: 3161
	  Source: MSExchangeMTA
	  An internal MTA error occurred. The logon violated security.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
