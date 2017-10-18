---
layout: page
title: "Q253528: Using the &#36;Search() Function in a Management Agent of MMS"
permalink: kb/253/Q253528/
---

## Q253528: Using the &#36;Search() Function in a Management Agent of MMS

	Article: Q253528
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool MMS
	Last Modified: 30-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Prior to Microsoft Metadirectory Services 2.1 when the metascript $Search()
	function performed a search and found zero or multiple matches, it would return
	a null value. This mechanism was unsatisfactory in situations where you needed
	to determine the uniqueness of an entry based on a search criterion.
	
	CAUSE
	=====
	
	The $search() function would return a NULL value if more than one entry was
	located by the search. A new argument, returnArbitraryResponse, was added to
	signal the fact that more than one entry was located. This now provides a means
	to determine the uniqueness of entries matching a particular search criterion.
	
	RESOLUTION
	==========
	
	To resolve this issue, this $search() functionality was modified in MMS 2.1.
	Upgrade to Microsoft Metadirectory Services 2.1 to receive this modification.
	
	MORE INFORMATION
	================
	
	The $search() function has been modified. The new syntax to this function is:
	
	$search(whatToSearch, scope, base, returnArbitraryResponse)
	
	Where returnArbitraryResponse is optional and has a default value of NULL for
	backward compatibility. If returnArbitraryResponse is set to "arbitrary", the
	$search() function returns an arbitrary set of search results when multiple
	responses are found; it will no longer return a NULL. Management Agent
	developers can then use this argument to signal that more than one match was
	found, and that the entry being searched for is not unique.
	
	No changes are required for existing templates if you do not require this
	functionality.
	
	Additional query words: Importt, Management Agents, Agent Functions, MMS
	
	======================================================================
	Keywords          : kbtool MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
