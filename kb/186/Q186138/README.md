---
layout: page
title: "Q186138: HOWTO: Wrap Remote Views into One SQL Transaction"
permalink: /kb/186/Q186138/
---

## Q186138: HOWTO: Wrap Remote Views into One SQL Transaction

	Article: Q186138
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can wrap multiple remote views into one transaction, which allows you to
	commit or rollback all changes to the back-end data tables in one step. For
	example, a bank transfer between a savings account and a checking account. If
	the subtraction from the savings account fails because of insufficient funds,
	you do not want the addition to the checking account to be completed. Thus, you
	can rollback the entire bank transaction.
	
	MORE INFORMATION
	================
	
	In order to wrap the views into a transaction you must use Shared Connections
	and set the Transaction property of SQLSetProp to Manual (2).
	
	When these two settings are set, SQLCommit() or SQLRollback() may be used to
	commit or rollback the transactions. The following steps show how to wrap two
	separate remote views in a transaction.
	
	Step-by-Step Example
	--------------------
	
	1. Create a connection to your back end data and name it Myconnection.
	
	2. Create two updateable remote views named Myview1 and Myview2.
	
	3. Make the views share the connection by modifying the remote view. From the
	  Query menu choose Advanced Options. This displays a dialog box that contains
	  the Shared Connection check box. Select the check box and click OK.
	
	4. In the Command window or in code issue the following commands:
	
	        USE Myview1
	        USE Myview2 in 0
	        m.Handle = CursorGetProp('ConnectHandle','Myview1')
	        =SQLSETPROP(m.Handle,'Transaction',2)
	
	  This code gets the connection handle from the cursor and sets the Transaction
	  property to two (2), which is manual mode. This mode allows you to use the
	  SQLCOMMIT or SQLROLLBACK functions.
	
	5. Modify some data in the views and issue the following code:
	
	        =Tableupdate(1,.t.,'Myview1')
	        =Tableupdate(1,.t.,'Myview2')
	        =SQLCommit(m.Handle)
	        =Requery('Myview1')
	        =Requery('Myview2')
	
	  You can replace the SQLCommit with SQLRollback and see the data go back to its
	  original value.
	
	REFERENCES
	==========
	
	For more information on creating connections:
	
	  Visual FoxPro Developer's Guide, Chapter 8, "Defining a Connection";
	  "Creating Views"
	
	For more information about making an updateable view:
	
	  Visual FoxPro Online Help; search on "View Designer"; topic: "Update Tab"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by David
	Botzenhart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE kbnokeyword
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
