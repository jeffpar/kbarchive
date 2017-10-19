---
layout: page
title: "Q172985: FIX: Out of Order Definitions in idl May Cause Compiler Errors"
permalink: /kb/172/Q172985/
---

## Q172985: FIX: Out of Order Definitions in idl May Cause Compiler Errors

	Article: Q172985
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC500bug kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the #import directive, errors may be generated due to the order in
	which definitions appear in the idl file used to generate the type library. The
	sample below causes error C2504, base class undefined, due to the interfaces
	being defined globally instead of in the library block.
	
	RESOLUTION
	==========
	
	Move the interface definitions into the library block.
	
	  - or -
	
	Create an extraneous reference to the class that the compiler is generating an
	error from within the library block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample
	------
	
	     // t.cpp
	        // Compile options: /c
	        #import "t.tlb"
	
	     // t.idl
	        // command line: midl t.idl
	
	        // move the definitions of A and B into the
	        // library block for one workaround
	        [ uuid( 10000000-0000-0000-0000-000000000000 ) ]
	        interface A : IUnknown
	        {
	        };
	        [ uuid( 20000000-0000-0000-0000-000000000000 ) ]
	        interface B : A
	        {
	        };
	        [ uuid( 30000000-0000-0000-0000-000000000000 ) ]
	        library Test
	        {
	           importlib("stdole2.tlb");
	
	           // uncomment this coclass for another workaround
	           // [ hidden, uuid( 40000000-0000-0000-0000-000000000000 ) ]
	           //coclass Dummy
	           //{
	           //   interface A;
	           //}
	
	           [ uuid( 50000000-0000-0000-0000-000000000000 ) ]
	           coclass C
	           {
	              interface B;
	           }
	        }
	
	Additional query words: midl
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC500bug kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
