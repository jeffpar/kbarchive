---
layout: page
title: "Q91026: Obtain LOGSHOW/VIEWCFG Info Without Installing MS OS/2"
permalink: /kb/091/Q91026/
---

## Q91026: Obtain LOGSHOW/VIEWCFG Info Without Installing MS OS/2

{% raw %}

	Article: Q91026
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Microsoft OS/2 for LAN Manager Servers (the OS/2 included in the LAN Manager 2.1
	box) is a unique version of OS/2 in the way that it provides device support for
	hard-disk controllers. Microsoft uses LADDR (Layered Device Driver Architecture)
	for interacting with controllers.
	
	LOGSHOW is a utility that provides information about the way LADDR recognizes a
	system's hardware. VIEWCFG is a utility that displays which LADDR support files
	(BID files for example) have loaded themselves into memory. It is often easy to
	determine if the files loaded are actively being used. This article describes
	how to obtain LADDR information without having to install MS OS/2.
	
	MORE INFORMATION
	================
	
	1. Boot off of the Microsoft LAN Manager - Installation Disk A or the Microsoft
	  LAN Manager - HPFS Recover Disk 1.
	
	2. If you are using Installation Disk A, press ESC when the first Installation
	  screen appears.
	
	3. Put the Systems Support Disk in the drive, and run LOGSHOW.EXE or
	  VIEWCFG.EXE.
	
	4. If running LOGSHOW, press F3 to "Show and Discard Unlogged Events."
	
	If there is no controller information present, or VDISK version 1.3 establishes
	itself as Disk C (in the case where the OS/2 Setup disk is used), you may want
	to change the first step to:
	
	1. Boot off of the Microsoft LAN Manager - Installation Disk B, or the Microsoft
	  LAN Manager - HPFS Recover Disk 2.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
