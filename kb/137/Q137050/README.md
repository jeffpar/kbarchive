---
layout: page
title: "Q137050: Iomega Zip Drive on Parallel Port Not Detected"
permalink: /kb/137/Q137050/
---

## Q137050: Iomega Zip Drive on Parallel Port Not Detected

	Article: Q137050
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 or run the Add New Hardware Wizard, an Iomega Zip
	Drive connected to a parallel port on your computer is not detected.
	
	CAUSE
	=====
	
	By design, Windows 95 cannot detect these drives.
	
	RESOLUTION
	==========
	
	You can manually install the protected-mode driver for an Iomega Zip Drive using
	the Add New Hardware tool in Control Panel. To do so, follow these steps:
	
	1. In Control Panel, double-click the Add New Hardware icon, and then click
	  Next.
	
	2. Click No, and then click Next.
	
	3. In the Hardware Types box, click Other Devices, and then click Next.
	
	4. In the Manufacturers box, click Iomega, and then click Have Disk.
	
	5. In the Copy Manufacturer's Files From box, type the location of the driver
	  files on the CD-ROM, and then click OK. For example, type:
	
	  " d:\drivers\storage\iomega " (without the quotation marks)
	
	6. Click Next to install the driver.
	
	You can install the driver whether or not a Zip Drive is currently connected to
	the parallel port.
	
	The protected-mode driver is located in the Drivers\Storage\Iomega folder on the
	Windows 95 CD-ROM, or you can obtain the driver directly from Iomega.
	
	NOTE: After you install the protected-mode driver, make sure to remove the
	real-mode drivers for the Zip Drive from the Config.sys and Autoexec.bat files.
	For information about removing these drivers, please consult the Zip Drive's
	documentation or manufacturer.
	
	Additional query words: guest.exe
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
