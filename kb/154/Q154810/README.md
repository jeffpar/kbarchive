---
layout: page
title: "Q154810: FIX: Errors When Accessing rdoPreparedStatements Not Consistent"
permalink: /kb/154/Q154810/
---

## Q154810: FIX: Errors When Accessing rdoPreparedStatements Not Consistent

{% raw %}

	Article: Q154810
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to access a non-existent rdoPreparedStatement, the error you
	receive depends on whether there are other rdoPreparedStatements in the
	collection.
	
	If there are none, you will get this error:
	
	  40054 - invalid parameter.
	
	If there is at least one, you will get this error:
	
	  40041: Couldn't find object indicated by text.
	
	RESOLUTION
	==========
	
	To minimize the impact of this problem, ensure that any error handlers that may
	trap the preceding errors perform the same code for both errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Studo 97 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Create a DSN in the 32-Bit ODBC section of the Control Panel. Name it "pubs"
	  and configure it to point to the pubs database on a Microsoft SQL server.
	
	2. Start the 32-bit edition of Visual Basic version 4.0 for Windows. Form1 is
	  created by default.
	
	3. Add two Command buttons to the form.
	
	4. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	          Dim rdocon As rdoConnection
	          Dim rdoprep As rdoPreparedStatement
	          Set rdocon = rdoEngine(0).OpenConnection("pubs", False, _
	                                                   False, "uid=;pwd=;")
	          Set rdoprep = rdocon.rdoPreparedStatements("Test1")
	        End Sub
	
	        Private Sub Command2_Click()
	          Dim rdocon As rdoConnection
	          Dim rdoprep As rdoPreparedStatement
	          Set rdocon = rdoEngine(0).OpenConnection("pubs", False, _
	                                                   False, "uid=;pwd=;")
	          Set rdoprep = rdocon.CreatePreparedStatement("Test", _
	                                                 "Select * from Authors")
	          Set rdoprep = rdocon.rdoPreparedStatements("Test1")
	        End Sub
	
	5. Press the F5 key or click Start on the Run menu to run the application. Click
	  Command1, and you should see that Visual Basic gives the following error: (At
	  this point the prepared statement has not been created.)
	
	  40054 - invalid parameter.
	
	6. Stop Visual Basic by using Stop on the Run Menu. Press the F5 key or click
	  the Run menu again. Click the second button. This time the error will be
	  different as the code has created a prepared statement:
	
	  40041: Couldn't find object indicated by text.
	
	REFERENCES
	==========
	
	Visual Basic Online help, search on: "CreatePreparedStatement;
	"rdoPreparedStatements".
	
	Building Client/Server Applications with Visual Basic Manual, Chapter 8.
	
	Additional query words: kbVBp400 kbVS97PS3fix kbVBp kbdse kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
