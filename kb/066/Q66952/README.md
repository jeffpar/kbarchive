---
layout: page
title: "Q66952: Using CVW on an IBM PS/2 or Other 8514/a System"
permalink: /kb/066/Q66952/
---

## Q66952: Using CVW on an IBM PS/2 or Other 8514/a System

{% raw %}

	Article: Q66952
	Product(s): Microsoft Programming Utilities
	Version(s): 3.05,4.0,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 3.05, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	CodeView for Windows (CVW.EXE) requires a dual monitor configuration. On most
	systems, a secondary monochrome display and adapter card meet this requirement.
	IBM PS/2 systems are an exception to this rule because there are currently no
	monochrome cards that are compatible with the Microchannel architecture of the
	PS/2. Because of this, running CVW on an IBM PS/2 system requires both an 8514/a
	(PS/2 compatible) card and an 8514/a monitor, in addition to a VGA card and
	monitor. Depending on the model of PS/2, the VGA adapter may be built-in, rather
	than a separate card.
	
	MORE INFORMATION
	================
	
	Owners of non-PS/2 systems may also opt for this configuration because the
	resolutions available with the 8514/VGA are higher than with a color/monochrome
	setup.
	
	To use this 8514/VGA configuration, the /8 (8514/a) option must be specified when
	invoking CVW. In addition, the /B (black and white) option must be used if a
	monochrome VGA adapter is used.
	
	In other words, when using a color VGA adapter, CodeView must be invoked as
	follows:
	
	  CVW /8 appname.exe
	
	When using a monochrome VGA adapter, CodeView must be invoked as follows:
	
	  CVW /8 /b appname.exe
	
	The 8514/a monitor will be the Windows display and the VGA monitor will serve as
	the debugging display.
	
	Optionally, the /25, /43, or /50 options can be specified for either 25-, 43-, or
	50-line mode, respectively, on the VGA debugging screen. 50-line mode is the
	default.
	
	For 80386 based systems, the SDK INSTALL program automatically adds the line
	"device=windebug.386" to the [386enh] section of the SYSTEM.INI file for
	debugging information.
	
	Pages 7-2 and 7-5 of the "Microsoft Windows Software Development Kit Tools"
	manual outline the requirements for CVW and for setting up a dual monitor
	system, respectively.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView305 kbCodeView400 kbCodeView410
	Version           : :3.05,4.0,4.1
	
	=============================================================================
	

{% endraw %}
