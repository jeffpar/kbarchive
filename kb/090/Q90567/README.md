---
layout: page
title: "Q90567: Setup Err Msg: Cannot Find the PRTUPD.INF File"
permalink: /kb/090/Q90567/
---

## Q90567: Setup Err Msg: Cannot Find the PRTUPD.INF File

{% raw %}

	Article: Q90567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows 3.0 to Windows 3.1, Setup attempts to update the
	installed printer driver using the file PRTUPD.INF. If Setup cannot find the
	file or if the installed printer is referenced differently in Windows 3.0 than
	in Windows 3.1, the following error message may be displayed:
	
	  Cannot find the PRTUPD.INF file necessary to upgrade Windows 3.0 printer
	  drivers. Be sure that the file is in a directory on the default path.
	
	CAUSE
	=====
	
	If Windows 3.1 Setup determines that printer drivers from a previous version of
	Windows are installed, it attempts to update these drivers using the PRTUPD.INF
	file. If the printer is referenced differently in Windows 3.1 than in 3.0, the
	Setup program cannot find the information needed to update the driver and may
	generate the above error message. For example, for portrait mode on the Canon
	LBP-8 III, the WIN.INI file has the setting "Orient=0" in the [LBPIIIDRV]
	section. The PRTUPD.INF file does not contain the correct entry for this printer
	in portrait orientation. Setup does not recognize the value in the WIN.INI file
	and therefore cannot update the driver.
	
	NOTE: The aforementioned error does not prevent successful installation of
	Windows 3.1; Setup can still continue.
	
	WORKAROUND
	==========
	
	To work around this problem after you have successfully installed Windows 3.1,
	use the following steps:
	
	1. In the Control Panel window, choose the Printers icon.
	
	2. Select your printer and choose the Remove button.
	
	3. In File Manager, delete the appropriate printer driver, <FILENAME>.DRV,
	  from the WINDOWS\SYSTEM subdirectory.
	
	4. In the Control Panel window, choose the Printers icon.
	
	5. Choose the Add button.
	
	6. Choose the appropriate printer from the list of printers.
	
	7. Choose the Install button, and follow the directions to install the new
	  printer driver from the Windows disks.
	
	The Hewlett-Packard DeskJet 500 and the Canon LBP Series IV printers are also
	affected by this problem.
	
	Additional query words: 3.10 3.11 prtupd.inf error message err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
