---
layout: page
title: "Q141140: HOWTO: Create a SQL Server Stored Procedure"
permalink: /kb/141/Q141140/
---

## Q141140: HOWTO: Create a SQL Server Stored Procedure

{% raw %}

	Article: Q141140
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create a SQL Server stored procedure. The example
	uses the Pubs database and the Authors table that ships with Microsoft SQL
	Server. It is assumed that a valid data source has been created, so the article
	doesn't discuss how to create a data source.
	
	MORE INFORMATION
	================
	
	Creating a server-based stored procedure for frequently called queries will
	dramatically improve performance. Once a stored procedures has been successfuly
	created on the server, the server doesn't have to parse, check syntax, and
	compile prior to executing. Parameters can be passed so that specific
	information is retrieved. The following examples shows how to retrieve authors
	from a specific state. To create a stored procedure on SQL Server, you must have
	the authority to do so. Check with the DBA to ensure that you have proper
	authority. The following example uses a data source called test and will create
	a stored procedure to retrieve only those authors who live in California.
	
	Code Sample
	-----------
	
	   hand = sqlconnect("test","sa","")
	
	   ************************************
	   * Check for good connection handle *
	   ************************************
	   IF hand > 0
	
	     z = SQLEXEC(hand, "create procedure pick_state @mystate char(2) as " + ;
	            "Select * from authors where state = @mystate")
	
	      *******************************
	      *Check for good SQL execution *
	      *******************************
	      IF z > 0
	         WAIT WINDOW "Stored Procedure created"
	      ELSE
	         WAIT WINDOW "Stored Procedure failed"
	         =SQLDISCONNECT(hand)
	         CANCEL
	      ENDIF
	
	      ****************************
	      * Execute Stored Procedure *
	      ****************************
	      =SQLEXEC(hand, "execute pick_state CA")
	      * Display Result Set *
	      BROWSE
	
	      =SQLDISCONNECT(hand)
	
	   ELSE
	      WAIT WINDOW "Bad connection"
	   ENDIF
	
	Additional query words: speed up quicker faster
	
	======================================================================
	Keywords          : kbcode kbinterop kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
