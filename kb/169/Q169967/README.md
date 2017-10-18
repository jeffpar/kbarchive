---
layout: page
title: "Q169967: WD97: Cannot Change Suggested AutoComplete Date Year Format"
permalink: kb/169/Q169967/
---

## Q169967: WD97: Cannot Change Suggested AutoComplete Date Year Format

	Article: Q169967
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbautotext word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the Regional Settings on your computer to use a four-digit year
	(for example, in the short-date format), the AutoComplete feature in Microsoft
	Word still suggests a two-digit year.
	
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around this problem:
	
	Method 1: Create an AutoCorrect Entry
	-------------------------------------
	
	Use this method to correct the date after accepting the suggested AutoComplete
	date. To do this, follow these steps:
	
	1. On the Tools menu, click AutoCorrect.
	
	2. On the AutoCorrect tab, type "/00" (without the quotation marks) in the
	  Replace box. Then type "/2000" (without the quotation marks) in the With box.
	
	3. Click Add to add your new AutoCorrect entry to the AutoCorrect list.
	
	4. Click OK to close the AutoCorrect dialog box.
	
	When you type the first four characters of the date, Word suggests today's date
	as usual. If you type "1/1/" (without the quotation marks), Word suggests the
	date 1/1/00. Press ENTER or the TAB key to accept the suggested date. When you
	press the SPACEBAR to type additional text or press ENTER to go to the next
	paragraph, Word corrects the date with the AutoCorrect entry you added.
	
	For example, Word corrects the date from the date you accepted, 1/1/00, to
	1/1/2000.
	
	Method 2: Use the "M/d/yyyy" or "MM/dd/yyyy" Date Format
	--------------------------------------------------------
	
	Use this method to "force" Word to show the correct AutoComplete date format as
	M/d/yyyy or MM/dd/yyyy. To do this, follow these steps:
	
	NOTE: There is no known workaround that forces Word to show an AutoComplete date
	in the format of M-d-yyyy or MM-dd-yyyy.
	
	1. Quit Microsoft Word.
	
	2. On the Windows Start menu, point to Settings and click Control Panel.
	
	3. Double-click Regional Settings.
	
	4. On the Date tab, type one of the following in the Short date style box:
	
	   - If you want to type and show the date as M/d/yyyy (for example: 1/1/2000),
	     type "M-d-yyyy" (without the quotation marks).
	
	     -or-
	
	   - If you want to type and show the date as MM/dd/yyyy (for example:
	     01/01/2000), type "MM-dd-yyyy" (without the quotation marks)
	
	NOTE: Word does not show or use this Short date style format. Instead, this
	"forces" Word to use the short date style M/d/yyyy or MM/dd/yyyy.
	
	5. Click Apply.
	
	6. Click OK to close the Regional Settings Properties dialog box.
	
	7. Restart Microsoft Word.
	
	When you type the first four characters of the date (for example, type "1/1/"
	(without the quotation marks) or "01/0" (without the quotation marks)), Word
	shows an AutoComplete tip in the correct date format. To accept the AutoComplete
	date, press either ENTER or the TAB key.
	
	For example, when you type "1/13" (without the quotation marks), Word shows an
	AutoComplete date of 1/13/2000.
	
	MORE INFORMATION
	================
	
	Most non-English (U.S.) languages show the default date format with the day
	first, followed by the month and year. Use Method 2 earlier in this article when
	you want to insert a date in the format of either d/M/yyyy (for example:
	13/1/2000) or dd/MM/yyyy (for example: 13/01/2000).
	
	To do this, type either "d-M-yyyy" (without the quotation marks) or "dd-MM-yyyy"
	(without the quotation marks) in step 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 kbautotext word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
