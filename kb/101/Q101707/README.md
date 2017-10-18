---
layout: page
title: "Q101707: Machine Not Found When Adding to Directory Permissions"
permalink: kb/101/Q101707/
---

## Q101707: Machine Not Found When Adding to Directory Permissions

	Article: Q101707
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	In the Add Users And Groups dialog box in File Manager, the following
	problem may occur:
	
	You try to add a default group (Everyone for example) from a domain
	that uses a different language to a set of directory permissions. For
	example, the other machine has a German installation of Windows NT.
	You receive an error telling you that the other machine was not found.
	
	To avoid this problem, select the other computer you want to add from
	the List Names From list box, or enter it in the Add Names field in
	the other language.
	
	NOTE: This problem occurs only with default or "well-known" groups and
	occur only when trying to add a well-known group from a domain in a
	different language than the one where the resource (directory)
	resides.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
