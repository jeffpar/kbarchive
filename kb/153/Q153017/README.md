---
layout: page
title: "Q153017: BUG: Invalid Operation After Setting RDC Resultset = Nothing"
permalink: /kb/153/Q153017/
---

## Q153017: BUG: Invalid Operation After Setting RDC Resultset = Nothing

	Article: Q153017
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbODBCkbbuglist
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing a refresh method against a remote data control after setting the RDC's
	Resultset property to Nothing can cause one of these errors:
	
	  "Invalid operation for forward only cursor"
	
	-or-
	
	  "Unknown error or operation"
	
	CAUSE
	=====
	
	This error occurs because setting the ResultSet property to Nothing also causes
	the ResultsetType property to be set to 0. Zero is not a valid setting for the
	ResultsetType property.
	
	WORKAROUND
	==========
	
	To avoid this problem, set the ResultsetType property to the valid value of 1
	after setting the Resultset equal to Nothing. For example, the following code
	will work correctly and not cause any errors:
	
	     Set MSRDC1.Resultset = Nothing
	     MSRDC1.ResultsetType = 1
	     MSRDC1.Refresh
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single Remote Data control to Form1.
	
	3. Add the following code to the form, making sure to change the OpenConnection
	  parameters to match an existing data source:
	
	     Private Sub Form_Click()
	        Dim cn As rdoConnection
	          Dim rsTemp As rdoResultset
	
	          Set cn = rdoEnvironments(0).OpenConnection("", rdDriverNoPrompt, _
	           False, "DSN=MyDSN;database=pubs;uid=sa;pwd=;")
	          Set rsTemp = cn.OpenResultset("Select * From Authors;", _
	           rdOpenKeyset)
	          Set MSRDC1.Resultset = rsTemp
	          MSRDC1.Refresh
	          Set MSRDC1.Resultset = Nothing
	          MSRDC1.Refresh
	     End Sub
	
	4. Press the F5 key, or select Start from the Run menu to run the application.
	  Click once on the form to execute the code and to see the error.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
