---
layout: page
title: "Q100367: FIX: Referencing Data Object Gives Error: Object not an Array"
permalink: /kb/100/Q100367/
---

## Q100367: FIX: Referencing Data Object Gives Error: Object not an Array

{% raw %}

	Article: Q100367
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Object not an Array" error results when you reference a field of a dynaset,
	table, or snapshot object in a form or module that does not contain a Set
	statement for that dynaset, table, or snapshot. The error occurs when Visual
	Basic attempts to compile your program.
	
	
	CAUSE
	=====
	
	This error is caused by a parsing problem in the Visual Basic programming
	environment. The Visual Basic parser does not recognize the object type because
	there is no Set statement in the same form or module.
	
	WORKAROUND
	==========
	
	Add a dummy Sub procedure to each form or module, and use a Set statement that
	refers to the global database / table / dynaset in a meaningful way (for
	example, Set myds = db.CreateDynaset(...) not set myDs = myDs). Give the Sub
	procedure a name like 'AAAAA_Fix_Parser' so it becomes the first code parsed in
	that form or module. Make sure the dynaset set in the dummy Sub procedure is the
	exact same dynaset that is causing the problem.
	
	
	When adding more than one dummy Sub procedure to a project, give each Sub
	procedure a different name (AAAAA1, AAAAA2, and so on) to avoid name collisions
	that could complicate your existing problem.
	
	
	For example, use the following dummy procedure if MyDs is the dynaset causing the
	problem:
	
	     Sub AAAAAA_Fix_Parser
	        Set MyDs = MyDB.CreateDynaset("...")
	     End Sub
	
	You never need to execute the code in the Sub procedure or even call the Sub
	procedure. Once you add the Sub procedure, the parser sees the Set statement(s)
	before it tries to parse any other code, so it does not have trouble with the
	global objects. After adding the Sub procedure, you do not have to tweak the
	code every time you reload the project; you can do it once and save it.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual Basic version 3.0
	for Windows. This bug was corrected in Microsoft Visual Basic version 4.0 for
	Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. From the File menu, choose New Module (ALT, F, M). Module1 is created.
	
	3. Add a text box (Text1) to Form1.
	
	4. Add the following code to the General section of Module1:
	
	     Global MyDs As Dynaset
	
	5. Add the following code to Module1:
	
	     Sub main ()
	        Dim MyDB As Database
	        Dim SQLStmt As String
	        Const DB_READONLY = 4   ' Set constant.
	        Set MyDB = OpenDatabase("BIBLIO.MDB")   ' Open database.
	        ' Set text for the SQL statement.
	        SQLStmt = "SELECT * FROM Publishers WHERE State = 'NY'"
	        ' Create the new Dynaset.
	        Set MyDs = MyDB.CreateDynaset(SQLStmt, DB_READONLY)
	        form1.Show
	      End Sub
	
	6. Add the following code to the Form_Load event procedure of Form1:
	
	     Sub Form_Load ()
	        Text1.Text = MyDs("state")
	     End Sub
	
	7. From the Options menu, choose Project (ALT, O, P). The Projects Options
	  dialog is displayed.
	
	8. From the Project Options dialog, set the Start Up Form to Sub Main and choose
	  OK.
	
	9. From the Run menu, choose start (ALT, R, S) or press F5.
	
	The following line of code returns the error "Object not an Array":
	
	     Text1.text = MyDs("state").
	
	Additional query words: buglist3.00 fixlist4.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
