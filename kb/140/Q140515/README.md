---
layout: page
title: "Q140515: BUG: VDM Apps Can Cause Other Applications to Redraw Slowly"
permalink: /kb/140/Q140515/
---

## Q140515: BUG: VDM Apps Can Cause Other Applications to Redraw Slowly

{% raw %}

	Article: Q140515
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On WinNT 3.51, moving a VDM Application on the screen or changing its focus in
	relation to other 16-bit or 32-bit Windows-based applications (moving to the
	foreground or background) causes the Windows-based applications to redraw slowly
	taking four to six seconds.
	
	CAUSE
	=====
	
	Some VDM applications, such as Microsoft QuickBasic applications or Edit.com
	with the menu pulled down, have a thread that loops tightly while waiting for
	keyboard input. This thread, always being in the run/ready state, slows the
	redraw of other Windows-based applications.
	
	WORKAROUND
	==========
	
	This problem can be eliminated by creating a .pif file for the VDM Application
	using Pifedit.exe. Click the Advanced button, and reduce its Foreground and
	Background Priority by half.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
