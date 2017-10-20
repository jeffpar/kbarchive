---
layout: page
title: "Q177775: XADM: System Folders Are Not Secured To The Site By Default"
permalink: /kb/177/Q177775/
---

## Q177775: XADM: System Folders Are Not Secured To The Site By Default

{% raw %}

	Article: Q177775
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	System Folders, which include Organization Forms, Offline Address Books, and
	Schedule+ Free/Busy folders are not secured to the site by default.
	
	In Microsoft Exchange Server 5.5, there is a new property, "Limit administrative
	access to home site," on each public folder, which allows the folder to be
	secured to the site. This is not checked for system folders.
	
	CAUSE
	=====
	
	This is by design. Only folders created by users are secured by default.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
