---
layout: page
title: "Q95779: WFWG Err Msg: Cannot Install Protected Mode Mapping"
permalink: /kb/095/Q95779/
---

## Q95779: WFWG Err Msg: Cannot Install Protected Mode Mapping

	Article: Q95779
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be displayed when you start your computer after
	installing support for Banyan Vines connectivity:
	
	  Cannot install protected mode mapping
	
	This error message is displayed when WFWNET.DRV cannot load VINES.DRV.
	
	CAUSE
	=====
	
	This error message may be caused by a lack of available conventional memory.
	
	WORKAROUND
	==========
	
	To work around this problem, try to increase the amount of free conventional
	memory. (In one case, 390 kilobytes of free conventional memory was needed.)
	
	MORE INFORMATION
	================
	
	This error message occurs in low memory situations when the VINES
	protect-to-real mapping code fails to get a low memory buffer that is needed for
	interrupts that pass a buffer of data. The default value is for the mapping
	device load library (DLL) to get one 16K buffer. You can change this by setting
	the following values in the VINES.INI file:
	
	[communications]
	bufsize=16384   ;size of mapping buffer
	buffers=1       ;number of buffers to get
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
