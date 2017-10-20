---
layout: page
title: "Q86719: PRB: Special Characters Missing from Compiled Help File"
permalink: /kb/086/Q86719/
---

## Q86719: PRB: Special Characters Missing from Compiled Help File

{% raw %}

	Article: Q86719
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 2.0 of Microsoft Word for Windows, the RTF (rich-text format) source
	file for a Microsoft Windows Help file contains curly (smart) single or double
	quotation marks, bullets, or em or en dash characters. However, even though the
	specified font contains these special characters, they are missing when the
	compiled file is viewed in Help.
	
	CAUSE
	=====
	
	Word for Windows stores special RTF tokens for these characters, which the
	Microsoft Windows Help Compiler cannot process.
	
	RESOLUTION
	==========
	
	In order to avoid these problems do one of the following:
	
	- Format the character to use the Symbol font (without using Insert.Symbol).
	
	-or-
	
	- Sellect the desired font (not Symbol) and choose the Symbol option from the
	  Insert menu. Then choose Normal Text in the Symbols From list box. This will
	  format the special character in the desired font.
	
	-or-
	
	- Use a bitmap to represent the character or symbol. Use the "bmc" statement to
	  include the bitmap into the text as a character. For more information on the
	  bmc statement, see page 29 of the "Programming Tools" manual provided with
	  version 3.1 of the Microsoft Windows SDK.
	
	Additional query words: 3.10 3.50 4.00 95 HC HC30.EXE HC31.EXE HCP.EXE win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK350 kbWin32SDK351 kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
