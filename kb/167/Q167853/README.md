---
layout: page
title: "Q167853: PRB: LNK1104 Cannot Find mfc42pd.lib"
permalink: /kb/167/Q167853/
---

## Q167853: PRB: LNK1104 Cannot Find mfc42pd.lib

{% raw %}

	Article: Q167853
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbtshoot
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a MFC application for the Power Macintosh, the following error
	message appears:
	
	  LNK1104 Cannot Find mfc42pd.lib (debug)
	
	-or-
	
	  LNK1104 Cannot Find mfc42p.lib (release)
	
	CAUSE
	=====
	
	This error occurs when you are compiling a Visual C++ Mac MFC application. The
	headers from MFC 4.2 are being pulled in instead of the headers from MFC 4.0.
	
	RESOLUTION
	==========
	
	Run the "Visual C++ Cross Development Setup" application found in the "Microsoft
	Visual C++ 4.0" program group. If the application does not exist in the program
	group, launch the executable Setupmfc.exe. Setupmfc.exe can be found in the
	\msdev\bin directory.
	
	MORE INFORMATION
	================
	
	Visual C++ Mac is not a subscription-based product. Visual C++ (x86) is
	subscription based though. The last release of Visual C++ Mac was Visual C++ Mac
	4.0, which worked with Visual C++ 4.0 and MFC 4.0. There was an update for
	Visual C++ Mac (4.0b) that included new libraries and code fragments for Windows
	Portability Library. It did not contain any new MFC features.
	
	Therefore, Visual C++ Mac 4.0 and 4.0b are supposed to work with MFC 4.0. When a
	newer version of Visual C++ is installed (4.1 or 4.2), and Visual C++ Mac is
	installed, the settings for MSDEV have to be changed using Setupmfc.exe.
	
	Setupmfc.exe changes the settings for MSDEV and also some registry settings. It
	creates the directory \msdev\Mfc40 with 'include' and 'src' directories that
	contain the include and src files from the Visual C++ 4.0 MFC directory. Then,
	it modifies the registry so that the header and source file settings for the
	Power Mac and 68k Mac targets (found on the Directories tab under Options on the
	Tools menu) point to those new directories.
	
	It is a common mistake to insert the VC Mac 4.0 CD or VC++ 4.2 (x86) when running
	Setupmfc.exe. Please remember to insert the original VC 4.0 (x86) CD.
	
	In some rare cases, it may be necessary to use the windows headers from Visual
	C++ 4.0 as well. This has to be done manually by copying the \msdev\include
	directory from Visual C++ 4.0 to your \msdev and renaming it (for example,
	include40). Then make the appropriate changes on the Directories tab under
	Options on the Tools menu as well for the PowerMac or 68k Mac targets.
	
	The reference to mfc42pd.lib and mfc42p.lib is found in \msdev\mfc\include\afx.h.
	These two files do not exist.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q139603 PRB: C2061 Errors When Compiling for Macintosh Target
	
	Additional query words: mfc sources linker
	
	======================================================================
	Keywords          : kberrmsg kbtshoot 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : 4.0 4.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
