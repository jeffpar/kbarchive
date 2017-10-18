---
layout: page
title: "Q89917: Copying to LPT Port in MS-DOS Session Slow"
permalink: kb/089/Q89917/
---

## Q89917: Copying to LPT Port in MS-DOS Session Slow

	Article: Q89917
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MS-DOS level COPY command to copy a file to an LPT port in a
	Windows 3.1 MS-DOS session, Windows appears to be completely frozen until the
	MS-DOS command has finished executing.
	
	This delay only occurs in 386 enhanced mode. The error does not occur in Windows
	3.0 or 3.1 running in standard mode.
	
	WORKAROUND
	==========
	
	To work around this problem, you can either
	
	- Edit the SYSTEM.INI file, and add the following lines to the [386enh]
	  section:
	
	        ReflectDOSInt2A=ON
	        TimerCriticalSection=0
	
	  NOTE: If you are using a network that requires TimerCriticalSection= set to a
	  higher value, then setting this to zero may adversely affect the running of
	  MS-DOS applications.
	
	  -or-
	
	- Run Windows in standard mode.
	
	MORE INFORMATION
	================
	
	Below are the definitions for the two SYSTEM.INI switches listed above. These
	definitions come from the SYSINI.WRI file that comes with the Microsoft Windows
	Resource Kit for operating system version 3.1.
	
	ReflectDosInt2A=<Boolean>
	
	Default: False
	
	Purpose: Indicates whether Windows should consume or reflect DOS INT
	2A signals. The default means Windows will consume these signals and
	therefore run more efficiently. Enable this setting if you are running
	memory-resident software that relies on detecting INT2A messages.
	
	TimerCriticalSection=<milliseconds>
	
	Default: 0
	
	Purpose: Instructs Windows to go into a critical section around all
	timer interrupt code and specifies a timeout period (in milliseconds).
	Specifying a positive value causes only one virtual machine at a time
	to receive timer interrupts. Some networks and other global memory
	resident software may fail unless this setting is used. However, using
	this setting slows down performance and can make the system seem to
	stop for short periods of time.
	
	
	Additional query words: box 3.10 3.11 2a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
