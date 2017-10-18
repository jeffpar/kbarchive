---
layout: page
title: "Q96452: Mac Wkst: PowerBooks Will Not Sleep or Spin Down"
permalink: kb/096/Q96452/
---

## Q96452: Mac Wkst: PowerBooks Will Not Sleep or Spin Down

	Article: Q96452
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.1 of Microsoft Mail for AppleTalk Networks may prevent a Macintosh
	computer with sleep ability (such as the PowerBook) from automatically going
	into sleep mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1 of Microsoft Mail
	for AppleTalk Networks. This problem was corrected in version 3.1a.
	
	MORE INFORMATION
	================
	
	Version 3.1 of Microsoft Mail for AppleTalk Networks provides local storage for
	mail users. All locally stored data is kept in a single storage file in the
	user's system folder. This local data file uses a compression routine to keep
	the local data file at its smallest size. This compression feature causes the
	hard drive to activate on a regular basis. The machine interprets this activity
	as an active process and therefore does not sleep.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
