---
layout: page
title: "Q132186: Cannot Install/Upgrade Windows 95 from GUI on IBM Aptiva 710"
permalink: /kb/132/Q132186/
---

## Q132186: Cannot Install/Upgrade Windows 95 from GUI on IBM Aptiva 710

{% raw %}

	Article: Q132186
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to reinstall or upgrade the copy of Windows 95 on an IBM Aptiva 710
	computer, you may receive the following error message while Setup is analyzing
	the computer:
	
	  Setup: Error SU0507
	
	  The following problem occurred while Setup was analyzing your computer:
	  SDMErr(8037001b): Detection function returned a DMS error.
	  DMSError: This computer cannot be upgraded from Windows. Please shutdown
	  Windows and upgrade in MS-DOS mode.
	
	  Setup cannot continue and will now close.
	
	If you restart the computer in MS-DOS mode and try to install Windows 95, you may
	receive a general protection (GP) fault error message during the detection
	portion of Setup. If you ignore this error message, Setup continues and finishes
	correctly.
	
	CAUSE
	=====
	
	When you run Setup from within Windows 95, the computer's BIOS prevents Setup
	from reliably detecting all the installed hardware in the computer.
	
	RESOLUTION
	==========
	
	Restart your computer in MS-DOS mode and then run Setup. If you receive a GP
	fault error message, ignore the error message and continue.
	
	For information about a possible BIOS upgrade to eliminate this problem, please
	contact IBM.
	
	MORE INFORMATION
	================
	
	This issue has also been reported on Compaq Presario CDS 520 486SX2/66
	computers.
	
	Additional query words: gpf pnp w95set
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}
