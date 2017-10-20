---
layout: page
title: "Q148957: NTBACKUP Fails With Application Error During Verify Process"
permalink: /kb/148/Q148957/
---

## Q148957: NTBACKUP Fails With Application Error During Verify Process

{% raw %}

	Article: Q148957
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A computer running Windows NT NTBACKUP.EXE may intermittently fail during the
	Verify Process, displaying the following error:
	
	  Verify Status: NTBACKUP.EXE Application Error
	
	  Instruction at 017A1B8A
	  Memory location 00131000
	  The Memory could not be read.
	
	NOTE: Your instruction and memory location may differ from those in the example.
	
	CAUSE
	=====
	
	The error occurs when the NTBACKUP verify process tries to verify a file that
	has increased in size. The backup first occurs whenever an additional
	streams-based files system (for example,Services for Macintosh) is installed.
	
	
	WORKAROUND
	==========
	
	Make sure that all files are closed and are not modified during the backup
	process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
