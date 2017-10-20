---
layout: page
title: "Q73450: SETVER.EXE Immunized with Central Point Anti-Virus Causes Hang"
permalink: /kb/073/Q73450/
---

## Q73450: SETVER.EXE Immunized with Central Point Anti-Virus Causes Hang

{% raw %}

	Article: Q73450
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
	
	Using the Central Point Anti-Virus (CPAV) software immunization program on
	SETVER.EXE causes the computer to hang when SETVER is loaded into memory. If you
	encounter this problem, you should boot from floppy disks and remove the
	immunization from SETVER.EXE.
	
	MORE INFORMATION
	================
	
	CPAV executable files dated 3/28/91 or earlier should be executed using the
	LOADFIX command. To execute a file using LOADFIX, enter the following command:
	
	  " loadfix [drive:][path]filename[program-parameters] " (without the quotation
	  marks)
	
	The product included here, Central Point Anti-Virus, is manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS Getting Started," version 5.0, page 41
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
