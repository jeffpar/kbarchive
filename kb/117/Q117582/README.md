---
layout: page
title: "Q117582: CONN: Connection Installer Corrupts Gateway Templates"
permalink: /kb/117/Q117582/
---

## Q117582: CONN: Connection Installer Corrupts Gateway Templates

	Article: Q117582
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks
	allows pass-through gateway support from Microsoft Mail for PC Networks to
	Microsoft Mail for AppleTalk Networks. The gateway templates you view with the
	Microsoft Mail for AppleTalk Networks client, however, may not correspond to the
	displayed template icon.
	
	CAUSE
	=====
	
	The gateway templates become corrupted if you add gateway templates using the
	Gateway, Update Gateway menu option in the Connection Installer.
	
	RESOLUTION
	==========
	
	1. In the Connection Installer, choose Gateway, "Copy Accounts and Recipients"
	  and save this to a file.
	
	2. In the Connection Installer, choose Gateway, "Remove Gateway."
	
	3. In the Connection Installer, choose Gateway, "Install Gateway" and select the
	  addressing templates you want.
	
	4. In the Connection Installer, choose Gateway, "Install Accounts and
	  Recipients," select the addresses from step #1 and click Install.
	
	5. Wait 5 or 10 minutes for the addresses to reappear.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
