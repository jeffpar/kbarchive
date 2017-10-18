---
layout: page
title: "Q247886: Computer Stops Responding to Mouse or Keyboard Input"
permalink: kb/247/Q247886/
---

## Q247886: Computer Stops Responding to Mouse or Keyboard Input

	Article: Q247886
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fixkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are using your Windows NT 4.0-based computer, it may stop responding
	to mouse or keyboard input. If you use the Task Manager tool to view the current
	processes that are running on your computer, you may observe that the Central
	Processing Unit (CPU) usage is at or near 100 percent. Also, the "% Processor
	Time" and "Priority Current" counters in the Performance Monitor tool Thread
	object may indicate that a thread has a higher priority (and is subsequently
	using more CPU time) than was expected.
	
	CAUSE
	=====
	
	This problem can occur when the NtSetInformationThread() function does not check
	threads properly before granting them a priority. This allows a thread to
	acquire HIGH_PRIORITY (or level above LOW_REALTIME_PRIORITY) and access to
	privileged mode with unlimited access to the CPU.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time     Size        File name      Platform
	  -------------------------------------------------------------
	  10/25/1999   04:54p     952,192   Ntkrnlmp.exe     x86
	  10/25/1999   04:53p     932,032   Ntoskrnl.exe     x86
	  10/25/1999   04:52p   1,405,184   Ntkrnlmp.exe   Alpha
	  10/25/1999   04:51p   1,376,896   Ntoskrnl.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
