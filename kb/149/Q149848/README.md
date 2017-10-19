---
layout: page
title: "Q149848: How to Use the SQLMORERESULTS() Function"
permalink: /kb/149/Q149848/
---

## Q149848: How to Use the SQLMORERESULTS() Function

	Article: Q149848
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the correct use of the SQLMORERESULTS() function to
	clarify the description in the Visual FoxPro for Windows documentation.
	
	MORE INFORMATION
	================
	
	When you read about the SQLMORERESULTS() function in the Language Reference, you
	might expect that the function is used to return records sequentially from a
	single query. This is not the case.
	
	The purpose of SQLMORERESULTS() is to return results of multiple queries either
	synchronously or asynchronously, batch mode or non-batch mode. These strategies
	are for processing multiple result sets from multiple queries. Here are the uses
	of these strategies:
	
	- Synchronous Batch Mode - if you want multiple queries to execute sequentially
	  and then return all results at the same time.
	
	- Synchronous Non-Batch Mode - if you want multiple queries to execute
	  sequentially, and you do not want the user to wait until all result sets are
	  in to begin processing.
	
	- Asynchronous Batch Mode - if you want multiple queries to execute
	  simultaneously and return the result sets at the same time.
	
	- Asynchronous Non-Batch Mode - if you want multiple queries to execute
	  simultaneously and do not want the user to wait for all result sets to
	  return.
	
	Each of these strategies has its advantages and disadvantages. The developer
	needs to choose the strategy to implement.
	
	For further information on these strategies, please see Chapter 3 of the Visual
	FoxPro Professional Features Guide.
	
	Additional query words: 3.00 3.00b VFoxWin FetchSize MaxRecords CURSORSETPROP() SQLEXEC()
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0,3.0b
	
	=============================================================================
	
