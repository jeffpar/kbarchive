---
layout: page
title: "Q101447: Mac Srv: Mail Data File Compression Is Lowest Priority"
permalink: /kb/101/Q101447/
---

## Q101447: Mac Srv: Mail Data File Compression Is Lowest Priority

	Article: Q101447
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks, the server's
	compression of the data file is the very lowest priority task the server can
	perform.
	
	At its most active, compression accesses the disk once every few seconds. Data
	file compression does not cause Give Ups on the workstation. When workstations
	are making requests of the server, data file compression is suppressed, allowing
	the server to operate as effectively as possible.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
