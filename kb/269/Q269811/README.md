---
layout: page
title: "Q269811: MSB Setup Err Msg: There Isn't Enough Free Space on That Drive"
permalink: /kb/269/Q269811/
---

## Q269811: MSB Setup Err Msg: There Isn't Enough Free Space on That Drive

{% raw %}

	Article: Q269811
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup mskids kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's The Magic School Bus in Concert 
	- Scholastic's The Magic School Bus Lands on Mars 
	- Scholastic's Magic School Bus Series: Volcanoes, version 1.0 
	- Scholastic's The Magic School Bus Discovers Flight, version 1.0 
	- Scholastic's The Magic School Bus Whales and Dolphins, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the Microsoft programs listed at the
	beginning of this article, you may receive the following error message:
	
	  There isn't enough free space on that drive.
	
	CAUSE
	=====
	
	This behavior can occur if less than 15 megabytes (MB) of space is available on
	the hard disk on which you are attempting to install the program.
	
	NOTE: Microsoft recommends that you keep at least 50 MB of space available for a
	swap file on the hard disk on which Microsoft Windows is installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the amount of available hard disk space on the
	hard disk on which you want to install the program. To do this, use the
	following methods in the order in which they are presented.
	
	Install the Program on a Different Hard Disk
	--------------------------------------------
	
	If more than one hard disk or hard disk partition is installed in your computer,
	install the program on a hard disk that contains at least 15 MB of available
	space.
	
	For more information about how to determine the amount of available space on each
	of your hard disks, please see the "More Information" section of this article.
	
	If no hard disk on your computer contains 15 MB or more of available space,
	proceed to the next method.
	
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
	
	   - Temporary Internet Files
	   - Downloaded Program Files
	   - Recycle Bin
	   - Temporary files
	
	Microsoft Windows 95 and Microsoft Windows NT 4.0:
	
	Manually delete the temporary files, and then empty the Recycle Bin:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Internet or Internet Options.
	
	3. On the General tab, under Temporary Internet Files, click Delete Files, and
	  then click OK.
	
	4. Under History, click Clear History, and then click Yes.
	
	5. Click OK.
	
	6. Click Start, and then click Shut Down.
	
	7. Click "Restart in MS-DOS mode", and then click OK.
	
	8. At the command prompt, type "set" (without the quotation marks), and then
	  press ENTER.
	
	9. Note the path on the "TEMP=" line.
	
	10. At the command prompt, type the following lines, pressing ENTER after you
	  type each line.
	
	  cd \<temp>
	  del *.tmp
	
	  where <temp> is the path that you noted in step 9.
	
	  NOTE: If you are prompted to confirm the file deletion, press Y.
	
	11. At the command prompt, type "exit" (without the quotation marks), and then
	  press ENTER to restart Microsoft Windows.
	
	Right-click the Recycle Bin icon on the desktop, and then click Empty Recycle
	Bin. If you are prompted to confirm that you want to delete the files, click
	Yes.
	
	Check the amount of available space on your hard disk. If 15 MB or more of space
	is available, reinstall the program. If less than 15 MB of space is available,
	proceed to the next method.
	
	Back Up and Delete Unused Files
	-------------------------------
	
	Make a backup copy of any documents, images, or media clips that you do not use
	frequently, and then delete the unused files from the hard disk.
	
	For information about how to back up files, click Start, click Help, click the
	Index tab, type "backup" (without the quotation marks), and then double-click
	Backup in the list of Help topics.
	
	For information about how to delete files and folders, click Start, click Help,
	click the Index tab, type "deleting files, folders" (without the quotation
	marks), and then double-click deleting files, folders in the list of Help
	topics.
	
	Check the amount of available space on your hard disk. If 15 MB or more of space
	is available, reinstall the program. If less than 15 MB of space is available,
	proceed to the next method.
	
	Uninstall Unused Programs
	-------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click a program that you do not use, and then
	  click Add/Remove.
	
	4. Follow the instructions on the screen to uninstall the program.
	
	5. Repeat steps 1 through 4 to remove any other unused programs that are
	  installed on your computer.
	
	MORE INFORMATION
	================
	
	To determine the amount of available space on your hard disk:
	
	1. Double-click the My Computer icon on the desktop.
	
	2. On the View menu, click Details.
	
	3. Under the Free Space column, note the amount of available space for each hard
	  disk that is installed in your computer.
	
	4. Close My Computer.
	
	Additional query words: kids mskids msbconcert msbmars free virtual memory
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup mskids kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbKidsSearch kbScholasticVolcanoes kbScholasticFlight kbScholasticMars kbScholasticWhales kbMSBSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
