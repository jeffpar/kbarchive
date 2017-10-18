---
layout: page
title: "Q192629: FIX: ClassView Cannot Add Member Functions To Template Classes"
permalink: kb/192/Q192629/
---

## Q192629: FIX: ClassView Cannot Add Member Functions To Template Classes

	Article: Q192629
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbClassView kbide kbVC500 kbVC500bug kbVC600 kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when trying to add member functions to template
	classes using ClassView:
	
	  Unable to create the implementation of this function
	
	RESOLUTION
	==========
	
	To add member functions to a template class, you must manually enter the
	functions into the source files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default MFC AppWizard (exe).
	
	2. Add a generic class to the project:
	
	  a. Select the project in ClassView.
	
	  b. Right-click the mouse and select New Class.
	
	  c. Select Generic from the Class Type combo box.
	
	  d. Give the class a name, such as CMyGenericClass, and click OK.
	
	3. Edit this generic class declaration, constructor definition, and destructor
	  definition by adding the template keyword along with the type list, for
	  example:
	
	        //generic class declaration:
	
	        template <class c> class CMyGenericClass {
	        public:
	           CMyGenericClass();
	           virtual ~CMyGenericClass();
	        };
	
	        //constructor and destructor definitions:
	
	        template <class c> CMyGenericClass<c>::CMyGenericClass()
	        {
	        }
	
	        template <class c> CMyGenericClass<c>::~CMyGenericClass()
	        {
	        }
	
	4. In ClassView, right-click CMyGenericClass and select "Add Member Function."
	
	5. Enter the function name and return type. Click OK. A dialog box is displayed
	  indicating the following error:
	
	  Unable to create the implementation of this function
	
	In Visual C++ 6.0, you do not have the ability to jump to a template function
	declaration from ClassView unless the template function is defined inside the
	class declaration (inline).
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q154112 ClassView Cannot Find Template Member Function Definition
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbClassView kbide kbVC500 kbVC500bug kbVC600 kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
