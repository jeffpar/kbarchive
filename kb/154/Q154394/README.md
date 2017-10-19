---
layout: page
title: "Q154394: Computer with NetFlex 2 Card Stops Responding Every 30 Seconds"
permalink: /kb/154/Q154394/
---

## Q154394: Computer with NetFlex 2 Card Stops Responding Every 30 Seconds

	Article: Q154394
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Every 20 to 30 seconds, the mouse will behave erratically. Behaviors include
	jumping from one side to the other as you move the mouse. Performance monitor
	will indicate the computer is at 100% CPU usage during this time. In addition,
	an event will be logged:
	
	  Event ID 5027
	  NetFlex(x): A token ring lobe wire fault has occurred. Verify cable
	  connection.
	
	CAUSE
	=====
	
	The NetFlex 2 card attempts to reinsert into the ring every 30 seconds when
	unattached. During this reinsertion attempt, it uses the CPU to a point where
	the entire system appears to stop responding momentarily.
	
	RESOLUTION
	==========
	
	Connect the computer to the token ring network.
	
	The third-party products discussed here are manufactured by Compaq Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt netflex mouse hang
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
