---
layout: page
title: "Q166198: Display Color Problem with OpenGL Apps In Windows NT 4.0 SP2"
permalink: /kb/166/Q166198/
---

## Q166198: Display Color Problem with OpenGL Apps In Windows NT 4.0 SP2

{% raw %}

	Article: Q166198
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 2, coloring problems may occur with
	OpenGL applications where the wrong colors are drawn in a wide variety of
	situations.
	
	CAUSE
	=====
	
	This is a problem associated with the Opengl32.dll file in Service Pack 2.
	
	
	RESOLUTION
	==========
	
	Copy the Opengl32.dll from the Windows NT 4.0 CD to the %SystemRoot%\System32
	directory, replacing the Opengl32.dll file from Service Pack 2. (%SystemRoot% is
	the installation directory of the Windows NT.system files.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: opengl32.dll glsp2fix.exe sp3
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
