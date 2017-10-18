---
layout: page
title: "Q166564: XCLN: How to Not Convert Outbound Attachments to MacBinary"
permalink: kb/166/Q166564/
---

## Q166564: XCLN: How to Not Convert Outbound Attachments to MacBinary

	Article: Q166564
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users and administrators of the Microsoft Exchange Macintosh client version 5.0
	Service Pack 1 (SP1) have the ability to edit the Exchange Preferences file to
	declare which Macintosh file types will not be encoded to MacBinary. This
	ability will be useful to users and administrators who want to send attachments
	to clients other than Microsoft Exchange Client.
	
	CAUSE
	=====
	
	Before the release of the Microsoft Exchange Macintosh client 5.0 SP1,
	administrators with X.400 gateways could not properly send files from the
	Macintosh client because there is no specified mechanism for transporting
	Macintosh file types via X.400. In addition, Microsoft has been asked to address
	requests from organizations asking for the ability to send specific Macintosh
	File/Creator pairs as a data fork only.
	
	This ability takes the form of editing a new string ID in the Exchange
	Preferences file, ID #134, "Windows File Types." An editor such as ResEdit will
	be required.
	
	NOTE: ResEdit can manipulate resources crucial to the running of a Macintosh
	application. Users and administrators should run the Command-D keystroke
	combination against the Exchange Preferences file to create a copy for
	safekeeping.
	
	To add a global extension that will always be excluded from MacBinary Conversion
	(in this example, ResEdit is used):
	
	1. Open the Exchange Preferences file (located in the Preferences folder.)
	
	2. Open ID 134.
	
	3. Highlight String 7. It will appear as 7) *****
	
	4. Do the Command-K keystroke combination (to insert a new field).
	
	5. Enter the extension to be excluded in the form of
	
	  EXT 7 = .<extension>
	
	  It is a "7" because 6 common extensions have already been inserted. Increment
	  as required.
	
	To add a specific extension from a specific application Creator/Type to the
	exclusion list (again, ResEdit in this example):
	
	1. Open the Exchange Preferences file.
	
	2. Open ID 134.
	
	3. Scroll down to the last string ID; 83) *****
	
	4. Do the Command-K keystroke combination.
	
	5. Enter the Creator/Type and Extension to be excluded as follows:
	
	  :[CREATOR]:[TYPE]= .[Extension]
	
	6. Save the file and quit the editor. Test when done. If the attachments arrive
	  as expected, you can delete the saved copy of the Exchange Preferences file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
