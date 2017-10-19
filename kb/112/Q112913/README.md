---
layout: page
title: "Q112913: PC Adm: Five Tildes Required Per Line in ADMIN.TPL File"
permalink: /kb/112/Q112913/
---

## Q112913: PC Adm: Five Tildes Required Per Line in ADMIN.TPL File

	Article: Q112913
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1x and 3.0 of Microsoft Mail for PC Networks requires five tildes (~)
	to be used per line in the ADMIN.TPL file. This is necessary even if default
	values are used for any of the four entries.
	
	The proper format for the ADMIN.TPL file is:
	
	  Field_Prompt:~Entry1~Entry2~Entry3~Entry4~
	
	If any of the tildes are missing, you will receive the following error when you
	try to create a new user in the Mail Administrator program (ADMIN.EXE):
	
	  Notice 31
	  Error loading template.
	  Press ENTER to continue
	
	Furthermore, no ADMIN.TPL template information will be visible when you modify an
	existing account in the Mail Administrator program.
	
	WORKAROUND
	==========
	
	Check the ADMIN.TPL file and ensure that it follows the proper format shown
	above.
	
	
	Additional query words: 2.10x 3.00 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0
	
	=============================================================================
	
