---
layout: page
title: "Q173023: Err Msg: The Filename, Directory, or Volume Label Syntax Is..."
permalink: /kb/173/Q173023/
---

## Q173023: Err Msg: The Filename, Directory, or Volume Label Syntax Is...

{% raw %}

	Article: Q173023
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view a System log, Security log, or Application log that you
	saved using Event viewer by double-clicking a Event Log (.evt) file, you may
	receive the following error message:
	
	  The filename, directory, or volume label syntax is incorrect.
	  Do you want to select another server to administer?
	
	If you click Yes, you may be prompted to type the computer name of the computer
	on which the log file you want to view is located. If you click No, the
	application exits.
	
	If you are running Windows NT version 3.5, you are not able to select a computer
	to administer; you must exit the application.
	
	RESOLUTION
	==========
	
	To open a saved Event Log (.evt) file, use the appropriate method:
	
	Windows NT version 4.0
	----------------------
	
	1. Click Start, point to Programs, click Administrative Tools, and the click
	  Event Viewer.
	
	2. On the Log menu, click Open.
	
	3. In the File Name box, type the path to the log file you wish to view, an then
	  click OK.
	
	Windows NT versions 3.5 and 3.51
	--------------------------------
	
	1. In the Administrative Tools group, double-click Event Viewer.
	
	2. On the Log menu, click Open.
	
	3. In the File Name box, type the path to the log file you wish to view, and
	  then click OK.
	
	Additional query words: prodnt secevent appevent sysevent evt eventvwr Eventviewer
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
