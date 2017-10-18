---
layout: page
title: "Q167872: 1.44-MB Media DriveSpace Upgrade in 120-MB Floptical Drive"
permalink: kb/167/Q167872/
---

## Q167872: 1.44-MB Media DriveSpace Upgrade in 120-MB Floptical Drive

	Article: Q167872
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbtool osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to perform a DriveSpace 3 upgrade on a 1.44-MB floppy disk
	compressed with a previous version of DoubleSpace or DriveSpace in a 120-MB
	drive, the DriveSpace 3 upgrade may not succeed.
	
	CAUSE
	=====
	
	DriveSpace does not prompt you for the type of media in the drive.
	
	RESOLUTION
	==========
	
	If the upgrade is not successful, data from the floppy disk may be in any of the
	following locations:
	
	- The host of the unmounted compressed volume file (CVF).
	
	- The Drvspace.000 CVF.
	
	- The Dblspace.030 or Drvspace.030 CVF.
	
	To recover data from the host of the unmounted CVF, or from the Drvspace.000,
	Dblspace.030, or Drvspace.030 CVF, insert the floppy disk in the 1.44-MB floppy
	disk drive A or B. Then, copy any data files from the floppy disk to a folder on
	the hard disk.
	
	To recover data in the unmounted Drvspace.000 CVF in the root folder of the
	floppy disk, use the following steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click DriveSpace.
	
	2. Click the drive letter of the inserted floppy.
	
	3. On the Advanced menu, click Mount.
	
	4. Copy the data from the compressed floppy disk to a folder on the hard disk.
	
	5. On Advanced menu, click Unmount.
	
	To recover data in either the unmounted Dblspace.030 or Drvspace.030 CVF, use the
	following steps:
	
	1. At a command prompt, change the attributes of the Drvspace.030 or
	  Dblspace.030 file in the root folder of the floppy disk. To do so, change to
	  the root folder of the floppy disk and then type the following line
	
	  attrib -s -h -r <filename>
	
	  where <filename> is either Dblspace.030 or Drvspace.030.
	
	2. Copy the Dblspace.030 or Drvspace.030 file to the root of an uncompressed
	  hard disk.
	
	3. In DriveSpace, click the drive letter that the Dblspace.030 or Drvspace.030
	  file was copied to.
	
	4. On the Advanced menu, click Mount.
	
	5. Copy the data from the floppy disk to a folder on the hard disk.
	
	6. On Advanced menu, click Unmount.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 OEM Service Release 2
	(OSR2). We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbtool osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
