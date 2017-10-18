---
layout: page
title: "Q176964: Rasusers.exe Only Searches About 5000 Users"
permalink: kb/176/Q176964/
---

## Q176964: Rasusers.exe Only Searches About 5000 Users

	Article: Q176964
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Server version 4.0 Resource Kit utility Rasusers.exe reports an
	incomplete list of users who have Dialin permissions when it is run against a
	large Security Accounts Manager (SAM) database. Rasusers.exe searches through
	approximately 5000 users and then stops searching.
	
	NOTE: The search is alphabetical and is accurate up to the point where it stops.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	RESOLUTION
	----------
	
	This issue has been resolved in the latest release of the Windows NT Server
	version 4.0 Resource Kit.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
