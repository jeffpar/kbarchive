---
layout: page
title: "Q170917: PRB: &quot;Error 1709&quot; When Several Users Are Using the Same Database"
permalink: kb/170/Q170917/
---

## Q170917: PRB: &quot;Error 1709&quot; When Several Users Are Using the Same Database

	Article: Q170917
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application is being accessed by several users in a multi-user
	environment, the following error might occur when the database container is
	being manipulated:
	
	  Error 1709 - Database object is being used by someone else.
	
	If you issue a RETRY command, it resolves the error message.
	
	CAUSE
	=====
	
	Two or more users are momentarily accessing the database container in a way that
	will not allow processing the information at the same time even though the
	database container is shared. The first user's information is processed and the
	second user receives the error. The chances of two or more users triggering this
	error is very slim. Therefore, this error occurs randomly. When this error does
	occur, the program needs to retry the task for the second user.
	
	RESOLUTION
	==========
	
	By setting up an error routine to trap this error and then issuing a RETRY
	command you will eliminate this problem. Below is a sample ON ERROR routine.
	Place the following code in a prg called onerror.prg:
	
	     PARAMETERS errnum
	
	     DO CASE errnum = 1709
	        RETRY
	     ENDCASE
	
	At the start on the application, place the following command:
	
	     ON ERROR DO onerror.prg WITH ERROR()
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
