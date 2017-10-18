---
layout: page
title: "Q170870: Err Msg: Query Is Too Expensive"
permalink: kb/170/Q170870/
---

## Q170870: Err Msg: Query Is Too Expensive

	Article: Q170870
	Product(s): Internet Information Server
	Version(s): winnt:1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue a query to the Index Server, your browser will return the
	following error message:
	
	  Query is too expensive.
	
	CAUSE
	=====
	
	If the content index is out of date, and you are executing queries that must be
	enumerated, you will get the above error message.
	
	WORKAROUND
	==========
	
	Wait until the index is up to date.
	
	Place CiForceUseCi=FALSE in the .idq file for the query. The default value is
	TRUE.
	
	You may also need to increase the following values:
	
	hklm\system\currentcontrolset\control\contentindex\MaxQueryExecutionTime
	
	hklm\system\currentcontrolset\control\contentindex\MaxRestrictionNodes
	
	MORE INFORMATION
	================
	
	NOTE: If the query is being executed through ADO and IXSSO, changing
	MaxQueryExecutionTime haS no effect, because ADO sets a time-out of 30 seconds
	that can not be changed.
	
	
	Additional query words: expansive
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110 kbIdxServ200
	Version           : winnt:1.1,2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
