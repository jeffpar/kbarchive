---
layout: page
title: "Q155190: PRB: Functions of the VC++ WPL May Not Respond as Expected"
permalink: /kb/155/Q155190/
---

## Q155190: PRB: Functions of the VC++ WPL May Not Respond as Expected

{% raw %}

	Article: Q155190
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a library of C functions to access with Visual FoxPro for
	Macintosh (with the SET LIBRARY Command), you may choose to use the Microsoft
	Visual C++ (VC++) compiler, which offers a set of functions (the Windows
	Portability Library, or WPL) that may be ported to the Macintosh. These
	functions may not work as expected or desired when loaded under Visual FoxPro
	for Macintosh.
	
	CAUSE
	=====
	
	Visual FoxPro for Macintosh was not designed to work with the functions of the
	Windows Portability Library. Many of these functions allocate memory outside of
	FoxPro, which is something that is not recommended within a library that will be
	loaded from FoxPro.
	
	WORKAROUND
	==========
	
	Use functions provided in the FoxPro API Library or the Mac Toolbox.
	
	You may also be able to create a stand-alone application, using the functions of
	the Windows Portability library, that may be run from Visual FoxPro via
	AppleScript, using the FoxPro RUNSCRIPT command.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post more information in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbdsd VFoxMac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
