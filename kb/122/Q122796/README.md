---
layout: page
title: "Q122796: Setup Problems with Gateway 2000 P5-60 and Memory Modules"
permalink: /kb/122/Q122796/
---

## Q122796: Setup Problems with Gateway 2000 P5-60 and Memory Modules

{% raw %}

	Article: Q122796
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT version 3.5 on a Gateway 2000 P5-60 (with hardware
	components on the PCI bus), the computer may stop responding (hang), or the
	following error message may appear when several files in the graphical portion
	of Setup run:
	
	  Unable to copy <filename>. The source may be corrupted.
	  Abort, Retry, Fail
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Verify that the computer is using the PCI chip set of either the Mercury
	  S82434NX or Mercury II.
	
	2. Remove all PCI-based hardware components and try to install Windows NT
	  version 3.5. If unsuccessful, remove the memory modules (SIMM) and replace
	  them with standard 4 megabyte (MB) memory modules. This computer is
	  originally shipped with a 16 MB memory module.
	
	For additional information, call Gateway Technical Support at (800) 846- 2301.
	
	
	Gateway 2000 is manufactured by Gateway 2000, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
