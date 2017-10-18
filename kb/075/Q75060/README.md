---
layout: page
title: "Q75060: Direct Access 5.1 Under MS-DOS 5.0"
permalink: kb/075/Q75060/
---

## Q75060: Direct Access 5.1 Under MS-DOS 5.0

	Article: Q75060
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to use Direct Access version 5.1 with Microsoft MS-DOS version 5.0,
	you may not be able to access Direct Access, or Direct Access may lock up when
	you try to load a batch file into a menu.
	
	WORKAROUND
	==========
	
	If you can't get into Direct Access after you load MS-DOS 5.0, you must delete
	the Direct Access directory and reinstall the program. You must remove the
	directory as well as the files from your disk.
	
	If you want to save your menus and custom configuration, do the following:
	
	1. You must save MENU.*, CUSTOM.*, and *.LST files to another directory by using
	  the following commands:
	
	     copy menu.* [drive:[path]]
	     copy custom.* [drive:[path]]
	     copy *.lst [drive:[path]]
	
	2. After reinstalling Direct Access, you need to copy the old files into the new
	  Direct Access directory.
	
	MORE INFORMATION
	================
	
	Direct Access is known to have problems when a deletion tracker is loaded. For
	example, the MS-DOS MIRROR /T command can cause Direct Access to lock up under
	MS-DOS 5.0 when you try to load a batch file into a menu. When Direct Access
	locks, the following error message is displayed:
	
	  File "AUTOEXEC.BAT" is a batch file.
	  DIRECT ACCESS requires the word BATCH to be placed in front of batch files in
	  order to return to the menu
	
	  Do you want DIRECT ACCESS to place the word BATCH in front of the filename
	
	  YES NO
	
	Normally, a beep accompanies this message. In some cases, the sound is continuous
	and causes the computer to hang.
	
	To work around this problem:
	
	1. From the Main menu, select the Maintenance menu.
	
	2. Select Program Configuration.
	
	3. Change the "BEEP ON ERROR" option to "OFF".
	
	You should now be able to load a batch file.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
