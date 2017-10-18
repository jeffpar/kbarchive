---
layout: page
title: "Q257401: Flight Simulator: Invalid Page Fault in Module G2d.dll or G3d.dl"
permalink: kb/257/Q257401/
---

## Q257401: Flight Simulator: Invalid Page Fault in Module G2d.dll or G3d.dl

	Article: Q257401
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg fsim kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Fly Now in either of the programs listed at the beginning of this
	article, you may receive the following error message:
	
	  <Filename> caused an invalid page fault in module G2d.dll.
	
	NOTE: The invalid page fault may also occur in module G3d.dll.
	
	CAUSE
	=====
	
	This behavior can occur if video caching or shadowing is enabled in the Basic
	Input/Output System (BIOS) settings for your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable video caching or shadowing in the BIOS settings
	for your computer.
	
	For information about how to do this, please see the printed documentation
	provided with your computer or motherboard, or contact the manufacturer of your
	computer or motherboard.
	
	For information about how to contact the manufacturer of your computer or
	motherboard, click the appropriate article number in the following list to view
	the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: msgame flightsim fs2k fltsim gpf ipf
	
	======================================================================
	Keywords          : kbenv kberrmsg fsim kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
