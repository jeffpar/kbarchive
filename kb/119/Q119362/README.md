---
layout: page
title: "Q119362: PC Adm: Remote User Init-Disk Hangs"
permalink: kb/119/Q119362/
---

## Q119362: PC Adm: Remote User Init-Disk Hangs

	Article: Q119362
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While creating a remote user's data disk using the Mail Administrator program
	(ADMIN.EXE) for versions 3.0 and 3.2 of Microsoft Mail for PC Networks, the
	process may hang during the Init-Disk stage.
	
	CAUSE
	=====
	
	One possible cause of this problem is a corrupt MODEM.GLB file. The MODEM.GLB
	file is used by the Mail Administrator program to provide information for the
	creation of the data disk.
	
	RESOLUTION
	==========
	
	To resolve this problem, rename the current MODEM.GLB file located in the GLB
	subdirectory of the postoffice database to MODEM.BAK. Then, within the Mail
	Administrator program, perform a Remote, Regenerate process. This will re-create
	a new MODEM.GLB file. Performing a Remote, Init-Disk should now work without
	hanging the process.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
