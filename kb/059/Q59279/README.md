---
layout: page
title: "Q59279: PRB: L4013 or L4014 Performing /INCREMENTAL Link with Overlays"
permalink: /kb/059/Q59279/
---

## Q59279: PRB: L4013 or L4014 Performing /INCREMENTAL Link with Overlays

{% raw %}

	Article: Q59279
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.0x,5.1,5.11,5.13,5.15,5.2; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.0x, 5.1, 5.11, 5.13, 5.15, 5.2 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft LINK creates an overlaid executable file and the linker command
	line includes the /INC[REMENTAL] option, the linker may create a working
	executable file and generates one of the following messages:
	
	  L4013: Overlays: option ignored for segmented-executable file
	  L4014: /INCREMENTAL : Option ignored for real mode executable file
	
	If no warning appears, LINK follows an unpredictable execution path. In this
	case, the executable file may be corrupted and should not be used.
	
	CAUSE
	=====
	
	LINK does not support using the /INCREMENTAL switch with overlays because the
	ILINK.EXE program, invoked by the /INC option, does not support overlays. The
	linker ignores one of the two options.
	
	RESOLUTION
	==========
	
	Microsoft LINK versions 5.3 and later do not support incremental linking.
	
	Additional query words: 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 unconfirmed
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50xDOSSearch kbLINK50xOS2Search kbLINK510DOS kbLINK511DOS kbLINK513DOS kbLINK515DOS kbLINK520DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:5.0x,5.1,5.11,5.13,5.15,5.2; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	

{% endraw %}
