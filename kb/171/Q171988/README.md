---
layout: page
title: "Q171988: HOWTO: Pass Parameters to a Word 97 Macro"
permalink: /kb/171/Q171988/
---

## Q171988: HOWTO: Pass Parameters to a Word 97 Macro

	Article: Q171988
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbole kbvfp300 kbvfp500 kbvfp600 kbWord
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using OLE automation to Microsoft Word 97, it is often desirable to pass
	parameters from Visual FoxPro to the Word 97 object. The Run method is normally
	used to execute a Word macro through OLE automation; however, the Run method
	cannot accept parameters. To pass parameters to the Word object, there must be a
	public Word macro that is a method of a document or template.
	
	MORE INFORMATION
	================
	
	In Word 97, documents and templates have their own Visual Basic for Applications
	projects: a document project and a template project. Macros can be added as a
	Public Sub to either the document or template project. For illustration
	purposes, this article will create a public macro using Word default Normal.dot.
	If the public macro is added to a document, that document must be opened in
	order to call the macro.
	
	If the public macro MainMacro is added to a user template, named Testdot.dot
	stored in the Word directory on the C drive, for example, the following code can
	be substituted for the oWordDoc=oWordObj.Documents.Add in the Visual FoxPro code
	in the section below:
	
	     oWordDoc=oWordObj.documents.Add("C:\word\testdot.dot")
	
	Steps to create the Public Word macro
	-------------------------------------
	
	1. Start Microsoft Word 97.
	
	2. Switch to the Visual Basic Editor by pressing ALT+F11 keys or point to Macro
	  on the Tools menu, and click Visual Basic Editor.
	
	3. On the View menu, click Project Explorer.
	
	4. In the Project Explorer, open the Normal template project.
	
	5. Open the Microsoft Word Objects\ThisDocument module within the template
	  project.
	
	6. Select the ThisDocument module.
	
	7. On the View menu, click Code or right-click the ThisDocument module and
	  select View Code.
	
	8. In the code window for Normal-ThisDocument, enter the following macro:
	
	        Public Sub Mainmacro(str As String, int1 As Integer)
	           MsgBox str         'Display the string from VFP
	           MsgBox int1        'Display the number from VFP
	        End Sub
	
	9. On the File menu, click Save Normal, then re-select the File menu and click
	  "Close and Return to Microsoft Word."
	
	Visual FoxPro code
	------------------
	
	Create a new program and enter the following code:
	
	     CLEAR
	     PUBLIC cname,nnum
	     cname=SPACE(15)
	     nnum=0
	     @ 2,2 SAY "Enter a name to display" GET cname
	     @ 4,2 SAY "Now enter a number     " GET nnum
	     READ
	     oWordObj=CREATEOBJECT('word.application')
	     oWordDoc=oWordObj.Documents.Add
	     oWordDoc.MainMacro(cname,nnum)
	     oWordObj.QUIT
	
	REFERENCES
	==========
	
	Microsoft Word Visual Basic Help
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbinterop kbole kbvfp300 kbvfp500 kbvfp600 kbWord 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
