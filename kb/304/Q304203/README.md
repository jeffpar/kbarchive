---
layout: page
title: "Q304203: DAV WebDAV PROPPATCH Verb Returns 405 Method Not Allowed"
permalink: /kb/304/Q304203/
---

## Q304203: DAV WebDAV PROPPATCH Verb Returns 405 Method Not Allowed

{% raw %}

	Article: Q304203
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the World Wide Web Distributed Authoring and Versioning (WebDAV)
	PROPPATCH verb, the following error occurs:
	
	  HTTP 405 - Resource not allowed
	  Internet Information Services
	
	RESOLUTION
	==========
	
	Use an NTFS partition to allow the WebDAV PROPPATCH verb to manipulate Web
	properties.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The WebDAV protocol defines facilities for adding properties to Web resources.
	These properties consist of name or value pairs that are interchanged by using
	XML. The protocol includes the PROPFIND method for accessing properties and the
	PROPPATCH method for updating and removing properties.
	
	Web properties are used in distributed authoring environments to provide for
	efficient discovery and management of resources. For example, a subject property
	can allow the indexing of all resources by their subject, and an author property
	can allow for the discovery of which authors have written which documents.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
