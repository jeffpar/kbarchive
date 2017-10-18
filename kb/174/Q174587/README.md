---
layout: page
title: "Q174587: ODE97: Graphs in Converted Databases Appear Blank in ODE App"
permalink: kb/174/Q174587/
---

## Q174587: ODE97: Graphs in Converted Databases Appear Blank in ODE App

	Article: Q174587
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Office 97 Developer Edition Tools (ODE) to distribute
	a database, and that database contains a form or a report with an embedded graph
	object, the graph appears blank when you view the form or report on the target
	computer.
	
	CAUSE
	=====
	
	The database was converted from either Microsoft Access 2.0 or Microsoft Access
	for Windows 95 version 7.0, and it contains an embedded graph created with
	Microsoft Graph 5.0. When you convert a database created in an earlier version
	of Microsoft Access, the database is converted; however, conversion does not
	affect any embedded OLE objects within the database. Therefore, the embedded
	graph object contained within a form or a report is still associated with
	Microsoft Graph 5.0. When you try to distribute this database using the ODE, the
	run-time version of Microsoft Graph 8.0 is used.
	
	RESOLUTION
	==========
	
	Before you create your run-time images using the Setup Wizard from the Microsoft
	Office 97 Developer Edition Tools, first convert the embedded graph object to
	Microsoft Graph 8.0. This issue can be resolved by following these steps:
	
	1. Open the database in Microsoft Access 97.
	
	2. In the Database window, click the Forms or the Reports tab.
	
	3. Select your form or report that contains the graph, and then click Design.
	
	4. Using the right mouse button, click the graph object, point to Chart Object
	  on the shortcut menu, and then click Convert.
	
	5. Close and save the report or the form.
	
	Additional query words: prb charts
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
