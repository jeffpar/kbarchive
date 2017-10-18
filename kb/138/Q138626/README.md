---
layout: page
title: "Q138626: Enabling PCMCIA Support on the AT&amp;T Globalyst 130"
permalink: kb/138/Q138626/
---

## Q138626: Enabling PCMCIA Support on the AT&amp;T Globalyst 130

	Article: Q138626
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AT&T Globalyst 130 requires a different PCMCIA setup than other AT&T
	Globalyst series laptops.
	
	MORE INFORMATION
	================
	
	The Hardware.txt file from the Windows 95 CD-ROM instructs you to enable PCMCIA
	support through the BIOS setup program for the AT&T Globalyst laptops.
	However, The AT&T Globalyst 130 does not have any options in the BIOS for
	enabling/disabling the PCMCIA socket services on the laptop. Instead, the socket
	must be enabled by loading the device driver, Ss365sl.exe, in the Config.sys.
	
	The file, Ss365sl.exe, is a socket enabler, and must be loaded for protect mode
	socket services to setup in Windows 95. Without this file, the PCMCIA socket
	services are disabled.
	
	The AT&T Globalyst 200S, 250, 250P, and 3141 contain BIOS settings to
	enable/disable PCMCIA socket services on the laptop.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
