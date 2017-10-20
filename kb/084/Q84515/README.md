---
layout: page
title: "Q84515: Using the Okidata 192 Series Printers with Windows"
permalink: /kb/084/Q84515/
---

## Q84515: Using the Okidata 192 Series Printers with Windows

{% raw %}

	Article: Q84515
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses the proper printer drivers to use and limitations when
	printing to an Okidata 192 printer under Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	The following table indicates the two different Okidata 192 series printers and
	the appropriate printer drivers for Windows 3.1:
	
	  Printer                 Windows Printer Driver     Filename
	  -------                 ----------------------     --------
	  Okidata 192             Okidata 192                OKI9.DRV
	  Okidata 192 Plus        Okidata 192 Plus           OKI9.DRV
	  Okidata 192 Microline   Okidata 192-IBM            OKI19IBM.DRV
	
	The Okidata 192 Microline printer supports the IBM Microline language and
	requires a different printer driver than the 192 or 192 Plus. The Windows 3.1
	printer driver for the 192 Microline does not support printing in bold for
	non-TrueType fonts, even though the Windows 3.0 Okidata 192 Microline printer
	driver does.
	
	The Okidata Microline can print the following internal fonts in normal and bold:
	Courier 17, 12, 10, 6, and 5 cpi. The Microline prints internal fonts in bold by
	double-striking the same character. Because the TrueType font does a better job
	of printing bold with a single strike, the Windows 3.1 printer driver does not
	support printing bold for non-TrueType fonts by doing a double strike.
	
	
	Additional query words: 3.10 Plus + micro-line micro line ML true type not 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
