---
layout: page
title: "Q257230: HOWTO: Display a Form in a Top-Level Form on Startup"
permalink: /kb/257/Q257230/
---

## Q257230: HOWTO: Display a Form in a Top-Level Form on Startup

	Article: Q257230
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 28-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to automatically run a form inside a top-level form, you may find
	that you cannot run the form from the Load or Init method. Both the Load and
	Init method cause the form to appear in the Visual FoxPro screen, rather than in
	the form.
	
	Although the Activate event happens frequently during the life of a form, this is
	the best place from which to run a form on startup. You can put wrapper code
	around the call to the in-top-level form so that it only runs once.
	
	MORE INFORMATION
	================
	
	To use the code sample included in this article, follow these steps:
	
	1. Copy and then save this sample code into a program named RunSDI.prg:
	
	  *!* Adjust this line to point to your VFP 5.0 or 6.0 root directory.
	  #INCLUDE "D:\VS98\VFP98\FOXPRO.H"
	
	  LPARAMETER tcDoForm
	  PUBLIC oContainer
	
	  oContainer = CREATEOBJECT("frmContainer", tcDoForm)
	  IF TYPE("oContainer") = "O" AND NOT ISNULL(oContainer)
	     oContainer.Show()
	  ENDif
	
	  RETURN
	
	  DEFINE CLASS frmContainer AS form
	
	     AutoCenter = .T.
	     Height = 400
	     Width = 600
	     ShowWindow = 2   && As Top-Level Form
	     Caption = "Top-Level Container"
	     Name = "frmContainer"
	     cDoForm = ""
	     lFormCreated = .F.
	   
	     PROCEDURE Init
	        LPARAMETER tcFormToRun
	
	        IF TYPE("tcFormToRun") != "C"
	           tcFormToRun = ""
	        ENDif
	
	        IF UPPER(RIGHT(tcFormToRun, 4)) != ".SCX"
	           tcFormToRun = tcFormToRun + ".SCX"
	        ENDif
	
	        IF FILE(tcFormToRun)
	           THIS.cDoForm = tcFormToRun
	        ELSE
	           MESSAGEBOX("File " + ALLTRIM(tcFormToRun) + ;
	              " not found.", MB_OK, "Top-Level Container")
	           RETURN .F.
	        ENDif
	     ENDproc
	
	  *!* To make your form appear inside the SDI container, run the following 
	  *!* code as is. If you want to make it appear that only one form is 
	  *!* running, comment the "loDoForm.Caption..." line below and uncomment
	  *!* the lines currently commented.
	     PROCEDURE Activate
	        LOCAL loDoForm, llLockScreen
	        
	        WITH This
	           IF NOT .lFormCreated
	              DO FORM (.cDoForm) NAME loDoForm
	             
	              llLockScreen = .LockScreen
	              .LockScreen = .T.
	              
	              lcDoForm = .cDoForm
	              loDoForm.Caption = loDoForm.Caption + ": In Top-Level"
	              
	  *!*	            loDoForm.TitleBar = 0
	  *!*	            loDoForm.BorderStyle = 0
	  *!*	            .Height = loDoForm.Height
	  *!*	            .Width = loDoForm.Width
	  *!*	            .Caption = loDoForm.Caption
	              
	              .LockScreen = llLockScreen
	              .lFormCreated = .T.
	           ENDif
	        ENDwith
	     ENDproc
	  ENDdefine 
	
	2. Create a new form with the following properties and save it as MYFORM.scx:
	
	  ShowWindow = "1 - In Top-Level Form"
	  Height = 200
	  Width = 200
	
	3. From the Visual FoxPro Command window, set the default directory to the
	  directory that contains the RunSDI.prg file.
	
	4. Type the following in the Command window and then press ENTER:
	
	  DO RunSDI.PRG WITH "MYFORM"
	
	A top-level (SDI) form with your form inside appears. Your form was run from the
	Activate event of the SDI container.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Garrett
	Fitzgerald, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
