---
layout: page
title: "Q259269: PC NTMMTA: Error Message: Setup Has Encountered a Problem"
permalink: kb/259/Q259269/
---

## Q259269: PC NTMMTA: Error Message: Setup Has Encountered a Problem

	Article: Q259269
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Mail Multitasking MTA for Windows NT
	(NTMMTA) on a computer that is running Microsoft Windows NT Server version 4.0
	with the latest version of the Setup.exe file, you may receive the following
	error message:
	
	  Setup has encountered a problem.
	  Please report File='COMMON\INF01.C',Line=253 to Microsoft Product Support
	  Services.
	
	CAUSE
	=====
	
	This issue can occur if you start Setup by double-clicking the Setup.exe file.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Open a command prompt and change to the drive or folder that contains the
	  NTMMTA setup disk.
	
	2. At the command prompt, type the following:
	
	  "setup" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	For additional informations, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q180298 Setup of Windows NT MMTA on Windows NT 4.0 Does Not Complete
	
	  Q139498 PC NTMMTA: Err Msg: Setup Has Encountered a Problem...
	
	  Q135733 PC NTMMTA: Errors Installing on Unsupported Platforms
	
	
	Additional query words: mta nt4 floppy
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
