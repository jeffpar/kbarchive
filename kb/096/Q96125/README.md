---
layout: page
title: "Q96125: 3COM: Conversion to Mail 3.0 Windows Client Fails"
permalink: /kb/096/Q96125/
---

## Q96125: 3COM: Conversion to Mail 3.0 Windows Client Fails

{% raw %}

	Article: Q96125
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use the Conversion Utility from 3Com 3+Mail for Microsoft Mail for
	PC Networks version 3.0 with Microsoft Mail for Windows version 3.0 does not
	work properly. Messages are missing and folders are incomplete.
	
	CAUSE
	=====
	
	The Conversion Utility was written for version 2.1 of the Microsoft Mail
	database architecture. It does not place the folders into the Windows client
	Mail Message File (.MMF).
	
	RESOLUTION
	==========
	
	Use the MS-DOS client to determine if the folders have been converted. The
	Conversion Utility can convert the folders correctly but has not placed the
	folders into the Windows client .MMF file.
	
	If this is the case, use the Windows-based CONVERT.EXE program, provided with
	Microsoft Mail version 3.0, to convert the MS-DOS client folders into Windows
	folders.
	
	After you run CONVERT.EXE, if the folders do not appear in the Windows client,
	perform the following five steps to regenerate the folders in the MS-DOS
	client:
	
	1. Archive the folders
	
	2. Delete the folders
	
	3. Recreate the folders
	
	4. Restore the archive
	
	5. Use the CONVERT.EXE program to move the folders into the .MMF file
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
