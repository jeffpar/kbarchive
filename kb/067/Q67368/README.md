---
layout: page
title: "Q67368: Err Msg When Deleting File: Access Denied"
permalink: /kb/067/Q67368/
---

## Q67368: Err Msg When Deleting File: Access Denied

{% raw %}

	Article: Q67368
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a file, you receive the error message:
	
	  Access denied
	
	CAUSE
	=====
	
	This most commonly occurs when the file has the Read-Only attribute set. The
	Read-Only attribute prevents a file from being deleted or modified.
	
	
	WORKAROUND
	==========
	
	If the file has the Read-Only file attribute set, use the ATTRIB command to
	remove that attribute and then delete or modify the file. For example, to remove
	the Read-Only file attribute from MYFILE.DOC, type "attrib -r myfile.doc"
	(without the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	MORE INFORMATION
	================
	
	For more information about the ATTRIB command, refer to your MS-DOS
	documentation.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
