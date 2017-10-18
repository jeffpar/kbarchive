---
layout: page
title: "Q176830: HOWTO: Create a Connection Programmatically"
permalink: kb/176/Q176830/
---

## Q176830: HOWTO: Create a Connection Programmatically

	Article: Q176830
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbServer kbvfp300 kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some circumstances, you may need to modify the properties of a connection
	at run time. This article describes each of the properties and the default
	values of a connection. The sample code illustrates how to create a connection
	and use the DBSETPROP() function to set the properties of a connection
	programmatically.
	
	MORE INFORMATION
	================
	
	The following table indicates the data types and default values associated with
	each of the properties of a connection.
	
	  Property       Connection Designer Label    Data Type   Default Value
	  ---------------------------------------------------------------------
	
	  DispLogin        Display Login               Numeric        1
	  Asynchronous     Asynchronous Execution      Logical        .F.
	  DispWarnings     Display Warnings            Logical        .F.
	  BatchMode        Batch Processing            Logical        .T.
	  Transactions     Automatic Transactions      Numeric        1
	  PacketSize       Packet Size                 Numeric        4096
	  Comment                                      Character      ''
	  ConnectTimeOut   Connection (sec)            Numeric        15
	  IdleTimeOut      Idle (min)                  Numeric        3
	  QueryTimeOut     Query (sec)                 Numeric        3
	  WaitTime         Wait Time (ms)              Numeric        100
	
	The sample code below creates and modifies the properties of a connection:
	
	     *Begin code
	     LOCAL lcconnstring, lcconname, lnconnections, lbconnexists
	     lcconnstring    =  "'DSN=PUBS;DATABASE=pubs;UID=sa;PWD='"
	     lcconnname      =   "VFPCONN"
	     lnconnections   =   0
	     lbconnexists    =   .F.
	     IF !FILE('VFPCONN.DBC')
	     CLOSE DATA ALL
	     CREATE DATABASE VFPCONN
	     ELSE
	     OPEN DATABASE VFPCONN
	     ENDIF
	     lnconnections=ADBOBJECTS(CONNECTS,'CONNECTION')
	     IF lnconnections>0
	     FOR i=1 TO ALEN(CONNECTS,1)
	     IF UPPER(CONNECTS[i])=lcconnname
	     lbconnexists=.T.
	     EXIT
	     ENDIF
	     NEXT
	     ENDIF
	     IF !lbconnexists
	     CREATE CONNECTION &lcconnname CONNSTRING (lcconnstring)
	     ENDIF
	     * Set connection properties to custom values.
	     =DBSETPROP('VFPCONN','Connection','DispLogin', 3)
	     =DBSETPROP('VFPCONN','Connection','Asynchronous', .T.)
	     =DBSETPROP('VFPCONN','Connection','DispWarnings', .T.)
	     =DBSETPROP('VFPCONN','Connection','BatchMode', .F.)
	     =DBSETPROP('VFPCONN','Connection','Transactions', 2)
	     =DBSETPROP('VFPCONN','Connection','PacketSize',8192)
	     =DBSETPROP('VFPCONN','Connection','Comment', 'Comment Added')
	     =DBSETPROP('VFPCONN','Connection','ConnectTimeOut', 10)
	     =DBSETPROP('VFPCONN','Connection','IdleTimeOut', 0)
	     =DBSETPROP('VFPCONN','Connection','QueryTimeOut', 0)
	     =DBSETPROP('VFPCONN','Connection','WaitTime',150)
	     MODI CONNECTION VFPCONN
	     RETURN
	     *End code.
	
	After running the program code, a dialog appears titled "Connection
	Designer-VPFCONN." Click the Verify Connection button and a message indicating
	the connection was successful should appear.
	
	NOTE: In order to use the connection, an ODBC Data source matching the Data
	source name specified in the connection string must exist.
	
	If the ODBC Data source does not exist, the following ODBC error message is
	returned:
	
	  Connectivity error [Microsoft][ODBC Driver Manager] Data source name not
	  found and no default driver specified.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q137445 How to Display View and Connection Properties
	
	  Q132231 Properties You can Access with SQLGETPROP()
	
	Visual FoxPro Help, version 4.00.950; search on: "DBSETPROP()"
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbServer kbvfp300 kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
