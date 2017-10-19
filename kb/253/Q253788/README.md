---
layout: page
title: "Q253788: Unable to Open Images in Same Window"
permalink: /kb/253/Q253788/
---

## Q253788: Unable to Open Images in Same Window

	Article: Q253788
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbgraphic
	Last Modified: 28-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a .jpg file or any other image file, the image may be
	opened in a separate instance of the program that is associated with the image
	file type. For example, if Iexplore.exe is associated with .jpg files and you
	open multiple .jpg files in Windows Explorer, each .jpg file is opened in a new
	instance of Microsoft Internet Explorer.
	
	CAUSE
	=====
	
	This behavior occurs if Dynamic Data Exchange (DDE) parameters are not specified
	in the file association properties for the image file type.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. In Windows Explorer, on the View menu, click Folder Options.
	
	2. On the File Types tab, click the file type you want to edit (for example,
	  JPEG), and then click Edit.
	
	3. In the Actions area, click Open, and then click Edit.
	
	4. Click to select the Use DDE check box.
	
	5. Fill in the DDE commands that are required for the program that is associated
	  with the file type being edited.
	
	  For example, to use Internet Explorer to open each .jpg file in the same
	  instance, type the following DDE commands:
	
	  DDE Message:"file://%1",,-1,,,,,
	
	  Application: "C:\PROGRA~1\INTERN~1\iexplore.exe" -nohome
	
	  DDE Application Not Running: leave blank
	
	  Topic:WWW_OpenURL
	
	Additional query words: jpg tif bmp gif same
	
	======================================================================
	Keywords          : kbgraphic 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
