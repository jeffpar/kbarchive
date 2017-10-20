---
layout: page
title: "Q171375: 3270 Applet Does Not Return to a Normal State"
permalink: /kb/171/Q171375/
---

## Q171375: 3270 Applet Does Not Return to a Normal State

{% raw %}

	Article: Q171375
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you close the 3270 Applet (Win3270.exe) while the application is in a
	minimized or maximized state, you can no longer restore the window to normal.
	
	CAUSE
	=====
	
	When creating the windows with a SetWindowPlacement(), the applet uses the
	correct, restored window positions, but uses the saved window state. This causes
	the restored window position to be lost, and on subsequent restores, the applet
	is left in a maximized or minimized position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server and Clients version
	3.0 and Server Pack 1. This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the window is created in a normal state, and then a
	WM_SYSCOMMAND() message is posted with either SC_MAXIMIZE() or SC_MINIMIZE() if
	necessary. Using this method, the normal positions are not lost. This has a
	visible effect in that when the applet is started, the window appears briefly in
	the restored position before going to the maximized or minimized state.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
