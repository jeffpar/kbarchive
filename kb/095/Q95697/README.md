---
layout: page
title: "Q95697: OTN Installation Fails Using Madge Token Ring Adapter"
permalink: /kb/095/Q95697/
---

## Q95697: OTN Installation Fails Using Madge Token Ring Adapter

	Article: Q95697
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The LAN Manager over the net (OTN) installation procedure fails when using a
	Madge Token-ring adapter. The following error message will be displayed during
	the installation:
	
	  The drivers for the MADGE MAC cannot be found
	
	MORE INFORMATION
	================
	
	The OTN installation uses the "driver" entry in the template file to reference a
	section in the NSETUP.INF file. In LAN Manager 2.1a, the section describing the
	Madge Token Ring drivers was renamed from [MADGE] to [SMARTND]. However, the
	other setup files used by the installation still refer to [MADGE].
	
	WORKAROUND
	==========
	
	To work around this problem, rename the [SMARTND] section in the NSETUP.INF file
	to [MADGE].
	
	Additional query words: 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
