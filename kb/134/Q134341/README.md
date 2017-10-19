---
layout: page
title: "Q134341: Err Msg: An Illegal Date Format Has Been Supplied Using NET USER"
permalink: /kb/134/Q134341/
---

## Q134341: Err Msg: An Illegal Date Format Has Been Supplied Using NET USER

	Article: Q134341
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you specify the expiration date for a user name by typing the command "NET
	USER <USERNAME> <PASSWORD> /EXPIRES:MM,DD,YY" (without the quotation
	marks) at the MS-DOS Command Prompt, the following error message appears:
	
	  An illegal date format has been supplied.
	
	WORKAROUND
	==========
	
	To work around this problem, use the forward slash (/) as a separator for the
	date instead of the comma (,).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1, 3.5,
	and 3.51. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt 3.10 helpmsg 3767
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	
