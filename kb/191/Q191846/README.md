---
layout: page
title: "Q191846: WINS Automatic Backup Does Not Run Every Three Hours"
permalink: /kb/191/Q191846/
---

## Q191846: WINS Automatic Backup Does Not Run Every Three Hours

{% raw %}

	Article: Q191846
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Automatic backup of a WINS database does not occur every three hours as stated
	in the documentation. It occurs every 24 to 27 hours.
	
	MORE INFORMATION
	================
	
	WINS backup will occur 24 to 27 hours after the last backup occurred.
	Additionally, the backup will happen later each day because the next backup-
	time will be calculated when the current backup has finished.
	
	
	RESOLUTION
	==========
	
	To work around the problem, create a small batch file to stop and start the WINS
	service, and schedule this batch to run at a certain time of day. Additionally,
	configure WINS to make a backup of the database on exit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: Windows Internet Name Service
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
