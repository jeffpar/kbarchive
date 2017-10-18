---
layout: page
title: "Q227702: Queries Work Incorrectly with Mixed-Language Documents"
permalink: kb/227/Q227702/
---

## Q227702: Queries Work Incorrectly with Mixed-Language Documents

	Article: Q227702
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text (.txt) documents containing mixed languages may be returned incorrectly by
	queries against Index Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000.
	
	MORE INFORMATION
	================
	
	When you create a text document (.txt file) on a system, that document should be
	indexed as if it is in the same language as the default system language, and not
	based on the language of the content of the document. This is because a .txt
	document contains no method for specifying what language it contains, so the
	program assigns the local system default language.
	
	For example, .txt documents created on a system that has the default system
	locale set to Russian should be indexed as Russian documents by the Index and
	should only be returned as the result of searches run against the Index engine
	by a Russian client. Instead, the document is returned regardless of the client
	settings if the user types in a word that actually exists in the document.
	
	Steps to Reproduce this Behavior
	--------------------------------
	
	NOTE: This problem may occur with any language not supported by Index Server.
	This example uses Russian.
	
	To reproduce this problem, both user locale and system locale should be set to
	Russian.
	
	1. Create a text file that includes some English words and then save it to a
	  folder that will be included in the system catalog.
	
	2. Wait for the text file to be indexed.
	
	3. Using an ASP query from the Index Server Microsoft Management Console (MMC)
	  snap-in, search for a word that you included in the text file.
	
	  Result: The text file you created is found.
	
	Index Server does not recognize that the language of the text file is not the
	same as system default language. It should not return the document as a result
	of the search.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
