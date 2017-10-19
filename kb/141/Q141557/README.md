---
layout: page
title: "Q141557: FIX: Cursor's ReadOnly Property Carried to Other Data Sessions"
permalink: /kb/141/Q141557/
---

## Q141557: FIX: Cursor's ReadOnly Property Carried to Other Data Sessions

	Article: Q141557
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the same table in separate forms that have Private Data Sessions,
	the ReadOnly property of a cursor is carried over from the first session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate the behavior. The behavior is specific to the
	order in which you launch these forms. If you launch the ReadWrite form first,
	issuing the APPEND BLANK command does in fact append a blank record to the table
	and the record is visible in the grid on the ReadOnly form. On the other hand,
	if you launch the ReadOnly form first, issuing the APPEND BLANK command causes
	an error. Both these behaviors show that the Data Session is not truly private.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form and call it ReadWrite. Right-click the form, and select Data
	  Environment. Then right-click the Data Environment window, and select Add.
	
	2. Select a table and add it to the Data Environment. Then select the table in
	  the Data Environment, and change its ReadOnly property to false (.F.) in the
	  Property Sheet.
	
	3. Select the form and change its DataSession property to 2 - Private Data
	  Session.
	
	4. Place a command button on the form, and change its Caption property to
	  Append. Then add the following code to its Valid event:
	
	     APPEND BLANK
	
	5. Create a second form, and name it ReadOnly. Right-click the new form, and
	  select Data Environment. Then right-click the Data Environment window and
	  select Add. Select the same table selected in step 2 and add it to the Data
	  Environment.
	
	6. Select the table in the Data Environment and change its ReadOnly property to
	  true (.T.) in the Property Sheet. Select the form and change its DataSession
	  property to 2 - Private Data Session. Drag the table from the Data
	  Environment to the ReadWrite form to create s grid.
	
	7. Run the ReadWrite form. Then run the ReadOnly form. Click the Append button
	  in the ReadWrite form. Then click the first blank record in the grid on the
	  ReadOnly form. Note that although you can click into the new record and see
	  the caret blinking there, you cannot enter data into the blank record.
	
	8. Close both forms. With the USE command, open the table and delete the added
	  record. Then pack the table.
	
	9. Run the ReadOnly form. Then run the ReadWrite form. Note that you reversed
	  the order in which the forms were launched. Click the Append button in the
	  ReadWrite form. Note that the Trace window appears with the Valid code of the
	  command button exposed highlighting the line of code that states:
	
	     APPEND BLANK
	
	  Also, an error occurs that states:
	
	  Cannot update cursor.
	
	  After you click Ignore, note that the grid does not have a blank record.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
