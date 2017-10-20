---
layout: page
title: "Q146461: Required Rights for Novell when Using Schedule+ 7.0"
permalink: /kb/146/Q146461/
---

## Q146461: Required Rights for Novell when Using Schedule+ 7.0

{% raw %}

	Article: Q146461
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you save or read Schedule+ 7.0 data to and from a Novell 3.x file server,
	the following rights are required on the directory where the files are being
	saved to or read from:
	
	  Read[R]
	  Write[W]
	  Create[C]
	  Erase[E]
	  Modify[M]
	  FileScan[F]
	
	MORE INFORMATION
	================
	
	Without the above rights, various errors will appear when you try to backup,
	restore, archive, open, import or export Schedule+ data to and from the Novell
	server.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q103901 Minimum NetWare Trustee Assignments for Mail Database
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
