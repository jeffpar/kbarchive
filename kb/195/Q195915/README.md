---
layout: page
title: "Q195915: XADM: Missing Address Template Causes Event 1188"
permalink: kb/195/Q195915/
---

## Q195915: XADM: Missing Address Template Causes Event 1188

	Article: Q195915
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the regional settings within Windows NT are set to a template that does not
	exist in Exchange Server, an Event Log entry similar to the following will
	appear in the Windows NT Application log:
	
	  Event ID:    1188
	  Source:      MSExchange IS
	  Description:
	  The address template or display template for locale
	  id 0x1409 could not be found, ignoring.  Please install
	  language support for that language by importing the
	  appropriate address template from the Microsoft Exchange
	  client cdrom.
	
	In the above example, 0x1409 represents the locale for New Zealand. For example,
	locale ID 0xC09 represents English/Australia.
	
	CAUSE
	=====
	
	This is because Exchange Server has no address template specific to the defined
	locales.
	
	Within the English edition of Exchange Server, the server computer will default
	back to English/USA as the address template, so there is no functional loss
	experienced apart from the Event Log entry as described above.
	
	For more information on locales, please see the following Microsoft Knowledge
	Base article:
	
	  Q151701 XADM: How to Manually Add Code Pages for Mixed Languages
	
	WORKAROUND
	==========
	
	To work around this problem, it is possible to modify the standard USA locale
	and install this additional template to remove the Event Log entry.
	
	To create an English\New Zealand template, perform the following steps:
	
	1. Copy the entire Server\Setup\I386\Tpl\Usa directory to a temporary directory
	  on the local hard drive.
	
	2. Remove the read-only attribute from the file Template.csv, which is located
	  in the temporary directory that you just created.
	
	3. Open the Template.csv file in Notepad, and then perform a Search and Replace
	  procedure in Notepad to replace the occurrences of "USA" with the text "New
	  Zealand."
	
	4. Perform a Search and Replace procedure in Notepad to replace the occurrence
	  of 409 (USA) with 1409 (New Zealand) and then save this file as Template.csv
	  (The value of the locale can be found in the Description of the Event ID:
	  1188 in the Windows NT Application Event logs.)
	
	5. Start the Exchange Server Administrator program and on the Tools menu, click
	  Directory Import, click Import File, and then click the Template.CSV file
	  that you saved in the temporary directory on the local hard drive.
	
	6. Click Import at the bottom of the Directory Import dialog box.
	
	7. Shut down the server and restart.
	
	
	Additional query words: address template 1188
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
