---
layout: page
title: "Q117805: PC DynAd: DynaAdmin Does Not Recognize 50 Line Screen Mode"
permalink: /kb/117/Q117805/
---

## Q117805: PC DynAd: DynaAdmin Does Not Recognize 50 Line Screen Mode

	Article: Q117805
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DynAdmin application, included with versions 3.0 and 3.2 of Microsoft Mail
	for PC Networks, will not recognize 50 line screen mode and will only use the
	top 25 lines of the screen when attempting to do so.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	DynAdmin is the administration program used to create dynamic drives and is
	commonly used to offset network server drive connection limitations or ensure
	that they are not exceeded.
	
	Listed below are the available screen line modes catered to by MS-DOS:
	
	  MODE 40,43
	  MODE 40,50
	  MODE 80,43
	  MODE 80,50
	
	DynAdmin will conform to each except for the 50 line screen mode and will
	typically position itself within the top 25 lines only.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
