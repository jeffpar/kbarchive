---
layout: page
title: "Q156751: PRB: Executing Quit Method on OLE Object Quits VFP"
permalink: /kb/156/Q156751/
---

## Q156751: PRB: Executing Quit Method on OLE Object Quits VFP

{% raw %}

	Article: Q156751
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reference the Application property to Quit an OLE object, Visual FoxPro
	terminates. This article illustrates how to remove or hide an OLE Chart object
	and explains how the Application property behaves with OLE objects.
	
	CAUSE
	=====
	
	Each Visual FoxPro object has an Application property that refers to the Visual
	FoxPro application object. Because that object has a Quit method, invoking that
	method terminates the Visual FoxPro session.
	
	The Application property refers to the Visual FoxPro object, not the object in
	the OLE control. The Help file topic concerning the Application Property
	states:
	
	  Provides a reference to the Application object containing an object.
	
	In this case, the Application object is Visual FoxPro.
	
	WORKAROUND
	==========
	
	Since an Excel chart object does not have a Quit property, you must use
	properties available in Visual FoxPro. First, if you want to remove the object
	from the form, call the RemoveObject method of the form. For example:
	
	     frmMyForm.RemoveObject('oletest')
	
	This removes the object from the form without quitting Visual FoxPro.
	
	Second, if you simply need to hide the OLE object, set the Visible property of
	the object to false (.F.). For example:
	
	     frmMyForm.oletest.Visible=.T.
	
	The method you choose depends on whether you need to access the OLEContainer
	again. Toggling the Visible property between True and False is faster than
	invoking the AddObject method. However, if you truly want to remove the object
	from the form, the RemoveObject method is preferable.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In the example below, you want to remove the Excel chart from the form. However,
	the command in step 2 causes the following error:
	
	  OLE IDispatch exception code 1000 from Microsoft Excel: Chart does not have
	  Quit property.
	
	As the error states, the object referenced, the Excel chart, does not have a Quit
	property. By adding the Application property to the command, no error occurs and
	Visual FoxPro closes. Since the Application property refers to Visual FoxPro and
	not Excel, the program exits Visual FoxPro.
	
	The Object Browser application in Excel provides information on the properties
	available for use with Excel objects.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program containing the following code and then execute it:
	
	     PUBLIC frmMyForm
	     frmMyForm = CREATEOBJECT("form")
	     frmMyForm.AddObject("oleTest","OLEControl","Excel.Chart")
	     frmMyForm.oletest.Visible=.t.
	     frmMyForm.oletest.Height=115
	     frmMyForm.Show
	
	2. In the Command window, type:
	
	     frmMyForm.oletest.Quit
	
	3. Click OK in the error box, and then type:
	
	     frmMyForm.oletest.Application.Quit
	
	REFERENCES
	==========
	
	For more information about properties and methods available to the Application
	Object, search for "Application Object" and then "Properties" or "Methods" in
	the Visual FoxPro Help file. Also see the following articles in the Microsoft
	Knowledge Base:
	
	  Q156548 How To Use the object Property to Reference Methods/Properties
	
	  Q155747 How To Use the New Application Property in VFP 5.0
	
	For more information about Excel's Object Browser, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q142128 XL: How to Find Visual Basic for Application Help
	
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
