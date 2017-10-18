---
layout: page
title: "Q234365: XADM: ISINTEG -Patch May Take Several Hours to Finish"
permalink: kb/234/Q234365/
---

## Q234365: XADM: ISINTEG -Patch May Take Several Hours to Finish

	Article: Q234365
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you restore an offline backup to your Microsoft Exchange Server computer,
	you must run isinteg -patch prior to starting the Microsoft Exchange Information
	Store service. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q149238 XADM: Information Store Fails To Start With -1011 Error
	
	When you run isinteg -patch, it may appear as if the isinteg process has stopped
	processing information. At the command prompt, you will see the cursor blinking
	directly under the following text:
	
	  C:\exchsrvr\bin>isinteg -patch
	  Microsoft Exchange Information Store Integrity Checker v5.5.1960.3
	  Copyright (c) 1986-1997 Microsoft Corp. All rights reserved.
	  _
	
	  ^
	  This is where the cursor will be blinking.
	
	MORE INFORMATION
	================
	
	For each object in both the private and public information stores, isinteg
	-patch replaces the Globally Unique Identifiers (GUIDs) used by the restored
	information stores. Isinteg -patch generates new GUIDs for each object, as well
	as patch replication information to prevent incorrect backfilling.
	
	If your private or public information store contains a large number of objects,
	it significantly increase the length of time it takes for isinteg -patch to
	finish. Wait for isinteg -patch to finish on its own; do not cancel or kill the
	Isinteg.exe process.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
