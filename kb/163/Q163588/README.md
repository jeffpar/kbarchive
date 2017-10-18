---
layout: page
title: "Q163588: FP97: SQL Query Missing, Deleted When Running IDC Wizard"
permalink: kb/163/Q163588/
---

## Q163588: FP97: SQL Query Missing, Deleted When Running IDC Wizard

	Article: Q163588
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an existing Internet Database Connector (IDC) file, the Structured
	Query Language (SQL) query may not appear in the SQL Query box. If you click
	Finish in the Internet Database Connector Wizard the existing query is erased.
	
	CAUSE
	=====
	
	The IDC looks for a carriage return when it parses the SQL statement. If it
	finds the end of the file before it finds a carriage return, the IDC omits the
	SQL statement when it writes the file.
	
	RESOLUTION
	==========
	
	Do not click Finish in the Internet Database Connector Wizard when the SQL Query
	box is empty. Instead, click Cancel, open the IDC file in a text editor, and
	insert a carriage return after the SQL statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	This problem occurs only with IDC files that contain a single-line SQL query,
	which is not terminated by a carriage return. A multi-line query is not affected
	even when the SQL statement is not terminated with a carriage return. For
	example, the following statement will be deleted if there is no carriage return
	after the word, "Employees":
	
	  SQLStatement: DELETE DISTINCTROW FirstName FROM Employees
	
	The following statement will not be deleted:
	
	  SQLStatement: DELETE DISTINCTROW FirstName
	     +FROM Employees
	
	For more information about using Internet Database Connectivity in FrontPage 97,
	see the "Using Internet Database Connectivity with FrontPage 97" feature article
	at the following Web site:
	
	  http://support.microsoft.com/support/frontpage/idc/default.asp
	
	For more information about Internet Database Connector technology, go to the
	following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/iis/learnaboutiis/whatisiis/winnt351/installguide/
	
	and click the "Publishing Information and Applications" link.
	
	
	For more information about Internet Database Connector files, go to the following
	Microsoft World Wide Web site:
	
	  http://www.microsoft.com/iis/learnaboutiis/whatisiis/winnt351/installguide/
	
	click the "Detailed Contents" link to go to the "Installation and Planning Guide
	Table of Contents."
	
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
