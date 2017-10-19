---
layout: page
title: "Q82637: Using Windows 3.0 Communications Drivers with Windows 3.1"
permalink: /kb/082/Q82637/
---

## Q82637: Using Windows 3.0 Communications Drivers with Windows 3.1

	Article: Q82637
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are a number of Windows independent software vendor (ISV) applications and
	some hardware installation programs that install their own Windows
	communications drivers to replace the Windows-provided drivers. Most of these
	replacement drivers are Windows 3.0 compatible. To use them in Windows 3.1 386
	enhanced mode, the following switch is required in the [386enh] section of the
	SYSTEM.INI: "commdrv30=true". These drivers should work in standard mode without
	any modifications.
	
	MORE INFORMATION
	================
	
	If a Windows 3.0 communications driver has been installed and you try to access
	a communications port, Windows 3.1 displays a full-screen MS-DOS box warning you
	that a Windows 3.0 compatible communications driver is installed and to use the
	aforementioned switch. It is recommended that you use this switch and the
	Windows 3.0 compatible drivers only if the Windows 3.1 communications drivers
	fail to work.
	
	Most replacement drivers typically replace three key device lines in the
	SYSTEM.INI file. Below is a sample listing of the relevant portions of
	SYSTEM.INI. If any of these device lines look different from what is listed
	below, it is a good indication that a replacement communication driver has been
	installed.
	
	     [boot]
	     comm.drv=comm.drv
	
	     [386Enh]
	     device=*vcd
	     device=*combuff
	
	The following ISV applications and hardware installation programs are known to
	install Windows 3.0-compatible replacement communications drivers:
	
	  MicrophoneII v1.0 and 2.0
	
	  FAXit all versions, but only if an external FAX/Modem is connected through the
	  communications port
	
	  TurboCom all versions. This is actually only a set of replacement
	  communications device drivers.
	
	  Hayes ESP/Dual Enhanced Serial Port installation program
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
