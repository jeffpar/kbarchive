---
layout: page
title: "Q89176: Networking with FoxBASE+/Mac and FoxBASE+ for MS-DOS"
permalink: kb/089/Q89176/
---

## Q89176: Networking with FoxBASE+/Mac and FoxBASE+ for MS-DOS

	Article: Q89176
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01; MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxBASE+ for the Macintosh (FoxBASE+/Mac) can seamlessly access files from a
	Novell version 2.15c network. FoxBASE+/Mac and FoxBASE+ for MS-DOS use the same
	code and access the same type databases.
	
	MORE INFORMATION
	================
	
	To use a Novell network, install the Novell Macintosh VAP software. Shared
	indexes must be PC-type indexes, not Macintosh-type indexes. To make the data
	available to all workstations on the network, place the databases and indexes on
	the server. Use the FoxBASE+ version appropriate to each workstation. In this
	configuration, record locking and file locking are supported as expected.
	
	NOTE: Each workstation must have a copy of the FoxUSER file. Do not place the
	FoxUSER file on the server. If a CONFIG.FX file is required, it must be
	available on each workstation.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASE210DOS kbFoxBASESearch
	Version           : MACINTOSH:2.01; MS-DOS:2.1
	
	=============================================================================
	
