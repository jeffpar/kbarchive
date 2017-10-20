---
layout: page
title: "Q311636: VDIR that Points to Non-English Dir on English OS Does Not Work"
permalink: /kb/311/Q311636/
---

## Q311636: VDIR that Points to Non-English Dir on English OS Does Not Work

{% raw %}

	Article: Q311636
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to locate a Web page, you may receive the following error message:
	
	  HTTP 404 - File not found
	  Internet Information Services
	
	CAUSE
	=====
	
	A physical directory has been created with non-Latin alphabet characters. A
	virtual directory that points to the physical directory that was created in
	non-Latin characters has been created with English characters. The IIS metabase
	does not recognize non-Latin characters in physical paths.
	
	NOTE: The virtual directory appears with a stop error in the Microsoft Management
	Console (MMC).
	
	WORKAROUND
	==========
	
	Do not create virtual directories that are mapped to physical directories that
	are created with non-Latin alphabet characters.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
