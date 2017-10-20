---
layout: page
title: "Q126260: Writer: Borders Cut Off on HP DeskJet Series"
permalink: /kb/126/Q126260/
---

## Q126260: Writer: Borders Cut Off on HP DeskJet Series

{% raw %}

	Article: Q126260
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 13-JUN-2001
	
	WINDOWS
	kbprint kbprb kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- the operating system: Microsoft Windows 3.11 
	- Microsoft Bob, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing a Creative Writer document, you may find that borders on the
	bottom of the page do not print, or are cut off on the Hewlett Packard (HP)
	DeskJet series printers using version 5.0 or 6.1 of the HP DeskJet driver. This
	problem also occurs with Microsoft Bob Calendar when you use a DeskJet 660c with
	version 6.1 of HP's DeskJet driver.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. In Program Manager, run File Manager from the Main group.
	
	2. From the File menu, choose Search, and search for the file HPVCNFIG.EXE.
	
	3. Double-click HPVCNFIG.EXE to run the Hewlett-Packard DeskJet configuration
	  application.
	
	4. Select the Print Regions check box. This enlarges the print area to within .5
	  inch of the edge of the paper (both top and bottom).
	
	  NOTE: To return to the original DeskJet settings, run HPVCNFIG.EXE again, and
	  clear the Print Regions check box. When Print Regions is selected, objects
	  and borders are shifted up on the page.
	
	5. Run Creative Writer or Calendar.
	
	  If you are using Creative Writer, go to the Writing Studio, click the Page
	  Stuff tool (book with the ruler), click the Margins tool, and select a margin
	  option. The choices, from top to bottom, are: .5", .75", 1", 1.25", and 1.5".
	
	NOTE: Borders may or may not still be cut off, depending on the type of document.
	Select a larger margin option if the borders are still cut off, as specified in
	McZee's help. Cards, for example, print best when a large (1.5-inch) margin is
	selected.
	
	
	For more information about correcting problems with the bottom borders cutting
	off, see the following article in the Microsoft Knowledge Base:
	
	  Q143229 Writer: Borders Cut off on Cards: Alternate Layout Method
	
	MORE INFORMATION
	================
	
	The HP DeskJet Print Regions setting is explained more completely in the README
	document that is installed with the HP DeskJet printer driver versions 5.0 and
	6.1.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 1.00 kids hp 560 540 520 mczee mskids 550 500 dj hpdj wm_artist truncate missing 660c 6.1d 6.1 1.10a
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword kbBOB kbBOB100 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbOSWin311
	Version           : WINDOWS:1.0,1.1,1.1a,3.11
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
