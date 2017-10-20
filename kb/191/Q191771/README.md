---
layout: page
title: "Q191771: How to Alter a Program's Base Priority at a Command Prompt"
permalink: /kb/191/Q191771/
---

## Q191771: How to Alter a Program's Base Priority at a Command Prompt

{% raw %}

	Article: Q191771
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the START command to alter a program's base
	priority level at a command prompt.
	
	MORE INFORMATION
	================
	
	By default, the Windows NT Thread Scheduler service assigns processor time to a
	thread according to the priority level that is coded in the program. You can
	alter a program's priority by using the START command and specifying a priority
	level. The available priority levels are: Low (idle), Normal, High, and
	Realtime. When you run a program with the START command, the specified priority
	applies to the primary thread. Note that the program can call subsequent threads
	at its internally coded priority level. Running a program with Realtime priority
	may disrupt normal system operation and result in slow mouse response. For most
	situations, there is no need to run programs at anything other than the
	internally coded normal priority.
	
	To run a program and specify its base priority at a command prompt, use the
	following syntax:
	
	" start /<priority> <program> " (without the quotation marks)
	
	The following sample steps describe how to run Notepad with Realtime priority:
	
	1. At a command prompt, type the following line, and then press ENTER:
	
	  " start /realtime notepad.exe" (without the quotation marks)
	
	2. To verify the priority level, press CTRL+ALT+DELETE to open the Windows NT
	  Security dialog box.
	
	3. Click Task Manager.
	
	4. Click the Processes tab.
	
	5. On the View menu, click Select Columns, click to select the Base Priority
	  check box, and then click OK.
	
	6. In the list of processes, locate Notepad.exe and confirm its base priority
	  level.
	
	Additional query words: cpu schedule
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
