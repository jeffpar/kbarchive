---
layout: page
title: "Q117742: INFO: Limitations of WINOLDAP's Terminal Fonts"
permalink: /kb/117/Q117742/
---

## Q117742: INFO: Limitations of WINOLDAP's Terminal Fonts

	Article: Q117742
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS prompt window (WINOLDAP) uses a set of private "Terminal" fonts.
	Applications developed for the Windows Graphical Environment should not rely on
	these fonts.
	
	MORE INFORMATION
	================
	
	WINOLDAP uses Terminal-like fonts to present its output in the Enhanced mode.
	The font resources are loaded when WINOLDAP is launched and are removed when it
	terminates. To verify this, run a ChooseFont common dialog box (such as the one
	in FONTEST sample in the SAMPLES directory of the Windows 3.1 SDK) when WINOLDAP
	is not running. Launch WINOLDAP and notice that "Terminal" fonts are added to
	the list of fonts in the common dialog box.
	
	Developers whose applications benefit from Terminal-like fonts may try to use
	Terminal fonts out of convenience. However, it is important to realize that
	these fonts (DOSAPP.fon, EGA40WOA.fon, EGA80WOA.fon, CGA40WOA.fon, AND
	CGA80WOA.fon) are unlike the standard fonts in that they are shipped for use by
	WINOLDAP. The standard Windows fonts are guaranteed to be available in future
	versions of Windows; such guarantees do not apply to the Terminal fonts. The
	Terminal fonts have actually been altered from version 3.0 to version 3.1 of
	Microsoft Windows. A simple resolution to this lack of guarantee is to ship the
	fonts along with the application. These fonts, however, may not be shipped
	freely with third-party applications.
	
	The paragraph above may lead you to believe that applications running exclusively
	under Microsoft Windows version 3.1 can rely on the Terminal fonts for the
	applications' displays because all Windows-based applications, by default, have
	the above fonts installed. However, a bug in WINOLDAP denies applications that
	benefit: When the last WINOLDAP session exits, it removes the DOSAPP.FON module
	twice. Any application with the DOSAPP.fon module loaded then loses the fonts
	without prior notice.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
