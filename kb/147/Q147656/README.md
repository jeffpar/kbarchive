---
layout: page
title: "Q147656: Updated Backup Corrects Erasing Data and Memory Manager Errors"
permalink: /kb/147/Q147656/
---

## Q147656: Updated Backup Corrects Erasing Data and Memory Manager Errors

{% raw %}

	Article: Q147656
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile kbtool win95 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released an updated version of Microsoft Backup (Backup.exe
	version 4.0.952) that corrects the following problems:
	
	- If you have a tape drive installed in your computer and you click the Restore
	  tab in Backup, click a backup set file, and then click Next Step, the Erase
	  Tape command on the Tools menu may be available even if there is no tape in
	  the tape drive. If you click the Erase Tape command and the backup set file
	  that you selected is located on a floppy disk, hard disk, or network drive,
	  all the data on the disk containing the backup set file may be erased.
	
	- When you restore a backup set created with Backup, you may receive the
	  following error message:
	
	  Microsoft Backup has encountered a serious error in the Memory Manager. Quit
	  Microsoft Backup and all other running programs, restart Backup, and then try
	  again. If the problem persists, try reinstalling Backup.
	
	
	For additional information about this error message and ways to resolve the
	issue, please see the following article in the Microsoft Knowledge Base:
	
	  Q143073 Err Msg: Microsoft Backup Has Encountered a Serious Error...
	
	Please note that the updated version of Backup does not provide additional
	support for devices that were not supported in the original version of Backup
	(Backup.exe version 4.0.950).
	
	MORE INFORMATION
	================
	
	To install the most recent version of Backup.exe, follow these steps:
	
	1. Download the Backupd2.exe file to an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Backupd2.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	4. Shut down and restart your computer.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Backupd2.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Backupd2.exe file installs the following updated file:
	
	  File name   Version  Date/Time       Size     Destination Folder
	  -----------------------------------------------------------------------
	  Backup.exe  4.0.952  3/27/96 9:52AM  820,224  Program Files\Accessories
	
	Additional query words: qic update
	
	======================================================================
	Keywords          : kbfile kbtool win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
