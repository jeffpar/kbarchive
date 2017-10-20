---
layout: page
title: "Q132743: PC Adm: Only Local-Admin Menu Is Available in ADMIN.EXE"
permalink: /kb/132/Q132743/
---

## Q132743: PC Adm: Only Local-Admin Menu Is Available in ADMIN.EXE

{% raw %}

	Article: Q132743
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run version 3.x of Microsoft Mail for PC Networks Administrator's
	program (ADMIN.EXE), the Local-Admin menu may only be available.
	
	CAUSE
	=====
	
	This occurs if you attempt to run the ADMIN.EXE program against a postoffice
	created with Microsoft Windows for Workgroups version 3.1x.
	
	These postoffices do not allow External mail transfer, Directory Synchronization
	(Dir-Sync), or many other functions found in a full version 3.2x or 3.5
	postoffice. Because these features are not available, the External-Admin and
	other menus are not necessary.
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
