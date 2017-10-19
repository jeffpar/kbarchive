---
layout: page
title: "Q139628: Running Batch File Through PIF Returns Different Results"
permalink: /kb/139/Q139628/
---

## Q139628: Running Batch File Through PIF Returns Different Results

	Article: Q139628
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a batch file through a program information file (PIF), and run the
	batch file from File Manager or the MS-DOS Command Prompt (CMD.EXE), different
	results appear.
	
	For example, a batch file contains the following lines:
	
	  If not exist C:\test echo 1
	  pause
	
	If you run the batch file from File Manager or CMD.EXE and the TEST directory
	does not exist, nothing is echoed. If the directory exists, 1 is echoed. If you
	create and run a PIF for the batch file, and whether or not the TEST directory
	exists, 1 is echoed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.51
	
	=============================================================================
	
