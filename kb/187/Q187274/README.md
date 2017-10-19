---
layout: page
title: "Q187274: BUG: Referencing This.Value in Editbox Refresh Causes Error"
permalink: /kb/187/Q187274/
---

## Q187274: BUG: Referencing This.Value in Editbox Refresh Causes Error

	Article: Q187274
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Referencing This.Value property within an Editbox object's Refresh event causes
	a memory protection error in Visual FoxPro. Under Windows 95, an application
	error appears indicating an invalid page fault occurred. On Windows NT 4.0, a
	Dr. Watson for Windows NT dialog appears stating an application error occurred
	and that Visual FoxPro caused an exception violation at a given memory address.
	
	RESOLUTION
	==========
	
	Call the DODefault() method of the Editbox before the This.Value command in the
	Refresh event. In the code example below, change the Refresh event code to read
	as follows:
	
	     PROCEDURE Refresh
	        IF THISFORM.chkRef.Value
	           DODEFAULT()
	           WAIT WINDOW THIS.Value NOWAIT
	        ENDIF
	        RETURN
	     ENDPROC
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code and run the program:
	
	        CLOSE ALL
	
	        CREATE CURSOR Test (Field1 M, Field2 C(12), Key N(2))
	        INSERT INTO Test (Field1, Field2, Key) VALUES ;
	           ("This is some text.","More", 1)
	        INSERT INTO Test (Field1, Field2, Key) VALUES ("", "Other", 2)
	        CREATE DATABASE Test
	        CREATE SQL VIEW "TestView" AS SELECT * FROM Test WHERE Key = ?m.Key
	
	        Key = 1
	        USE TestView
	
	        PUBLIC ox
	        ox=CREATEOBJECT("frmTest")
	        ox.Visible = .T.
	
	        RETURN
	
	        DEFINE CLASS FrmTest AS FORM
	           ADD OBJECT edtField1 AS edtField1
	           ADD OBJECT txtField2 AS txtField2
	           ADD OBJECT cmdButton AS cmdButton
	           ADD OBJECT chkRef AS chkRef
	
	        ENDDEFINE
	
	        DEFINE CLASS chkRef AS CheckBox
	           Top = 190
	           Width = 200
	           Left = 20
	           Caption = "Refer to the Value in the Refresh"
	           Value = .F.
	        ENDDEFINE
	
	        DEFINE CLASS cmdButton AS CommandButton
	           Top = 20
	           Height = 30
	           Left = 200
	           Caption = "Another Record"
	           PROCEDURE Click
	              Key = TestView.Key + 1
	              IF m.Key > RECCOUNT("Test")
	                 Key = 1
	              ENDIF
	              =REQUERY("TestView")
	              THISFORM.Refresh()
	              RETURN
	          ENDPROC
	
	        ENDDEFINE
	
	        DEFINE CLASS txtField2 AS TextBox
	           Top = 20
	           Height = 30
	           Left = 20
	           ControlSource = "TestView.Field2"
	        ENDDEFINE
	
	        DEFINE CLASS edtField1 AS EditBox
	           Top = 100
	           Left = 20
	           ControlSource = "TestView.Field1"
	
	           PROCEDURE Refresh
	              IF THISFORM.chkRef.Value
	                 WAIT WINDOW THIS.Value NOWAIT
	              ENDIF
	              RETURN
	           ENDPROC
	
	        ENDDEFINE
	
	2. When the form appears, click the check box and press the command button. The
	  error message appears.
	
	Additional query words: kbDSupport KBDSE crash hang gpf kbVFp500bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
