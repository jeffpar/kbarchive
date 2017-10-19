---
layout: page
title: "Q66732: Windows Err Msg: Error Building WIN.COM"
permalink: /kb/066/Q66732/
---

## Q66732: Windows Err Msg: Error Building WIN.COM

	Article: Q66732
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The message "!! Error Building WIN.COM !!" occurs if you run Microsoft Windows
	version 3.0 network setup (SETUP /N) from the Windows Setup Disk (disk 1) or
	from a shared directory if WIN.CNF and/or the appropriate logo file (*.LGO) for
	the display being set up are damaged or missing.
	
	This error message may also be displayed if the Windows Setup program's automatic
	hardware detection feature is having difficulty with hardware recognition. You
	can nclude the /I switch to disable Setup's hardware detection feature. For
	example:
	
	       Setup /I /N
	
	MORE INFORMATION
	================
	
	The size and disk location of the WIN.CNF and logo files are listed below. If
	all 282 files appear to be in the shared directory and you suspect that these
	files are not missing but simply corrupted, you can expand them invidually off
	of the original disks. Otherwise, carefully follow the directions on page
	553-554 of the "Microsoft Windows User's Guide."
	
	NOTE: All the logo files are on the same disk of a given format.
	
	WIN.CNF Size and Disk Location
	------------------------------
	
	Size of
	File            Expanded File   Disk #          Format
	-------         ------------    ------          ------
	
	WIN.CNF         3456            1               1.2 MB, 720K
	                               2               360K
	CGALOGO.LGO      880            2               1.2 MB, 720K
	EGALOGO.LGO     1072            4               360K
	EGAMONO.LGO     1024
	HERLOGO.LGO      976
	VGALOGO.LGO     1120
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
