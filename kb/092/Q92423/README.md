---
layout: page
title: "Q92423: Works for Windows Cannot Be Used to Author Help Files"
permalink: /kb/092/Q92423/
---

## Q92423: Works for Windows Cannot Be Used to Author Help Files

{% raw %}

	Article: Q92423
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RTF source files for the Windows version 3.1 Help compiler cannot be created
	using Microsoft Works for Windows version 2.0.
	
	MORE INFORMATION
	================
	
	Microsoft Works for Windows 2.0 is not capable of formatting text using the
	"hidden" character attribute. This particular attribute is used by the Windows
	Help compiler to signify jumps to context strings. Because jumping to context
	strings is critical in a help file, Microsoft Works for Windows 2.0 cannot be
	used to create the RTF source files for the Windows Help compiler.
	
	Additional query words: 3.10 no32bit HC HCP link WinHelp
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
