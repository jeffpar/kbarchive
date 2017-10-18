---
layout: page
title: "Q76871: Support for DSP Access in Multimedia Windows"
permalink: kb/076/Q76871/
---

## Q76871: Support for DSP Access in Multimedia Windows

	Article: Q76871
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	Microsoft does not provide an application programming interface (API)
	to access digital signal processing (DSP) hardware in Windows with
	Multimedia Extensions version 1.0. An API of this type should provide
	device independence, which is very difficult, given the diversity of
	DSP hardware configurations on the market today.
	
	However, it is possible to access DSP functions through a higher-level
	API provided by Windows with Multimedia Extensions. To provide this
	functionality through an audio driver customized to the particular DSP
	board, the Multimedia Device Development Kit is required. The audio
	driver API is written to provide device independence.
	
	Additional query words: MMWIN 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
