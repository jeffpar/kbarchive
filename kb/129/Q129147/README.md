---
layout: page
title: "Q129147: Some Compaq Computers Boot Slowly with AutoMount Enabled"
permalink: /kb/129/Q129147/
---

## Q129147: Some Compaq Computers Boot Slowly with AutoMount Enabled

	Article: Q129147
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the DriveSpace compression driver is loaded in memory and the Automatically
	Mount New Compressed Devices option is enabled, your Compaq computer may take an
	unusually long time to boot.
	
	CAUSE
	=====
	
	This problem occurs because of the manner in which certain Compaq computers
	access their floppy disk drives. When the Automatically Mount New Compressed
	Devices option is enabled on these computers, the floppy disk drives are
	repeatedly accessed as the computer boots, causing the boot process to take an
	unusually long time.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following two methods:
	
	- Disable the Automatically Mount New Compressed Devices option. To do so,
	  follow these steps:
	
	  1. Click the Start button, point to Programs, point to Accessories, point to
	     System Tools, then click DriveSpace.
	
	  2. On the Advanced menu, click Options.
	
	  3. Click the Automatically Mount New Compressed Devices check box to clear
	     it.
	
	  4. Click the OK button.
	
	  5. Click OK.
	
	  6. On the Drive menu, click Exit.
	
	- Change the Power Up Speed setting on your Compaq computer from Automatic to
	  Full. For information about how to change this setting, please contact your
	  computer manufacturer.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
