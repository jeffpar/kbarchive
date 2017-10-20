---
layout: page
title: "Q93680: How, When, and Why to Use MONOUMB and MONOUMB2.386"
permalink: /kb/093/Q93680/
---

## Q93680: How, When, and Why to Use MONOUMB and MONOUMB2.386

{% raw %}

	Article: Q93680
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	3.10     | 6.00 6.20 6.21
	WINDOWS  | MS-DOS
	kbusage kbdisplay
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	- Microsoft Windows 3.1 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the MONOUMB virtual device drivers (MONOUMB.386 and
	MONOUMB2.386) and the differences between them.
	
	MORE INFORMATION
	================
	
	The MONOUMB virtual device drivers (VxDs) work around problems with Windows
	video display drivers (VDDs) written for Windows 3.0 with the Windows 3.0 Device
	Development Kit (DDK). Windows 3.0 VDD VxDs always claim the B000-B7FF memory
	region, even when they don't use it.
	
	Windows checks the installed expanded memory manager (EMM) and loads a "VDD_2"
	VxD if it's present; this allows Windows to use the B000-B7FF region. 386Max and
	BlueMax both contain the VDD_2 VxD. However, because they don't implement VDD_2
	correctly, they require MONOUMB2.386 to patch it.
	
	QEMM and EMM386 do not contain the VDD_2 VxD, and therefore require MONOUMB.386
	(the complete VDD_2 VxD).
	
	Using MONOUMB.386 or MONOUMB2.386
	---------------------------------
	
	If you are using a Windows 3.0 VDD under Windows 3.1, you get the following error
	message when you start Windows:
	
	  Windows cannot set up an upper memory block at segment B000. Exclude this
	  address space by using the syntax of your memory manager. For more
	  information, see the README.WRI file. Type WIN /S to start Windows in
	  standard mode and choose the Read Me icon.
	
	If the VDD is not using the B000-B7FF range, you can install MONOUMB.386 or
	MONOUMB2.386 to make more memory available to Windows.
	
	If you are using QEMM or EMM386.EXE, add the following line to the [386enh]
	section of your SYSTEM.INI file:
	
	  device=c:\dos\monoumb.386
	
	If you are using 386Max or BlueMax, add the following line to the [386enh]
	section of your SYSTEM.INI file:
	
	  device=c:\dos\monoumb2.386
	
	Where to find MONOUMB.386 and MONOUMB2.386
	------------------------------------------
	
	MONOUMB.386 is provided with Windows version 3.1 and MS-DOS versions 6.0, 6.2,
	and 6.21. MONOUMB2.386 is provided with Windows version 3.1 and Windows for
	Workgroups version 3.1. Windows version 3.11 and Windows for Workgroups version
	3.11 do not include either MONOUMB.386 or MONOUMB2.386.
	
	Additional query words: 6.00 6.20 msdos EMM386.EXE 386 max blue
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW310 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
