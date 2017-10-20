---
layout: page
title: "Q75633: How to Delete PCTRACKR.DEL File"
permalink: /kb/075/Q75633/
---

## Q75633: How to Delete PCTRACKR.DEL File

{% raw %}

	Article: Q75633
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you specify the /T switch, Mirror creates a system file called PCTRACKR.DEL
	that is updated every time a file is deleted. When Mirror is resident in memory
	and you delete the file PCTRACKR.DEL, Mirror records the deletion by recreating
	the file PCTRACKR.DEL.
	
	MORE INFORMATION
	================
	
	To delete PCTRACKR.DEL, do the following:
	
	1. Change the file attributes with the following command:
	
	  " attrib -s -h -r pctrackr.del " (without the quotation marks)
	
	  When the above command is executed, the hidden, system, and read only file
	  attributes are removed.
	
	2. To terminate Mirror and remove it from memory, type the following at the DOS
	  prompt:
	
	  " mirror /u " (without the quotation marks)
	
	  After you have executed the above command, you can use the DELETE command to
	  delete the PCTRACKR.DEL file.
	
	For more information, query on the following words:
	
	  " MIRROR and FORMAT and UTILITIES " (without the quotation marks)
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
