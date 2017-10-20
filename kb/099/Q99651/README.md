---
layout: page
title: "Q99651: Err Msg: DBLSPACE.BIN Cannot Be Loaded from Your CONFIG.SYS..."
permalink: /kb/099/Q99651/
---

## Q99651: Err Msg: DBLSPACE.BIN Cannot Be Loaded from Your CONFIG.SYS...

{% raw %}

	Article: Q99651
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you place a DEVICE=C:\DBLSPACE.BIN statement in your CONFIG.SYS file, you
	receive the following error message:
	
	  DBLSPACE.BIN cannot be loaded from your CONFIG.SYS file
	
	RESOLUTION
	==========
	
	Remove the DEVICE= statement.
	
	You do not need to place a DEVICE statement for DBLSPACE.BIN in your CONFIG.SYS
	file; DBLSPACE.BIN loads automatically if MS-DOS finds a valid compressed volume
	file (CVF) and a DBLSPACE.INI file.
	
	
	Additional query words: 6.00 double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
