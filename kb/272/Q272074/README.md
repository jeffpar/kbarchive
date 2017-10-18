---
layout: page
title: "Q272074: FIX: T-SQL Debugger Parses SQL Server 2000 Return Value Wrong"
permalink: kb/272/Q272074/
---

## Q272074: FIX: T-SQL Debugger Parses SQL Server 2000 Return Value Wrong

	Article: Q272074
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4
	Operating System(s): 
	Keyword(s): kbDatabase kbSQLServ kbStoredProc kbTSQL kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To obtain parameter information for the stored procedure that is being debugged,
	the Visual Basic T-SQL Debugger runs the SQL Server system stored procedure
	sp_sproc_columns. On SQL Server 2000, sp_sproc_columns returns @RETURN_VALUE
	rather than RETURN_VALUE as the name of the stored procedure return value
	parameter. Because the T-SQL Debugger is looking for the literal name
	RETURN_VALUE, this change in behavior causes the Visual Basic T-SQL Debugger to
	treat the return value incorrectly as an input/output parameter; as a result,
	the stored procedure debugging fails.
	
	When you click Step Into in the Visual Basic T-SQL Debugger window to debug a
	stored procedure, you may receive the following error message:
	
	  The following SQL Server error occurred. [Microsoft][ODBC SQL Server
	  Driver][SQL Server] Procedure or function CustOrderHist has too many
	  arguments specified.
	
	After you click OK, the debugger raises the following error:
	
	  The query could not be debugged due to a problem coordinating events with the
	  server.
	
	CAUSE
	=====
	
	This problem occurs because of the name change of the return value parameter
	from RETURN_VALUE to @RETURN_VALUE in SQL Server 2000. This change was made for
	the sake of consistency with parameter naming conventions.
	
	RESOLUTION
	==========
	
	To resolve this problem, download Visual Basic 6.0 Service Pack 5 (SP5).
	
	WORKAROUND
	----------
	
	To work around this problem, edit the incorrect call syntax in the Query box on
	the Stored Procedure tab. If you delete the "extra" first parameter, which is
	always displayed as zero (0), you can execute and debug the stored procedure as
	required. For example, change the call syntax from
	
	  {CALL CustOrderHist (0, ' ')}
	
	to:
	
	  {CALL CustOrderHist (' ')}
	
	IMPORTANT It is essential that you supply appropriate values for the other
	parameter(s) before you make the above-mentioned change; that is, editing the
	call syntax must be your last step before you click Execute. If you delete the
	"extra" first parameter, then select another parameter in the Parameter list, or
	if you type a value in the Value box to modify a parameter value, the "extra"
	parameter (0) is reinserted in the call syntax.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in Service Pack
	5 for Microsoft Visual Basic. For additional information about Visual Studio
	service packs, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
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
	
	This problem only reproduces with Visual Basic Enterprise Edition 6.0, Service
	Pack 4 or earlier. In addition, you must be able to connect to an instance of
	SQL Server 2000.
	
	1. If necessary, use the Visual Basic Add-In Manager to load the T-SQL Debugger
	  add-in.
	
	2. From the Visual Basic Add-Ins menu, run the T-SQL Debugger.
	
	3. On the Settings tab, create a data source name (DSN) to the Northwind sample
	  database on SQL Server 2000. Type any log on information that is required.
	
	4. On the Stored Procedure tab, the first stored procedure, CustOrderHist, is
	  selected by default. This stored procedure takes a single input parameter,
	  @CustomerID, which should normally be the only entry in the Parameters list
	  box. While waiting for the user to supply the input value, the Query box
	  should normally display the following call syntax:
	
	  {CALL CustOrderHist (' ')}
	
	  However, because of this problem, @RETURN_VALUE is also listed in the
	  Parameters list box, and the Query box displays the following call syntax:
	
	  {CALL CustOrderHist (0, ' ')}
	
	  This indicates that it has incorrectly interpreted the renamed return value as
	  an input/output parameter.
	
	5. Click Execute. In the Debugger window, click Step Into. You receive the
	  above-mentioned error messages.
	
	Additional query words: execute
	
	======================================================================
	Keywords          : kbDatabase kbSQLServ kbStoredProc kbTSQL kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep kbVS600sp5fix 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVB600 kbSQLServ2000 kbVB600SP3 kbVB600SP4
	Version           : :6.0,6.0 SP3,6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
