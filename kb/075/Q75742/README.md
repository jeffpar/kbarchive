---
layout: page
title: "Q75742: Display Driver Compatibility"
permalink: kb/075/Q75742/
---

## Q75742: Display Driver Compatibility

	Article: Q75742
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft will strive to preserve compatibility of Windows 3.0 display drivers
	with future versions of Windows. However, there are some basic guidelines that
	must be followed to ensure full compatibility.
	
	MORE INFORMATION
	================
	
	To ensure full compatibility between Windows 3.0 display drivers and future
	versions of Windows, adhere to the following guidelines regarding fonts and the
	use of VDDs and grabbers.
	
	Display drivers should use glyph caching, instead of caching the entire character
	set. Display drivers that perform font caching may encounter conflicts with the
	upcoming TrueType font technology. The Windows 3.0 8514/a driver source code is
	a good sample of a driver that uses glyph caching. Additional information will
	be available in a future Windows device development kit (DDK).
	
	Always use grabbers and VDDs from the same Windows version. Windows 3.0 VDDs and
	grabbers may not be compatible with their counterpart components from future
	versions of Windows. For example, do not run Windows 3.0 grabbers with Windows
	3.x VDDs. Likewise, do not run Windows 3.0 VDDs with Windows 3.x grabbers.
	
	Furthermore, a third-party device driver designed to work with a grabber or VDD
	from Windows 3.0 may not be compatible with the same grabber or VDD from future
	versions of Windows. For example, a grabber designed to work with the standard
	VGA VDD included in Windows 3.0 (*VDDVGA) may not be compatible with the
	standard VGA VDD included in Windows 3.x.
	
	Third-party display-driver OEM setup disks should include all appropriate VDD and
	grabber files (regardless of whether or not the files are included on the
	Windows 3.0 setup disks), and should not require any changes. Unfortunately,
	some vendors do not ship VDD and grabber files that are already available on the
	Windows 3.0 setup disks.
	
	Driver installation disks that provide a proprietary VDD, but rely on standard
	Windows 3.0 installation disks for a grabber, should be rebuilt to included the
	necessary grabber to ensure compatibility with future versions of Windows.
	
	Likewise, driver installation disks that provide a proprietary grabber, but rely
	on standard Windows 3.0 disks for a VDD, should be rebuilt to include the
	necessary Windows 3.0 VDD in order to ensure compatibility with future versions
	of Windows.
	
	Additional query words: 3.10 3.11 virtual
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310 kbWinDDK311
	Version           : :3.0,3.1,3.11
	
	=============================================================================
	
