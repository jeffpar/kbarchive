---
layout: page
title: "Q152842: PostScript Halftoning Is Different on WinNT Than Win95"
permalink: /kb/152/Q152842/
---

## Q152842: PostScript Halftoning Is Different on WinNT Than Win95

{% raw %}

	Article: Q152842
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The halftone option with the Windows NT PostScript driver does not have any
	effect on a document containing text or vector graphics.
	
	MORE INFORMATION
	================
	
	The Windows NT PostScript driver uses the host to perform halftoning when the
	option is selected in the PostScript driver. This setting has no effect on
	non-image output. If you are just printing text or vector graphics, no
	halftoning will be done on the host.
	
	In contrast, the Windows 95 driver does not actually do halftoning on the host
	computer. Instead, it sends halftone settings (angle and frequency) to the
	printer, and this affects all PostScript drawing operators including vector
	graphics and text.
	
	When the Halftoning option is selected in the Windows NT PostScript driver, the
	driver performs halftoning on the host. This only works when the source data is
	bitmap. If the source data is text or vector graphics, the driver doesn't have
	any bitmap information to work with. Instead, it generates appropriate
	PostScript operators and sends them to the printer. These would then get
	halftoned by the printer.
	
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
