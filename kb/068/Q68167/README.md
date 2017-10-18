---
layout: page
title: "Q68167: Saving Memory with TSRs and Windows 3.0"
permalink: kb/068/Q68167/
---

## Q68167: Saving Memory with TSRs and Windows 3.0

	Article: Q68167
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may experience problems running Microsoft Windows version 3.0 when
	conventional memory or environment space is low. One way to save memory is to
	avoid the use of TSR (terminate-and-stay-resident) programs. If this is not
	possible, you can still save memory by invoking TSRs from the CONFIG.SYS file
	(when possible) or at the BEGINNING of the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	Each program loaded into memory gets a copy of the environment (the PATH,
	PROMPT, and other variables that you set). The more programs loaded in this
	manner, the more conventional memory used. If TSRs are loaded before setting any
	environmental variables, the memory used by the TSR is reduced by the amount of
	space usually taken by the environment string. This memory is rounded to the
	nearest 16 bytes.
	
	NOTE: If the PATH is set after TSRs are loaded, full path names must be used.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide", version 3.00, pages 442-443 and pages 515-519
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : :3.0,3.0a
	
	=============================================================================
	
