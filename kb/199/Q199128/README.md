---
layout: page
title: "Q199128: PRB: Error 40041 Calling RDO Parameters Through User Connection"
permalink: kb/199/Q199128/
---

## Q199128: PRB: Error 40041 Calling RDO Parameters Through User Connection

	Article: Q199128
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbRDO kbSQLServ kbUCDesigner kbVBp
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Referencing parameters by name using the User Connection Designer (UCD)
	generates the following error:
	
	  Error 40041 "Object collection: Couldn't find item indicated by text".
	
	The error occurs if the parameter's properties have been viewed in the Query
	Properties page prior to calling the parameter by name.
	
	CAUSE
	=====
	
	When calling parameters by name using UCD or Remote Data Objects (RDO), each
	parameter's name should be preceded by an "@." When viewing the parameter's
	properties, the "@" prefix is removed from the parameter name. This causes RDO
	not to recognize the parameter anymore and error 40041 occurs.
	
	RESOLUTION
	==========
	
	There are two ways to work around this behavior:
	
	- Once the error 40041 occurs, the only way to work around it is to recreate
	  the UserConnection object.
	
	-or-
	
	- Reference parameters by their position in the parameters collection.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Stored Procedure:
	
	Run the following script within ISQL:
	
	       CREATE PROCEDURE Test @ID1 int,
	                             @ID2 int
	       AS
	       DECLARE @RetParam int
	       SELECT @RetParam = @ID1 + @ID2
	       RETURN @RetParam
	       Go
	
	Create the UserConnection:
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, click the Designers tab, then
	  select "Microsoft UserConnection."
	
	3. From the Project menu, choose Add ActiveX Designer, and then select Microsoft
	  UserConnection.
	
	4. Double-click UserConnection1. This opens a dialog box named UserConnection1
	  Properties.
	
	5. On the Connection tab, select either a DSN or DSN-less connection and fill in
	  the appropriate information. On the Authentication tab, leave User Name and
	  Password blank. In the ODBC Prompt Behavior drop-down list box, choose Never.
	
	6. Click OK to save this information and return to the Designer window.
	
	7. Alternate click UserConnection1 and choose Insert Query. This opens a dialog
	  box named Query1 Properties.
	
	8. Insert the source of the Query to be based on the stored procedure, and then
	  select the Test stored procedure.
	
	9. On the Parameters tab, Select ID1 then Select ID2.
	
	10. Click OK to save this information and return to the Designer window.
	
	Visual Basic Code:
	
	1. Add a command button named Command1 to Form1.
	
	2. Paste the following code in the General Declaration's section of Form1:
	
	         Option Explicit
	         Dim cn As New UserConnection1
	         Dim qry As New rdoQuery
	         Dim lngTemp As Long
	         Dim intReturn As Integer
	         Dim er As rdoError
	
	         Private Sub Command1_Click()
	
	         On Error GoTo UC_Error
	         ' Establish connection.
	         cn.EstablishConnection rdDriverNoPrompt
	
	         Set qry = cn.rdoQueries("Query1")
	
	         qry("@ID1") = 2
	         qry("@ID2") = 3
	         qry.Execute
	
	         lngTemp = qry.rdoParameters("RETURN_VALUE")
	
	         ' Check to see if you have a return value.
	         If lngTemp = vbNull Then
	            MsgBox "Sorry no value was returned back", , "Error occurred"
	            GoTo Free
	         Else
	            intReturn = lngTemp
	         End If
	
	         MsgBox "Sum of ID1 and ID2 = " & intReturn, , "Output"
	
	      Free:
	         Set qry = Nothing
	         Set cn = Nothing
	      Exit Sub
	
	      UC_Error:
	     For each er in rdoErrors
	        MsgBox er.Number & ": " & er.Description
	     Next er
	
	      End Sub
	
	3. Press the F5 key to run the program. This causes error 40041 to occur.
	
	REFERENCES
	==========
	
	For more information on the connection designer, please refer to the following
	Microsoft Knowledge Base article:
	
	  Q166281 HOWTO: Create and Implement a UserConnection
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbRDO kbSQLServ kbUCDesigner kbVBp 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
