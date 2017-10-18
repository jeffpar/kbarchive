---
layout: page
title: "Q177433: PRB: Build on Win 95/98/Me Reports &quot;Error spawning empfile.exe&quot;"
permalink: kb/177/Q177433/
---

## Q177433: PRB: Build on Win 95/98/Me Reports &quot;Error spawning empfile.exe&quot;

	Article: Q177433
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC kbVC100 kbVC200 kbVC600 kbOSWinCEsearch kbOSWinCE100 kbOSWinCE200 k
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a project under Microsoft Visual C++ versions 5.0 or 6.0 with the
	Microsoft Visual C++ for Windows CE product installed, the following message
	appears in the build output window:
	
	  Error spawning empfile.exe
	
	CAUSE
	=====
	
	The application is being built for the "Win32 (WCE x86em)" platform on Microsoft
	Windows 95, Windows 98, or Windows Millemmium Edition (Me). Windows CE Emulation
	is not supported these platforms.
	
	RESOLUTION
	==========
	
	The Windows CE emulation development facility requires Microsoft Windows NT 4.0
	or Windows 2000. If a standard Intel application was intended, select or add a
	configuration for the "Win32" platform.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Refer to the following link in the Visual C++ for Windows CE 1.0 online help for
	more information regarding requirements, features, and restrictions when using
	Windows CE emulation:
	
	  TITLE: "Windows CE Emulation"
	  URL: mk@ivt:wceide/rtf/emul.htm
	
	Additional query words: VCCEISS emulator kbwince100
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC kbVC100 kbVC200 kbVC600 kbOSWinCEsearch kbOSWinCE100 kbOSWinCE200 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword3 kbVC100WinCE kbVC200WinCE
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
