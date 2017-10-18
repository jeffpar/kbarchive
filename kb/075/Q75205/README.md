---
layout: page
title: "Q75205: PC DOS: Graphics Screen Corruption When Using Micro &amp; Monitor"
permalink: kb/075/Q75205/
---

## Q75205: PC DOS: Graphics Screen Corruption When Using Micro &amp; Monitor

	Article: Q75205
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2, 3.2a, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Micro and Monitor with Microsoft Mail for PC Networks while you are
	running an MS-DOS application in graphics mode, screen garbage will appear upon
	mail notification.
	
	For example, if you load Micro and Monitor prior to running an MS-DOS application
	such as Word Perfect or Microsoft Word for MS-DOS in graphics mode, the MS-DOS
	application graphics screen will become corrupted when mail is received;
	however, the mail notification dialog box will appear correctly.
	
	CAUSE
	=====
	
	Micro and Monitor are terminate-and-stay-resident (TSR) programs used with
	Microsoft Mail for PC Networks that notify the user of incoming mail. Running
	any MS-DOS application in graphics mode causes conflicts with Micro and Monitor,
	which are text mode TSR applications.
	
	RESOLUTION
	==========
	
	After you press the ENTER key to close the notification dialog box, you can do a
	screen redraw to regain the correct screen appearance of the MS-DOS application
	in graphics mode.
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a graphics micro monitor
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
