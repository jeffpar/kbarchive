---
layout: page
title: "Q198136: Combat Flight Simulator: Uses More Hard Disk Space Than Expected"
permalink: /kb/198/Q198136/
---

## Q198136: Combat Flight Simulator: Uses More Hard Disk Space Than Expected

	Article: Q198136
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Combat Flight Simulator, the files may occupy more
	hard disk space than you expect.
	
	MORE INFORMATION
	================
	
	The amount of hard disk space used by Combat Flight Simulator depends on the
	cluster size of your hard disk. Many files installed by Combat Flight Simulator
	are smaller than 10 kilobytes (KB) in size. On a hard disk with a large cluster
	size, these files may occupy much more space than they need.
	
	A cluster is the smallest unit of storage on a logical drive.
	
	If the cluster size of your hard disk is 32 KB, a 5 KB file occupies 32 KB (one
	cluster) of disk space. If the cluster size is 4 KB, a 5 KB file occupies 8 KB
	(two clusters) of disk space.
	
	For additional information about cluster sizes on a FAT file system, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q67321 FAT Type and Cluster Size Depends on Logical Drive Size
	
	
	Additional query words: 1.00 msgame combatfs cfs2 partition allocation table
	
	======================================================================
	Keywords          : kbenv kbsetup kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
