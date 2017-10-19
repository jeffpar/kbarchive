---
layout: page
title: "Q150246: Bookshelf 96: QuickShelf Not Installed With Office 95"
permalink: /kb/150/Q150246/
---

## Q150246: Bookshelf 96: QuickShelf Not Installed With Office 95

	Article: Q150246
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:7.0,97
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 22-MAY-2001
	
	96-97
	WINDOWS
	kbsetup kbinterop kbusage kbmm kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set up Bookshelf '96-'97 on a computer with Microsoft Office already
	installed, Microsoft QuickShelf was not installed.
	
	CAUSE
	=====
	
	Bookshelf 96 does not install QuickShelf when the Office Shortcut Bar is
	installed. Instead, a QuickShelf Toolbar is added to the Office Shortcut Bar.
	This item may not be immediately visible.
	
	This may occur even if you are not using the Office Shortcut Bar. If you have
	removed the Office Shortcut Bar from the Windows 95 Startup folder, it is still
	technically "installed". In this case, Bookshelf Setup does not install a
	separate QuickShelf program.
	
	If you were previously using QuickShelf 95, and you chose to remove the previous
	version of Bookshelf, Setup removes QuickShelf and replaces it with the
	QuickShelf Toolbar on the Office Shortcut Bar.
	
	RESOLUTION
	==========
	
	To use QuickShelf, follow the steps below for your system configuration.
	
	If You Are Using the Office Shortcut Bar
	----------------------------------------
	
	If you are using the Shortcut Bar, QuickShelf items are not seen by default. To
	access QuickShelf from the Shortcut Bar, do the following:
	
	1. Click the Office symbol in the upper-left corner of the Shortcut Bar, and
	  then click Customize.
	
	2. Click the Toolbars tab.
	
	3. If the QuickShelf folder does not contain a check, click the box to select
	  it.
	
	  If the QuickShelf folder is not listed on the Toolbars tab, follow these steps
	  to manually add the QuickShelf option:
	
	  a. Click Cancel to close the Customize window.
	
	  b. Press the F5 key to refresh the Shortcut Bar.
	
	  c. Click the Office symbol in the upper-left corner of the Shortcut Bar, and
	     then click Customize.
	
	  d. On the Toolbars tab, click Add Toolbar.
	
	  e. Click the Browse button.
	
	  f. Locate and double-click the Office folder.
	
	     The Office folder should be located in the MSOffice or the Program
	     Files/Microsoft Office folder. For more information about finding files
	     and folders in Windows, see your Windows printed documentation or online
	     help.
	
	  g. Double-click the Shortcut Bar folder.
	
	  h. Click the QuickShelf folder, and then click Add.
	
	  i. Click OK.
	
	4. Click OK. The QuickShelf toolbar is now visible on the Shortcut Bar.
	
	  NOTE: To return to the Office Toolbar items, click the Office Folder on the
	  Shortcut Bar, or click the QuickShelf Folder to see the QuickShelf items.
	
	If these steps fail, do the following to reinstall QuickShelf items on the Office
	Shortcut Bar:
	
	1. Close the Office Shortcut Bar. Setup can not update the bar if it is open.
	
	2. Run Bookshelf Setup. Use the Add/Remove option to remove QuickShelf.
	
	3. Run Bookshelf Setup again and use the Add/Remove option to add QuickShelf.
	
	4. Open the Office Shortcut Bar. If the QuickShelf Toolbar is not visible,
	  repeat steps 1-4 in the "If You Are Using The Office Shortcut Bar" section of
	  this article.
	
	If You Are Not Using The Office Shortcut Bar
	--------------------------------------------
	
	Follow these steps to install the standalone QuickShelf program:
	
	1. Run Office Setup. Use the Add/Remove option and remove the Office Shortcut
	  Bar.
	
	2. Run Bookshelf Setup and use the Add/Remove option to remove QuickShelf.
	
	3. Run Bookshelf Setup again. Use the Add/Remove option to add QuickShelf.
	
	MORE INFORMATION
	================
	
	Customizing the QuickShelf Toolbar on the Office Shortcut Bar
	-------------------------------------------------------------
	
	To customize the QuickShelf Toolbar when it is used with the Office Shortcut Bar,
	do the following:
	
	1. Click the Office symbol in the upper-left corner of the Shortcut Bar, and
	  then click Customize.
	
	2. Click the View tab.
	
	3. Click the Toolbar area, and then click QuickShelf.
	
	4. The View tab contains numerous options you can change. For information on
	  these options, click the option, then press the F1 keyboard key for online
	  Help.
	
	5. On the Buttons tab are additional QuickShelf options.
	
	6. When you are finished customizing the toolbar, click OK.
	
	Opening the Office Shortcut Bar
	-------------------------------
	
	1. Click the Start button, point to Programs, and then click Startup.
	
	2. Click Microsoft Office Shortcut Bar.
	
	  If the shortcut is missing, continue to step 3.
	
	3. Using Windows Explorer, open the Microsoft Office folder.
	
	  For more information about finding files and folders in Windows 95, see your
	  Windows printed documentation or online Help.
	
	4. Double-click the Microsoft Office Shortcut Bar shortcut.
	
	  If the shortcut is missing, reinstall Office.
	
	Additional query words: multimedia mmtitles kbmm OEM compaq quickshelf, bs96, office
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1996 kbBookShelf1997
	Version           : WINDOWS:7.0,97
	Issue type        : kbinfo
	
	=============================================================================
	
