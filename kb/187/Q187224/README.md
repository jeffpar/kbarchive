---
layout: page
title: "Q187224: Country/Region Hong Kong Is Misplaced"
permalink: /kb/187/Q187224/
---

## Q187224: Country/Region Hong Kong Is Misplaced

{% raw %}

	Article: Q187224
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a SSL certificate request file using Microsoft Internet
	Information Server (IIS) 4.0 Key Manager (after filling out the Key Name,
	Password, Organization, Organization Unit, and Common Name), if you type "H" for
	"Hong Kong" inside the Country drop-down list box, you cannot find "Hong Kong."
	
	CAUSE
	=====
	
	"Hong Kong" is being listed as "Kong Hong."
	
	WORKAROUND
	==========
	
	Selecting "Kong Hong" will correctly display the abbreviation "HK" (without the
	quotation marks). You can also manually type in "HK" (without the quotation
	marks) to work around this problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
