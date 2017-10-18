---
layout: page
title: "Q131389: Net Session Command Does Not Interpret Redirected Input"
permalink: kb/131/Q131389/
---

## Q131389: Net Session Command Does Not Interpret Redirected Input

	Article: Q131389
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a batch file (for example, TEST) that contains a carriage return
	and linefeed character, and you direct this file to the NET SESSION command as
	follows,
	
	  NET SESSION /DELETE <TEST
	
	the command will request a response with the statement,
	
	  Do you want to continue this operation(Y/N) [Y]
	
	but then it will return the error:
	
	  No valid response was provided.
	
	0D 0A (carriage return and linefeed) are valid characters.
	
	WORKAROUND
	==========
	
	To work around this problem, add the /Y parameter to provide the default Yes
	response. For example:
	
	  NET SESSIONS /DELETE /Y
	
	The /Y parameter is not documented at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1, 3.5,
	and 3.51. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10 cr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
