---
layout: page
title: "Q90242: The NET START Memory Loader and Its Memory Usage"
permalink: /kb/090/Q90242/
---

## Q90242: The NET START Memory Loader and Its Memory Usage

	Article: Q90242
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The memory loader invoked by NET START is aggressive when loading the memory
	resident (TSR) portions of the program. If you optimize your memory using a
	third-party memory manager such as Quarterdecks QEMM or Qualitas' 386 MAX, you
	should mark any NET START commands as "non-optimizeable" and place them in the
	AUTOEXEC.BAT file so they are the last program to load.
	
	This allows the memory manager to optimize to its full potential, and then allow
	the NET START loader to fill up any remaining holes that it can find.
	
	MORE INFORMATION
	================
	
	The NET START command loads the following services as memory resident
	
	- NetBEUI
	
	- STD
	
	- ENH
	
	- POPUP
	
	when an XMS memory provider is present.
	
	The manner in which it does this is more aggressive than most memory loaders; it
	breaks the service into its component segments and attempts to find upper memory
	block (UMB) space for them individually, thereby (usually) loading more of these
	services into upper memory.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
