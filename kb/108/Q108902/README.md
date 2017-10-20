---
layout: page
title: "Q108902: Err Msg: Invalid Codepage....in PORTUAS"
permalink: /kb/108/Q108902/
---

## Q108902: Err Msg: Invalid Codepage....in PORTUAS

{% raw %}

	Article: Q108902
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run PORTUAS from the WNTUPMGR in the LAN Manager to Windows NT Advanced
	Server upgrade package, the following error message appears:
	
	  Invalid Codepage
	
	CAUSE
	=====
	
	PORTUAS doesn't overwrite a log file if one already exists. If PORTUAS is re-run
	with the same log file name specified, the existing log file is not overwritten.
	In addition, the WNTUPMGR does not execute the PORTUAS if it detects an existing
	log file of the name specified in the PORTUAS command.
	
	When you use the custom upgrade, the default syntax for the PORTUAS command is
	invalid: (PORTUAS -v -f restacc.bkp /log:portuas.log /codepage:###). Edit the
	command line before running PORTUAS; if you don't edit the command and run the
	utilities with the invalid syntax, a PORTUAS.LOG file is created. Because
	PORTUAS won't overwrite or delete the log file, and because WNTUPMGR won't run
	PORTUAS if a log file exists, you won't be able to run the command until you
	delete the file or change the filename.
	
	WORKAROUND
	==========
	
	To work around this problem do one of the following:
	
	- Delete the PORTUAS.LOG file referenced in the command.
	
	  -or-
	
	- Change the command to use a different log file name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run WNTUPMGR and select Custom Upgrade.
	
	2. Choose to run only Restore User Accounts.
	
	3. Start the utilities.
	
	The process fails on PORTUAS utility. The WNTUPMGR.LOG file says to check the
	PORTUAS.LOG file for more information. The PORTUAS.LOG reports the cause of the
	failure is an "Invalid Codepage."
	
	If you reconfigure the PORTUAS command in WNTUPMGR and change the default command
	to include a valid codepage using the correct syntax, the same error message
	occurs. WNTUPMGR reports the same error message, and the PORTUAS.LOG file says
	"Invalid Codepage." Running the PORTUAS command at the command prompt with the
	same syntax allows the command to complete successfully.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
