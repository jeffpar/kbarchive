---
layout: page
title: "Q112897: PC Adm: Import Does Not Support the -L and -N Options Together"
permalink: /kb/112/Q112897/
---

## Q112897: PC Adm: Import Does Not Support the -L and -N Options Together

	Article: Q112897
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail for PC Networks IMPORT.EXE program includes the following
	parameters:
	
	  Parameter   Description
	  -----------------------------------------------------------------------
	
	  -L          Allows you to specify a log file that contains all the
	              Import utility error messages for failed address
	              transactions.
	
	  -N          Suppresses direct video output and writes the screen output
	              to the console device as STDOUT (standard output).
	
	When you use the IMPORT.EXE program with the -N option, the -L option does not
	log any errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
