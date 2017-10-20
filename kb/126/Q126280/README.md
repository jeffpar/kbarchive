---
layout: page
title: "Q126280: Windows 95 ScanDisk (SCANDSKW) Exit Codes"
permalink: /kb/126/Q126280/
---

## Q126280: Windows 95 ScanDisk (SCANDSKW) Exit Codes

{% raw %}

	Article: Q126280
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
	
	This article lists the exit codes that an IF ERRORLEVEL statement can detect
	after you run ScanDisk.
	
	MORE INFORMATION
	================
	
	ScanDisk can return the following exit codes:
	
	  0x00 - Drive(s) checked, no errors found
	  0x01 - Errors found, all fixed
	  0xFA - Check couldn't start, couldn't find or load DSKMAINT.DLL
	  0xFB - Check couldn't start, insufficient memory
	  0xFC - Errors found, at least some not fixed
	  0xFD - At least one drive could not be checked
	  0xFE - Check was canceled
	  0xFF - Check was terminated due to an error
	
	Note that there is no distinction between codes 0x00 and 0x01 (or between 0x00
	and 0xFC when ScanDisk is run in Preview mode) on removable media (such as a
	floppy disk).
	
	Additional query words: errorlevels error levels
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
