---
layout: page
title: "Q155751: HOWTO: Create Form Letter Programmatically in Word with OLE"
permalink: kb/155/Q155751/
---

## Q155751: HOWTO: Create Form Letter Programmatically in Word with OLE

	Article: Q155751
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following example shows you how to programmatically create a mail merge form
	letter with Microsoft Word 6.0 or greater using OLE automation.
	
	MORE INFORMATION
	================
	
	1. Create a table with the following fields: name, address, city, state, and ZIP
	  code. Enter a few records and save it as Testdata.dbf in the Visual FoxPro
	  directory.
	
	2. Create a program with the following lines of code:
	
	  
	
	      oMyform=CREATEOBJECT('new_form')
	      oMyform.SHOW
	      READ EVENTS
	
	      * Form class definition. The form contains two command buttons.
	
	      DEFINE CLASS new_form AS FORM
	         AutoCenter=.T.
	         BackColor=RGB(192,192,192)
	         Width= 180
	         Height= 150
	         Caption= "Using OLE Automation"
	         ADD OBJECT olecmd AS cmdOLE WITH Top=50, Left=60
	         ADD OBJECT mycmd AS cmdquit WITH Top=80, Left=60
	      ENDDEFINE
	
	      * Class definition for the command button. When the user clicks the
	      * command button, OLE Automation begins.
	
	      DEFINE CLASS cmdOLE AS COMMANDBUTTON
	         Width=50
	         Height=25
	         Caption = "OLE"
	
	         PROCEDURE CLICK
	           PUBLIC oWord
	           oWord = CREATEOBJECT("Word.Basic")
	           WITH oWord
	             .AppShow        && Makes Word Visible
	             .FileNewDefault && Opens up blank Word document
	             .MailMergeMainDocumentType(0) &&the active window a document
	
	             * Open the data source
	             * The following command uses C:\VFP as the path
	             * to the data source
	
	           .MailMergeOpenDataSource("C:\VFP\testdata.dbf",0,0,1,0,"", ;
	           "",0, "","","DSN=FoxPro Files;DBQ=C:\VFP;DefaultDir=C:\VFP ;
	               Deleted=1;DriverId=24;JetIniPath=odbcddp.ini;Statistics=0;", ;
	               "SELECT * FROM testdata.dbf","")
	
	             * Activates the mail merge main document
	             .MailMergeEditMainDocument
	
	             * The following Insert commands place text into the Word
	             * document. You can change these commands to place any text in
	             * the document. This example uses a typical business letter
	             * format.
	
	             .Insert("550 College Terrace")    && Inserts a string
	             .InsertPara                       && Inserts a carriage return
	             .Insert("Orangeburg, SC 29915")
	             .InsertPara
	             .InsertPara
	             .InsertMergeField("name")
	             .InsertPara
	             .InsertMergeField("address")
	             .InsertPara
	             .InsertMergeField("city")
	             .Insert(", ")
	             .InsertMergeField("state")
	             .InsertPara
	             .InsertMergeField("zipcode")
	             .InsertPara
	             .InsertPara
	             .InsertPara
	             .Insert("Dear ")
	             .InsertMergeField("name")
	             .Insert(",")
	             .InsertPara
	             .InsertPara
	             .Insert("Thank You For Your Support.")
	             .InsertPara
	             .InsertPara
	             .InsertPara
	             .Insert("Sincerely,")
	             .InsertPara
	             .InsertPara
	             .InsertPara
	             .Insert("Your Name")
	
	             * Merges data records with the main document
	             .MailMergeToDoc
	
	             * Saves the active document with the specified name
	             .FileSaveAs("c:\lett.doc")
	           ENDWITH
	         ENDPROC
	      ENDDEFINE
	
	      * Class definition for the command button. When the user clicks
	      * the command button, the form is released.
	
	      DEFINE CLASS cmdquit AS COMMANDBUTTON
	         Width=50
	         Height=25
	         Caption = "Quit"
	
	         PROCEDURE CLICK
	            ThisForm.Release
	            CLEAR EVENTS
	         ENDPROC
	      ENDDEFINE
	
	3. Save and run the program.
	
	Syntax for MailMergeOpenDataSource
	----------------------------------
	
	MailMergeOpenDataSource(Name[,ConfirmConversions][,ReadOnly]
	[,LinkToSource][,AddToMru][,PasswordDoc][,PasswordDot][,Revert][,WritePassw
	ordDoc][,WritePasswordDot][,Connection][SQLStatement][,SQLStatement1])
	
	If you do not know the information needed for the parameters in the
	MailMergeOpenDataSource, you can record a macro in Word to get the correct
	values.
	
	
	Additional query words: mailmerge
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbAutomation kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : :3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
