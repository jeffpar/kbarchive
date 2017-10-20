---
layout: page
title: "Q85921: Numonics 5860 Requires Xon/Xoff Flow Control"
permalink: /kb/085/Q85921/
---

## Q85921: Numonics 5860 Requires Xon/Xoff Flow Control

{% raw %}

	Article: Q85921
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Numonics 5860, a Hewlett-Packard (HP) 7580B compatible plotter, requires
	Xon/Xoff flow control when used with Ashlar Vellum version 1.01 under Microsoft
	Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	Ashlar Vellum version 1.01 is a Windows-based CAD software package. It can be
	used with Numonics 5860, a serial plotter compatible with the HP 7580B. This
	plotter requires the following settings in the Ports section of the Control
	Panel:
	
	  Baud:           9600 bits per second (BPS)
	  Data bits:      8
	  Stop bits:      1
	  Parity bits:    None
	  Flow control:   Xon/Xoff
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	Ashlar: (408) 746-3900
	
	Additional query words: 3.10 velum 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
