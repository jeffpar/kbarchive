---
layout: page
title: "Q173942: WINS Replication Triggered Incorrectly"
permalink: kb/173/Q173942/
---

## Q173942: WINS Replication Triggered Incorrectly

	Article: Q173942
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you view or edit the settings in the Replication Partners dialog box of
	WINS Manager, clicking OK may cause replication to start, even though it is not
	the scheduled time for replication to occur. This does not happen if you click
	Cancel or Close.
	
	MORE INFORMATION
	================
	
	WINS replication should only occur when you click Replicate Now in the
	Replication Partners dialog box, or at the scheduled time specified in the Push
	and Pull properties.
	
	This may occur if the "Initial replication" check box is selected in the WINS
	Server Configuration dialog box. Per the Help topic, this option causes the WINS
	server to replicate with partners on startup, and when replication options or
	partners are changed.
	
	In this case, clicking OK causes the replication configuration dialog box to
	think that some changes may have been made and replication is triggered.
	Clicking Cancel avoids this.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
