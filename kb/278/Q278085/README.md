---
layout: page
title: "Q278085: HOWTO: Retrieve Word Document Information from Visual FoxPro"
permalink: kb/278/Q278085/
---

## Q278085: HOWTO: Retrieve Word Document Information from Visual FoxPro

	Article: Q278085
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbFSO
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to retrieve Microsoft Word 2000 document properties from
	Visual FoxPro. These properties (such as the author, the date that the document
	was last modified, and so on) are the same properties that you see when you
	right-click a Word document in Windows Explorer, click Properties, and then
	click either the Summary tab or the General tab.
	
	MORE INFORMATION
	================
	
	This code specifically applies to Word 2000 documents. If you want to use the
	code to retrieve the information from other Microsoft Office file types, you
	need to access the object model for that application.
	
	Although the FoxPro ADIR() function creates an array that holds various operating
	system attributes of a file, it does not contain any information stored
	specifically by Word. To obtain this information, you must use the
	FileSystemObject.
	
	1. Create or copy several Word 2000 documents into a folder.
	
	2. In the same folder, create a program and paste the following code:
	
	  LOCAL cDir
	  cDir = ""
	
	  fso = CREATEOBJECT('Scripting.FileSystemObject')
	  cDir = GETDIR()
	  IF !EMPTY(cDir)
	    CLEAR
	    oFolder = fso.GetFolder(cDir)
	    oFiles = oFolder.FILES
	    IF oFolder.Files.Count > 0
	    objWord = CreateObject("Word.Application")
	    FOR EACH oFile IN oFiles
	      * Check for files not modified in last 100 days (measured in seconds).
	      * You can use the Last Accessed date, but opening the file below in Word
	      * to get the Author property updates the Last Accessed property.
	      ** IF DATETIME() - oFile.DateLastModified > (100*24*60*60) AND ;
	
	       IF DATETIME() - oFile.DateLastModified > (100) AND ;
	        oFile.Type = "Microsoft Word Document" 
	        objWord.Documents.Open(oFile.Path,.F.,.T.)
	        ? 'Doc name: ' + oFile.Name +;
	          '  Created: ' + DTOC(oFile.DateCreated) +;
	          '  Last accessed: ' + DTOC(oFile.DateLastAccessed) +;
	          '  Last modified: ' + DTOC(oFile.DateLastModified) +;
	          '  Author: ' + objWord.Documents.Item(oFile.Name).BuiltInDocumentProperties("author").Value
	        objWord.Documents.Item(oFile.Name).Close(.F.)
	      ENDIF
	    NEXT oFile
	    objWord.Quit (.F.)
	    ENDIF
	  ENDIF
	
	3. Run the code.
	
	The following information appears on the Visual FoxPro desktop for each Word
	document modified in the last 100 days:
	
	- The name of the document.
	
	- The author of the document.
	
	- The date that the document was created.
	
	- The date that the document was last accessed.
	
	- The date that the document was last modified.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbFSO 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
