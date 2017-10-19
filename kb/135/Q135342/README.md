---
layout: page
title: "Q135342: BUG: Scope on Report Command Doesn't Work as in version 2.x"
permalink: /kb/135/Q135342/
---

## Q135342: BUG: Scope on Report Command Doesn't Work as in version 2.x

	Article: Q135342
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying a scope for a report to print does not print the correct records from
	the table.
	
	CAUSE
	=====
	
	The problem is that the DataEnvironment object created when the report was
	created performs an implicit GO TOP command as it initializes, even if the table
	is already open. This is necessary so that programmatic changes to Cursor object
	properties, such as Filter, take effect. A unexpected side- effect of this
	recent change is that the Scope clauses (ALL, NEXT, RECORD, and REST) on the
	REPORT FORM command do not affect which the records are printed.
	
	For example, if you have a table open and the record pointer is sitting at record
	5, a REPORT FORM <x> NEXT 1 should print record number 5 only. However,
	because the DataEnvironment object performs a GO TOP command, the record pointer
	is re-positioned as the DataEnvironment object is initiated, so record number 1
	prints - not 5.
	
	WORKAROUND
	==========
	
	To use the REST, RECORD, and NEXT Scope clauses on the REPORT FORM command, you
	must prevent the implicit GO TOP command performed by the DataEnvironment
	object, which can be done in any one of these ways:
	
	- Remove the table from the DataEnvironment object, and open it before running
	  the report.
	
	-or-
	
	- Keep the table in the DataEnvironment object, but set the AutoOpenTables
	  property to false, and open the table manually before running the report.
	
	-or-
	
	- Keep the table in the DataEnvironment object, and save and restore the record
	  pointer before the report actually prints. To do this:
	
	  1. Set AutoOpenTables to false for the DataEnvironment object.
	
	  2. In the Init event, do the following:
	
	        x=0               && Create a scoped variable
	        this.opentables   && Call the OpenTables method
	        go (x)            && Restore the Record pointer
	
	  3. In the OpenTables method, save the record pointer:
	
	        x=RECNO()
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Problem
	-------------------------
	
	  create table repotest (mychar c(1))
	  insert into repotest values ('1')
	  insert into repotest values ('2')
	  insert into repotest values ('3')
	  insert into repotest values ('4')
	  insert into repotest values ('5')
	  create report repotest from repotest
	   
	  goto 2
	  REPORT FORM repotest next 1  &&Record 2 should print but record 1 prints
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
