---
layout: page
title: "Q153332: ECHO Command in a Batch File Does Not Echo /Q"
permalink: /kb/153/Q153332/
---

## Q153332: ECHO Command in a Batch File Does Not Echo /Q

	Article: Q153332
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the ECHO command is used within a batch file, the following problem occurs.
	In this example, test.bat is a batch file that contains the following line:
	
	  echo %1
	
	If you run:
	
	  TEST.BAT /AAA/Q/BBB
	
	what is displayed is:
	
	   /aaabbb
	
	In other words, /Q is stripped from the string. The problem occurs even when the
	argument for the batch file is within quotation marks.
	
	CAUSE
	=====
	
	/Q is misinterpreted as "quiet mode" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
