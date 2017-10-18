---
layout: page
title: "Q93705: WFWG Err Msg: Local Copy of Schedule+ Cannot Be Accessed"
permalink: kb/093/Q93705/
---

## Q93705: WFWG Err Msg: Local Copy of Schedule+ Cannot Be Accessed

	Article: Q93705
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you start Microsoft Schedule+ for
	Windows or the Schedule+ component of Windows for Workgroups:
	
	  Local copy of Schedule+ cannot be accessed in the location specified in the
	  SCHDPLUS.INI file.
	
	CAUSE
	=====
	
	This error can be caused by a corrupt SCHDPLUS.INI file, an incorrect entry in
	the SCHDPLUS.INI file, or a corrupt .CAL file.
	
	WORKAROUND
	==========
	
	The following paragraphs list appropriate solutions for each problem:
	
	- The SCHDPLUS.INI file has an incorrect entry or is corrupt.
	
	  If the incorrect entry is not easily detectable, rename the SCHDPLUS.INI file
	  to SCHDPLUS.OLD and restart Schedule+. When Schedule+ starts, press OK at the
	  Find Local File prompt (do not select a local .CAL file or press the New
	  button).
	
	  Based on the presence of the .CAL file and "serverpath=" entry in MSMAIL.INI,
	  Schedule+ regenerates the SCHDPLUS.INI file.
	
	- The .CAL file is corrupt:
	
	  Rename the .CAL file and restart the program. Because a duplicate copy is kept
	  on the Workgroup Post Office (WGPO), the .CAL file is automatically copied at
	  startup. Be aware that any changes previously made to the .CAL file while
	  working offline will not be reflected in the downloaded .CAL file.
	
	Additional query words: 3.10 3.11 sched+ scheduler schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbScheduleSearch kbWFWSearch kbWFW310 kbWFW311 kbSchedule100
	Version           : WINDOWS:1.0,3.1,3.11
	
	=============================================================================
	
