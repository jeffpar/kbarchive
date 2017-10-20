---
layout: page
title: "Q306916: PRB: VBScript &quot;Type Mismatch&quot; Error When Field Type Is adNumeric"
permalink: /kb/306/Q306916/
---

## Q306916: PRB: VBScript &quot;Type Mismatch&quot; Error When Field Type Is adNumeric

{% raw %}

	Article: Q306916
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.5,2.0,2.5,2.6,2.7
	Operating System(s): 
	Keyword(s): kbnokeyword kbGrpDSVBDB
	Last Modified: 15-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Data Access Components versions 1.5, 2.0, 2.5, 2.6, 2.7 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Visual Basic Scripting Edition (VBScript) to perform a numeric
	comparison or calculation on an adNumeric (131) field type, you may receive the
	following error messages:
	
	  Microsoft VBScript runtime error '800a000d'
	  Type mismatch
	
	  -and-
	
	  Microsoft VBScript runtime error '800a01ca'
	  Variable uses an Automation type not supported in VBScript
	
	CAUSE
	=====
	
	These error messages occur because VBScript cannot properly convert adNumeric
	values to a valid numeric type.
	
	RESOLUTION
	==========
	
	You can use either of the following two possible workarounds:
	
	- Use the CDbl or CInt function to convert the adNumeric field.
	
	- Use JScript, which does not exhibit this behavior.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	You can reproduce this behavior in an Active Server Pages (ASP) page or through a
	simple Visual Basic Script (.vbs) file. The following steps demonstrate how to
	reproduce the problem in a simple .vbs file.
	
	Create the Oracle Table:
	
	Run the following script on your Oracle server to create the sample table:
	
	  DROP TABLE Cust;
	
	              CREATE TABLE Cust
	               (CustID     NUMBER(22,6) PRIMARY KEY,
	                Name   VARCHAR2(50));
	
	              INSERT INTO Cust VALUES(222,'Kent');
	
	              INSERT INTO Cust VALUES(333,'Sally');
	
	      COMMIT;
	     / 
	
	Create the VBS file:
	
	1. In Notepad, create a new text document named Test.vbs, and paste the
	  following code into Test.vbs:
	
	       Set oConn = CreateObject("ADODB.Connection")
	       oConn.open "Provider=MSDAORA;user id=User;" & _
	       "password=password;data source=Oracle816Server;"
	
	       set oRS = oConn.Execute("Select CustID FROM Cust")
	       MsgBox "Numeric field type is 131." & vbcrlf & _
	       "Field Type = " & ors.fields("CustID").type 
	
	       MsgBox "Numeric field * 100 = " & oRS("CustID") * 100
	      'MsgBox "Numeric field * 100 = " & cdbl(oRS("Custid")) * 100
	
	2. Modify the connection string so it points to your Oracle server and provides
	  a valid user name and password.
	
	3. Save Test.vbs to your desktop. You should receive a warning that changing the
	  extension may make the file unstable. Click OK to continue. If you do not see
	  this warning, you may want to ensure that you are showing extensions for
	  known file types.
	
	4. Close Test.vbs.
	
	5. On your desktop, double-click Test.vbs to run the code. You receive the "Type
	  Mismatch" error message.
	
	Workaround
	----------
	
	6. Uncomment the following line of code, which converts the adNumeric field to a
	  double data type:
	
	      'MsgBox "Numeric field * 100 = " & cdbl(oRS("Custid")) * 100
	
	7. Comment the following line of code:
	
	      MsgBox "Numeric field * 100 = " & oRS("CustID") * 100
	
	8. Close and save Test.vbs.
	
	9. On your desktop, double-click Test.vbs to run the code again. Notice that you
	  receive two message boxes and no error messages.
	
	Additional query words: 800a000d 800a01ca
	
	======================================================================
	Keywords          : kbnokeyword kbGrpDSVBDB 
	Technology        : kbAudDeveloper kbASPsearch kbMDACSearch kbMDAC150 kbMDAC200 kbMDAC250 kbMDAC260 kbMDAC270
	Version           : :1.5,2.0,2.5,2.6,2.7
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
