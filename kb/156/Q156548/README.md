---
layout: page
title: "Q156548: HOWTO: Use the Object Property to Reference Methods/Properties"
permalink: /kb/156/Q156548/
---

## Q156548: HOWTO: Use the Object Property to Reference Methods/Properties

{% raw %}

	Article: Q156548
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp600
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A new Application property has been added to all objects in Visual FoxPro
	version 5.0. This includes both the OLE Bound control and the OLE Container
	control. If you have OLE Automation code that does not use the Object property
	(.object) to reference the various properties and methods of the object, a
	conflict occurs between the Visual FoxPro Application property and the
	Application property of the OLE object.
	
	MORE INFORMATION
	================
	
	If you have OLE Automation code in which you have not used the Object property
	(.object) to reference the properties and methods of the OLE object, then Visual
	FoxPro 5.0 assumes the references are for the Visual FoxPro Application object
	properties and methods.
	
	For example, create an OLE object with the following commands:
	
	     PUBLIC frmMyForm
	     frmMyForm = CREATEOBJECT("form")
	     frmMyForm.AddObject("oleTest","OLEControl","Excel.Chart")
	     frmMyForm.Visible=.T.
	
	After the code runs, a form appears, but you do not see the Excel chart.
	
	Now enter the following command:
	
	     WAIT WINDOW frmMyForm.oleTest.Application.Name
	
	The message that appears is "Microsoft Visual FoxPro" in Visual FoxPro version
	5.0 and "Microsoft Excel" in Visual FoxPro version 3.x.
	
	To make the Excel chart object appear, issue the following command:
	
	     frmMyForm.oleTest.Object.Application.Visible=.t.
	
	If you use the following Quit method:
	
	     frmMyForm.oleTest.application.quit
	
	Visual FoxPro version 5.0 calls the Quit method of Visual FoxPro, instead of the
	Quit method of the OLE object as in Visual FoxPro version 3.x.
	
	In order to reference the properties and methods of the OLE object, you need to
	update your code to use the Object property as in the following line of code:
	
	     WAIT WINDOW frmMyForm.oleTest.Object.Application.Name
	     frmMyForm.oleTest.Object.Application.Quit
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help; search on "Application property"
	Visual FoxPro 6.0 Help; search on "Application property"
	
	NOTE: In Visual FoxPro 5.0, this help topic incorrectly lists only Application
	Object and _VFP System Variable in the applies to list. This property is exposed
	to all Visual FoxPro base classes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
