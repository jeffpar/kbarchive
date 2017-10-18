---
layout: page
title: "Q271300: Microsoft Reader Err Msg: Unhandled Exception 0xC0000005: AV"
permalink: kb/271/Q271300/
---

## Q271300: Microsoft Reader Err Msg: Unhandled Exception 0xC0000005: AV

	Article: Q271300
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Reader on a desktop or a laptop computer, you may
	receive the following error message:
	
	  Unhandled exception 0xC0000005: AV
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- Less than 300 megabytes (MB) of space is available on your system hard disk
	  (the hard disk on which Microsoft Windows is installed).
	
	- Less than 300 MB of space is available on the hard disk on which the
	  Microsoft Reader software is installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the amount of available hard disk space on your
	system hard disk and the hard disk on which the Microsoft Reader software is
	installed.
	
	To do this, use the following methods in the order in which they are presented.
	
	Install the Microsoft Reader Software on the System Hard Disk
	-------------------------------------------------------------
	
	If the Microsoft Reader software is installed on a hard disk other than the hard
	disk on which Windows is installed, uninstall the Reader software and then
	reinstall the Reader software on the system hard disk.
	
	NOTE: The default installation folder for the Reader software is
	
	  C:\Program Files\Microsoft Reader
	
	which is the system folder on most computers.
	
	Install the Reader Software on a Different Hard Disk
	----------------------------------------------------
	
	If more than one hard disk or hard disk partition is installed in your computer,
	install the Reader software on a hard disk that contains at least 300 MB of
	available space.
	
	For information about how to determine the amount of available space on each of
	your hard disks, please see the "More Information" section of this article.
	
	If the issue continues to occur, proceed to the next method.
	
	Empty Folders That Contain Temporary Files
	------------------------------------------
	
	To empty folders that contain temporary files, use the appropriate method for
	your version of Microsoft Windows.
	
	Microsoft Windows 98 and Microsoft Windows 2000:
	
	Use the Disk Cleanup utility:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Cleanup.
	
	2. In the Drives box, click the hard disk that you want to clean up, and then
	  click OK.
	
	3. Under "Files to delete", click to select the following check boxes, and then
	  click OK:
	
	   - Downloaded Program Files
	   - Recycle Bin
	   - Temporary Files
	   - Temporary Internet Files
	
	Microsoft Windows 95 and Microsoft Windows NT 4.0:
	
	Manually delete the temporary files, and then empty the Recycle Bin:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Internet or Internet Options.
	
	3. Click the General tab.
	
	4. Under Temporary Internet Files, click Delete Files, and then click OK.
	
	5. Under History, click Clear History, and then click Yes.
	
	6. Click OK.
	
	7. Click Start, and then click Shut Down.
	
	8. Click "Restart in MS-DOS mode", and then click OK.
	
	9. At the command prompt, type "set" (without the quotation marks), and then
	  press ENTER.
	
	10. Note the path on the "TEMP=" line.
	
	11. At the command prompt, type the following lines, pressing ENTER after you
	  type each line
	
	  cd \<temp>
	  del *.tmp
	
	  where <temp> is the path that you noted in step 9.
	
	  NOTE: If you are prompted to confirm the file deletion, press Y.
	
	12. At the command prompt, type "exit" (without the quotation marks), and then
	  press ENTER to restart Microsoft Windows.
	
	On the desktop, right-click Recycle Bin, and then click Empty Recycle Bin. If you
	are prompted to confirm that you want to delete the files, click Yes.
	
	If the issue continues to occur, proceed to the next method.
	
	Back Up and Delete Unused Files
	-------------------------------
	
	Make a backup copy of any documents, images, or media clips that you do not use
	frequently, and then delete the unused files from the hard disk.
	
	For information about how to back up files, click Start, click Help, type
	"backup" (without the quotation marks), and then double-click Backup in the list
	of Help topics.
	
	For information about how to delete files and folders, click Start, click Help,
	type "deleting files, folders" (without the quotation marks), and then
	double-click deleting files, folders in the list of Help topics.
	
	If the issue continues to occur, proceed to the next method.
	
	Uninstall Programs That You Do Not Use
	--------------------------------------
	
	To uninstall programs that you do not use:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click a program that you do not use, and then
	  click Add/Remove.
	
	4. Follow the instructions on the screen to uninstall the program.
	
	5. Repeat steps 1 through 4 to uninstall any other programs that you do not use.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Reader, version 1.5.
	
	MORE INFORMATION
	================
	
	To determine the amount of available space on your hard disk:
	
	1. Double-click the My Computer icon on the desktop.
	
	2. On the View menu, click Details.
	
	3. Under the Free Space column, note the amount of available space for each hard
	  disk that is installed in your computer.
	
	4. Close the My Computer window.
	
	For additional information about how to resolve this issue when you attempt to
	open a purchased eBook on a PocketPC, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q271271 Microsoft Reader: Cannot Read an eBook That You Purchased Online
	
	Additional query words: 1.50 reader msreader e-books blue screen fatal
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	Issue type        : kbprb
	
	=============================================================================
	
