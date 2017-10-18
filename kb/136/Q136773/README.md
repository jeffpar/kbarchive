---
layout: page
title: "Q136773: How to Change the Connection UserId Programmatically"
permalink: kb/136/Q136773/
---

## Q136773: How to Change the Connection UserId Programmatically

	Article: Q136773
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to create a connection that can be used by several users,
	and it shows how to base a view on the connection. The view gets the user name
	and password without prompting for it.
	
	To achieve this, set the userid and password properties of the connection
	programmatically as users log in. To modify the userid and password properties
	of a connection, the database (.dbc file) must be opened exclusively.
	
	MORE INFORMATION
	================
	
	If you create a connection, such as this:
	
	      CREATE CONNECTION myconnect ;
	         DATASOURCE sqlsrvr ;
	         USERID sa ;
	         PASSWORD passwd
	
	you can create views based on this connection, and then modify the connection at
	run time to allow each user to use this connection. To change the userid and
	password properties of the connection, use DBSetProp() in the following manner:
	
	     ...=DBSetProp('myconnect','connection','userid','<newuserid>')
	     ...=DBSetProp('myconnect','connection','password','<newpassword>')
	
	This connection uses the new userid and password to log in. You need exclusive
	use of the .dbc file to make this change.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
