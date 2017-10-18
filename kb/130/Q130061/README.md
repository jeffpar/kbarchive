---
layout: page
title: "Q130061: PRB: Korean Dollar Sign Is Shown as a Backslash"
permalink: kb/130/Q130061/
---

## Q130061: PRB: Korean Dollar Sign Is Shown as a Backslash

	Article: Q130061
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:1.2,3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Software Development Kit (SDK), version 3.5 
	- Microsoft Win32s version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Because the Korean currency sign has the same code value as the backslash in
	U.S. Windows, the backslashes used to represent paths in U.S. Windows are
	displayed as Korean dollar signs in Korean MS-DOS and Korean Windows.
	
	However, if the proper Korean font is not selected, the Korean dollar sign will
	not be shown as dollar sign in Korean Windows (for example, in an edit control
	or list box). Instead, it is shown as a backslash as in U.S. Windows.
	
	CAUSE
	=====
	
	The reason is that the character (\\ or \x5c) was sent out without selecting the
	proper font. Either the Hangeul or system font should be selected before sending
	out this character using drawtext().
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 1.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK350 kbWin32s120 kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:1.2,3.1,3.5
	
	=============================================================================
	
