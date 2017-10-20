---
layout: page
title: "Q82522: PageMaker 4.0 and General Protection Faults"
permalink: /kb/082/Q82522/
---

## Q82522: PageMaker 4.0 and General Protection Faults

{% raw %}

	Article: Q82522
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on the following topics concerning running
	Aldus PageMaker version 4.0 and Microsoft Windows:
	
	- GP Fault Exiting PageMaker
	
	- PageMaker GP Faults Printing Imported Micrografx File
	
	- GP Fault in PageMaker 4.0 Using Leaders with Tabs Feature
	
	MORE INFORMATION
	================
	
	GP Fault Exiting PageMaker
	--------------------------
	
	Aldus PageMaker 4.0 may cause a general protection (GP) fault when you quit
	PageMaker after printing several documents in Windows 3.1. This error occurs if
	you print multiple files one after the other without closing the last file
	loaded. You may be able to work around this problem by closing each file before
	you load the next file you want to print.
	
	Note: With Windows 3.0, this error occurs as a unrecoverable application error.
	
	PageMaker GP Faults Printing Imported Micrografx File
	-----------------------------------------------------
	
	PageMaker 4.0 produces a GP fault if you attempt to print an imported Micrografx
	Charisma file to a Hewlett-Packard (HP) LaserJet Series III printer when using
	Windows 3.1. This problem can also occur with Micrografx Designer and Draw.
	
	Note: With Windows 3.0, this error occurs as a unrecoverable application error.
	
	To work around this problem, do not use the PageMaker Place command to import the
	graphic. Instead, do the following:
	
	1. Start Charisma and select the graphic.
	
	2. From the Edit menu, choose Copy.
	
	3. Start PageMaker.
	
	4. From the Edit menu, choose Paste.
	
	GP Fault in PageMaker 4.0 Using Leaders with Tabs Feature
	---------------------------------------------------------
	
	If you are using the PageMaker 4.0 Leaders with Tabs (table of contents) feature
	and you increase the font size to 7 points or greater, you may receive a general
	protection (GP) fault when you print from PageMaker or from another application
	running with Windows 3.1. In addition, you may receive the following error
	message:
	
	  PageMaker caused a General Protection Fault in PM4.EXE at 0049:00FC
	
	This error occurs if you use Tabs with Dot Leaders but there isn't enough space
	between the words for PageMaker to image the dots. Reducing the point size of
	the text or eliminating the dot-leaders should correct this problem as long as
	PageMaker allows the text to be imaged.
	
	If PageMaker cannot display the text, and therefore continues to cause GP faults,
	you can work around the problem with the following procedure:
	
	1. Restart PageMaker without opening the file causing the GP fault.
	
	2. Adjust the application window so that only the title bar and the menu bar are
	  visible.
	
	3. Open the document that causes the GP fault. Since PageMaker doesn't have to
	  image the file, it can open the document without causing a GP fault.
	
	4. From the Edit menu, choose Preferences, then choose Other.
	
	5. Set Stretch Text Above and Vector Text Above to 650 pixels and choose OK.
	
	6. Set Greek Text Below to 650 pixels and choose OK.
	
	7. Save the document.
	
	8. When you adjust the application window and the document window, all the text
	  on screen should be in Greek, allowing you to reduce the point size, increase
	  the space between words, or eliminate the dot-leaders.
	
	9. Change the Greek Text Below setting to the previous level to see the text
	  again.
	
	Greeked text allows PageMaker to indicate where the text should be by displaying
	gray bars instead of text. This way PageMaker doesn't attempt to display any of
	the text, or in this case, the dots that should be between the text. Aldus has
	confirmed this to be a problem in PageMaker 4.0. For more information, contact
	Aldus Technical Support at (425) 628-2040.
	
	Aldus PageMaker version 4.0 is manufactured by Aldus Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 designer draw WINFEST page maker
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
