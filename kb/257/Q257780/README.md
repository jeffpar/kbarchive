---
layout: page
title: "Q257780: FIX:Unrecognized Database Format, Data Control or Data Form Wiz"
permalink: /kb/257/Q257780/
---

## Q257780: FIX:Unrecognized Database Format, Data Control or Data Form Wiz

{% raw %}

	Article: Q257780
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDatabase kbDataBinding kbJET kbMDAC kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSup
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Microsoft Access 2000 database by using either
	the standard Data control or the Data Form Wizard, you see the following error
	message where '...\databasename.mdb' is the absolute filename of the Access 2000
	database:
	
	  Unrecognized database format '...\databasename.mdb'"
	
	CAUSE
	=====
	
	The standard Data control uses Data Access Object (DAO) 3.51 to connect to
	Access databases by using the Jet 3.51 engine.
	
	The Data Form Wizard uses the Jet 3.51 OLE DB Provider to connect to Access
	databases by using the Jet 3.51 engine.
	
	The Jet 3.51 engine can connect to Access database versions prior to Access 2000,
	but cannot connect to Access 2000 databases.
	
	RESOLUTION
	==========
	
	These problems are not seen with the Data control and Data Form Wizard that ship
	with Microsoft Visual Studio 6.0 Service Pack 4 and later. (If you are using the
	Data Control, you must take the additional step of changing its Connect property
	to Access 2000.)
	
	Prior to service pack 4 for Visual Studio 6.0, the workaround for the standard
	Data control problem was to open a Recordset using DAO code, and then assign it
	to the Data control's Recordset. This workaround is described in Microsoft
	Knowledge Base article Q238401 in the "References" section.
	
	Prior to service pack 4 for Visual Studio 6.0, the workarounds for the Data Form
	Wizard problem were:
	
	- Open the Access database through an ODBC DSN that uses the Access ODBC driver
	  version 4.0.
	
	- Build the form manually using Jet 4.0 to connect to the database.
	
	See these workarounds in the Microsoft Knowledge Base article Q242010 in the
	"References" section.
	
	NOTE: There are known issues when connecting to Access 2000 on certain localized
	versions of Visual Basic 6.0 Service Pack 4. This is scheduled to be fixed in
	Visual Basic 6.0 Service Pack 5. However, this bug is fixed for the English
	version (North America) of Visual Basic 6.0 Service Pack 4.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	STEPS TO REPRODUCE USING THE STANDARD DATA CONTROL
	
	1. In Visual Basic, create a new Standard EXE project. Project1 is created by
	  default. Form1 is added by default.
	
	2. Place a Data control onto Form1. Data1 is created by default.
	
	3. Set the DatabaseName property of the Data control to an Access 2000 database.
	
	4. Attempt to set the RecordSource property of the Data control by clicking the
	  drop-down list, and note that the error message in the "Symptoms" section
	  appears.
	
	STEPS TO REPRODUCE USING THE DATA FORM WIZARD
	
	1. In Visual Basic, create a new Standard EXE project. Project1 is created by
	  default. Form1 is added by default.
	
	2. If the Data Form Wizard is not listed in Add-Ins menu, do the following:
	
	  a. From the Add-Ins menu, select Add-In Manager.
	
	  b. In the list of Available Add-Ins, select Data Form Wizard.
	
	  c. Click to check the Loaded/Unloaded checkbox.
	
	  d. Click OK, and note that the Data Form Wizard is now on the Add-Ins menu.
	
	3. From the Add-Ins menu, select Data Form Wizard.
	
	  a. At the Introduction screen, click Next.
	
	  b. At the Database Type screen, select Access, and then click Next.
	
	  c. On the Database screen, click Browse, navigate to your Access database,
	     and then click Open. When you click Next, the error message in the
	     "Symptoms" section is displayed.
	
	REFERENCES
	==========
	
	  Q238401 PRB: Unrecognized Database Format Error Upgrading to Access 2000
	
	  Q242010 PRB:The Data Form Wizard May Not Open an Access 2000 Database
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCtrl kbDatabase kbDataBinding kbJET kbMDAC kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbDAO360 kbMDAC250 kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
