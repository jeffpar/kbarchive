---
layout: page
title: "Q164030: WD97: Define and Lookup Reference Unavailable in Word"
permalink: kb/164/Q164030/
---

## Q164030: WD97: Define and Lookup Reference Unavailable in Word

	Article: Q164030
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbsetup word97
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Define and Lookup Reference menu commands are not available in Word 97 after you
	run Setup to add Microsoft Bookshelf Basics.
	
	NOTE: Define should be located on the shortcut menu when you right-click a word,
	while "Look Up Reference" should be located on the Tools menu.
	
	CAUSE
	=====
	
	Microsoft Word 97 for Windows may not detect the Bsh32.wll when Microsoft
	Bookshelf Basics is installed during maintenance mode Setup.
	
	WORKAROUND
	==========
	
	Rename the Office 97 Setup Table File (.stf) (Off97pro.stf) and then reinstall
	Microsoft Office 97. The .stf file should be located in the following folder:
	
	  C:\Program Files\Microsoft Office\Office\Setup
	
	NOTE: When you run the Office 97 Setup, be sure to click the Custom button when
	prompted for the type of Setup you want to perform. Then, ensure that Microsoft
	Bookshelf Basics is selected.
	
	WARNING: This modification may not be supported by Microsoft. Microsoft support
	professionals will support some modifications to a BACKUP copy of the .stf file.
	Note also that while support professionals may help customers modify specific
	lines of an .stf, we will not rewrite the entire file in order to achieve a
	desired configuration. As a general rule, support is limited to options that can
	normally be changed by a user during a standard installation of the
	application.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Bsh32.wll is the file that gives Word the ability to function seamlessly with
	Microsoft Bookshelf Basics by adding the Define and Lookup Reference menu
	commands. It is and is located in the "\Program Files\Microsoft Office\Office"
	folder.
	
	Additional query words: 8.0 off97 missing
	
	======================================================================
	Keywords          : kbinterop kbsetup word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
