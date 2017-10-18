---
layout: page
title: "Q180006: Event ID: 4229 When Replicating with Partners"
permalink: kb/180/Q180006/
---

## Q180006: Event ID: 4229 When Replicating with Partners

	Article: Q180006
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows Internet Name Service (WINS) Server may log one of the following
	events in the system log of Event Viewer:
	
	  Event ID   : 4229
	  Source     : WINS
	  Description: WINS pool thread encountered an exception during the
	               process of sending a push notification to another WINS.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the information in the following article to compact
	your WINS database:
	
	  ARTICLE-ID: Q145881
	  TITLE : How to Use Jetpack.exe to Compact a WINS or DHCP Database
	
	
	Additional query words: replication
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
