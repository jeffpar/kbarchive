---
layout: page
title: "Q214841: Err Msg: The Parameter Is Incorrect"
permalink: /kb/214/Q214841/
---

## Q214841: Err Msg: The Parameter Is Incorrect

{% raw %}

	Article: Q214841
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change passwords in the Internet Service Manager (enter username, old
	password, new password, and conformation), the following error message occurs:
	
	  The parameter is incorrect
	
	RESOLUTION
	==========
	
	The username must have a domain name or computer name (if the account is local
	to the computer) prepended to it for the password change form to work correctly.
	For example, if the domain name or computer name is "Marketing" and the username
	is "Joe," then the correct username should be "Marketing\Joe" (without the
	quotation marks).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
