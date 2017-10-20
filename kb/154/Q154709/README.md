---
layout: page
title: "Q154709: BUG: Setup Wizard Grid Hangs VFP When KEYCOMP Not Macintosh"
permalink: /kb/154/Q154709/
---

## Q154709: BUG: Setup Wizard Grid Hangs VFP When KEYCOMP Not Macintosh

{% raw %}

	Article: Q154709
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Step 6, the Setup Wizard in Visual FoxPro for Macintosh can hang under the
	following circumstances:
	
	- KEYCOMP is either Windows or DOS.
	
	- The drop-down list in the Target Dir column of the grid in Step 6 is clicked
	  with the mouse, causing it to stay dropped-down.
	
	- With the list in the dropped-down position, an arrow key on the keyboard is
	  pressed in an attempt to select one of the items in the list.
	
	WORKAROUND
	==========
	
	Make sure that KEYCOMP is set to Macintosh before running the Setup Wizard. The
	following command typed in the Command window can be used to determine what
	KEYCOMP is currently set to:
	
	     ? SET("keycomp")
	
	This should return "MAC."
	
	When KEYCOMP is MAC, the Visual FoxPro menus will not have any letters
	underlined. When KEYCOMP is DOS or Windows, various letters in the FoxPro menus
	will be underlined.
	
	To set KEYCOMP to Windows, type the following command in the Visual FoxPro
	Command window and press the RETURN key:
	
	     SET KEYCOMP TO Windows
	
	KEYCOMP can also be set or checked in the Options dialog that is accessed from
	the Tools menu. In the General tab, there is a section for Data Entry. Set the
	Navigation Keys drop-down to Macintosh Compatible to set KEYCOMP to Macintosh
	through this dialog.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The scenario where this problem will likely be encountered is caused by the
	behavior of the drop-down list in the grid in Step 6 - File Summary of the Setup
	Wizard. When KEYCOMP is Windows or DOS, clicking the drop-down will cause it to
	drop down and stay down. Then, if the mouse button is released and another
	location in the list is clicked, the list goes back up but the item clicked
	isn't selected. At this point, it may be tempting to use the arrow keys because
	the mouse does not appear to work. To change the location in the drop-down list
	with the mouse, click the drop-down list and, holding down the mouse button,
	drag down the list to the item desired. Then release the mouse button.
	
	Steps To Reproduce The Problem
	------------------------------
	
	1. SET KEYCOMP to Windows using one of the methods described in the Workaround
	  section of this article.
	
	2. Create two folders on the Macintosh: one to contain the program to be
	  distributed(source folder) and another for the disk images. The desktop is a
	  good location for these folders. Place at least one file in the source
	  folder. Any .prg file is fine.
	
	3. Start the Setup Wizard from the Tools, Wizards menu.
	
	4. Fill in the appropriate options in Steps 1 through 5.
	
	5. In Step 6 - File Summary, click on the Target Dir drop-down list in the grid.
	  It should drop down. Release the mouse button and the list should stay down.
	  Then, use the down arrow key to scroll down the list. The Mac should hang at
	  this point.
	
	Additional query words: kbdsd VFoxMac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
