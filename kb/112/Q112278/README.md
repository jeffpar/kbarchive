---
layout: page
title: "Q112278: PC WSPlus: Print Margin Changes Not Saved"
permalink: kb/112/Q112278/
---

## Q112278: PC WSPlus: Print Margin Changes Not Saved

	Article: Q112278
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes made to the print margins are not saved.
	
	CAUSE
	=====
	
	Changes made to print margins are saved in the SCHDPLUS.PRT file. If
	SCHDPLUS.PRT allows only read access, the margin settings cannot be saved. No
	error messages indicating the write error appear.
	
	This problem occurs usually when the SCHDPLUS.PRT file is in a shared directory
	on a file server.
	
	RESOLUTION
	==========
	
	Make sure you have full access to SCHDPLUS.PRT.
	
	Additional reference words 1.0 1.0a
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
