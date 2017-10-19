---
layout: page
title: "Q120755: WINS Manager Sorts Database and Static Mappings Incorrectly"
permalink: /kb/120/Q120755/
---

## Q120755: WINS Manager Sorts Database and Static Mappings Incorrectly

	Article: Q120755
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbother kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In WINS Manager, in the Static Mappings and Show Database lists, the entries are
	not correctly alphabetized.
	
	CAUSE
	=====
	
	This problem has two causes:
	
	1. NetBIOS name entries with extended characters do not sort correctly.
	
	2. NetBIOS names of type 1B are sorted near the top of the list.
	
	WORKAROUND
	==========
	
	If the NetBIOS name entries contain extended characters, there is no workaround.
	However, if you are only sorting NetBIOS names of type 1B, you can select a
	different sort order and choose Sort by Computername again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.50. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
