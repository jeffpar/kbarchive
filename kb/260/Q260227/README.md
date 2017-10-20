---
layout: page
title: "Q260227: BUG: &quot;File is in use&quot; Error with Only One User"
permalink: /kb/260/Q260227/
---

## Q260227: BUG: &quot;File is in use&quot; Error with Only One User

{% raw %}

	Article: Q260227
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbv
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use buffering and grids on a form, you might see the following error
	message even though only one user is accessing tables while records are being
	inserted:
	
	  File is in use by another user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use this sample code to create a database named testData:
	
	     *!* Start of code
	     CREATE DATABASE testData
	
	     CREATE TABLE testTable1 ;
	        (cTable1ID C(10), ;
	         cDesc C(10))
	     CREATE TABLE testTable2 ;
	        (cTable2ID C(10), ; 
	         cTable1ID C(10), ;
	         cDesc C(10))
	
	     ALTER TABLE testTable1 ;
	        ADD PRIMARY KEY cTable1ID TAG cTable1ID
	     ALTER TABLE testTable2 ;
	        ADD PRIMARY KEY cTable2ID TAG cTable2ID
	
	     SELECT testTable2
	     INDEX ON cTable1ID TAG cTable1ID
	
	     ALTER TABLE testTable2 ;
	        ADD FOREIGN KEY ;
	           TAG cTable1ID ;
	           REFERENCES testTable1 ;
	              TAG cTable1ID
	     CLOSE ALL
	     *!* End of code
	
	2. Create a form, and add a text box, a command button, and a grid to the form.
	  Add testTable1 and testTable2 to the DataEnvironment:
	
	     *!* Grid Properties
	     LinkMaster = "testTable1"
	
	     RecordSource = "testTable2"
	     RecordSourceType = 1
	
	     ChildOrder = "cTable1ID"
	     RelationalExpr = "cTable1ID"
	
	     ColumnCount = 2
	
	     Column1.ControlSource = "testTable2.cTable2ID"
	     Column2.ControlSource = "testTable2.cDesc"
	
	     *!* Form Properties
	     DataSession = 2   && Private DataSession
	     BufferMode = 2    && Optimistic Buffering
	
	     *!* Command1.Click
	     INSERT INTO testTable1 ;
	        (cTable1ID, cDesc) ;
	        VALUES ;
	        (ThisForm.Text1.Value, '')
	     INSERT INTO testTable2 ;
	        (cTable2ID, cTable1ID, cDesc) ;
	        VALUES ;
	        ('', ThisForm.Text1.value, '')
	
	     ThisForm.Grid1.SetFocus()
	
	     *!* Grid1.Column2.Text1.Valid
	     INSERT INTO testTable2 ;
	        VALUES ;
	           ('', testTable1.cTable1ID, '')
	
	3. Run the form.
	
	4. Type "aa" (without the quotation marks) into the text box, and then press the
	  command button.
	
	5. Type "aa1" (without the quotation marks) into the text boxes in the grid, and
	  then tab back through them. The second time you tab through the second text
	  box (the one with the Valid method), the error message occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
