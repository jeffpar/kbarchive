---
layout: page
title: "Q174247: FS98 Setup Err Msg: FS98 Requires 4XXXMB for Installation"
permalink: kb/174/Q174247/
---

## Q174247: FS98 Setup Err Msg: FS98 Requires 4XXXMB for Installation

	Article: Q174247
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbtlckbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Flight Simulator 98 you may receive the following error
	message:
	
	  Flight Simulator 98 requires 4096MB for installation.
	
	The megabyte requirement may be different on your computer, but it will always
	remain in the 4000MB (4GB) range. Flight Simulator requires only 100MB of free
	hard disk space for installation.
	
	CAUSE
	=====
	
	This error message may occur if you do not have enough free hard disk space on
	the installation drive of your computer. The error message may also occur if
	calculation of free hard disk space during the detection portion of Setup is
	incorrect.
	
	RESOLUTION
	==========
	
	If you do not have enough free hard disk space on the installation drive of your
	computer, free up enough space on your hard disk to allow Setup to complete
	successfully. (Approximately 100MB as stated in the system requirements.) If you
	have verified that you have sufficient hard disk space, download the Flight
	Simulator 98 Setup patch from the following Web address:
	
	  http://www.microsoft.com/games/products.asp?filter=fsim
	
	If you have experienced this problem and are not able to successfully Setup
	Microsoft Flight Simulator 98, this patch should resolve the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Flight Simulator 98.
	
	MORE INFORMATION
	================
	
	Setup may incorrectly determine the amount of free disk space on hard disk
	drives that contain partitions. Partitions of 2000MB are particularly affected,
	though the error message may appear with any partition.
	
	Additional query words: flightsim 4096 partition setup fs98
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbtlc kbfaq
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
