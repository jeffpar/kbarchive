---
layout: page
title: "Q179022: PRB: Optimistic Concurrency Check Fails with SQL Text Field"
permalink: /kb/179/Q179022/
---

## Q179022: PRB: Optimistic Concurrency Check Fails with SQL Text Field

{% raw %}

	Article: Q179022
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to update the same record at the same time by two different clients
	produces an error for one of the clients, and the record is not updated. The
	following should occur:
	
	  "Runtime-error 40002 01503:[Microsoft][ODBC SQL Server Driver][SQL
	  Server]Optimistic concurrency check failed, the row was modified outside
	  of this cursor"
	
	However, if a SQL server text field is part of the update, the update will not
	occur in one of the clients, but no error will be returned to let the user know
	that the update did not occur.
	
	RESOLUTION
	==========
	
	Place a timestamp field in the table and use a SQL Server stored procedure that
	compares the timestamp field to the one returned by the result set. An error
	will be returned by the stored procedure if an attempt is made to update the
	same record with a different timestamp.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The steps below illustrate the problem and the solution. You will need to run
	two instances of the project. To see the problem, click Command1, Command2, and
	Command3 in one instance of the project, and click Command1, Command2 and
	Command4 in the second instance of the project. Then click Command4 to update
	the record in the first instance.
	
	To work around this problem, use the stored procedure by clicking Command1 in the
	first instance and then Command1 and Command5 in the second instance, followed
	by Command5 in the first instance. The stored procedure compares the original
	timestamp and refuses to update the field.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Modify the pub_info table in the pubs database so that it contains a
	  timestamp field. Edit the first record. Use the following code in ISQL-W to
	  accomplish this:
	
	        Alter table pubs.dbo.pub_info add pub_name char(10) null,
	             whattime timestamp null
	
	  After you have run the above successfully in ISQL-W, run the following by
	  itself in ISQL-W:
	
	        Update pub_info set pub_name= "MSPress" where pub_id= "0736"
	
	  The code above will insert a timestamp field in the table and a value in that
	  field for the first record where the pub_id is 0736. If the first record has
	  a different pub_id value, use that value instead. This will also place a
	  value in the timestamp field.
	
	2. Create the following stored procedure using ISQL-W:
	
	        CREATE PROCEDURE updat_pub_info  @id char(4), @mytext text,
	            @pname char(10), @thyme timestamp
	        AS
	        update pub_info
	           set  pr_info= @mytext,
	               pub_name= @pname
	           where pub_id= @id and tsequal(@thyme,whattime)
	
	3. Create a new project and, under References, check Microsoft Remote Data
	  Objects 2.0.
	
	4. Add six command buttons to the form and paste the following code in the
	  General Declarations section of the form:
	
	         Option Explicit
	         Dim en As rdoEnvironment
	         Dim rs As rdoResultset
	         Dim cn As rdoConnection
	         Dim qr As rdoQuery
	         Dim sqlstr As String
	         Dim mytime As Variant
	
	         Private Sub Command1_Click()
	          sqlstr = "select pub_id, pub_name, pr_info, whattime from pub_info"
	          Set rs = cn.OpenResultset(sqlstr, rdOpenKeyset, _
	             rdConcurRowVer, rdExecDirect)
	          mytime = rs(3)  'needed to send the timestamp back to the procedure
	         End Sub
	        Private Sub Command2_Click()
	          rs.Edit
	          rs(1) = "testing"   'update the char field, change in 2nd instance
	        End Sub
	        Private Sub Command3_Click()
	           rs(2) = "mmmmmmmmmm" 'update the text field,change in 2nd instance
	        End Sub
	        Private Sub Command4_Click()
	           rs.Update
	        End Sub
	        Private Sub Command5_Click()
	         'On Error GoTo myerr 'uncomment to trap error
	            Set qr = cn.CreateQuery _
	               ("", "{call updat_pub_info(?,?,?,?)}")
	            qr.rdoParameters(0).Direction = rdParamInput
	            qr.rdoParameters(1).Direction = rdParamInput
	            qr.rdoParameters(2).Direction = rdParamInput
	            qr.rdoParameters(3).Direction = rdParamInput
	            qr(0) = "0736"
	            qr(1) = "QUE"
	            qr(2) = "This is a third text field"
	            qr(3) = mytime  'variant type will compare to timestamp
	            qr.Execute
	            Exit Sub
	            On Error GoTo 0
	        myerr:
	           MsgBox Err.number
	        End Sub
	
	        Private Sub Command6_Click()
	          If Not (rs Is Nothing) Then
	            rs.Close
	          End If
	          cn.Close
	          Unload Me
	        End Sub
	
	        Private Sub Form_Load()
	          Set en = rdoEnvironments(0)
	          'change dsName to the data source name in your odbc administrator
	          Set cn = en.OpenConnection(dsName:="mymachine", _
	              Prompt:=rdDriverNoPrompt, _
	              Connect:="uid=sa;pwd=;database=PUBS;")
	          Command1.Caption = "resultset"
	          Command2.Caption = "edit char field"
	          Command3.Caption = "edit text field"
	          Command4.Caption = "update"
	          Command5.Caption = "update stor proc"
	          Command6.Caption = "quit"
	       End Sub
	
	5. Run two instances of this project. You will want to save the project twice
	  with different names or create two different executables to run.
	
	6. Click Command1 and Command2 in the first instance, and Command1, Command2,
	  and Command4 in the second instance. Click Command4 in the first instance and
	  note that you get the error message indicated above.
	
	7. Click Command1, Command2, and Command3 in the first instance, and Command1,
	  Command2, and Command4 in the second instance. Click Command4 in the first
	  instance and note that no error message is returned.
	
	  If you change what rs(1) is set equal to in one of the applications, you will
	  see that the second instance has updated pub_info, but the first instance has
	  not, and no error message was returned.
	
	8. To work around this problem, try clicking Command1 in the first instance.
	  Click Command1 and Command5 in the second instance and then Command5 in the
	  first instance. An error message is returned about the timestamp field if the
	  error is not trapped.
	
	Additional query words: blob multiuser kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
