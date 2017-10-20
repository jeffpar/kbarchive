---
layout: page
title: "Q242122: Corrupted WINS database causes service to stop responding."
permalink: /kb/242/Q242122/
---

## Q242122: Corrupted WINS database causes service to stop responding.

{% raw %}

	Article: Q242122
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Windows Internet Naming Service (WINS), the service may stop
	responding (hang). You cannot restart the service, and Event IDs 4224 and 4318
	may appear in Event Viewer.
	
	CAUSE
	=====
	
	This behavior can occur if the WINS database is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, back up the existing WINS database and its log files, and
	then build a new WINS database:
	
	1. Create a backup folder (for example, WINS_Old), and then move the current
	  contents of the WINS folder to the new backup folder. WINS is located in the
	  %SystemRoot%\System32\WINS\ folder.
	
	2. Set WINS to start automatically:
	
	  a. In Control Panel, double-click Services.
	
	  b. In the Service list, click WINS, and then click Startup.
	
	  c. Click Automatic, click OK, and then click Close.
	
	  d. Close Control Panel.
	
	3. Restart your computer. WINS automatically starts and builds a new WINS
	  database.
	
	Additional query words: windows nt server
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
