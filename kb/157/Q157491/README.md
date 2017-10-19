---
layout: page
title: "Q157491: IIS Key Manager Only Allows 512-Bit Size Key"
permalink: /kb/157/Q157491/
---

## Q157491: IIS Key Manager Only Allows 512-Bit Size Key

	Article: Q157491
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Key Manager in Internet Information Server (IIS) to create a key,
	512 bits is the only size allowed.
	
	CAUSE
	=====
	
	The 1381 build (not golden) of Windows NT Server 4.0 is installed.
	
	RESOLUTION
	==========
	
	Install the golden, or retail, build (1381). of Windows NT Server 4.0.
	
	MORE INFORMATION
	================
	
	To verify the build installed, check the build number shown during boot. If the
	build number is (1381) with no dot, the prerelease build of Windows NT 4.0 is
	installed and needs to be upgraded to the United States/Canada domestic release
	version.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis200
	Version           : 4.0
	
	=============================================================================
	
