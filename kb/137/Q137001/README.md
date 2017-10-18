---
layout: page
title: "Q137001: Automatic Mounting in Real Mode Disabled in DriveSpace 3"
permalink: kb/137/Q137001/
---

## Q137001: Automatic Mounting in Real Mode Disabled in DriveSpace 3

	Article: Q137001
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you boot your computer to a command prompt, compressed, removable- media
	drives are not mounted. In addition, the physical boot drive is not mounted when
	you boot your previous operating system.
	
	Also, when you change the Automatically Mount New Compressed Drives setting in
	DriveSpace, the Drvspace.ini file is not updated, although the registry is.
	
	
	CAUSE
	=====
	
	DriveSpace 3, which is included with Microsoft Plus!, does not support
	automatically mounting drives in real mode by default.
	
	RESOLUTION
	==========
	
	Mounting Compressed Volumes Manually
	------------------------------------
	
	To work around this behavior, use ScanDisk to mount compressed volumes in real
	mode.
	
	The following example demonstrates how to use ScanDisk in real mode to mount a
	compressed volume on drive A:
	
	1. At the command prompt, type the following command
	
	  c:\windows\command\scandisk.exe a:\<compressed_volume_name>
	
	  where <compressed_volume_name> is the name of the compressed volume file
	  (CVF) on drive A. For example, if the name of the CVF on drive A were
	  Dblspace.000, you would type the following line:
	
	  c:\windows\command\scandisk.exe a:\dblspace.000
	
	2. ScanDisk detects that the CVF has not been mounted and offers to check the
	  host drive. Choose not to check the host drive by clicking No.
	
	3. When you are prompted to mount drive A, click Yes.
	
	4. Quit ScanDisk. The volume on drive A is mounted for the duration of the
	  session.
	
	Enabling Automatic Mounting in Real Mode
	----------------------------------------
	
	To enable automatic mounting of compressed volumes on removable-media drives in
	real mode, follow these steps:
	
	1. In Windows Explorer, use the right mouse button to click the Drvspace.ini or
	  Dblspace.ini file in the root folder of the physical boot disk, and then
	  click Properties on the menu that appears.
	
	2. Click the Read-Only check box to clear it, and then click OK.
	
	3. Double-click the Drvspace.ini or Dblspace.ini file to open it.
	
	4. Change the line that reads
	
	  AutoMount=0
	
	  to read:
	
	  AutoMount=1
	
	5. Save and then close the file.
	
	6. Restart your computer.
	
	WARNING: Modifying the Dblspace.ini or Drvspace.ini file incorrectly can cause
	serious problems that may require you to reinstall Windows 95. Microsoft cannot
	guarantee that problems resulting from incorrect modifications to these files
	can be solved. Edit these files at your own risk.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
