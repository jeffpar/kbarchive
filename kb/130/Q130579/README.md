---
layout: page
title: "Q130579: PRB: UserId and Password Viewable in Database Container"
permalink: kb/130/Q130579/
---

## Q130579: PRB: UserId and Password Viewable in Database Container

	Article: Q130579
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The userid and password for an ODBC connection are stored in the database
	container (.DBC) and are visible to the user if a connection is created for the
	database. If previously created data sources are used in an ODBC view rather
	than an ODBC connection, the userid and password are not viewable in the .DBC.
	
	CAUSE
	=====
	
	When a view or connection is established in Visual FoxPro, you have the option
	of specifying the userid and password at that time. If you enter them, they are
	saved in the DBC, so they can be seen by using the DISPLAY DATABASE command or
	by using the DBC as a table.
	
	RESOLUTION
	==========
	
	To maintain security, do not specify the password when setting up the connection
	or view. Rely on ODBC to request it. Then the DBC will contain only the
	Datasource name.
	
	When creating an executable file, you can explicitly include the DBC in the
	project. In this case, the user is not able to display the connection
	information. To make this modification, choose Include from the Project menu
	with the DBC selected in the project.
	
	STATUS
	======
	
	This behavior is by design. The reasoning for this design is that if you want to
	save the password in the DBC, you probably want the convenience of never needing
	to type in a password.
	
	Additional query words: VFoxWin kbfest encrypt
	
	======================================================================
	Keywords          : kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	
