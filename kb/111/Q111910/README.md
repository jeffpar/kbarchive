---
layout: page
title: "Q111910: Stacker Conversion: Your Computer Is Running Stacker..."
permalink: /kb/111/Q111910/
---

## Q111910: Stacker Conversion: Your Computer Is Running Stacker...

{% raw %}

	Article: Q111910
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Stacker Conversion utility for MS-DOS 6.0 or 6.2, you may
	receive the following error message:
	
	  Your computer is running Stacker. DoubleSpace cannot convert Stacker volumes
	  to DoubleSpace format while STACKER.COM is in memory. To convert your Stacker
	  volumes, remove all Stacker commands from your CONFIG.SYS file, restart your
	  computer, and run DoubleSpace again.
	
	CAUSE
	=====
	
	This message occurs when the Stacker Conversion utility detects DBLSPACE.BIN in
	memory at the same time as STACKER.COM. The two drivers should not be in memory
	at the same time. This problem can occur if STACKER.COM is loading in the
	CONFIG.SYS file and the DBLSPACE.INI file is located in the root directory of
	the boot drive, causing DBLSPACE.BIN to remain in memory at startup.
	
	RESOLUTION
	==========
	
	You can prevent DBLSPACE.BIN from loading in memory by renaming the file
	DBLSPACE.INI. The steps below outline this procedure.
	
	1. Change to the root directory of the boot (uncompressed) drive and locate the
	  file DBLSPACE.INI.
	
	2. Remove the file attributes from the DBLSPACE.INI file by typing "attrib
	  dblspace.ini -s -h -r" (without the quotation marks).
	
	3. Rename the file by typing "ren dblspace.ini dblspace.inx" (without the
	  quotation marks).
	
	4. Restart the computer (with the Stacker driver(s) loading in the CONFIG.SYS
	  file), and run the Stacker Conversion utility again.
	
	MORE INFORMATION
	================
	
	The product Stacker is manufactured by STAC Electronics, a vendor independent of
	Microsoft. We make no guarantee, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	

{% endraw %}
