---
layout: page
title: "Q74283: WIN.INI Settings for Windows Help Hypertext Colors"
permalink: /kb/074/Q74283/
---

## Q74283: WIN.INI Settings for Windows Help Hypertext Colors

{% raw %}

	Article: Q74283
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The user can control the color that the Microsoft Windows Help application uses
	to display hypertext strings by using the JumpColor and PopupColor settings in
	the [Windows Help] section of the WIN.INI file. The JumpColor setting specifies
	the color for context strings, and the PopupColor setting specifies the color
	for definition strings. Both settings use the following syntax:
	
	     setting=(r,g,b)
	
	where r, g, and b are decimal values in the range 0 to 255 that specify a color
	value as a red-green-blue (RGB) triplet.
	
	For example:
	
	     [Windows Help]
	     JumpColor=(128,0,0)     ; produces red context strings
	     PopupColor=(0,128,128)  ; produces cyan definition strings
	
	The default color for both types of hypertext strings is green.
	
	The Windows Help Compiler documentation in the Microsoft Windows Software
	Development Kit (SDK) discusses context and definition strings in more detail.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
