---
layout: page
title: "Q63484: Installing Third-Party Windows 3.0 Drivers"
permalink: /kb/063/Q63484/
---

## Q63484: Installing Third-Party Windows 3.0 Drivers

{% raw %}

	Article: Q63484
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows-based portion of the Windows 3.0 Setup program does not
	support the installation of third-party display, keyboard, mouse, or network
	drivers. To install a third-party driver, it is necessary to use one of two
	methods below, depending on how the third-party driver manufacturer has supplied
	the drivers to you.
	
	This information does not apply to third-party printer drivers. Third-party
	printer drivers may be installed with the Windows Control Panel.
	
	MORE INFORMATION
	================
	
	Using the MS-DOS Portion of Setup
	---------------------------------
	
	If the third-party driver(s) are supplied on a disk that contains an OEMSETUP.INF
	file, they may be installed through the MS-DOS portion of Setup. Exit Windows to
	the MS-DOS command prompt, and run Setup from the Windows 3.0 directory. Since
	Windows 3.0 is already installed, the MS-DOS Setup program goes into maintenance
	mode and does not require you to reinstall Windows.
	
	At this point, override the default detection for the type of driver you are
	installing (that is, display, keyboard, mouse, or network). Then choose "Other -
	Requires Disk Provided by Hardware Manufacturer." Setup then prompts you to
	insert the driver disk and installs the drivers.
	
	Installing Manually with SYSTEM.INI
	-----------------------------------
	
	If the third-party driver(s) are supplied without an OEMSETUP.INF file, they must
	be installed by manually editing the SYSTEM.INI file. Instructions for the
	necessary modifications should be provided to you along with the third-party
	driver(s). If not, contact the driver manufacturer for assistance.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
