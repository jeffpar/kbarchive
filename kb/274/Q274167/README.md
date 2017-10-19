---
layout: page
title: "Q274167: FIX: Unable to Create or Modify Tables/Views on SQL Server 2000"
permalink: /kb/274/Q274167/
---

## Q274167: FIX: Unable to Create or Modify Tables/Views on SQL Server 2000

	Article: Q274167
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataview kbDebug kbMDAC kbSQLServ kbStoredProc kbTSQL kbGrpDSVBDB kbGrpDSM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click on the Tables or Views folders (or items within those
	folders) under a Data Link connected to a SQL 2000 Server, the New Table, New
	View, Design Table, Design View, and Filter By Owner menu items do not appear.
	These choices exist with SQL Server 7.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a DataProject in Visual Basic 6.0.
	
	2. Create a connection to SQL Server 2000 in the DataEnvironment.
	
	3. Open the DataView window and expand the connection.
	
	4. Right-click the Table folder.
	
	NOTE: If Visual Studio 6.00 Service Pack 5 has been applied, you see New in the
	context menu.
	
	The New option displays the following error message:
	
	  The Visual Database Tools within Visual Studio 6 and Access 2000 do not
	  support some new features of SQL Server 2000. Because you are manipulating an
	  object in a SQL Server 2000 database, some operations will be unavailable to
	  you. In rare cases, you might not be able to save the database object you
	  modified. In other cases, you will be able to save the object, but its
	  previously existing settings for features new to SQL Server 2000 will be
	  lost. In most of these cases, you will be warned if the Save operation will
	  eliminate existing settings or property values.
	
	  For a complete description of the interaction between SQL Server 2000 and
	  Visual Database Tools within Visual Studio 6 or Access 2000, see Microsoft
	  Knowledge Base article Q266277, "Using Visual Studio 6 and Access 2000 Visual
	  Database Tools with SQL Server 2000." Knowledge Base articles are available
	  in the MSDN Library Visual Studio documentation or at
	  http://support.microsoft.com/support/.
	
	  To suppress this message next time you design a SQL Server 2000 object from
	  Visual Studio 6 or Access 2000, check the following box.
	
	REFERENCES
	==========
	
	"Considerations for Other Microsoft Products" under "Installing SQL Server" in
	SQL Server 2000 Books Online.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q266277 PRB: Using Visual Studio 6 and Access 2000 Visual Database Tools with
	  SQL Server 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataview kbDebug kbMDAC kbSQLServ kbStoredProc kbTSQL kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
