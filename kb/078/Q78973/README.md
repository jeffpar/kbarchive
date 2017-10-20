---
layout: page
title: "Q78973: Using the DFI HS 3000 Plus Scanner in Enhanced Mode"
permalink: /kb/078/Q78973/
---

## Q78973: Using the DFI HS 3000 Plus Scanner in Enhanced Mode

{% raw %}

	Article: Q78973
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Microsoft Windows in 386 enhanced mode in conjunction with the
	DFI's scanner program (SCAN.EXE) that comes with the DFI HS 3000 Plus Scanner,
	you may get the following error message:
	
	  DMA buffer too small, set DmaBufferSize entry in SYSTEM.INI to XXX
	
	CAUSE
	=====
	
	The DmaBufferSize line may need to be added in the [386Enh] section of the
	SYSTEM.INI file so that the DFI scanner program can run.
	
	RESOLUTION
	==========
	
	To make the adjustment:
	
	1. Switch to the directory that contains the SYSTEM.INI file.
	
	2. Run Notepad and open SYSTEM.INI.
	
	3. Locate the [386Enh] section.
	
	4. Add the line
	
	  DMABufferSize=XXX
	
	  where XXX = the size stated in the error message
	
	5. Save the new changes to the SYSTEM.INI file, exit Windows, and then restart
	  Windows for the changes to take effect.
	
	MORE INFORMATION
	================
	
	DMABufferSize specifies the amount of memory (in kilobytes) to be reserved for
	buffered direct memory access (DMA). This memory is allocated above 640K, if
	possible. Windows in 386 enhanced mode defaults to a DMA buffer size that
	handles disk access. The default setting size is 16. To change the value, add
	the line above to the [386Enh] section.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	SYSINI2.TXT
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty KBHW scan
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
