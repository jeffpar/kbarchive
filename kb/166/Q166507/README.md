---
layout: page
title: "Q166507: HOWTO: Recover from a Lost Anomaly Tracking System Password"
permalink: kb/166/Q166507/
---

## Q166507: HOWTO: Recover from a Lost Anomaly Tracking System Password

	Article: Q166507
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Anomaly Tracking System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the event of a lost password in an Anomaly Tracking System (ATS) database, it
	is possible to reset the password.
	
	MORE INFORMATION
	================
	
	There are two possible methods to recover from this scenario.
	
	- If there is another user in the database that has administrator rights, that
	  user can login and restore the other user's password. This can be
	  accomplished through the User Maintenance dialog box.
	
	  -or-
	
	- The ATS database files can be viewed in Visual FoxPro 5.0 to determine what
	  the user's password is. The following steps outline this process:
	
	  a. Open the ATS database (Ft.dbc) in Visual FoxPro 5.0.
	
	  b. USE the Ftuser.dbf table.
	
	  c. BROWSE the Ftuser.dbf table.
	
	  d. Locate the user's record in this table.
	
	  e. Look at the contents of the Us_pwd field to determine what the user's
	     correct password is.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVSsearch kbAudDeveloper kbATS100 kbVS97Search
	Issue type        : kbhowto
	
	=============================================================================
	
