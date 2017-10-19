---
layout: page
title: "Q105182: Undelete May Not Correctly Update AUTOEXEC.BAT &amp; UNDELETE.INI"
permalink: /kb/105/Q105182/
---

## Q105182: Undelete May Not Correctly Update AUTOEXEC.BAT &amp; UNDELETE.INI

	Article: Q105182
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the Delete Sentry level of protection in Microsoft Undelete for
	Windows, the AUTOEXEC.BAT file may not be correctly updated.
	
	CAUSE
	=====
	
	This problem occurs when the UNDELETE.INI file indicates that Delete Sentry is
	already enabled.
	
	Also, if you select the Standard level, Microsoft Undelete for Windows does not
	remove the UNDELETE /LOAD command from the AUTOEXEC.BAT file.
	
	RESOLUTION
	==========
	
	To work around this problem, manually edit the AUTOEXEC.BAT file with a text
	editor such as MS-DOS Editor and either add or remove the UNDELETE /LOAD or
	UNDELETE /S commands.
	
	For more information on configuring Undelete, query on the following words in the
	Microsoft Knowledge Base:
	
	  ms-dos and undelete.ini
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
