---
layout: page
title: "Q172018: Index Server Will Not Filter Microsoft Word Headers or Footers"
permalink: kb/172/Q172018/
---

## Q172018: Index Server Will Not Filter Microsoft Word Headers or Footers

	Article: Q172018
	Product(s): Internet Information Server
	Version(s): WINNT: 1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you query on data that resides in a header or footer of a Microsoft Word
	document, you will not see that document in the result set.
	
	CAUSE
	=====
	
	The Word filter for Index Server does not filter header or footer data.
	
	RESOLUTION
	==========
	
	Upgrade to Index Server version 2.0 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Index Server version
	1.1. This problem has been corrected in Index Server versions 2.0 and later.
	
	Additional query words: prodindx1.1
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WINNT: 1.1
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
