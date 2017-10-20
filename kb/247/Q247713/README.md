---
layout: page
title: "Q247713: BUG: ClassView Doesn't Show All Methods for an Interface"
permalink: /kb/247/Q247713/
---

## Q247713: BUG: ClassView Doesn't Show All Methods for an Interface

{% raw %}

	Article: Q247713
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbClassView kbide kbVC600bug kbDSupport kbGrpDSTools
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In ClassView, an interface node inside a class that implements the interface
	does not contain all of the interface methods. Instead, one or more of the
	methods appears as regular class member functions.
	
	CAUSE
	=====
	
	The misplaced method contains at least one parameter that is mismatched with the
	data type specified in the interface description. This may occur when using
	logically equivalent types, or when "struct" or "class" is specified as part of
	a parameter's data type.
	
	RESOLUTION
	==========
	
	If the method contains logically equivalent types, edit the interface's .idl
	file or the class's .h file so the declarations match exactly. For example, if
	the .idl file contains the method
	
	  HRESULT MyMethod(BYTE * p);
	
	and the .h file declares the implementation method as
	
	  HRESULT MyMethod(PBYTE p);
	
	modify the PBYTE in the .h file to read BYTE *.
	
	If the .idl file explicitly specifies a class or structure in a parameter type
	declaration, modify the declaration to use a typedef equivalent. For example,
	instead of
	
	  struct MyStruct
	  {
	     int i;
	  };
	  ...
	  interface IMyIF
	  {
	     HRESULT MyMethod(struct MyStruct * pMyStruct);
	  }
	
	use the following:
	
	  typedef struct MyStruct_tag
	  {
	     int i;
	  } MyStruct;
	  ...
	  interface IMyIF
	  {
	     HRESULT MyMethod(MyStruct * pMyStruct);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Even though two types are logically equivalent, ClassView sees them as different
	since the syntax is different. If the .idl file explicitly specifies a class or
	structure in a parameter type declaration, a bug in ClassView's parser strips
	the word "class" or "struct" from the declaration. Since in either of these
	cases the interface and implementation declarations no longer match according to
	ClassView, it displays the method outside of the interface.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default ATL COM AppWizard project. In this example, it is named
	  MyProj.
	
	2. In ClassView, right-click the MyProj classes node. Select New class.
	
	3. In the New Class dialog box, select ATL Class as the class type, and type
	  CMyIF for the class name. Click OK.
	
	4. Right-click the interface in ClassView and select Add Method.
	
	5. In the Add Method to Interface dialog box, type MyMethod for Method name, and
	  type struct MyStruct for Parameters. Click OK.
	
	6. In ClassView, click the + to expand the MyProj classes node, the CMyIF node,
	  the IMyIF node inside it that has just been revealed, and the IMyIF node at
	  the same level as CMyIF.
	
	The method MyMethod appears as a member of CMyIF, rather than as a member of the
	implemented IMyIF. The "struct" has been stripped off. However, MyMethod
	displays properly in the IMyIF interface definition node.
	
	REFERENCES
	==========
	
	For additional information concerning ClassView's display, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q201097 PRB: ClassView Does Not Display COM Interface Nodes
	
	  Q138953 BUG: Static Identifiers Do Not Show Up in ClassView
	
	  Q194840 BUG: The '*' Key Does Not Expand All ClassView Branches Properly
	
	  Q167905 HOWTO: Exclude Include File Class Definitions from ClassView
	
	  Q140439 FIX: Namespace Scoped Classes Don't Show Up in ClassView
	
	  Q205402 FIX: ClassView Doesn't Show Derived Classes in Embedded Namespace
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbClassView kbide kbVC600bug kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
