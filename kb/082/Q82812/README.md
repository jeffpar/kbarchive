---
layout: page
title: "Q82812: Font Selection/Mouse Support for MS-DOS Apps in a Window"
permalink: /kb/082/Q82812/
---

## Q82812: Font Selection/Mouse Support for MS-DOS Apps in a Window

{% raw %}

	Article: Q82812
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To change the font selection or use a mouse with MS-DOS applications that are
	running in a window under Microsoft Windows, the following items are required:
	
	- The MS-DOS application must support the mouse. It must be able to use a mouse
	  when running full-screen or outside Windows.
	
	- The MS-DOS mouse driver must support using a mouse in a window, which is a
	  new Windows 3.1 feature. The Microsoft Mouse version 8.2 (MOUSE.COM) and
	  Logitech version 6.02 (LMOUSE.COM) mouse drivers included with Windows 3.1
	  include support for using a mouse in a window. If you have another type of
	  mouse, contact the mouse manufacturer for an updated driver.
	
	- The MS-DOS mouse driver must be loaded before Windows is started. For
	  example, the driver can be loaded from the AUTOEXEC.BAT or CONFIG.SYS file.
	
	- The Windows display driver (specifically, the enhanced mode grabber, or 3GR
	  file) must support these features.
	
	MORE INFORMATION
	================
	
	All video drivers that come with Windows 3.1 support mouse usage and font
	selection in a window, including EGA, VGA, super VGA, 8514/a, XGA, TIGA, and
	Video Seven drivers.
	
	If a Windows 3.0 display driver is being used and it does not support these
	features, obtain updated drivers from your video manufacturer. In the meantime,
	you may be able to obtain limited feature support by using the following
	switches in the [NonWindowsApp] section of your SYSTEM.INI file:
	
	     MouseInDosBox=1
	     FontChangeEnable=1
	
	REFERENCES
	==========
	
	For more information about these switches, see the SYSINI.WRI file in the
	WINDOWS directory.
	
	For more information about using MS-DOS applications with Windows 3.1, see the
	"Troubleshooting Guide" in the "Getting Started with Microsoft Windows" manual.
	
	Additional query words: tshoot 3.10 3.1 dosbox 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
