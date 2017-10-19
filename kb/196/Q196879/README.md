---
layout: page
title: "Q196879: WD97: Ampersand in File Name Not Included When Added to Menu"
permalink: /kb/196/Q196879/
---

## Q196879: WD97: Ampersand in File Name Not Included When Added to Menu

	Article: Q196879
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you add a file name that contains an ampersand (&) to a menu in
	Microsoft Word, the ampersand does not appear.
	
	For example, a file named "Jack&Jill" appears as "JackJill" on the menu.
	
	CAUSE
	=====
	
	This behavior is by design. The ampersand is used in a menu to designate which
	character of the menu item name to underline. This underlined character is used
	as a shortcut to choose the menu item when you use the keyboard.
	
	WORKAROUND
	==========
	
	To display a file name that contains an ampersand, save the file with a second
	ampersand in front of the first before you add the file name to your menu, for
	example:
	
	  Jack&&Jill
	
	When you add this file name to a menu, the name appears correctly, as:
	
	  Jack&Jill
	
	MORE INFORMATION
	================
	
	To add a file name to a Word menu, follow these steps:
	
	1. In Word, open the file you want to appear on your Word menu.
	
	2. On the Tools menu, click Customize.
	
	3. On the Toolbars tab, under Toolbars, click to select the Menu Bar check box.
	
	  NOTE: In Word 97, the Menu Bar check box is already selected by default.
	
	4. Click to select the Commands tab.
	
	5. Under Categories, click to select All Commands.
	
	6. Under Commands, click to select FileOpenFile. In the FileOpenFile box, ensure
	  that your document name appears in the box. If you have multiple documents
	  open, each file is listed in the drop-down list box.
	
	7. Under Commands, drag the FileOpenFile command to the Word menu where you want
	  it to appear, and then click Close to close the Customize dialog box.
	
	Additional query words: missing ampersand & filename file name menu fileopenfile
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
