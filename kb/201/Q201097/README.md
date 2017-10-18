---
layout: page
title: "Q201097: PRB: ClassView Does Not Display COM Interface Nodes"
permalink: kb/201/Q201097/
---

## Q201097: PRB: ClassView Does Not Display COM Interface Nodes

	Article: Q201097
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbClassView kbide kbVC500bug kbVC600bug kbDSupport kbGrpDSTools kbNoUpdate
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add COM_INTERFACE_ENTRY(IMyIF) to the COM map in a class, a
	corresponding interface node does not appear on the class in ClassView.
	
	CAUSE
	=====
	
	There is no interface declaration for IMyIF in the project's .idl file, or the
	.idl file has not been saved with that declaration. This is per the current
	design of ClassView.
	
	RESOLUTION
	==========
	
	Add the interface declaration to the project's .idl file and save it. In Visual
	C++ 6.0, the interface node will immediately appear on the class in ClassView.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The ClassView pane in Visual C++ displays special nodes for interfaces defined
	in a project's .idl file. If a Visual C++ class implements that interface,
	specifying it with the COM_INTERFACE_ENTRY() macro between the BEGIN_COM_MAP()
	and END_COM_MAP() macros, ClassView displays a special node in the class tree as
	well.
	
	In both Visual C++ 5.0 and 6.0, you must save the .idl file for ClassView to
	display new interface definitions. ClassView now displays nodes for the
	COM_INTERFACE_ENTRY() macros inside class definitions, where those macros
	reference interfaces in the .idl file. In Visual C++ 5.0, you must also save the
	class definition file before ClassView can display the new interface node for
	the class.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Download the LABRADOR sample from the Compiler COM Support samples.
	
	2. Open the Labrador.dsw workspace from the downloaded sample.
	
	3. In the workspace pane, click the ClassView tab. To display the workspace
	  pane, right-click any blank area on the menu area, then select Workspace if
	  it is not already selected.
	
	4. Expand the Labrador classes and the CLabrador branches.
	
	5. Double-click CLabrador. The cursor jumps to the beginning of the CLabrador
	  class definition in Labobj.h.
	
	6. Search for the END_COM_MAP() macro. On the line before it, type
	  "COM_INTERFACE_ENTRY(IMyIF)" (without the quotation marks). Note there is no
	  change in ClassView.
	
	7. Double-click the IDog node. The cursor jumps to the IDog interface definition
	  in Labrador.idl, right after its attributes.
	
	8. After the end of the IDog definition, enter the following code:
	
	        [
	           object,
	           uuid(62A33E87-932A-11CF-B056-00A0C90348FA),
	           helpstring("IMyIF Interface"),
	           pointer_default(unique)
	        ]
	        interface IMyIF : IUnknown
	        {
	        };
	
	  Note there is still no change in ClassView.
	
	9. On the File menu, click Save.
	
	Note that two nodes now appear for IMyIF in ClassView, one for the Labrador
	classes branch, and one under the CLabrador branch. With Visual C++ 5.0, you
	must also save the Labobj.h file to view the CLabrador node.
	
	REFERENCES
	==========
	
	For additional information on the ?_COM_MAP macros, see the following
	documentation:
	
	- MSDN library for VC++ 5.0:
	
	  Visual C++; C/C++ Language and C++ Libraries; Active Template Library; Class
	  Reference; ATL Macros and Global Functions; "BEGIN_COM_MAP"
	
	- MSDN library for VC++ 6:
	
	  Visual C++ Documentation; Reference; Microsoft Foundation Class Library and
	  Templates; Active Template Library; Class Reference; ATL Macros and Global
	  Functions; "BEGIN_COM_MAP"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbClassView kbide kbVC500bug kbVC600bug kbDSupport kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
