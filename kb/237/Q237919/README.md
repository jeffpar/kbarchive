---
layout: page
title: "Q237919: XCLN: Newprof Only Supports Variable Names under Windows NT"
permalink: /kb/237/Q237919/
---

## Q237919: XCLN: Newprof Only Supports Variable Names under Windows NT

	Article: Q237919
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:95,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 2000, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Newprof.exe version 5.5.2505.0 or later doesn't support variable names under
	Microsoft Windows 95 or Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Newprof.exe 5.5.2505.0, which is included with Microsoft Outlook 2000 does use
	variable names when executing a .prf file. Variable names such as %username% are
	only available in a Windows NT environment. In a Windows 95 or Windows 98
	environment, even if the environment variable is manually set using the SET
	command, the variable name is not used in the .prf file.
	
	Additional query words: replaceable parameter 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :; WINDOWS:95,98
	Issue type        : kbinfo
	
	=============================================================================
	
