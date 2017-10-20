---
layout: page
title: "Q85490: PRB: Number Causes Help Compiler Invalid Context ID Error"
permalink: /kb/085/Q85490/
---

## Q85490: PRB: Number Causes Help Compiler Invalid Context ID Error

{% raw %}

	Article: Q85490
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.0,3.1; WINDOWS:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Windows Help Compiler compiles a help project file, the following error
	message appears:
	
	  Error P1083: Invalid context identification number
	
	CAUSE
	=====
	
	The representation of the context identification number begins with a zero and
	contains the digit 8 or 9.
	
	RESOLUTION
	==========
	
	Remove the leading zeros from the number.
	
	MORE INFORMATION
	================
	
	The Windows Help Compiler parses a number that has a leading zero as an octal
	number. C compilers also interpret numbers in this manner. Only the digits 0
	through 7 are legal in an octal number.
	
	Additional query words: 3.10 3.50 4.00 95 win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK350 kbWin32SDK351 kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1; WINDOWS:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
