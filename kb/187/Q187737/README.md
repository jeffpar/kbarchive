---
layout: page
title: "Q187737: PRB: Meta Tag Properties Not Retrieved from a Query"
permalink: /kb/187/Q187737/
---

## Q187737: PRB: Meta Tag Properties Not Retrieved from a Query

{% raw %}

	Article: Q187737
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using meta tags as custom properties, you may not be able to retrieve the
	value even though you have cached the property and added it to the columns to be
	retrieved. You can search for the properties and return results, but the value
	of the property is not returned for display.
	
	CAUSE
	=====
	
	This may be the result of caching meta properties as a non-string data type.
	Index Server 2.0 and and Windows 2000 Indexing Service only support meta tags as
	string data.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
