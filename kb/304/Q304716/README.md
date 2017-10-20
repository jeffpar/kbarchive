---
layout: page
title: "Q304716: FIX: AV in RepODBC.dll When You Try to Connect to Repository"
permalink: /kb/304/Q304716/
---

## Q304716: FIX: AV in RepODBC.dll When You Try to Connect to Repository

{% raw %}

	Article: Q304716
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbDSupport kbSQLServ2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a Microsoft repository database that does not exist,
	an access violation may occur. The error message indicates that the instruction
	at address "0x0340E4AC" attempted to read the memory at address "0x00000000".
	
	The specific instruction address may vary depending on the location from which
	the RepODBC.dll file is loaded.
	
	CAUSE
	=====
	
	When a connection to the repository is requested, a repository object is created
	to attempt the connection process. This object tracks the status of the
	connection and any transactions on the connection.
	
	If the connection to the repository is not successful, the repository returns a
	status that indicates that the requested object model does not exist, and the
	destructor for the repository object is called. The destructor of the repository
	object checks the status of the connection for any open transactions and aborts
	those transactions before it exits.
	
	Due to a bug during the initialization of the repository object, the database
	transaction state is not properly initialized to None. If the memory that is
	allocated to the transaction state variable in the repository object has an
	initial value of Running (due to previous values in the allocated memory), the
	destructor attempts to abort the transaction before exiting. Because a
	connection is never established, the connection pointer is not valid. Thus, the
	attempt to abort the transaction results in a read of an invalid memory address.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size        File name
	  -------------------------------------------------------------
	  17 July 2001 14:51  2000.0.1198.0  1,232,969   RepODBC.dll
	
	
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbDSupport kbSQLServ2000 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVB600 kbSQLServ2000
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
