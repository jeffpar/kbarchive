---
layout: page
title: "Q154050: Cannot Uncompress DriveSpace Drive After Using Partition Magic"
permalink: /kb/154/Q154050/
---

## Q154050: Cannot Uncompress DriveSpace Drive After Using Partition Magic

	Article: Q154050
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to uncompress a drive compressed with DriveSpace, the process may
	stop at 24 percent finished and then state that it needs to restart Windows 95
	in a special mode. When your computer restarts, it restarts Windows 95 and the
	uncompress operation is not completed.
	
	CAUSE
	=====
	
	This behavior can occur if you use Partition Magic to create additional
	partitions on the drive. When you do, Partition Magic may change the drive
	letter assignment for the host drive from its default letter (usually drive H).
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key and then choose "Safe Mode Command Prompt Only" from the Startup
	  menu.
	
	2. Change the attributes of the Drvspace.ini or Dblspace.ini file in the root
	  folder of the physical boot drive. To do so, change to the root folder of the
	  physical boot drive and then type the following line
	
	  " attrib -s -h -r <filename> " (without the quotation marks)
	
	  where <filename> is either Dblspace.ini or Drvspace.ini
	
	3. Open the Drvspace.ini or Dblspace.ini file using any text editor (such as
	  Edit.com).
	
	4. Locate the line that reads:
	
	  ActivateDrive=H,C0
	
	  Change the "H" in this line to the drive letter that is assigned to the host
	  drive.
	
	  For example, if the host drive is actually drive I, change the line to read:
	
	  " ActivateDrive=I,C0 " (without the quotation marks)
	
	5. Save and then close the file.
	
	6. Restart your computer.
	
	7. Run the uncompress operation again.
	
	MORE INFORMATION
	================
	
	Partition Magic is manufactured by Power Quest Corporation, a vendor independent
	of Microsoft. We make no warranty, implied or otherwise, regarding this
	product's performance or reliability. For technical support, contact Power Quest
	at magic@powerquest.com or visit Power Quest's Web site at:
	http://www.powerquest.com
	
	======================================================================
	Keywords          : kb3rdparty kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
