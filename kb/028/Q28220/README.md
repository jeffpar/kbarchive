---
layout: page
title: "Q28220: BUG: Link &quot;Fatal Error L1085: Cannot Open Temporary File&quot;"
permalink: /kb/028/Q28220/
---

## Q28220: BUG: Link &quot;Fatal Error L1085: Cannot Open Temporary File&quot;

	Article: Q28220
	Product(s): Microsoft Programming Utilities
	Version(s): 5.0x,5.1x,5.3,5.31.009,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.0x, 5.1x, 5.3, 5.31.009, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The LINK error "fatal error L1085: cannot open temporary file" is received when
	linking a program consisting of many object modules. When rebooting and making
	more room in RAM, the error does not occur.
	
	CAUSE
	=====
	
	The linker error has nothing to do with available RAM. The fact that the linker
	worked when the machine is rebooted can be due to any one of several areas of
	concern:
	
	- The removal of resident software upon rebooting may have removed some
	  interference. Microsoft does not guarantee that its products will work
	  correctly with TSR (terminate-and-stay-resident) software. A TSR can
	  interfere with the finding of the TMP environment variable, so the temporary
	  file will not be created.
	
	- Insufficient file handles can cause this error. The CONFIG.SYS file should
	  have the setting, files=20. Some of the handles may have been freed upon
	  rebooting without the TSRs. If the disk is full, leaving no room for a
	  temporary file to be created, this error will occur.
	
	- This error can also occur if the TMP environment variable is not set up
	  correctly or is pointing to a directory that is full.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Microsoft LINK Utility for
	MS-DOS, versions 5.0x, 5.1x, 5.3, 5.31.009, and 5.6. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: 5.0x 5.1x 5.30 5.31.009 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530DOS kbLINK53109DOS kbLINK560DOS
	Version           : :5.0x,5.1x,5.3,5.31.009,5.6
	
	=============================================================================
	
