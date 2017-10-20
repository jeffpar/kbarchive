---
layout: page
title: "Q161197: HOWTO: Automate a Word Object Embedded in a Form"
permalink: /kb/161/Q161197/
---

## Q161197: HOWTO: Automate a Word Object Embedded in a Form

{% raw %}

	Article: Q161197
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an example of how to programmatically update an OLE object
	embedded within a Word document. This example uses both Visual FoxPro 5.0 and
	Microsoft Word for Windows 95 version 7.0a.
	
	MORE INFORMATION
	================
	
	The sample creates a new form and adds a Word object to that form. Next, the
	code activates the Word object to get a reference to its WordBasic object,
	deactivates it, and then automates the WordBasic object. The important part of
	this code is the temporary activation of Word. The object embedded in a form is
	called "Document." Unfortunately, Word does not support the object
	"Word.Document" through OLE Automation, but Word does support the object
	"WordBasic." The following line of code saves a reference to the object
	contained within the Word document:
	
	     oWordRef = oForm.oWordDoc.Object.Application.WordBasic
	
	This allows a programmer to update the object.
	
	Please see the REFERENCES section of this article for additional information.
	
	Code Example
	------------
	
	Place the following code in a program file and run it:
	
	     #DEFINE CRLF  CHR(13)+CHR(10)
	     PUBLIC oForm
	     oForm = CREATE('form')
	     oForm.AddObject('oWordDoc','OleControl','WordDocument')
	     oForm.oWordDoc.Height =  100
	     oForm.oWordDoc.Width =  300
	     oForm.oWordDoc.Visible =  .t.
	     oForm.Show
	     oForm.oWordDoc.DoVerb(0)
	     oWordRef = oForm.oWordDoc.Object.Application.WordBasic
	     MOUSE CLICK AT 0,0
	     oWordRef.Insert("Hello World"+CRLF)
	     oWordRef.EditSelectAll
	     oWordRef.Font("Arial",18)
	     oWordRef.Bold
	     oWordRef.EditGoTo("\EndofDoc")
	     oWordRef.WordLeft(3)
	     oWordRef.SelectCurWord
	     oWordRef.CharColor(2)
	     RETURN
	
	This code will replace the Visual FoxPro toolbars with the Word toolbars in order
	to edit the embedded Word object.
	
	REFERENCES
	==========
	
	For more information about OLE Automation, Visual FoxPro, and Word, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q138205 HOWTO: Use OLE Automation with Microsoft Word
	
	  Q148474 SAMPLE: Ole_samp.exe to Microsoft Excel, Word, & PowerPoint
	
	
	  Q105535 Word for Windows Supports OLE Automation as a Server Only
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
