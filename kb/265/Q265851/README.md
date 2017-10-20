---
layout: page
title: "Q265851: XADM: Error C103089F Appears During Object Creation"
permalink: /kb/265/Q265851/
---

## Q265851: XADM: Error C103089F Appears During Object Creation

{% raw %}

	Article: Q265851
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to create a new object in the Exchange Administrator program and
	you receive the following error message:
	
	  The Directory name value is too long.
	  A Distinguished name [DN] could not be generated for this object.
	  Please enter a different value.
	
	  Microsoft Exchange Administrator.
	  Id no. C103089F.
	
	CAUSE
	=====
	
	The maximum length of a directory name is 255 characters (not including the
	/ou=, /cn=, or /o=).
	
	RESOLUTION
	==========
	
	Create the object using less than 255 characters (not including the /ou=, /cn=,
	and so forth).
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
