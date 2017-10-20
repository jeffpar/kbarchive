---
layout: page
title: "Q119919: COPY Command Does Not Execute from the AT Command"
permalink: /kb/119/Q119919/
---

## Q119919: COPY Command Does Not Execute from the AT Command

{% raw %}

	Article: Q119919
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Schedule service and then enter an AT command to instruct the
	COPY command to run at a specified time, the COPY command does not run at the
	specified time and the following message appears in Event Log:
	
	  Event ID: 7901
	  Source: Schedule
	  Type: Error
	  Category: none
	
	  The system cannot find the file specified.
	
	NOTE: These symptoms occur when you attempt to use any internal command with an
	AT command.
	
	WORKAROUND
	==========
	
	To run any internal command from the AT command use "CMD /C" syntax. For
	example:
	
	  AT 10:00 CMD /C COPY C:\*.* C:\TEMP
	
	Under Windows NT version 3.1, the "CMD / C" switch was not necessary. However,
	this functionality has changed for Windows NT version 3.5 to correct problems
	with passing arguments to commands.
	
	NOTE: XCOPY, CHKDSK, do not require the "CMD /C" command because they are not
	internal commands.
	
	Additional query words: prodnt DOS scheduler err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
