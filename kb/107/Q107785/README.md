---
layout: page
title: "Q107785: WD97: Word Hangs or Returns Error Printing to Fax"
permalink: kb/107/Q107785/
---

## Q107785: WD97: Word Hangs or Returns Error Printing to Fax

	Article: Q107785
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbualink97 word97 kbPrintingkbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to a fax machine, you may receive a GP fault or an Invalid Page
	Fault (IPF), Word may hang (stop responding), or you may receive an error
	message such as the following:
	
	  File Not Found
	
	
	CAUSE
	=====
	
	This problem occurs when you are using a fax driver and you have background
	printing turned on. When background printing is turned on, the fax driver cannot
	display informational dialog boxes correctly; therefore, Word is unable to print
	your document.
	
	RESOLUTION
	==========
	
	To resolve this problem, turn off background printing. To turn off background
	printing, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Print Tab.
	
	3. Clear the Background Printing check box.
	
	MORE INFORMATION
	================
	
	The following fax drivers will not work when the Background Printing check box
	is selected:
	
	  Cheyenne Fax
	  Compaq Fax v1.0
	  Complete Communicator Fax
	  Delrina WinFax LITE 3.0
	  QuickLink Message Center
	  RapidFax
	  WinFax 3.0
	
	The fax driver products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: hang hung crash crashed locks locked winword frozen freezes crashing quit quits stopped print err bitware cheyenne FAXWORKS Global Village ole32.dll
	
	======================================================================
	Keywords          : kbprint kbualink97 word97 kbPrinting kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
