---
layout: page
title: "Q113077: Golf Is Unplayable Because Swing Is Too Fast"
permalink: /kb/113/Q113077/
---

## Q113077: Golf Is Unplayable Because Swing Is Too Fast

	Article: Q113077
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Golf and select either Practice or Start a New Game, you may see
	the swing function move much faster than normal.
	
	The normal swing would be to click in the swing area and hold down the mouse
	button until the stroke reaches the 12:00 position, at which time you would
	release the mouse button. Once the stroke then returns to the 6:00 position, you
	would click the mouse one more time. The ball is struck.
	
	However, if you click and hold the mouse button for the first half of the stroke
	(moving to the 12:00 position), the swing may very quickly go to the top and
	drop back down before you have a chance to do the next steps, causing a poor
	swing.
	
	RESOLUTION
	==========
	
	There are several known causes for this problem.
	
	
	Playing Golf 1.0 on Pentium Computer
	------------------------------------
	
	This problem can occur if you are playing Golf 1.0 on a Pentium computer. Golf
	1.0 was designed to run on a 386 computer. The Pentium processor may be too fast
	to use with Golf 1.0.
	
	NOTE: You do not experience this problem when you play Golf 2.0 on a Pentium
	computer.
	
	Caching Programs
	----------------
	
	This problem can be caused by caching programs running on the system. If you
	disable the cache, such as SmartDrive or any other third-party caches, Golf may
	once again work properly.
	
	Using *VTD.386
	--------------
	
	This problem can also be caused by using *VTD.386. Try the following:
	
	1. Open the SYSTEM.INI file in a text editor.
	
	2. Find the section called [386enh].
	
	3. Find the entry:
	
	     device=*vtd
	
	  -or-
	
	     device=*vtd.386
	
	  If you're using *VTD.386, change it to *VTD.
	
	Random Occurrences
	------------------
	
	Also, the problem is sometimes intermittent. You may find that restarting the
	computer makes the swing usable again.
	
	
	Additional query words: 1.00 swings Swing fast cyrex
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
