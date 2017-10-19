---
layout: page
title: "Q155743: Directory Import Error: Unable to Process Object"
permalink: /kb/155/Q155743/
---

## Q155743: Directory Import Error: Unable to Process Object

	Article: Q155743
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a Directory Import in the Exchange Administrator program, the
	following error message is displayed:
	
	  The directory import from the file <filename>.CSV is complete.
	
	  <x> error descriptions were recorded in the system's application event
	  log. The file <filename>.err contains copies of all object descriptions
	  containing errors.
	
	The following error message appears in the Application Event Log, and in the
	<filename>.err file
	
	  Unable to process object <Username> because the import line must
	  contain the same number of fields as the header line. <x> were
	  expected. <n> were found.
	
	where <x> is a larger number than <n>. The Directory Import fails.
	
	WORKAROUND
	==========
	
	1. Highlight the cells in the empty column(s) (not the whole column),
	
	2. Click Format and click Cells.
	
	3. Under Category, select Text on the Number tab
	
	4. click OK. On the File menu, click Save as, and verify that it is being saved
	  in .csv format.
	
	5. Close the file. Do not save when prompted, and re-run Directory Import.
	
	NOTE: Every time this file is modified, the cells must be reformatted.
	
	
	Additional query words: administrator
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
