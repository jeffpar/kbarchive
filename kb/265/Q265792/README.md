---
layout: page
title: "Q265792: DB2OLEDB Leaks Memory When Stored Proc Returns adLongVarChar"
permalink: /kb/265/Q265792/
---

## Q265792: DB2OLEDB Leaks Memory When Stored Proc Returns adLongVarChar

{% raw %}

	Article: Q265792
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an application uses the Microsoft OLE/DB for DB2 Provider to receive a large
	adLongVarChar parameter (for example, 25,000 bytes) from a stored procedure
	call, the Db2oledb.dll and Db2serv.exe processes may leak memory.
	
	The memory leak in Db2serv.exe occurs whenever the stored procedure call
	completes, and is visible in Performance Monitor by viewing the Private Bytes of
	the application process and the Db2serv.exe process. When the application ends,
	the Db2serv.exe memory never decreases. Over time, Db2serv.exe will grow
	indefinitely in size. If the stored procedure call is implemented in a COM
	object and invoked repeatedly from a Visual Basic program, the following error
	message may occur:
	
	  80004005 (unspecified error)
	
	
	CAUSE
	=====
	
	This is caused by a problem in the DB2 Provider's support for stored procedures.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following Visual Basic sample is used to reproduce the problem. The data
	link properties in the UDL file point to an IBM DB2 system configured with a
	stored procedure name of SPSAMPLE, which returns an adLongVarChar parameter of
	25,000 bytes.
	
	  Attribute VB_Name = "Form1"
	  Attribute VB_GlobalNameSpace = False
	  Attribute VB_Creatable = False
	  Attribute VB_PredeclaredId = True
	  Attribute VB_Exposed = False
	  Private Sub Command1_Click()
	
	  Dim recset1 As New ADODB.Recordset
	  Dim connection1 As New ADODB.Connection
	  On Error GoTo ErrorHandler
	
	  'Can see memory usage increase with each repetition of this test
	   For x = 0 To 500
	      
	       connection1.ConnectionString = "File Name=C:\DB2.UDL" 'Connection
	       connection1.CursorLocation = 2
	       connection1.Open
	          
	       Set cmd = New ADODB.Command
	       cmd.Prepared = True
	       cmd.CommandText = "CALL SPSAMPLE (?,?,?)"
	       cmd.CommandType = adCmdText
	         
	       ' Get parameter value and append parameter.
	       Set param = cmd.CreateParameter("foo1", adLongVarChar, adParamOutput)
	       param.Size = 25002
	       cmd.Parameters.Append param
	          
	       ' Get parameter value and append parameter.
	       Set param = cmd.CreateParameter("foo2", adInteger, adParamOutput)
	       param.Value = 0
	       param.Size = 4
	       cmd.Parameters.Append param
	          
	       ' Get parameter value and append parameter.
	       Set param = cmd.CreateParameter("foo3", adInteger, adParamOutput)
	       param.Value = 0
	       param.Size = 4
	       cmd.Parameters.Append param
	         
	       ' Create recordset by executing the command.
	       Set cmd.ActiveConnection = connection1
	       cmd.Execute
	      
	       'The parameter should consist of "VARIABLE CHARACTER STRING OF 25000
	       'BYTES IN LENGTH" repeated 499 times. The very last piece of text in
	       'the varchar is "THE VERY VERY VERY LAST  CHARACTER STRING".
	       'Debug.Print Len(cmd.Parameters(0).Value)
	       'Debug.Print cmd.Parameters(0).Value
	          
	       'Clean Up
	       Set param = Nothing
	       Set cmd = Nothing
	       Set connection1 = Nothing
	      
	  Next x
	    
	  EndMsg = MsgBox("Test Finished", vbOKOnly, "SPSAMPLE")
	     
	  Exit Sub
	      
	  ErrorHandler:
	      ' Output error message
	          MsgBox Error
	
	  End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
