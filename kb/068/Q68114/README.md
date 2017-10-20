---
layout: page
title: "Q68114: INFO: Using a Fixed-Pitch Font as the System Default"
permalink: /kb/068/Q68114/
---

## Q68114: INFO: Using a Fixed-Pitch Font as the System Default

{% raw %}

	Article: Q68114
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of Microsoft Windows earlier than version 3.0, the system font is
	fixed pitch; beginning with Windows version 3.0, the system font is
	proportional. This change can causes difficulties when applications developed
	for earlier versions of Windows are moved to version 3.0. Below is an
	explanation of how to use a fixed-pitched font as the system default. Because
	this technique affects all applications in the system, however, it should be
	used with caution.
	
	MORE INFORMATION
	================
	
	To change the default system font to any value, modify the fonts.fon= entry in
	the [boot] section of the SYSTEM.ini file. The module name of any font listed
	here, specified in the module definition (DEF) file for the font dynamic-link
	Library (DLL) must be FONTS. If the font DLL has a different module name,
	Windows does not boot, and the debugging version of Windows displays a FatalExit
	(RIP) code of 0x0401 on the debugging monitor or terminal.
	
	Therefore, to take advantage of this technique, create a custom font with the
	proper module name. Install the font and modify the SYSTEM.ini file so that
	Windows uses that font as the system default.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
