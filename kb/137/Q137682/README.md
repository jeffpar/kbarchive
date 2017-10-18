---
layout: page
title: "Q137682: PRB: &quot;Record validation rule is violated&quot; Error in a Form"
permalink: kb/137/Q137682/
---

## Q137682: PRB: &quot;Record validation rule is violated&quot; Error in a Form

	Article: Q137682
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moving off a record that has row-level validation and invalid entries causes the
	form to produce this error message:
	
	  Record validation rule is violated
	
	CAUSE
	=====
	
	Issuing a SKIP or SKIP-1 while positioned on a record that has invalid entries
	fires an implicit TABLEUPDATE() function call, which tries to write your invalid
	data to the table.
	
	RESOLUTION
	==========
	
	Incorporate buffering in the form, and control the use of the TABLEUPDATE()
	function and navigation buttons. For example, remove the asterisk from the code
	in steps 7 and 12 in the "Steps to Reproduce Behavior" section of this article
	to resolve the problem.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Use the following steps to create a form that appends a record to a table using
	a row-level validation rule entered in the Table Designer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the File menu, click New. Then select the Table check box, and click New
	  File. Create a new Table called Table1 that has this structure:
	
	  Field Name   Type       Width
	  -----------------------------
	  FLD1         Character  10
	  FLD2         Character  10
	
	2. On the File menu, click New. Select the Database check box, and click New
	  File. Create a new Database called Data1. Right-click inside the gray
	  DataBase Designer window. Click Add Table, and select Table1.
	
	3. Right-click Table1, which was just added to the database, and click Modify.
	  Click the Table Properties button located in the top-right corner of the
	  Table Designer dialog box. In the Validation Rule field, type "! EMPTY(fld1)"
	  (without the quotation marks). In the Validation Text field, type "FLD1 must
	  have a value." (without the quotation marks)
	
	4. Click OK, and then click OK in the Table Designer dialog box. Click Yes to
	  make structure changes permanent. Double-click the top-left corner of the
	  DataBase Designer window to close it.
	
	5. On the File menu, click New, select the Form check box, and then click New
	  File. Right-click the form, and then click Data Environment. Right-click the
	  gray Data Environment window, click Add. Then in the Add Table or View dialog
	  box, click Other, and then select Table1.dbf.
	
	6. When the table has been added to the data environment, drag both fields from
	  the data environment onto the form. Double-click the top-left corner of the
	  gray Data Environment window to close it.
	
	7. Double-click the form, and place the following code in the form's Activate
	  event:
	
	     APPEND BLANK
	     * THISFORM.Command1.Enabled=.F.
	     * THISFORM.Command2.Enabled=.F.
	     * THISFORM.Command3.Enabled=.F.
	     OPEN DATABASE data1.dbc EXCLUSIVE
	
	8. Place the following code in the form's Load event:
	
	     SET MULTILOCKS ON
	     =CURSORSETPROP("Buffering",2)
	
	9. Place first of four command buttons (Command1) on the form. Set its Caption
	  property to Next, and place the following code in its Click event:
	
	     SKIP
	     THISFORM.Refresh
	
	10. Place another command button (Command2) on the form. Set its Caption
	  property to Previous, and place the following code in its Click event:
	
	      SKIP -1
	      THISFORM.Refresh
	
	11. Place a third command button (Command3) on the form. Set its Caption
	  property to Quit, and place the following code in its Click event:
	
	      RELEASE THISFORM
	
	12. Place a fourth command button (Command4) on the form. Set its Caption
	  property to Write, and place the following code in its Click event:
	
	      lsuccess=TABLEUPDATE(.T.)
	      IF ! lsuccess
	         =AERROR(aErrors)
	         DO CASE
	            CASE aErrors[1,1] = 1583
	               SELECT table1
	               cRuleText=dbgetprop("table1","TABLE","RuleText")
	               =MESSAGEBOX(cRuleText,48)
	         ENDCASE
	      ELSE
	         *   THISFORM.Command1.Enabled=.T.
	         *   THISFORM.Command2.Enabled=.T.
	         *   THISFORM.Command3.Enabled=.T.
	      ENDIF
	
	13. Run the form, and click the Previous button.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q129537 APPEND BLANK Fires Field-Level Validation
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
