---
layout: page
title: "Q189802: DocErr: Perfmon Command Line Options Are Incorrect in Reskit"
permalink: /kb/189/Q189802/
---

## Q189802: DocErr: Perfmon Command Line Options Are Incorrect in Reskit

{% raw %}

	Article: Q189802
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Chapter 10 of the Windows NT Workstation 4.0 Resource Kit, on page 296, in
	the "Starting and Setting up Performance Monitor" section, it states:
	
	  You can also specify a computer name in addition to, or instead of, a
	  settings file. For example:
	
	  C:\> perfmon \\paris1
	
	  -Or-
	
	  C:\> perfmon settings.pmw \\issaquah
	
	The above syntax is incorrect.
	
	CAUSE
	=====
	
	To specify a computer name from a command line, a -c switch must precede the
	\\<computer name>. Furthermore, the -c switch negates the other command
	option that specifies a settings file. Therefore, you cannot specify both a
	computer name and a settings file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT Workstation 4.0
	Resource Kit.
	
	
	Additional query words: perfmon workspace chart log report alert view
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
