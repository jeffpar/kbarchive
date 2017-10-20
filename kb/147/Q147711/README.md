---
layout: page
title: "Q147711: Scheduled RASDIAL Fails To Connect to Windows NT RAS Server"
permalink: /kb/147/Q147711/
---

## Q147711: Scheduled RASDIAL Fails To Connect to Windows NT RAS Server

{% raw %}

	Article: Q147711
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Scheduler Service and schedule RASDIAL.EXE to
	automatically connect to a Windows NT Remote Access Service (RAS) server, the
	following symptoms occur if you do not specify a user account for the RASDIAL
	command:
	
	- The Windows NT RAS server disconnects the Windows NT RAS client during
	  authentication.
	
	- If you schedule the RASDIAL command to run interactively (with the
	  /INTERACTIVE switch) in the MS-DOS Command Prompt (CMD.EXE), the CMD window
	  stops responding (hangs).
	
	- The system that scheduled the RASDIAL command may become unstable and you may
	  not be able to start new applications.
	
	CAUSE
	=====
	
	When you do not specify a user account in RASDIAL, RASDIAL uses the current user
	name and password. By default, the Scheduler service logs on with the System
	account. Therefore, if you do not change the "Log On As" account for the
	Scheduler service and you do not specify a user name and password on the RASDIAL
	command line, the scheduled RASDIAL command uses the System account when it
	attempts to connect to the Windows NT RAS server. If the System account is used,
	the symptoms mentioned above occurs.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Enter a user name and password as parameters on the RASDIAL command line in
	  the following format:
	
	  RASDIAL <Entry Name> <User Name> <Password>
	
	  The user name you specify must have RAS dial-in permission on the RAS server.
	
	  -or-
	
	- Change the "Log On As" account for the Scheduler service to an account other
	  than the System account. The account that you select must have RAS dial-in
	  permission on the Windows NT RAS server.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
