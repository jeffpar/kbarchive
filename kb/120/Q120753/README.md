---
layout: page
title: "Q120753: WINS Manager Disappears or Closes Suddenly"
permalink: kb/120/Q120753/
---

## Q120753: WINS Manager Disappears or Closes Suddenly

	Article: Q120753
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbother kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For no apparent reason, WINS Manager suddenly disappears (terminates).
	
	CAUSE
	=====
	
	A WINS Manager thread attempting to automatically refresh the statistics on the
	main WINS Manager window conflicts with another thread. This usually happens
	when other dialog boxes are opened or closed.
	
	
	WORKAROUND
	==========
	
	In the Preferences dialog box, clear the Auto Refresh check box or set the Auto
	Refresh Interval to a higher value (in number of seconds).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.50. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
