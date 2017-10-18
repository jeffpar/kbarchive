---
layout: page
title: "Q192578: HOWTO: Creating and Customizing a ProjectHook Class"
permalink: kb/192/Q192578/
---

## Q192578: HOWTO: Creating and Customizing a ProjectHook Class

	Article: Q192578
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how you can create a custom ProjectHook class and use
	it to modify the behavior of the various project events.
	
	MORE INFORMATION
	================
	
	The ProjectHook object allows programmatic access to project events. The
	following steps illustrate how you can create and modify a class, based on the
	ProjectHook base class, to control and/or modify the project events:
	
	1. Create a Sub-class of the ProjectHook class as follows:
	
	  CREATE CLASS ProjHook AS ProjectHook of myProjHook
	
	2. In the Class Designer add a method, fModify, to the class. Enter the
	  following code for the method:
	
	        LPARAMETERS fName
	        fExt = RIGHT(fName,3)
	        DO CASE
	        CASE fExt = "prg"
	           MODIFY COMMAND fName
	        CASE fExt = "scx"
	           MODIFY SCREEN fName
	        CASE fExt = "frx"
	           MODIFY REPORT fName
	        CASE fExt = "vcx"
	           MODIFY CLASS fName
	        CASE fExt = "dbc"
	           MODIFY DATABASE fName
	        CASE fExt = "dbf"
	           MODIFY STRUCTURE fName
	        OTHERWISE
	           MESSAGEBOX("Unable to Edit File")
	        ENDCASE
	
	  This method uses a MODIFY command specific to the file type passed to it.
	
	3. Add the following code to the INIT event of the class:
	
	        Wait window "Loading ProjectHook Class............" TIMEOUT 1
	
	  This method is invoked when the Project Designer is opened.
	
	4. Add the following code to the QueryRemoveFile event of the class:
	
	        LPARAMETERS oFile, cClassName, lDeleteFile
	        msgsel = MESSAGEBOX("Would You like to Edit the File",4)
	        IF msgsel = 6
	        THIS.fModify(oFile.Name)
	        ENDIF
	        msgsel = MESSAGEBOX("Remove file (Y/N): ",4)
	        IF msgsel = 7
	           NODEFAULT
	        ELSE
	           WAIT WINDOW "Removing File......." TIMEOUT 1
	        ENDIF
	
	  The preceding code runs every time a file is removed from the Project Manager.
	
	5. Add the following code to the QueryRunFile event of the class:
	
	        LPARAMETERS oFile
	        MSGSEL = MESSAGEBOX("Would You like to Edit the File",4)
	        IF MSGSEL = 6
	        THIS.FMODIFY(oFile.NAME)
	        ENDIF
	        WAIT WINDOW "Now Running the File....." TIMEOUT 1
	
	  The preceding code executes whenever a file is run from the Project Manager.
	
	6. Add the following code to the Error event of the class:
	
	        LPARAMETERS nError, cMethod, nLine
	        errmsg = MESSAGE(nError)
	        MESSAGEBOX("Error #: "+ALLTRIM(STR(nError))+CHR(13)+;
	              "Error Msg: "+errmsg+CHR(13)+;
	              "In Method: "+cMethod+CHR(13)+;
	              "At Line: "+ALLTRIM(STR(nLine)))
	
	  The preceding code executes whenever there is a run-time error in a method.
	
	7. Close and save the Class.
	
	8. Now you can associate the class to a Project.
	
	REFERENCES
	==========
	
	For more information on how to associate a class to a Project, please see the
	following:
	
	  Visual FoxPro Help; search on: "Project Manager Hooks" (without the quotation
	  marks)
	
	Additional query words: kbVFp600 kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
