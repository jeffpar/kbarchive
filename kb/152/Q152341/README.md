---
layout: page
title: "Q152341: BUG: Help Is Not Activated on a Non-system Partition"
permalink: kb/152/Q152341/
---

## Q152341: BUG: Help Is Not Activated on a Non-system Partition

	Article: Q152341
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Visual FoxPro for the Macintosh was installed on a non-system partition, Help
	will not load.
	
	WORKAROUND
	==========
	
	To make graphical Help function, perform one of the following steps:
	
	1. Double-click the Visual FoxPro Help file in the Finder.
	
	2. Install Visual FoxPro to the boot System partition.
	
	3. Use the .DBF style Help by issuing the following command in the Command
	  window:
	
	     SET HELP TO foxhelp.dbf
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro for the Macintosh on the non-system partition of a hard
	  drive.
	
	2. Launch Visual FoxPro.
	
	3. Try to launch Help by pressing the F1 key or typing "HELP" in the Command
	  window.
	
	Additional query words: vFoxmac help non-system volume
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
