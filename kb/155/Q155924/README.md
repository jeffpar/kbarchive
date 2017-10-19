---
layout: page
title: "Q155924: &quot;Not Enough Resources&quot; Error Running WINS Administrator"
permalink: /kb/155/Q155924/
---

## Q155924: &quot;Not Enough Resources&quot; Error Running WINS Administrator

	Article: Q155924
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Windows NT 3.51 WINS administrator on a Windows NT 4.0- based
	computer to administer a Windows NT 3.51 server over the network, you receive
	the following error message when you try to select the WINS server:
	
	  Not enough resources available to complete this operation.
	
	CAUSE
	=====
	
	The Windows NT 3.51 WINS administrator does not run correctly in Windows NT 4.0.
	
	RESOLUTION
	==========
	
	Use the Windows NT 4.0 WINS administrator (Winsadmn.exe) to administer both
	Windows NT 3.51 and 4.0 WINS servers over the network.
	
	Additional query words: prodnt internet naming service
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
