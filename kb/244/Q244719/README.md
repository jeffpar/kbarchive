---
layout: page
title: "Q244719: FIX: Parameter Mismatch with Subqueries When Using Access ODBC"
permalink: kb/244/Q244719/
---

## Q244719: FIX: Parameter Mismatch with Subqueries When Using Access ODBC

	Article: Q244719
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,2.6,4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbMDAC kbODBC kbOLEDB kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210bug
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When executing a parameterized query that contains a subquery, when using the
	Microsoft Open Database Connectivity (ODBC) Driver for Access, various
	unexpected problems occur.
	
	Reported problems include unexpected results (no records returned or the wrong
	records returned) or other errors indicating a type mismatch or a numeric value
	out of range.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the underlying Microsoft Jet 4.0 engine that
	is included with the Microsoft Data Access Components (MDAC) versions noted
	above.
	
	Parameters markers in ODBC are typically mapped from left to right with no regard
	as to whether they are in the main query or a subquery. When you have a main
	query and a subquery, Jet maps the subquery parameters first and maps the main
	query parameters next. Therefore, in most cases, the parameters are mapped in a
	different order than expected. This parameter mapping order means that
	unexpected parameter values are passed in to one or more of the parameters and
	can result in unexpected query results or type mismatch errors (for example, if
	a text value is passed into a numeric parameter).
	
	For example, the following SQL query has four parameters for fields A, B, C, and
	D:
	
	  SELECT * FROM MainTable 
	  WHERE A=? AND B=? AND 
	  E IN ( SELECT E FROM SubQueryTable WHERE C=? AND D=?) 
	
	Normally in ODBC the programmer expects the parameters to be bound in the order
	A, B, C, D; however, because of this particular bug in Microsoft Jet, the
	parameters are bound in the order C, D, A, B.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next service pack
	for Microsoft Data Access Components that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Jet 4.0 Service Pack 4.
	
	For additional information on downloading Jet 4.0 Service Pack 4, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following VBA code reproduces the parameter mismatch problem. Note that your
	VBA project requires a reference to the "Microsoft ActiveX Data Objects 2.1
	Library."
	
	  Sub ParameterMisMatchDemo()
	  Dim conn As New ADODB.Connection
	  Dim cmd As New ADODB.Command
	  Dim rs As ADODB.recordset
	  Dim strSQL As String
	
	      ' This test requires a copy of the Microsoft Access sample database
	      ' NorthWind.mdb in the C:\ folder.
	      conn.Open "Driver=Microsoft Access Driver (*.mdb);" & _
	                "DBQ=C:\NorthWind.mdb;"
	      
	      ' Build SQL statement. Note that there is a parameter marker
	      ' in the main query (Country=?) as well as a parameter marker
	      ' in the subquery (OrderID=?).
	      strSQL = "Select CustomerID From Customers " & _
	               "Where Country=? And CustomerID In " & _
	               "(Select CustomerID From Orders Where OrderID=?)"
	
	      cmd.ActiveConnection = conn
	      cmd.CommandText = strSQL
	      cmd.CommandType = adCmdText
	
	      ' Manually add parameters in the normal "left to right" order.
	      cmd.parameters.Append cmd.CreateParameter("Country", _
	             adVarChar, adParamInput, 15)
	      cmd.parameters.Append cmd.CreateParameter("OrderID", _
	             adInteger, adParamInput)
	
	      ' Set parameter values. These values should filter down the
	      ' resultset to one record with a CustomerID of "HUNGC".
	      cmd.parameters("Country").Value = "USA"
	      cmd.parameters("OrderID").Value = 10375
	      Set rs = cmd.Execute
	
	      ' This should return CustomerID "HUNGC", but instead the following
	      ' error is returned: "Either BOF or EOF is True, or the current record 
	      ' has been deleted; the operation requested by the application requires         
	      ' a current record."
	      MsgBox rs.fields("CustomerID").Value
	
	  End Sub
	
	Additional query words: empty recordset crecordset
	
	======================================================================
	Keywords          : kbDatabase kbJET kbMDAC kbODBC kbOLEDB kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210bug kbMDAC250bug kbMDAC260bug kbMDAC260fix kbMDACNoSweep kbATM 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260 kbODBCAccess400
	Version           : :2.1,2.5,2.6,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
