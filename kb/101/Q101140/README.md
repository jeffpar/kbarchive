---
layout: page
title: "Q101140: PC Adm: Deleted External User Still Shows"
permalink: /kb/101/Q101140/
---

## Q101140: PC Adm: Deleted External User Still Shows

{% raw %}

	Article: Q101140
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an administrator deletes external Mail users from the postoffice address list
	(ADMIN.NME) by selecting Admin, Address, Delete, the user will still show up
	when accessed by choosing Address, Create Network. This is because the Address,
	Create option displays the user list from the <8DIGIT>.USR file for the
	external postoffice.
	
	CAUSE
	=====
	
	When an address is created by selecting Address, Create, the Administrator
	program (ADMIN.EXE) adds the user from the Network list to the Postoffice
	Address List. When the address is deleted by choosing Address, Delete, the
	Administrator program deletes the user from the Postoffice Address List.
	
	This is expected behavior for Admin.
	
	Additional query words: 3.00 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
