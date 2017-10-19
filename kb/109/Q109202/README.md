---
layout: page
title: "Q109202: Problems with Calcomp 907 Plotter Driver"
permalink: /kb/109/Q109202/
---

## Q109202: Problems with Calcomp 907 Plotter Driver

	Article: Q109202
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Calcomp, the Calcomp 907 plotter driver version 3.00 for Microsoft
	Windows 3.1 has configuration problems and limitations that may affect the
	desired output on Calcomp plotters that support the 907 command language.
	
	MORE INFORMATION
	================
	
	The problems concern the plot scaling and transmutation retry features of the
	Calcomp 907 driver and the Calcomp 907 plotters themselves and are listed
	below.
	
	- Plot Scaling. The resolution setting of the plotter must be set to 2032 dots
	  per inch (dpi) to allow plotter scaling features to be enabled. Any other
	  resolution cannot scale with the Calcomp driver.
	
	- Transmission Retry. The Calcomp 907 plotter driver configuration allows
	  changes to the transmutation retry value, but the value entered has no effect
	  on the transmission retry. Calcomp suggests changing the transmission retry
	  value by using Microsoft Windows Control Panel.
	
	The following are limitations of the version 3.00 Calcomp 907 plotter driver:
	
	- Maximum paper size is 128 inches wide by 128 inches long. (This includes
	  continuous roll paper.)
	
	- Maximum number of copies is 99.
	
	The products included here are manufactured by Calcomp, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.1 907 Calcomp CALCOMP.HLP project
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
