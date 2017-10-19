---
layout: page
title: "Q236837: PRB: SQL/DTS Wizard &quot;Unrecognized Phrase/Keyword&quot; w/FoxPro DB"
permalink: /kb/236/Q236837/
---

## Q236837: PRB: SQL/DTS Wizard &quot;Unrecognized Phrase/Keyword&quot; w/FoxPro DB

	Article: Q236837
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250kbfaq
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Data Transformation Services (DTS) Wizard in Microsoft SQL Server
	7.0 to import data from a Microsoft Visual FoxPro database (.DBC), the wizard
	gives the following error while copying data:
	
	  [Microsoft] [ODBC Visual FoxPro driver] Command contains unrecognized
	  phrase/keyword
	
	CAUSE
	=====
	
	This is a problem in Visual FoxPro ODBC driver version 6.00.8428.00. The problem
	was fixed by Visual FoxPro ODBC driver version 6.00.8440.00.
	
	WORKAROUND
	==========
	
	Upgrade to Visual FoxPro ODBC driver version 6.00.8440.00. This version of the
	driver is available as a hot fix, as described in the following Microsoft
	Knowledge Base article:
	
	  Q231714 BUG: Cannot Export or Open Linked FoxPro Tables Using Latest ODBC
	  Visual FoxPro Driver (6.0.8428.0)
	
	
	Or, you may obtain an updated copy of the Visual FoxPro ODBC driver as part of
	the Microsoft Data Access Components(MDAC) version 2.1 SP2 (2.1.2.4202.3) or
	later, which can be downloaded from the following Web address:
	
	  http://www.microsoft.com/data/
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up a DSN using Visual FoxPro ODBC driver and point it to the TestData.dbc
	  file that comes with Visual FoxPro 6.0.
	
	2. Run the SQL 7 DTS Import Wizard from Enterprise Manager, choose Visual FoxPro
	  driver as the source, and select the DSN. Choose the Pubs database as the
	  destination.
	
	3. In the Specify Table Copy or Query dialog box, select Copy table(s) from the
	  source database and choose customers table in the Select Source Tables dialog
	  box.
	
	4. Select Run Immediately from the Save, Schedule and Replicate Package dialog
	  box. Click NEXT and then click FINISH.
	
	When the data begins copying, this error will occur:
	
	  Failed to transfer 1 table(s). Double-click on the error row to get a
	  detailed description of the error.
	
	Clear this message and double-click the error in the grid to see the ODBC error
	message.
	For more information on SQL Server 7.0 Data Transformation Services, refer to the
	SQL Server Books Online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbfaq
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP600828100
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
