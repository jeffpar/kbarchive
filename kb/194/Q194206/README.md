---
layout: page
title: "Q194206: FIX: Jet Drivers Do Not Support Bit-wise Operators"
permalink: /kb/194/Q194206/
---

## Q194206: FIX: Jet Drivers Do Not Support Bit-wise Operators

{% raw %}

	Article: Q194206
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0,2.0,2.1 SP2,2.5,3.0,3.5,3.51,3.6
	Operating System(s): 
	Keyword(s): kbole kbODBC kbDSupport kbMDAC250
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, versions 1.0, 2.0, 3.0, 3.5, 3.6 
	- Microsoft OLE DB Provider for Jet, version 3.51 
	- Microsoft Data Access Components versions 2.1 SP2, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft ODBC Driver for Access and the Microsoft OLE DB Provider for Jet
	do not provide support for bit-wise operations in SQL statements. Attempts to
	use AND, OR, and XOR with numeric fields in a SQL statement return the result of
	a logical operation (true or false).
	
	CAUSE
	=====
	
	The Microsoft Jet database engine does not support bit-wise operations in SQL.
	
	RESOLUTION
	==========
	
	Bit-wise operations must be replaced with the equivalent mathematical
	expressions or performed on the data outside of a SQL statement (performed in
	Visual Basic for Applications code for example).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can test for a single bit set in a long integer or integer field using the
	following algorithm:
	
	  ( <value> \ (2^<bit>) ) mod 2
	
	This expression will return 1 if the <bit> is set and 0 if <bit> is
	not set. <bit> is numbered from 0 to 30 inclusive where <bit>=0 is
	the first bit. <bit> values greater than 30 will not work with this
	algorithm because Jet uses unsigned long integer values and 2^31 is one larger
	than the largest unsigned long integer value and thus will cause numeric
	overflow when the division is evaluated.
	
	Note that the \ operator and not the / operator is used. The \ operator is used
	for integer division. The / operator is used for floating point division and
	will cause unexpected results when used with this algorithm.
	
	You can check <bit> 31 for a long integer using the following algorithm:
	
	  iif( <value> < 0, 1, 0 )
	
	This works because an unsigned long integer that is less than zero means the
	highest order bit (bit 31 for a long) is set.
	
	Suppose you have a table named Test and a long integer field named TestFlags. You
	can use the following SQL statements to test to see if the bit 11 is set in the
	TestFlags field
	
	  SELECT * FROM Test WHERE ([TestFlags]\2^11) mod 2 = 1
	
	or replace 2^11 with 2048 to save some query calculation time:
	
	  SELECT * FROM Test WHERE ([TestFlags]\2048) mod 2 = 1
	
	You can use the following SQL to test for bit 31
	
	  SELECT * FROM Test WHERE iif( [TestFlags] < 0, 1 ,0 ) = 1
	
	but this SQL statement would be a much more efficient test for bit 31:
	
	  SELECT * FROM Test WHERE [TestFlags] < 0
	
	Note that you can also create calculated columns in SQL to display the results of
	one or more bit checks:
	
	  SELECT ([TestFlags]\2^11) mod 2 AS Bit11Set FROM Test
	
	You can run the following ADO code to verify that this algorithm works correctly
	over various ranges and with various bit flags. Note the test requires a blank
	Microsoft Access database named C:\Db1.mdb and a reference to Microsoft ActiveX
	Data Objects.
	
	     ' START SAMPLE CODE
	     Sub VerifyBitTest()
	     Dim i As Long, min As Long, max As Long, bit As Long
	     Dim conn As New ADODB.Connection
	     Dim rs As New ADODB.recordset
	
	        conn.Open "DRIVER=Microsoft Access Driver (*.mdb);" & _
	        "MAXBUFFERSIZE=128;DBQ=c:\db1.mdb"
	        On Error Resume Next
	           conn.Execute "DROP TABLE Test"
	        On Error GoTo 0
	        conn.Execute "CREATE TABLE Test (TestFlags LONG)"
	        conn.Execute "INSERT INTO Test (TestFlags) VALUES (0)"
	        min = 2 ^ 0: max = 2 ^ 30: bit = 11
	        For i = min To max ' This could take a while.
	           rs.Open "SELECT (" & i & "\2^" & bit & _
	                   ") mod 2 AS BitSet FROM Test", conn
	           If rs!BitSet <> IIf((i And (2 ^ bit)) > 0, 1, 0) Then
	              MsgBox "Bit Test Failure!"
	              Exit Sub
	           End If
	           rs.Close
	           DoEvents
	           If i Mod 100 = 0 Then Debug.Print "Verified " & i & " of " & max
	        Next i
	
	     End Sub
	     ' END SAMPLE CODE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbODBC kbDSupport kbMDAC250 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbOLEDBSearch kbMDACSearch kbMDAC210SP2 kbMDAC250 kbODBCAccess100 kbODBCAccess200 kbODBCAccess300 kbODBCAccess350 kbODBCAccess360 kbOLEDBProvJet351 kbOLEDBProvSearch
	Version           : WINDOWS:1.0,2.0,2.1 SP2,2.5,3.0,3.5,3.51,3.6
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
