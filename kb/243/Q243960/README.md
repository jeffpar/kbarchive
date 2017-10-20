---
layout: page
title: "Q243960: Site Operators Receive Error When Creating New Virtual Directory"
permalink: /kb/243/Q243960/
---

## Q243960: Site Operators Receive Error When Creating New Virtual Directory

{% raw %}

	Article: Q243960
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an operator of a Web site attempts to create a new virtual directory with
	the HTML Administrator (HTMLA), the following error message occurs:
	
	  Microsoft Internet Explorer
	  An error occurred 70(46)
	
	The operator cannot see the new virtual directory using the HTMLA.
	
	WORKAROUND
	==========
	
	By design, a user assigned Website Operator privileges from the IIS management
	console, website properties, operators tab cannot add a virtual directory.
	Creation of virtual directories require Local Administrators group permissions.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Internet Information
	Services version 5.0.
	
	REFERENCES
	==========
	
	For additional information about what a Website operator can and cannot do,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q298969 Web Site Operator Capabilities and Limitations
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
