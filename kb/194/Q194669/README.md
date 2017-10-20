---
layout: page
title: "Q194669: HOWTO: Retrieve Extended Stored Procedures from SQL Server"
permalink: /kb/194/Q194669/
---

## Q194669: HOWTO: Retrieve Extended Stored Procedures from SQL Server

{% raw %}

	Article: Q194669
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to use the stored procedure sp_helpextendedproc to return
	information about extended stored procedures when accessing date available from
	SQL Server.
	
	MORE INFORMATION
	================
	
	The sp_helpextendedproc stored procedure returns a cursor with information
	regarding currently defined extended stored procedures and the name of the
	dynamic link library to which the procedure belongs.
	
	The columns returned by sp_helpextendedproc are:
	
	Column name          Description
	-----------          -----------
	
	NAME                 Name of the stored procedure
	DLL                  Dynamic link library to which the stored procedure in
	                    the NAME column belongs.
	
	1. Create a program file called "SP_PROCS.PRG" using the following code:
	
	        * Substitute the server name
	        #DEFINE Connect_String 'DRIVER={SQL Server};SERVER=MY_SERVER;' + ;
	           'DATABASE=PUBS;UID=sa;PWD='
	        * Connect to SQL Server
	        gnConnHandle=SQLSTRINGCONN(Connect_String)
	        IF gnConnHandle>0
	           * Create a command to execute the stored procedure
	                 SQLCommand="sp_helpextendedproc"
	                 * Execute the stored procedure and return data to a cursor
	                 testvar=SQLEXEC(gnConnHandle,SQLCommand,'SYS_Procs')
	                 ? testvar
	                 * Select the cursor
	                 SELECT SYS_Procs
	                 BROWSE LAST
	              =SQLDISCONN(gnConnHandle)
	        ENDIF
	        CLOSE ALL
	        RETURN
	
	2. From the Command window, type "DO SP_PROCS."
	
	REFERENCES
	==========
	
	Transact - SQL Reference Help file, search on: "sp_helpextendedproc"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words: kbVFP600 kbVFP500 kbDatabase kbvfp300b kbvfp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
