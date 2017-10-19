---
layout: page
title: "Q258827: INFO: Visual Basic Object Browser Cannot See the Default Interfa"
permalink: /kb/258/Q258827/
---

## Q258827: INFO: Visual Basic Object Browser Cannot See the Default Interfa

	Article: Q258827
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual Basic class module can implement Component Object Model (COM)
	interfaces described in a type library by using the Implements keyword. When the
	interface that is implemented happens to be the default interface, Visual
	Basic's Object Browser uses the CoClass name as an alias to the default
	interface name. Therefore, the Object Browser cannot see the default interface
	name.
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual Basic uses the class module name as an alias for the default interface;
	that is, the Visual Basic compiler maps the class name to the default interface
	reference silently for you. For detailed information regarding the mapping,
	please see the related article listed in the "References" section.
	
	While this transparent mapping works well in Visual Basic, the Object Browser
	could interpret the COM type library incorrectly when the implemented interface
	happens to be the default one. All default interface references are displayed as
	their corresponding CoClass names instead, because Visual Basic uses the CoClass
	name as an alias for the default interface reference to access it. For a type
	library from the following IDL file, the Object Browser cannot see the default
	interface IClass2:
	
	  library myTypeLib
	  {
	      // Forward declare all types defined in this typelib
	      interface IClass1;
	      interface IClass2;
	
	      interface IClass1 : IDispatch {
	          [id(0x00000000)]
	          HRESULT method1([out, retval] IClass2** pVal);
	      };
	
	      interface IClass2 : IDispatch {
	          [id(0x00000000)]
	          HRESULT method2([out, retval] BSTR* pVal);
	      };
	
	      coclass Class1 {
	          [default] interface IClass1;
	      };
	
	      coclass Class2 {
	          [default] interface IClass2;
	      };
	  };
	
	Class1's (actually interface IClass1's) method1 returns Class2 (actually IClass2
	reference) instead of IClass2. This behavior occurs because Visual Basic uses
	the Class2 as an alias for the default interface IClass2.
	
	In addition, when multiple CoClasses implement the same interface as a default
	one, the Object Browser uses the first occurring CoClass name for any reference
	to the default interface. This is by design.
	
	REFERENCES
	==========
	
	For additional information on how Visual Basic maps class names to the default
	interface, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q259529 INFO: How Visual Basic Classes Map to COM
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
