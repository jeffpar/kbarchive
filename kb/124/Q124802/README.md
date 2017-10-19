---
layout: page
title: "Q124802: CONN: CNU Err Msg: No Gateway Driver Loaded"
permalink: /kb/124/Q124802/
---

## Q124802: CONN: CNU Err Msg: No Gateway Driver Loaded

	Article: Q124802
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Connection Name Utility (CNU), an error message may appear:
	
	  No Microsoft gateway driver loaded
	
	When you choose OK, CNU exits.
	
	CAUSE
	=====
	
	The connection name input file in the System folder's Preferences folder
	contains an update from the Directory Synchronization (DirSync) server that has
	names from the Macintosh Mail server in it. These names cannot be processed when
	Fault Tolerant is cleared in CNU, in the Application dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Connection Gateway version 3.2.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Remove the connection name input file from the System folder's Preferences
	  folder.
	
	2. Start CNU choose Application from the Configure menu.
	
	3. Select Fault Tolerant and choose OK.
	
	4. Exit CNU.
	
	5. Place the connection name input file back into the Preferences folder.
	
	6. Restart CNU.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
