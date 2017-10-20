---
layout: page
title: "Q84280: Librex: Problems Running DOS Applications in 386 Enhanced Mode"
permalink: /kb/084/Q84280/
---

## Q84280: Librex: Problems Running DOS Applications in 386 Enhanced Mode

{% raw %}

	Article: Q84280
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Librex brand notebook computers require the video patch LIBVGA.EXE to run an
	MS-DOS-based application in a full screen in 386 enhanced mode. If the patch is
	not loaded, video anomalies may be experienced, including a darkened or tinted
	screen when switching between applications.
	
	MORE INFORMATION
	================
	
	LIBVGA.EXE is a VGA patch available from Librex that prevents the Windows color
	palette from becoming corrupted when an MS-DOS-based application is run in a
	full screen in 386 enhanced mode.
	
	LIBVGA.EXE should be used when running Windows 3.0, 3.0a, and 3.1. The standard
	VGA video driver should be used in Windows 3.0 and 3.0a. The XGA (640 x 480 16
	colors) video driver should be chosen when running Windows 3.1.
	
	Librex technical support recommends contacting the local Librex dealer as the
	quickest means of obtaining the patch; however, LIBVGA.EXE can be obtained
	directly from Librex technical support.
	
	To install LIBVGA.EXE:
	
	1. Use a text editor (such as Notepad) to open the AUTOEXEC.BAT file, and add
	  the following line
	
	  [drive]\[dir]\LIBVGA.EXE
	
	  where [drive] refers to the drive that contains the LIBVGA.EXE driver, and
	  [dir] refers to the appropriate directory that contains LIBVGA.EXE. This line
	  should be added to the end of the AUTOEXEC.BAT file, before any applications
	  or shells, and AFTER any mouse drivers.
	
	2. Save the file.
	
	3. Restart the system.
	
	The Librex products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
