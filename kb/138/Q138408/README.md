---
layout: page
title: "Q138408: Err Msg: DriveSpace Could Not Mount Drive 'X'..."
permalink: /kb/138/Q138408/
---

## Q138408: Err Msg: DriveSpace Could Not Mount Drive 'X'...

{% raw %}

	Article: Q138408
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message
	
	  DriveSpace could not mount drive 'x' due to a problem with the device or with
	  your system configuration. You may be able to correct this problem by typing
	  SCANDISK C:\Drvspace.'n' at the command prompt. For more information, consult
	  your online help or documentation.
	
	where 'x' is a drive letter and 'n' is the corresponding DriveSpace file.
	
	CAUSE
	=====
	
	This error can occur if you have more than 15 compressed drives. DriveSpace
	cannot mount more than 15 compressed drives.
	
	RESOLUTION
	==========
	
	Reduce the number of compressed drives to 15 by uncompressing an appropriate
	number of drives. To uncompress a drive, follow these steps:
	
	1. Start Windows 95.
	
	2. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click DriveSpace.
	
	3. Click a drive that you want to uncompress.
	
	4. On the Drive menu, click Uncompress.
	
	5. Repeat this process until there are only 15 compressed drives.
	
	WARNING: Make sure that there is enough free hard disk space on the host drive to
	hold the uncompressed data. If there is not enough space on the host drive, back
	up and remove data to increase the free space on the host drive.
	
	MORE INFORMATION
	================
	
	If you run ScanDisk as the instructions in the error message suggest, you
	receive the following message:
	
	  You cannot use DriveSpace volume C:\DBLSPACE.'n' because it is not
	  mounted. To mount it so you can use the files it contains, you need to
	  restart your computer.
	
	Restarting your computer results in the original error message being repeated.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	

{% endraw %}
