---
layout: page
title: "Q131470: PRINT.EXE Command Fails on Eleventh Try From Batch File"
permalink: /kb/131/Q131470/
---

## Q131470: PRINT.EXE Command Fails on Eleventh Try From Batch File

{% raw %}

	Article: Q131470
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a batch job with more than ten PRINT commands, the following error
	message appears the eleventh time Windows NT attempts to print:
	
	  Unable to initialize device lpt1
	
	Only ten jobs are queued to print.
	
	The repeated command in the batch file is:
	
	  PRINT /D:LPT1 C:\FILENAME.TXT
	
	If you connect to a shared printer, this problem does not occur.
	
	WORKAROUND
	==========
	
	Select "Share this printer on the network" in the Create Printer or Printer
	Properties dialog box for your printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt print manager
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
