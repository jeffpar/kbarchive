---
layout: page
title: "Q175694: MDG: Admin Notice 55"
permalink: /kb/175/Q175694/
---

## Q175694: MDG: Admin Notice 55

{% raw %}

	Article: Q175694
	Product(s): Microsoft Mail For PC Networks
	Version(s): winnt:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Server, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to add an external address to the postoffice address list using
	the Address - Create command in the Microsoft Mail Administrator program, the
	following error occurs:
	
	  Notice 55 : Error creating user address in Postoffice Address List
	
	CAUSE
	=====
	
	The Netpo.glb file may be corrupted. To determine whether the file is corrupted,
	get the exact file size, subtract 4, and then divide by 43. There should be no
	remainder. Any remainder is a warning of file corruption.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	WARNING: Make a backup copy of this file before attempting to repair.
	
	- The Netpo.glb file can be reset using the Netpofix.com tool.
	
	- Install a dummy postoffice and copy the 4-byte file to the existing
	  postoffice.
	
	- A manual reset can be performed with the assistance of Microsoft Technical
	  Support.
	
	Potential Impact: If any local admin-created groups include external user
	addresses or the local postoffice address list contains external users, the
	postoffice address list and groups will be affected and need to be rebuilt as
	well. For additional information on rebuilding the postoffice address list,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q125252 PC Adm: Rebuilding the Postoffice Address List
	
	MORE INFORMATION
	================
	
	The Netpo.glb file is used to keep a copy of all external network user addresses
	that have been added to the local postoffice list. The Administrator program
	writes to this file when the Address, Create function is used (from the
	Administrator program's Address menu, choose Create).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailServ320 kbMailServ350
	Version           : winnt:3.2,3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
