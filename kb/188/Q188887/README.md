---
layout: page
title: "Q188887: HOWTO: How to Display Print Preview in a Top-Level Form"
permalink: /kb/188/Q188887/
---

## Q188887: HOWTO: How to Display Print Preview in a Top-Level Form

{% raw %}

	Article: Q188887
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro version 6.0 has added the IN WINDOW clause to make it easier to
	display the Print Preview window in a top-level form.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro version 5.0, it is not possible to enable the Print Preview to
	display in a top-level form. The Print Preview window is always displayed in the
	Visual FoxPro desktop, which is not usually displayed with a top-level form.
	Visual FoxPro 6.0 has changed this; you can now direct the Print Preview window
	into an existing top-level form by including the IN WINDOW clause in the report
	form command. The following code demonstrates how the IN WINDOW clause can work
	with a top-level form:
	
	Sample Code
	-----------
	
	     * Start of code example
	     *
	     public oMain
	     oMain = CREATEOBJECT('main')  && open main form
	     oMain.visible = .t.
	     CREATE TABLE table_1 (field1 C(10))
	     FOR lnI=1 TO 3
	        INSERT INTO table_1 VALUES ('xx')
	     ENDFOR
	
	     CREATE REPORT report_1 FROM table_1
	
	     **************************************************
	     *-- Class:        main
	     *-- ParentClass:  form
	     *-- BaseClass:    form
	     *
	     DEFINE CLASS main AS form
	
	       Top = 0
	       Left = 0
	       Height = 165
	       Width = 220
	       DoCreate = .T.
	       Caption = "Main"
	       Name = "main"
	       opform = .F.
	
	       ADD OBJECT command1 AS commandbutton WITH ;
	         Top = 24, ;
	         Left = 24, ;
	         Height = 37, ;
	         Width = 157, ;
	         Caption = "Show Print Preview", ;
	         Name = "Command1"
	
	       ADD OBJECT command2 AS commandbutton WITH ;
	         Top = 84, ;
	         Left = 24, ;
	         Height = 37, ;
	         Width = 157, ;
	         Caption = "Close", ;
	         Name = "Command2"
	
	       PROCEDURE command1.Click
	         oPForm = CREATEOBJECT('printpreview')
	         oPform.visible = .t.    && open printpreview form
	     *******
	     * This is the report form command that uses the IN WINDOW Clause.
	     * Notice that it uses both WINDOW and IN WINDOW clauses. The WINDOW
	     * clause tells the Print Preview window to take on the characteristics
	     * of the window, while IN WINDOW tells in what window to display the
	     * Print Preview window.
	     *******
	      REPORT FORM report_1 PREVIEW WINDOW printpreview IN WINDOW printpreview
	      ENDPROC
	
	      PROCEDURE command2.Click
	        thisform.release
	      ENDPROC
	
	     ENDDEFINE
	     *
	     *-- EndDefine: main
	     **************************************************
	
	     DEFINE CLASS printpreview AS form
	
	       ScaleMode = 3
	         Top = 0
	         Left = 0
	         Height = 454
	         Width = 641
	         ShowWindow = 2
	         DoCreate = .T.
	         Caption = "Print Preview Window"
	         Movable = .T.
	         TitleBar = 0
	         WindowState = 0
	         SizeBox = .F.
	         Name = "printpreview"
	
	     ENDDEFINE
	
	     *End of Sample code
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by David
	Botzenhart, Microsoft Corporation
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
