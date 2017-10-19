---
layout: page
title: "Q110636: BUG: Palettes Realized in a Memory DC May Corrupt Screen"
permalink: /kb/110/Q110636/
---

## Q110636: BUG: Palettes Realized in a Memory DC May Corrupt Screen

	Article: Q110636
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a 256-color display, when a palette is realized into a memory device context
	(DC), its colors are entered into the system palette, which may corrupt the
	current screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The premise behind the Windows Palette Manager code is that the current top-
	level window has priority over all other running applications in letting the
	system palette. When the active window sets a foreground palette, other windows
	in the system that use the palette may have their colors changed if there is not
	enough room for them to realize a background palette. This behavior is normal
	and is expected. What is not expected is to have colors change when a palette is
	selected and realized into a memory DC returned by CreateCompatibleDC().
	
	Additional query words: buglist3.10 3.10 SelectPalette RealizePalette
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
