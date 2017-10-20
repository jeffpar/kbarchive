---
layout: page
title: "Q132856: PC DirSync: Notice 37 When Exporting Postoffice Address List"
permalink: /kb/132/Q132856/
---

## Q132856: PC DirSync: Notice 37 When Exporting Postoffice Address List

{% raw %}

	Article: Q132856
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to export your Postoffice List to externally defined postoffices
	within the Administrator's program (ADMIN.EXE), you may receive the following
	message:
	
	  Notice 37
	  Disk directory full or error opening file
	
	CAUSE
	=====
	
	This error will occur if the permissions for the root directory of the
	postoffice are set to Read Only.
	
	RESOLUTION
	==========
	
	Set the permission back to Full Access.
	
	Additional query words: 3.20 3.20a 3.50 pol
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
