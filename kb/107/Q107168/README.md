---
layout: page
title: "Q107168: Limits on Number of Groups and Word Wheels"
permalink: kb/107/Q107168/
---

## Q107168: Limits on Number of Groups and Word Wheels

	Article: Q107168
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	A Viewer title can have at most 200 total word wheels and topic
	groups. This limit includes browse sequences, which are a special type
	of topic group. Page 4-11 of the Microsoft Multimedia Viewer
	Publishing Toolkit "Technical Reference" incorrectly says that the
	limit on the number of groups applies only to searchable groups; the
	limit applies to the combined total of all groups and word wheels.
	
	If more than 200 groups and word wheels are defined in the .MVP file,
	the Viewer compiler, WMVC.EXE, will generate the warning 8041:
	"Entry/Exit macro specification overflow." Any group footnotes in the
	RTF file that reference a group over the 200 limit will generate the
	warning 8161: "Bad group reference; all groups must be declared in the
	project file."
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
