---
layout: page
title: "Q153675: How To Use Code to Print a Word Document in a General Field"
permalink: kb/153/Q153675/
---

## Q153675: How To Use Code to Print a Word Document in a General Field

	Article: Q153675
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0;3.0b;6.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a general field contains an embedded or linked Word document, you can print
	the Word document by using code and OLE automation.
	
	MORE INFORMATION
	================
	
	For more information about the behavior of embedded Word documents, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q105714 Document Object Margins Default to Zero Inches
	
	  Q121049 Wrong Page Size for Word Document Object Opened to Edit
	
	IMPORTANT: If you are using the APPEND GENERAL command, or Insert Object from the
	Edit menu in the general field to create a new Word document, the document may
	not print correctly if you do not follow the guidelines published in Microsoft
	Knowledge Base article Q105714 (see above).
	
	
	NOTE: This code sample only works with Word 95. It does not work with Word 97.
	
	Code Sample
	-----------
	
	The following code demonstrates how to print the document.
	
	  CREATE TABLE myword (wordfld G)
	  APPEND BLANK
	  APPEND GENERAL wordfld CLASS "Word.Document"
	  ** The above lines are for demonstration only
	  ** Normally the table will already exist and contain the document
	
	  frmDummy = CREATEOBJECT("Form")
	  frmDummy.ADDOBJECT("objWordDoc","OleBoundControl")
	  frmDummy.objWordDoc.ControlSource = "wordfld"
	  frmDummy.objWordDoc.DoVerb(1) &&starts an instance of Word
	  objWordInst = GETOBJECT("","Word.Basic") &&create a reference to Word
	  ** set paper size - see Q121049 referenced above
	  objWordInst.FilePageSetup(,,"1","1",,"1","1","8.5 in","11 in")
	  objWordInst.Insert("Brown Shoes Don't Make It")
	  objWordInst.AppHide
	  objWordInst.FilePrint
	  WAIT WINDOW "Printing document" TIMEOUT 5
	  objWordInst.AppClose
	  RELEASE objWordInst
	
	Additional query words: VFoxWin OLE automation winword
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS: 3.0;3.0b;6.0
	
	=============================================================================
	
