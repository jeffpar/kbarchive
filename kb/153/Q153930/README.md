---
layout: page
title: "Q153930: ADT95: &quot;Item Not Found In This Collection&quot; with ADT Setup Wizard"
permalink: kb/153/Q153930/
---

## Q153930: ADT95: &quot;Item Not Found In This Collection&quot; with ADT Setup Wizard

	Article: Q153930
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you use the Microsoft Access Developer's Toolkit (ADT) for Windows 95 Setup
	Wizard to create disk images, you may receive the following error message:
	
	  Runtime Error 3265. Item not found in this collection.
	
	CAUSE
	=====
	
	The "Break On All Errors" option on the Module tab in the Options dialog box is
	selected.
	
	RESOLUTION
	==========
	
	Click to clear the "Break On All Errors" option. To do so, follow these steps:
	
	1. Open any Microsoft Access for Windows 95 database file (MDB).
	
	2. On the Tools menu, click Options. In the Options dialog box, click the Module
	  tab.
	
	3. Under Coding Options, click to clear "Break on All Errors."
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the sample database Northwind.mdb.
	
	2. On the Tools menu, click Options. In the Options dialog box, click the Module
	  tab, and click to select "Break on All Errors."
	
	3. Close the database, and start the ADT Setup Wizard (Wzstp70.mdb).
	
	4. Work through the Microsoft Access for Windows 95 Setup Wizard. Include the
	  Northwind.mdb sample database as the main file, and make the appropriate
	  selections.
	
	5. Click Finish. Note that you receive the error message described in the
	  "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
