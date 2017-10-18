---
layout: page
title: "Q104562: PC DB: How to Remove Groups After Running ACCTONME.EXE"
permalink: kb/104/Q104562/
---

## Q104562: PC DB: How to Remove Groups After Running ACCTONME.EXE

	Article: Q104562
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Before you run ACCTONME.EXE (see information below regarding obtaining this
	utility), it is advised that you delete all globally defined groups on your
	versions 2.1, 3.0, and 3.2 of Microsoft Mail for PC Networks. If this is not
	possible, or this step was not done, you will get the error
	
	  Name already defined as a group address
	
	when you try to add a group name that previously existed. The following procedure
	explains how to resolve this problem.
	
	RESOLUTION
	==========
	
	NOTE: The resetting of group files can be automated. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q129500 Automating the Resetting of Group Files using GIMPORT
	
	The following steps assume that your Microsoft Mail for PC Networks database is
	located on the M: drive.
	
	NOTE: After each entry, you must press ENTER to get new "-" prompt.
	
	1. COPY M:\GRP\ADMIN.GRP M:\GRP\ADMIN.BAK
	
	2. DEBUG M:\GRP\ADMIN.GRP
	
	3. At the "-" prompt, type: "rcx" (without the quotation marks)
	
	4. At the ":" prompt, type: "8" (without the quotation marks)
	
	5. At the "-" prompt, type: "f100,107,0" (without the quotation marks)
	
	6. At the "-" prompt, type: "w" (without the quotation marks)
	
	7. At the "-" prompt, type: "q" (without the quotation marks)
	
	8. COPY M:\GRP\ADMINSHD.GRP M:\GRP\ADMINSHD.BAK
	
	9. COPY M:\GRP\ADMIN.GRP M:\GRP\ADMINSHD.GRP
	
	10. COPY M:\GLB\GROUP.GLB M:\GLB\GROUP.BAK
	
	11. DEBUG M:\GLB\GROUP.GLB
	
	12. At the "-" prompt, type: "rcx" (without the quotation marks)
	
	13. At the ":" prompt, type: "4" (without the quotation marks)
	
	14. At the "-" prompt, type: "f100,103,0" (without the quotation marks)
	
	15. At the "-" prompt, type: "w" (without the quotation marks)
	
	16. At the "-" prompt, type: "q" (without the quotation marks)
	
	17. COPY M:\GLB\GRPMEM.GLB M:\GLB\GRPMEM.BAK
	
	18. COPY M:\GLB\GROUP.GLB M:\GLB\GRPMEM.GLB
	
	19. CD MEM
	
	20. REN *.MEM *.BAK
	
	If any problems occur, restore all of the .BAK file and call Product Support
	Services.
	
	MORE INFORMATION
	================
	
	ACCTONME.EXE is available as part of the Database Maintenance Utilities
	document. This document describes operational details for utilities used to
	repair and maintain the database for Microsoft Mail for PC Networks. The
	procedures described apply to versions 2.1 and later of Microsoft Mail except
	where noted.
	
	To obtain the document containing the Database Maintenance Utilities, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
