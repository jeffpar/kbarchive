---
layout: page
title: "Q98417: Heuristics Don't Disable MS-DOS Workstation Write-Behind"
permalink: kb/098/Q98417/
---

## Q98417: Heuristics Don't Disable MS-DOS Workstation Write-Behind

	Article: Q98417
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	There is no effective way to disable MS-DOS workstation write-behind using
	heuristics.
	
	- Heuristic 0 sets the write-through bit on write SMBs telling the server not
	  to return until the data is written, but does not disable the redir
	  write-behind.
	
	- Heuristic 1 applies only to write&X when X is submitted by the user
	  application (as in CLOSE).
	
	- Heuristic 4 does not, as documented, apply to writes: only to READs.
	
	- Heuristic 10 applies only to FLUSH--COMMIT: not writes.
	
	New heuristic (16) in LAN Manager 2.1a allows you to disable write-behind, but
	only on files opened in compatible mode, not in deny-none mode.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
