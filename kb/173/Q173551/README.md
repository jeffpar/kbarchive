---
layout: page
title: "Q173551: PPT7: &quot;Part of File is Missing&quot; Error Attempting to Open File"
permalink: /kb/173/Q173551/
---

## Q173551: PPT7: &quot;Part of File is Missing&quot; Error Attempting to Open File

	Article: Q173551
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a file, you receive the following error message:
	
	  Sorry, the file cannot be opened because part of the file is missing.
	
	This error may occur when accessing files that were directly saved on removable
	media.
	
	
	CAUSE
	=====
	
	This error may result from any of the following conditions:
	
	- Improperly handling the disk while working with the presentation. For
	  example, you removed the disk, such as a floppy disk, Zip disk, Jazz disk, or
	  Bernouli disk, from the drive or you exchanged the disk with another disk
	  while the presentation was open.
	
	- A network interruption, such as a lost connection, occurred while saving,
	  closing, or working in a file that you opened from a network drive.
	
	- A power outage, spike, or brownout occurred while PowerPoint was attempting
	  to access the disk.
	
	- A virus scanner or other disk utility locked the disk while the file was
	  opened in PowerPoint.
	
	- You have a damaged disk or the disk drive is not functioning properly.
	
	- The presentation was too large to fit on the disk. Hence, only part of the
	  presentation was saved.
	
	WORKAROUND
	==========
	
	In most cases, this error message indicates that the file you are attempting to
	open is damaged and you will not be able to recover the file. However, in some
	cases you may be able to recover the file using one of the following methods.
	
	Method 1: Open the File on a Different Computer
	-----------------------------------------------
	
	Attempt to open the file on another computer that is running the same version of
	PowerPoint. Or, if you have a Macintosh computer on which you installed
	PowerPoint version 4.0, attempt to open the file on that computer. You must have
	the PowerPoint 95 converter for PowerPoint 4.0 for the Macintosh. Currently
	there is no converter available for PowerPoint 97 files.
	
	Method 2: Run ScanDisk
	----------------------
	
	Run ScanDisk to determine if the file has become cross-linked with other files or
	folders and repair any errors.
	
	1. On the Windows Start menu, point to Programs, point to Accessories, and then
	  click ScanDisk.
	
	  NOTE: If ScanDisk does not appear on the submenu, it may not be installed.
	  Rerun Windows Setup in maintenance mode to install ScanDisk.
	
	2. Select the drive you want to check and click Start.
	
	Method 3: Open the File Using a Different Method
	------------------------------------------------
	
	Open the file using one of the following methods:
	
	- In Windows Explorer, double-click the file.
	
	- Start PowerPoint. Drag the file from Windows Explorer to PowerPoint.
	
	- In PowerPoint, click Slide From File on the Insert menu.
	
	
	MORE INFORMATION
	================
	
	Keep the following in mind when you work with files that are stored on removable
	media:
	
	- Do not remove the disk from the drive when the file is open in PowerPoint.
	
	- Make sure the disk has enough free space to store your presentation.
	
	- If the computer's power supply is unreliable, repair or replace the power
	  supply or purchase an uninterruptible power supply (UPS).
	
	- Copy the file to the hard disk, make the changes you want, save the file, and
	  then copy the file to the removable media or network drive.
	
	Additional query words: ppt95 ppt7 error save opening opened miss corrupt corrupted corrupting
	
	======================================================================
	Keywords          :  
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	
	=============================================================================
	
