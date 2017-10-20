---
layout: page
title: "Q58342: Windows 3.0 SYSTEM.INI &#91;keyboard&#93; Section"
permalink: /kb/058/Q58342/
---

## Q58342: Windows 3.0 SYSTEM.INI &#91;keyboard&#93; Section

{% raw %}

	Article: Q58342
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	SYSINI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory.
	
	MORE INFORMATION
	================
	
	[KEYBOARD] SECTION
	------------------
	
	The [keyboard] section provides information about the keyboard.
	
	The [keyboard] section can contain the following settings:
	
	------------------------------------------------------------
	keyboard.dll=<filename>
	Purpose: Specifies the name of a dynamic-link library that defines the
	        layout for non-U.S. and non-IBM compatible keyboards. This
	        setting is not required if the keyboard is an XT, AT, or
	        Enhanced U.S. keyboard, when the keyboard driver is
	        keyboard.drv. It is not required also if the keyboard is an
	        Olivetti 83-key or an AT&T type 301 or 302 keyboard, when the
	        keyboard driver is kbdoli.drv.
	To change: Choose the Windows Setup icon from the Main Group window or
	        the International icon from the Control Panel window.
	------------------------------------------------------------
	oemansi.bin=<filename>
	Purpose: Specifies the name of a file that defines OEM/ANSI code-page
	        translation tables for keyboards that do not use the U.S. OEM
	        character set (code page 437). These include NO
	        (Norway/Denmark) and CA (French- Canadian).
	To change: Use Notepad to the edit SYSTEM.INI file.
	------------------------------------------------------------
	subtype=<number>
	
	Purpose: Distinguishes, for some drivers, special features for
	        keyboards that otherwise have identical layouts. The
	        following values are defined:
	
	       Type      Subtype
	       Value     Value     Meaning
	       -----     -------   -------
	         1         2       Olivetti M24 83-key or
	                           AT&T 6300 type 301 83-key
	
	         1        4        AT&T type 302 sometimes used
	                           on the 6300 Plus
	
	         2        1        Olivetti 102-key ICO used on
	                           M24 systems
	
	        This setting may also be used by other drivers.
	
	To change: Choose the Windows Setup icon from the Main
	        Group window.
	------------------------------------------------------------
	type=<number>
	
	Purpose: Specifies the keyboard type. It can be any one of following
	        values:
	
	      Value        Meaning
	      -----        -------
	        1          IBM PC or XT compatible
	
	        2          Olivetti 102-key ICO
	
	        3          IBM AT compatible
	
	        4          IBM compatible, enhanced
	
	        5          Nokia 1050 or 1051
	
	        6          Nokia 9140
	
	        If this field is blank or missing, the driver selects a
	        default type. For IBM-compatible keyboards (using the
	        keyboard.drv driver), the default type is determined by the
	        BIOS.
	
	To change: Choose the Windows Setup icon from the Main Group window.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
