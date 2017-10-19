---
layout: page
title: "Q138448: Certain Extended ASCII Characters are Not Valid in Zone Names"
permalink: /kb/138/Q138448/
---

## Q138448: Certain Extended ASCII Characters are Not Valid in Zone Names

	Article: Q138448
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a Macintosh zone name under Windows NT for Macintosh clients,
	the following error message appears:
	
	  You have entered an invalid zone name
	
	CAUSE
	=====
	
	You have created a zone name containing one or more characters that are excluded
	from use in zone names.
	
	RESOLUTION
	==========
	
	To correct this problem, create a Macintosh zone name that does not contain any
	of the following excluded characters:
	
	  @
	  *
	  .
	  :
	  "
	  &
	
	
	Additional query words: prodnt Mac sfm
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
