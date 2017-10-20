---
layout: page
title: "Q86800: PRB: UnrealizeObject() Causes Unexpected Palette Behavior"
permalink: /kb/086/Q86800/
---

## Q86800: PRB: UnrealizeObject() Causes Unexpected Palette Behavior

{% raw %}

	Article: Q86800
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95
	Last Modified: 12-MAY-2001
	
	3.00 3.10 4.00 | 3.50 3.51
	WINDOWS        | WINDOWS NT
	kbgraphic kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application for the Microsoft Windows graphical environment, when a
	logical palette (HPALETTE) is used with a Device-Dependent Bitmap (DDB) and the
	application realizes the palette, the DDB is painted in incorrect colors.
	
	CAUSE
	=====
	
	The UnrealizeObject function was previously called to unrealize the palette.
	
	RESOLUTION
	==========
	
	Modify the code to remove the call to UnrealizeObject()/
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Because the colors of a DDB are stored using indices into the system palette
	rather than explicit RGB colors, proper DDB rendering depends on the colors of
	the system palette being set properly. An application sets up the system palette
	to display a DDB by realizing a logical palette. The realization process changes
	the colors in the system palette and creates a mapping between entries in the
	logical palette and entries in the system palette.
	
	When an application first renders a logical palette with RealizePalette(),
	Windows sets an internal flag to indicate that the palette has been realized and
	stores the current mapping from logical palette entries to physical palette
	entries. When an application realizes the palette again (for example, after
	another application modifies the palette), Windows restores the effected entries
	of the system palette to the state they had when the logical palette was
	realized for the first time.
	
	This mechanism allows a bitmap first realized with a specific palette to display
	correctly when the same palette is realized subsequently.
	
	If the application calls UnrealizePalette() on a logical palette, Windows
	discards the stored state information for the palette. If the application
	realizes the palette subsequently, its colors may map into new locations in the
	system palette. Because the bitmap contains indices into the old system palette,
	it may display incorrectly.
	
	To address this situation, do not call UnrealizeObject() on a palette if the
	application has a DDB that depends on that palette.
	
	Additional query words: 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbSDKWin32 kbOSWin95 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
