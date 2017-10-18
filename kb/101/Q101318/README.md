---
layout: page
title: "Q101318: ADT: How to Use DDE to Communicate with a Run-Time Application"
permalink: kb/101/Q101318/
---

## Q101318: ADT: How to Use DDE to Communicate with a Run-Time Application

	Article: Q101318
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	Run-time applications developed with Microsoft Access have the same dynamic data
	exchange (DDE) server capabilities as applications in the retail version of
	Microsoft Access.
	
	However, in order to communicate with a run-time application using DDE, you must
	use the name of the .MDB file, instead of "MSACCESS" when initiating a DDE
	conversation.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to communicate with a run-time
	application developed with Microsoft Access:
	
	1. Start Microsoft Access and open the sample database NWIND.MDB.
	
	2. Choose the Macro button and select the Sample Autoexec macro.
	
	3. From the File menu, choose Rename. In the Macro Name box, type "Autoexec"
	  (without the quotation marks), and then press ENTER.
	
	4. Quit Microsoft Access.
	
	5. From the File menu in Program Manager, choose Run.
	
	6. Type "c:\access\msarn110.exe nwind.mdb" (without the quotation marks), and
	  then press ENTER.
	
	7. Start Microsoft Access, and create or open a database other than NWIND.MDB.
	
	8. Create or open a module and add the following Access Basic function:
	
	        Option Explicit
	
	           Function DDEWithNWIND ()
	               Dim chan
	               chan = DDEInitiate("NWIND", "NWIND;TABLE Employees")
	               MsgBox DDERequest(chan, "FirstRow")
	               DDETerminate chan
	           End Function
	
	  Note that the first argument specified in the DDEInitiate command, the
	  application name, is "NWIND", which is the name of the .MDB file, and not
	  "MSACCESS."
	
	9. From the View menu, choose Immediate Window. Type the following line, and
	  then press ENTER:
	
	  ? DDEWithNWIND()
	
	  Note that a message box displays the first record from the Employees table in
	  the NWIND.MDB database.
	
	Additional query words: adk adt nxml
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3 kbAccessDistKit110
	Version           : WINDOWS:1.1,2.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
