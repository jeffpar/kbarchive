---
layout: page
title: "Q293786: BUG: GPF in DAO After You Install SQL Server Client"
permalink: /kb/293/Q293786/
---

## Q293786: BUG: GPF in DAO After You Install SQL Server Client

{% raw %}

	Article: Q293786
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbLocalization kbGrpDSVBDB kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the Spanish version of the SQL Server 7.0 Client utilities on a
	computer that is running Microsoft Windows 95 OEM Service Release 2 (OSR2), a
	General Protection Fault (GPF) error occurs when you use Data Access Objects
	(DAO) to open a database.
	
	This problem does not occur on computers that are running the Spanish version of
	Microsoft Windows NT 4.0, nor does it occur on computers that are running the
	English version of Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a test computer that is running Windows 95 OSR2 Spanish with Visual Basic
	  6.0 Spanish installed, install the SQL Server 7.0 Client (Spanish) and
	  Microsoft Data Access Components (MDAC) 2.1 Service Pack 1 (SP1).
	
	2. Create a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	3. From the Project menu, click References, and then click "Microsoft DAO 3.0
	  Object Library".
	
	4. Add a CommandButton (Command1) to Form1.
	
	5. Paste the following code in the declarations section of Form1:
	
	  Option Explicit
	
	  Dim spcodbc As Workspace
	  Dim mibd As Database
	  Dim strSQL As String
	  Dim rsCount As Recordset
	  Dim rs As Recordset
	
	  Private Sub Command1_Click()
	  Set spcodbc = Workspaces(0)
	  Set mibd = spcodbc.OpenDatabase("D:\VB5\NWind.mdb")
	  strSQL = "Select * From Categories"
	
	  Set rsCount = mibd.OpenRecordset(strSQL, dbOpenSnapshot)
	  Text1.Text = rsCount.RecordCount
	
	  Set rs = rsCount.OpenRecordset(dbOpenSnapshot)
	
	  End Sub
	
	6. Run the program, and click the CommandButton on Form1. Notice that a General
	  Protection Fault occurs when you click the CommandButton.
	
	Additional query words: IPF Stackfault gpf dao350 dll
	
	======================================================================
	Keywords          : kbDatabase kbJET kbLocalization kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ700 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
