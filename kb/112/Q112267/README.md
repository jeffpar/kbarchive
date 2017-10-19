---
layout: page
title: "Q112267: PC Win: TO: List Not Sorting Alphabetically"
permalink: /kb/112/Q112267/
---

## Q112267: PC Win: TO: List Not Sorting Alphabetically

	Article: Q112267
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select names to be included on a TO: or CC: list from the Global
	Address List (GAL), Postoffice Address List (POL), or Personal Address Book
	(PAB), all names do not sort alphabetically.
	
	CAUSE
	=====
	
	When you load the address windows and look at the GAL, POL, or PAB, the Windows
	client caches as many names from that list as it can. The names you see
	displayed are within that cache. If you select names from within the cache,
	those names will be inserted into the TO: list alphabetically. However, if any
	of the names you select are "outside" of the cache, those names will be placed
	in the TO: list first, followed by the names in the cache in the order they were
	selected.
	
	This is a design limitation of the Windows client.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
