---
layout: page
title: "Q156506: PRB: ADD OBJECT Syntax Error from Browser Code Snippet"
permalink: kb/156/Q156506/
---

## Q156506: PRB: ADD OBJECT Syntax Error from Browser Code Snippet

	Article: Q156506
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A code snippet exported by the Class Browser generates a syntax error if the
	code uses the ADD OBJECT command to add an object to a container object in a
	class. It appears that the Class Browser exported the code incorrectly. In fact,
	Visual FoxPro has a language limitation that does not allow the ADD OBJECT
	command to add an object to a container object in a class definition.
	
	CAUSE
	=====
	
	Even though the Class Browser cannot produce actual working code in this
	situation, it documents the intent of the class rather than omit the code
	altogether.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can use the Class Browser to export code from within a class. Code exported
	may be incorporated in a program or it may just be used for the purpose of
	documentation.
	
	The Class Browser designers decided it would be helpful to document code even
	though it cannot work because of a language limitation of Visual FoxPro. While
	the code does not work, the Class Browser describes in code what the developer
	achieved through the visual user interface.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro click New on the File menu and click the Form button to
	  start the form designer.
	
	2. Click Create Formset on the Form menu. In the Properties sheet for the
	  formset, change the name property to "Testfrm1" (without the quotation
	  marks).
	
	3. Click the Command Button tool on the Form Control toolbar, and click on the
	  middle of the form to place the command button on the form.
	
	4. Set the following properties for the command button:
	
	  Top = 51
	  Left = 112
	  Height = 32
	  Width = 140
	
	  This step is optional, but it establishes the values shown in this example.
	
	5. Click Save as class on the File menu. In the Save As Class dialog box click
	  the "Entire Form Set" option button, and name the class "Testfrm1" and the
	  class library "testfrm1.vcx."
	
	6. Close the Form Designer. Save the form as Testfrm1.scx.
	
	7. Select Class Browser on the Tools menu.
	
	8. In the Class Browser Opening dialog box select your class library:
	  Testfrm1.vcx
	
	9. Select "testfrm1.vcx."
	
	10. Click the "View Code" button (the third button from the left).
	
	11. Click "Select All" on the Edit menu, then select "Copy" from the Edit menu
	  to put the code in the Clipboard.
	
	12. Close the Class Browser, and in the Command window type the following:
	
	         MODIFY COMMAND Testfrm1
	
	13. Paste the code from the Clipboard into Testfrm1.prg.
	
	14. At the top of the code insert the following commands:
	
	         PUBLIC oformset1
	         oformset1=CREATEOBJECT("testfrm1")
	         oformset1.Show()
	         RETURN
	
	  The entire program should look like the following:
	
	         PUBLIC oformset1
	         oformset1=CREATEOBJECT("testfrm1")
	         oformset1.Show()
	         RETURN
	
	         **************************************************
	         *-- Formset:      testfrm1 (c:\VFP50\testfrm1.vcx)
	         *-- ParentClass:  formset
	         *-- BaseClass:    formset
	         *
	         DEFINE CLASS testfrm1 AS formset
	
	           DataSession = 1
	           AutoRelease = .T.
	           Name = "Testfrm1"
	
	           ADD OBJECT form1 AS form WITH ;
	             DoCreate = .T., ;
	             Caption = "Form1", ;
	             Name = "Form1"
	
	           ADD OBJECT testfrm1.form1.command1 AS commandbutton WITH ;
	             Top = 51, ;
	             Left = 112, ;
	             Height = 32, ;
	             Width = 140, ;
	             Caption = "Command1", ;
	             Name = "Command1"
	
	         ENDDEFINE
	         *
	         *-- EndDefine: testfrm1
	         **************************************************
	
	15. Save and run the program Testfrm1.prg.
	
	The program stops with the following error:
	
	  Syntax error
	
	The following line is highlighted:
	
	     ADD OBJECT testfrm1.form1.command1 AS commandbutton WITH ;
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
