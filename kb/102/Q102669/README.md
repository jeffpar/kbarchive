---
layout: page
title: "Q102669: PC DB: Updating a 2.1 PO to 3.0 Changes GRPMEM.GLB Variable"
permalink: /kb/102/Q102669/
---

## Q102669: PC DB: Updating a 2.1 PO to 3.0 Changes GRPMEM.GLB Variable

{% raw %}

	Article: Q102669
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a version 2.1 Microsoft Mail for PC Networks postoffice (PO) is updated to
	version 3.0, the version 2.1 GRPMEM.GLB "delete status" variable is changed to
	"not deleted". The Boolean logic is also changed at this time (for example, if
	the delete status=0, it will be changed to not deleted=1).
	
	The GRPMEM.GLB file contains each user's mailbag number and points to all of the
	.MEM files for each group the user is a member of.
	
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
