---
layout: page
title: "Q183205: XADM: Cannot View Connector Properties If Permissions Incorrect"
permalink: /kb/183/Q183205/
---

## Q183205: XADM: Cannot View Connector Properties If Permissions Incorrect

	Article: Q183205
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0., 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to view the properties for an Internet Mail Connector (IMC) in
	the Microsoft Exchange Administrator program, an error message similar to the
	following may be displayed:
	
	  Extension "SMTP" could not be loaded. The specified module could not be
	  found.
	
	If you attempt to view the properties for a Microsoft Mail Connector, an error
	message similar to the following may be displayed:
	
	  Extension "MS" could not be loaded. The specified module could not be
	  found.
	
	If you attempt to view the properties for a Schedule+ Free/Busy Connector, an
	error message similar to the following may be displayed:
	
	  Extension "MSFB" could not be loaded. The specified module could not be
	  found.
	
	CAUSE
	=====
	
	These problems can occur when the Exchsrvr\Add-ins folder is not shared, or the
	correct permissions have not been assigned to the share.
	
	WORKAROUND
	==========
	
	To work around this problem, verify that the Exchsrvr\Add-ins folder is shared
	and that the following permissions have been assigned to the share:
	
	  Name                       Type of Access
	  -----------------------------------------
	  User account used to
	   install Exchange Server   Full Control
	  Exchange service account   Full Control
	  Everyone                   Read
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
