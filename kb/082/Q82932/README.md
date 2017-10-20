---
layout: page
title: "Q82932: PRB: Device and TrueType Fonts Rotate Inconsistently"
permalink: /kb/082/Q82932/
---

## Q82932: PRB: Device and TrueType Fonts Rotate Inconsistently

{% raw %}

	Article: Q82932
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kbAPI kbOSWinNT351 kbSDKPlatform kbOSWin95 kbOSWinNT350 kbSDKWin16
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application for the Microsoft Windows graphical environment that uses a
	mapping mode other than MM_TEXT and a text alignment other than the default
	(TA_LEFT, TA_TOP), device fonts and TrueType fonts rotate in the opposite
	directions. Device fonts may exhibit other unusual behaviors. Differences in
	rotated text may appear on the screen or in printed output.
	
	RESOLUTION
	==========
	
	To create a font that rotates based on the coordinate system in which the font
	is used, the application must set the CLIP_LH_ANGLES (0x10) bit in the
	lfClipPrecision field of the LOGFONT data structure. This technique is
	backward-compatible with Windows 3.0 because the CLIP_LH_ANGLES bit is ignored
	in version 3.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: rotation lfOrientation lfEscapement nOrientation nEscapement reverse degrees negative CreateFont
	
	======================================================================
	Keywords          : kbAPI kbOSWinNT351 kbSDKPlatform kbOSWin95 kbOSWinNT350 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : :3.1,3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
