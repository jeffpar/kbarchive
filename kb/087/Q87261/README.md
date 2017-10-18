---
layout: page
title: "Q87261: Mac Srv: Connection Times Lost When Site Name Changes"
permalink: kb/087/Q87261/
---

## Q87261: Mac Srv: Connection Times Lost When Site Name Changes

	Article: Q87261
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Server Connection program for version 3.1 of Microsoft Mail for AppleTalk
	Networks stores information about the connection times in a resource with the
	site name. If the site name changes, the Server Connection does not associate
	the new site name with the old site, and the connection times and preferences
	must be re-entered.
	
	MORE INFORMATION
	================
	
	Every connection document in the MS Mail Remote Sites directory has a
	corresponding entry in the RCON resource. When a site is renamed, and the
	Connection Document (CD) is renamed, a new entry for the newly named CD will be
	created in the RCON.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
