---
layout: page
title: "Q135085: OLE Control Container Support in Visual C++ and MFC"
permalink: /kb/135/Q135085/
---

## Q135085: OLE Control Container Support in Visual C++ and MFC

	Article: Q135085
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.5, 1.51, 1.52, 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes included with the versions of Visual C++ listed
	at the beginning of this article do not provide any support for creating OLE
	control containers.
	
	MORE INFORMATION
	================
	
	The OLE Control Development Kit (CDK) provides the ability to create OLE
	controls which can be used in OLE control containers such as Microsoft Visual
	FoxPro version 3.0 and Microsoft Access version 2.0. However, current versions
	of MFC and Visual C++ do not provide any support for creating OLE control
	containers.
	
	The next major version of Visual C++, currently planned for release in the fall
	of 1995, will provide support for creating OLE control containers.
	
	REFERENCES
	==========
	
	Here are sources of information regarding creating an OLE control container:
	
	- "Notes on Implementing an OLE Control Container"
	
	  This article by Kraig Brockschmidt can be found on the Microsoft Developer
	  Network CD (MSDN). It discusses the OLE control container architecture and
	  provides sample code that illustrates how to implement an OLE control
	  container.
	
	- "Implementing OLE Control Containers with MFC and the OLE Control Developer's
	  Kit"
	
	  This article by Mike Blaszczak can be found on the MSDN CD and in the April
	  1995 issue of the "Microsoft Systems Journal." It discusses different types
	  of OLE control container support and provides sample code for an OLE control
	  container.
	
	- "CONTROLS: Demonstrates How to Test OLE Controls"
	
	  This article can be found on the MSDN CD and in the February 1995 issue of
	  the Microsoft Systems Journal. It includes a sample application that
	  implements a version of the MFC DRAWCLI sample that has been modified to
	  provide OLE control containment.
	
	These articles and samples provide very useful information regarding creating OLE
	control containers. However, because the current versions of Visual C++ and MFC
	do not provide any support for creating OLE control containers, these samples
	are provided as is, with no additional support.
	
	Microsoft Developer Support does not currently provide any support for the
	creation or implementation of OLE control containers. Because the next major
	version of Visual C++ will provide a fully supported OLE control container
	implementation, Microsoft recommends that developers wait for this release
	unless they have an immediate need for OLE control containment.
	
	Additional query words: kbinf 1.50 1.51 1.52 1.52b 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbVC220 kbVC151 kbVC200 kbVC210 kbVC152
	
	=============================================================================
	
