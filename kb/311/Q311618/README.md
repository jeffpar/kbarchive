---
layout: page
title: "Q311618: Unknown HTTP Verbs Generate a 405 Error Message Instead of a 501"
permalink: /kb/311/Q311618/
---

## Q311618: Unknown HTTP Verbs Generate a 405 Error Message Instead of a 501

{% raw %}

	Article: Q311618
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you supply a verb that Internet Information Services (IIS) does not recognize
	in an HTTP header, you receive the following error message:
	
	  HTTP 405 - Resource not allowed
	  Internet Information Services
	
	You expect to receive the following error message:
	
	  Error 501 - Not implemented
	  Internet Information Services
	
	CAUSE
	=====
	
	You can use arbitrary verbs with Common Gateway Interface (CGI) scripts or
	Internet Server Application Programming Interface (ISAPI) filters.
	
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
