---
layout: page
title: "Q129284: Automated Setup Does Not Install BDC"
permalink: /kb/129/Q129284/
---

## Q129284: Automated Setup Does Not Install BDC

{% raw %}

	Article: Q129284
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computer Profile Setup (CPS) and Unattended Setup fail to install a backup
	domain controller (BDC). Setup configures the machine as a primary domain
	controller (PDC) rather than as a BDC.
	
	CAUSE
	=====
	
	NTLANMAN.INF performs an incomplete comparison of the variable STF_AUTOPRIMARY.
	
	    ifstr(i) $(!STF_AUTOPRIMARY) != ""
	        set NCPA_CMD_LINE = $(NCPA_CMD_LINE)" /t STF_AUTOPRIMARY = YES"
	        endif
	
	RESOLUTION
	==========
	
	To correct this problem, edit your answer file before using it to install
	Windows NT Server. Change the line that reads:
	
	  !AutoPrimary =    "no"
	
	to
	
	  !AutoPrimary =     ""
	
	If you are running CPS, make the above modification to
	%SYSTEMROOT%\SYSTEM32\DEFAULTS.INF on the Distribution share after running
	UPLODPRF.EXE, but before running WINNTP.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt setupmgr.exe
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
