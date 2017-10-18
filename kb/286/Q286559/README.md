---
layout: page
title: "Q286559: XFOR:&quot;No Mapping Between Account Names &amp; Security IDs Was Done&quot;"
permalink: kb/286/Q286559/
---

## Q286559: XFOR:&quot;No Mapping Between Account Names &amp; Security IDs Was Done&quot;

	Article: Q286559
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On servers that are running any of the following products
	
	1. Microsoft Exchange Connector for Lotus Notes
	
	2. Microsoft Exchange Connector for IBM OfficeVision/VM (PROFS)
	
	3. Microsoft Exchange Connector for SNADS
	
	the following event ID may be logged in the Application log each time that you
	start the Connectivity Controller:
	
	  Event ID: 2014
	  Source: MSExchangeCoCo
	  Type: Error
	  Category: Controller
	
	  Description:
	  "{WIN32:1332(No mapping between account names and security IDs was done.)}:
	  Could not determine SID for Administrators"
	
	CAUSE
	=====
	
	This issue may occur due to an incorrect setting of the Exchconn.ini file. The
	error is logged if there is an invalid account that is specified for the
	parameter "rcsaccess".
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	- Navigate to the \Exchsrvr\Connect\Exchconn folder to create a backup of the
	  Exchconn.ini file.
	
	- Open the Exchconn.ini in Notepad.
	
	- Locate the line that starts with the following parameter:
	
	  rcsaccess =
	
	- Remove any invalid network accounts, and then empty Groups. Make sure that
	  you specified the Administrators group and that all entries after the
	  parameter "rcsaccess = " are separated by commas.
	
	WORKAROUND
	==========
	
	You can safely ignore the error message.
	
	MORE INFORMATION
	================
	
	There is no non-English installer for the Exchange Notes Connector on Exchange
	Service Pack CDs, so you have to use the English installer Ntsconn.exe from the
	\Exchconn\Setup\i386\Ntsconn\ folder. This installer creates an Exchconn.ini
	with the line "rcsaccess = Administrators". On non-English systems the name of
	the Administrators group may be localized, so that the Administrators group does
	not exist. This causes the Connectivity Controller to log the event 2014 during
	startup.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
