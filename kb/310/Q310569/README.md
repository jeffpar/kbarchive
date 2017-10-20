---
layout: page
title: "Q310569: PRB: Using Object.Value in UPDATE - SQL Fails"
permalink: /kb/310/Q310569/
---

## Q310569: PRB: Using Object.Value in UPDATE - SQL Fails

{% raw %}

	Article: Q310569
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbD
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Object.Object.Value reference in an UPDATE - SQL command, you
	may receive the following error message:
	
	  Alias 'object' is not found.
	
	This error occurs only if the Object.Object.Value syntax appears on the right
	side of the assignment in the SET clause.
	
	RESOLUTION
	==========
	
	To work around this problem, you can find other ways to use the object value.
	The sample code in the "More Information" section shows some possibilities.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code:
	
	  PUBLIC ofrmUpdate
	
	  ofrmUpdate=createOBJECT("frmUpdate")
	  ofrmUpdate.Show()
	  RETURN
	
	  DEFINE CLASS frmUpdate AS form
	
	     Top = 0
	     Left = 0
	     Height = 115
	     Width = 181
	     DoCreate = .T.
	     Caption = "Update Form"
	     cValue = "NewValue"
	     Name = "frmUpdate"
	
	     ADD OBJECT cmdUpdate AS commandbutton WITH ;
	        Top = 70, ;
	        Left = 5, ;
	        Height = 20, ;
	        Width = 88, ;
	        Caption = "UPDATE - SQL", ;
	        Name = "cmdUpdate"
	
	     ADD OBJECT txtValue AS textbox WITH ;
	        Value = "Value To Set Field To...", ;
	        ControlSource = "ThisForm.cValue", ;
	        Height = 23, ;
	        Left = 4, ;
	        Top = 4, ;
	        Width = 154, ;
	        Name = "txtValue"
	
	     ADD OBJECT cmdInsert AS commandbutton WITH ;
	        Top = 92, ;
	        Left = 5, ;
	        Height = 20, ;
	        Width = 88, ;
	        Caption = "INSERT INTO", ;
	        Name = "cmdInsert"
	
	     ADD OBJECT cmdBrowse AS commandbutton WITH ;
	        Top = 82, ;
	        Left = 96, ;
	        Height = 20, ;
	        Width = 62, ;
	        Caption = "BROWSE", ;
	        Name = "cmdBrowse"
	
	     ADD OBJECT txtKey AS textbox WITH ;
	        Alignment = 3, ;
	        Value = 2, ;
	        Height = 23, ;
	        Left = 160, ;
	        Top = 4, ;
	        Width = 19, ;
	        Name = "txtKey"
	
	     PROCEDURE Load
	        CREATE TABLE tblUpdate (cField1 C(25), iField1 I)
	        INSERT INTO tblUpdate VALUES ("Hello", 1)
	        INSERT INTO tblUpdate VALUES ("GoodBye", 2)
	        INSERT INTO tblUpdate VALUES ("So long", 3)
	        INSERT INTO tblUpdate VALUES ("Adios", 4)
	        INSERT INTO tblUpdate VALUES ("Greetings!", 5)
	     ENDPROC
	
	     PROCEDURE cmdUpdate.Click
	        *!* The following lines will cause the error.
	        UPDATE tblUpdate ;
	           SET cField1 = ThisForm.txtValue.VALUE ;
	           WHERE iField1 = 2
	        *!* UPDATE tblUpdate ;
	           SET cField1 = THIS.PARENT.txtValue.VALUE ;
	           WHERE iField1 = 2
	
	        *!* The following lines will not cause the error.
	        *!* UPDATE tblUpdate ;
	           SET cField1 = EVALUATE("THIS.PARENT.txtValue.VALUE") ;
	           WHERE iField1 = 2
	        *!* UPDATE tblUpdate ;
	           SET cField1 = ThisForm.cValue ;
	           WHERE iField1 = 2
	        *!* UPDATE tblUpdate ;
	           SET cField1 =  EVALUATE("THIS.PARENT.txtValue.VALUE") ;
	           WHERE iField1 = ThisForm.txtKey.VALUE
	        *!* UPDATE tblUpdate ;
	           SET cField1 = ThisForm.cValue ;
	           WHERE iField1 = ThisForm.txtKey.VALUE
	        *!* The following two lines, taken together, do not cause the error.
	        *!* loTextbox = ThisForm.txtValue
	        *!* UPDATE tblUpdate ;
	           SET cField1 = loTextbox.Value ;
	           WHERE iField1 = 2
	     ENDPROC
	
	     PROCEDURE cmdUpdate.Error
	        LPARAMETERS nError, cMethod, nLine
	        =MESSAGEBOX("Error in UPDATE command: " + MESSAGE() )
	        RETURN
	     ENDPROC
	
	     PROCEDURE cmdInsert.Click
	        INSERT INTO tblUpdate ;
	           VALUES (ThisForm.txtValue.Value, RECCOUNT() + 1 )
	     ENDPROC
	
	     PROCEDURE cmdBrowse.Click
	        BROWSE
	     ENDPROC
	  ENDDEFINE
	
	2. Uncomment each UPDATE statement in turn to see the problem and the various
	  workarounds.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
