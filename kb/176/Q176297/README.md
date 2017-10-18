---
layout: page
title: "Q176297: CFS or FS: Error Message or Hang When You Start Program"
permalink: kb/176/Q176297/
---

## Q176297: CFS or FS: Error Message or Hang When You Start Program

	Article: Q176297
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsound fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Combat Flight Simulator, Flight Simulator 98, or Flight Simulator
	2000, the computer may stop responding (hang), or you may receive one of the
	following error messages:
	
	   - An Exception 0D has occurrence at 0020c104DE in vxd vip...
	
	   - A fatal Exception 30 has occured ...
	
	When you play Combat Flight Simulator 2, you may receive the following error
	message:
	
	  An Exception OE has occurred @0028:c002b27a in vxd ntkern(01)+0000b16a.
	
	CAUSE
	=====
	
	This behavior can occur if a Creative Labs Sound Blaster AWE 64 sound card is
	installed in your computer, and the version of the sound driver is older than
	version 4.38.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest version of the sound
	driver for your sound card from the following Creative Labs Web site:
	
	  http://www.soundblaster.com
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: flightsim fltsim flt sim fs98 fs2000 fs2k cfs
	
	======================================================================
	Keywords          : kberrmsg kbsound fs98 kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
