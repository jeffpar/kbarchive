---
layout: page
title: "Q155859: XCLN: Err Msg: The Following Unrecoverable Error Has Occurred"
permalink: /kb/155/Q155859/
---

## Q155859: XCLN: Err Msg: The Following Unrecoverable Error Has Occurred

	Article: Q155859
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you do a full install, with no errors, of the Microsoft Exchange Windows
	95 client, you get the following error message when you run Microsoft Exchange
	and attempt to create a Microsoft Exchange profile:
	
	  The following unrecoverable error has occurred:
	
	  The .dll file for this service is either damaged or could not be found.
	
	CAUSE
	=====
	
	The Fax Service that came with the Windows 95 operating system was previously
	installed. In the Profile properties dialog box, the Fax Service check box is
	already selected ("checked"), meaning it will automatically be installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- When creating a new profile, clear the Fax Service check box in the profile
	  properties screen. It will now allow the creation of a new profile and you
	  will be able to run Microsoft Exchange.
	
	  -OR-
	
	- Follow these steps:
	
	  1. Reload the Windows 95 operating system version of the Exchange Inbox to
	     get the FAX service dll reloaded.
	
	  2. Send a test fax to ensure the service is operational.
	
	  3. Load the Microsoft Exchange RTM client over the existing install of the
	     Inbox client. Send a test FAX to ensure the service is operational.
	
	
	Additional query words: Installation
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
