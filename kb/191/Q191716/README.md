---
layout: page
title: "Q191716: BUG: Assigning Resultset to RDC Does Not Update Control(s)"
permalink: /kb/191/Q191716/
---

## Q191716: BUG: Assigning Resultset to RDC Does Not Update Control(s)

	Article: Q191716
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
	
	Opening a resultset in code and then assigning it to the Resultset property of
	the MSRDC (which is bound to a text box), will not populate the text box.
	
	RESOLUTION
	==========
	
	A workaround is to simply add another line of code immediately following "Set
	MSRDC1.ResultSet = rs" that specifically references the field desired for the
	text box. For example, Text1.DataField = "au_lname" would populate the first
	record into the text box as well as physically bind the RecordSet to the MSRDC.
	At this point, the MSRDC will have the full capability of scrolling through
	records.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE Project in Visual Basic. Form1 is created by default.
	
	2. Go to Project/Components, and select the "Microsoft Remote Data Control 2.0."
	
	3. Go to Project/References, and select the "Microsoft Remote Data Object 2.0."
	
	4. Drop the MSRDC on the form as well as a TextBox and CommandButton.
	
	5. Set the following properties on the Text box:
	
	  DataSource: MSRDC1
	  DataField: au_lname
	
	6. Paste the following code inside the Command_Click() Event:
	
	        Dim cn As New rdoConnection
	        Dim rs As rdoResultset
	        cn.CursorDriver = rdUseOdbc
	        cn.Connect = "dsn=pubs2;database=pubs;uid=sa;pwd="
	        cn.EstablishConnection rdDriverNoPrompt, False
	        Set rs = cn.OpenResultset("Select * from authors", rdOpenDynamic,
	        rdConcurValues, rdExecDirect)
	        Set MSRDC1.Resultset = rs
	        'Text1.DataField = "au_lname"  'need this line of code to actually
	                                       'populate the text box.
	
	7. Run the application.
	
	Additional query words: kbRDO200bug kbVBp600bug kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
