---
layout: page
title: "Q97819: Ambiguous References to Sector One and Sector Zero"
permalink: /kb/097/Q97819/
---

## Q97819: Ambiguous References to Sector One and Sector Zero

	Article: Q97819
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	This article discusses some inconsistencies in sector numbering.
	
	Sector counting starts at 1 when referring to the physical disk geometry.
	The first sector is reference by head 0, cylinder 0, sector 1. When people
	refer to absolute sectors on a physical volume, however, they typically
	refer to sector 0 as the first sector. Many applications (for example,
	Norton Disk Doctor) refer to the first sector as sector 0. Other tools use
	different conventions.
	
	Documentation often references sector 0, as it is less ambiguous than using
	sector 1. Sector 0 is clearly the first sector, even if you disagree with
	the convention. Sector 1 is the first sector to some people, and the second
	sector to others.
	
	On a disk with 37 sectors per track, 8 heads, and 512 cylinders, Windows NT
	would look at the numbering as follows:
	
	                                     absolute
	
	-----------------------------------------------
	
	cylinder     head      sector       sector address
	
	--------------------------------------------------
	
	  0          0           1              0
	  0          0           2              1
	  0          0           3              2
	  0          0           4              3
	
	  0          0          36             35
	  0          0          37             36
	  0          1           1             37
	  0          1           2             38
	
	  0          1          36             72
	  0          1          37             73
	  0          2           1             74
	  0          2           2             75
	
	  0          7          36            294
	  0          7          37            295
	  1          0           1            296
	  1          0           2            297
	
	511          7          36         151550
	511          7          37         151551
	
	Additional query words: prodnt sector zero one 0 1 one-based 1-based zero- based 0-based
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
