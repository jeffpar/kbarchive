---
layout: page
title: "Q88412: Quadtel BIOS Versions to Use with Windows"
permalink: /kb/088/Q88412/
---

## Q88412: Quadtel BIOS Versions to Use with Windows

{% raw %}

	Article: Q88412
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Quadtel BIOS version 3.05.xx (where xx is the type of chip set used by this
	computer) dated 12/18/90 or later is recommended for use with Microsoft Windows.
	If you use an earlier BIOS version, your system may hang when running Windows
	versions 3.0 and 3.0a in real, standard, and enhanced modes, and when running
	Windows 3.1 in standard and enhanced modes.
	
	Some releases of the Quadtel BIOS have a CMOS screen saver utility that may need
	to be disabled or the screen may blank during Windows' setup. To access the CMOS
	utilities, press CTRL+ALT+S.
	
	Austin Computers
	----------------
	
	On all Austin 386 machines with dual hard disk drives (normally dual IDEs),
	Quadtel BIOS version 3.05.02 or greater is needed for Windows 3.0.
	
	MORE INFORMATION
	================
	
	Quadtel makes a modular BIOS that is used by OEM computer manufacturers and can
	be modified by an OEM under a license agreement with Quadtel.
	
	To find the Quadtel BIOS date:
	
	1. Type "debug" (without the quotation marks).
	
	2. At the - prompt, type "dffff:5 18" (without the quotation marks).
	  BIOS date is displayed on the right side of the screen.
	
	3. At the - prompt, type "q" (without the quotation marks) to quit.
	
	If the Quadtel BIOS is version 3.04.xx dated 11/28/90 or earlier, and you are
	using an IDE type hard disk drive, upgrade the BIOS to version 3.05.xx to handle
	aggressive data transfers.
	
	If the Quadtel BIOS is version 3.04.xx or 3.05.xx dated 12/18/90 or earlier and
	you are using more than one user-defined hard drive (for example, IDE), upgrade
	the BIOS to version 3.05.xx dated later than 12/18/90 to prevent Windows 3.0
	from hanging.
	
	Quadtel BIOS upgrades are handled by the OEM computer manufacturers. Call your
	computer manufacturer for BIOS upgrade information.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 1.x 2.03 2.10 2.11 3.0 3.0a 3.10 ems xms 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
