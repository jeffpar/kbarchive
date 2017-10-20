---
layout: page
title: "Q72020: INFO: Stroke Fonts Marked as OEM Character Set Are ANSI"
permalink: /kb/072/Q72020/
---

## Q72020: INFO: Stroke Fonts Marked as OEM Character Set Are ANSI

{% raw %}

	Article: Q72020
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three stroke (or vector) fonts packaged with Windows versions 3.0 and
	3.1 and Windows NT: Roman, Script, and Modern. These fonts are marked as
	belonging to the OEM character set when, in fact, they belong to the ANSI
	character set.
	
	NOTE: Windows 95 provides only the Modern vector font. The Roman and Script fonts
	are included in the True Type fonts shipped with the system.
	
	The OEM character set is the character set used by the hardware device on which
	Windows is running (for example, the IBM PC). The IBM PC OEM character set and
	ANSI character set are listed in "Microsoft Windows Software Development Kit
	Reference Volume 2" for the Windows SDK version 3.0 and in "Programmer's
	Reference, Volume 3: Messages, Structures, and Macros" for the Windows SDK
	version 3.1.
	
	The fonts were marked in this manner for two reasons. First, in previous versions
	of Windows, the stroke fonts did include non-ANSI characters. Second, mismarking
	the character set ensures proper font mapping. The character-set attribute of a
	font is assigned a very high penalty weight in the font mapping scheme. If
	stroke fonts were not marked as using the OEM character set, a stroke font might
	be chosen by the font mapper [during a SelectObject() call] instead of a raster
	font when a requested raster font size is not available. This behavior occurs
	because most raster fonts belong to the ANSI character set, character size has
	much lower penalty weight than character set, and stroke fonts can be scaled to
	any desired size. Some raster fonts can be scaled; however, they can be scaled
	only to specific sizes.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
