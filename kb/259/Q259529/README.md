---
layout: page
title: "Q259529: INFO: How Visual Basic Classes Map to COM"
permalink: /kb/259/Q259529/
---

## Q259529: INFO: How Visual Basic Classes Map to COM

{% raw %}

	Article: Q259529
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbLocalSvr kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Every Component Object Model (COM) object must implement at least one interface.
	Visual Basic simplifies this concept by creating a default interface that can be
	created automatically for each class. Visual Basic also hides the name of the
	default interface.
	
	MORE INFORMATION
	================
	
	For a class module, Class1, Visual Basic creates a hidden interface named
	_Class1 as a default. When you use the OLEVIEW tool to look at the compiled
	Visual Basic components' type library, you can see that Visual Basic creates a
	CoClass named Class1, which implements _Class1 as the default interface. The
	Visual Basic components' type library looks like the following:
	
	  [
	     hidden,
	     ...
	  ]
	  interface _Class1 {
	     ...
	  }
	  coclass Class1 {
	     [default] interface _Class1;
	  };
	
	You can create a Class1 object like the following:
	
	  Dim myObject as Class1
	  set myObject = new Class1
	  ' then call myObject's any public methods...
	
	The variable myObject of type Class1 is transparently cast to the _Class1
	reference by the Visual Basic Compiler (because clients only use interface
	references to access COM objects.) Using Class1 as an alias for the _Class1
	interface makes it very easy to create a COM-compliant object in Visual Basic.
	
	REFERENCES
	==========
	
	For additional information regarding implementing a COM interface in Visual
	Basic, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q258827 Visual Basic Object Browser Cannot See the Default Interface
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbLocalSvr kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
