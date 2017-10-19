---
layout: page
title: "Q101372: ADT: Use &quot;MSACCESS&quot; in DDEInitiate w/ Run-Time App (1.0, 2.0)"
permalink: /kb/101/Q101372/
---

## Q101372: ADT: Use &quot;MSACCESS&quot; in DDEInitiate w/ Run-Time App (1.0, 2.0)

	Article: Q101372
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	Applications can initiate a dynamic data exchange (DDE) conversation with a
	run-time application developed with Microsoft Access by specifying "MSACCESS"
	rather than the .MDB file, as the application name.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To communicate with a run-time application using DDE, it is strongly recommended
	that you use the name of the .MDB file, not "MSACCESS," as the application name
	when you are initiating a DDE conversation.
	
	The run-time version of Microsoft Access responds to both Microsoft Access and
	the name of the .MDB file as the application name.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Access and open the sample database NWIND.MDB.
	
	2. In the Database window, choose the Macro button and select Sample AutoExec
	  from the list.
	
	3. From the File menu, choose Rename. In the Macro Name box, type "AutoExec"
	  (without the quotation marks), and then press ENTER.
	
	4. Quit Microsoft Access.
	
	5. In Program Manager, choose Run from the File menu.
	
	6. Type the following line, and then press ENTER:
	
	  " C:\<ACCESS>\MSARN100.EXE NWIND.MDB " (without the quotation marks)
	
	  where <ACCESS> is your Microsoft Access program directory.
	
	7. Start Microsoft Access again and create a new database, or open a database
	  other than NWIND.MDB.
	
	8. Create or open a module and add the following Access Basic function:
	
	        Option Explicit
	
	        Function DDEWithNWIND ()
	           Dim chan
	           chan = DDEInitiate("MSACCESS", "NWIND;TABLE Employees")
	           MsgBox DDERequest(chan, "FirstRow")
	           DDETerminate chan
	        End Function
	
	9. From the View menu, choose Immediate Window. Type the following line, and
	  then press ENTER:
	
	  " ? DDEWithNWIND() " (without the quotation marks)
	
	  Note that a message containing the first record from the Employees table in
	  NWIND.MDB is displayed.
	
	NOTE: The run-time application responds correctly to the DDEInitiate() statement
	that reads:
	
	  chan = DDEInitiate("NWIND", "NWIND;TABLE Employees")
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3 kbAccessDistKit110
	Version           : WINDOWS:1.1,2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
