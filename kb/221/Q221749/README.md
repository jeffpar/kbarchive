---
layout: page
title: "Q221749: FIX: Top Level Forms with Menus Allow Access to Datasession 0"
permalink: kb/221/Q221749/
---

## Q221749: FIX: Top Level Forms with Menus Allow Access to Datasession 0

	Article: Q221749
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox
	Last Modified: 09-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have an application based on a top-level form, which runs several child
	forms that are called from a menu. One of these forms contains a grid. If the
	table or cursor that is the grid's RecordSource is closed and then another form
	is instantiated, the system datasession will be selected and Visual FoxPro will
	be placed in an unstable state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The system datasession is used by Visual FoxPro to open the Foxuser resource
	file, form and class library files, report files, and so forth. It should not be
	accessible to the user under any circumstances. If the system datasession
	becomes selected, closing tables in it will cause Visual FoxPro to produce
	errors or terminate.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  PUBLIC oGrid, oMain
	     * Make Form2 - it must be an SCX.
	     MODIFY FORM form2 NOWAIT
	     = aselobj(xx,1)
	     xx[1].ShowWindow = 1   && Make it In Top-Level
	     KEYBOARD '{y}'
	     Release window 'form designer - form2.scx'
	
	     * Create a table and add some data
	     CREATE TABLE TEMP(TEMP1 C(6), TEMP2 C(6))  
	     INSERT INTO TEMP (TEMP1, TEMP2) ;
	     VALUES ("FIELD1", "FIELD2")
	
	     CLOSE DATA ALL && Clean Start, no open tables open to start.
	
	     oMain = CREATEOBJECT('MAIN')  && Top-level form
	     oMain.Show
	     READ events
	     WAIT window 'DataSession Number is: '+alltr(str(set('datasession')))
	     * Let's avoid problems and go back to datasession 1
	     SET DATASESSION TO  1
	     CLOSE DATA ALL
	
	     DEFINE CLASS grid1 AS form
	         ShowWindow = 1
	         Caption = "GRID1"
	         Name = "GRID1"
	         ADD OBJECT grid1 AS grid WITH ;
	             ColumnCount = 2, ;
	             Name = "Grid1"
	     ENDDEFINE
	
	     DEFINE CLASS main AS form
	         ShowWindow = 2
	         Caption = "Click on Grid Form menu item"
	         Name = "MAIN"
	
	         PROCEDURE Show
	             LPARAMETERS nStyle
	             DO MenuProc WITH thisform,.T.
	         ENDPROC
	
	         PROCEDURE queryunload
	             Clear events
	         ENDPROC
	     ENDDEFINE
	
	     PROC MenuProc
	         LPARAMETERS oFormRef, getMenuName
	        	DEFINE MENU MyMenu IN (oFormRef.name) BAR
	     	DEFINE PAD Pad1 OF MyMenu PROMPT "Grid Form" COLOR SCHEME 3 ;
	     	    KEY ALT+C, ""
	     	ON SELECTION PAD Pad1 OF MyMenu ;
	     	    DO Proc1
	     	DEFINE PAD Pad2 OF MyMenu PROMPT "Form 2" COLOR SCHEME 3 ;
	     	    KEY ALT+F, ""
	     	ON SELECTION PAD Pad2 OF MyMenu ;
	     	    DO Proc2
	     	Activate MENU MyMenu NOWAIT
	     ENDPROC
	
	     PROCEDURE Proc1
	         SELECT 0
	         USE TEMP alias TEMP
	         SELECT TEMP
	         oGrid=create('grid1')
	         oGrid.show
	         oMain.Caption = 'Click on Form2 menu item'
	     ENDPROC
	
	     PROCEDURE Proc2
	         SELECT TEMP
	         USE
	         oGrid.release
	         DO form form2
	         oMain.Caption = "Click on Close Box to close =====>"
	     ENDPROC
	
	2. Click on the Grid Form menu pad.
	
	3. Click on the Form 2 menu pad.
	
	4. Click on the close box in the main form.
	
	5. A WAIT WINDOW will be displayed with the current Datasession, which will be
	  0.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
