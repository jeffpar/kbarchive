---
layout: page
title: "Q165921: Err Msg: The File 'S3.drv' on the Windows 95 CD-ROM Could Not..."
permalink: /kb/165/Q165921/
---

## Q165921: Err Msg: The File 'S3.drv' on the Windows 95 CD-ROM Could Not...

{% raw %}

	Article: Q165921
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbdisplay osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing a Diamond Stealth video driver from the Drivers\
	Display\Diamond folder on the Windows 95 Upgrade CD-ROM using the Add New
	Hardware Wizard, you may receive the following error message:
	
	  The file 's3.drv' on the Windows 95 CD-ROM could not be found.
	  Insert Windows 95 CD-ROM into the drive selected below, and click OK.
	
	Clicking OK causes the same message to appear again.
	
	If you click Details, the following information appears:
	
	  The following error occurred: 'The file was not found' (error #2).
	  Setup could not finish opening a file on the source disk.
	
	  Source file: '<CD-ROM drive>\Drivers\Display\Diamond\S3.drv'
	  Destination file '<windrv>\System\S3.drv=Win95_4.cab'"
	
	CAUSE
	=====
	
	The files are located in the <cd-rom drive>:\Win95 folder.
	
	RESOLUTION
	==========
	
	To continue with the driver installation, change the path in the dialog box to
	the <CD-ROM drive>:\Win95 folder and click OK.
	
	MORE INFORMATION
	================
	
	This behavior can also occur when you are installing the Diamond Speedstar
	driver, which prompts you for the Cirrus.vxd file
	
	======================================================================
	Keywords          : kbdisplay osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
