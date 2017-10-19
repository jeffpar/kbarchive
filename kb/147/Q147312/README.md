---
layout: page
title: "Q147312: PRB: Error Importing Control into Component Gallery"
permalink: /kb/147/Q147312/
---

## Q147312: PRB: Error Importing Control into Component Gallery

	Article: Q147312
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC kbVC400bug kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import an OLE Control into the Microsoft Developer Studio, the
	Component Gallery reports the following error:
	
	  Unable to import this OLE control. Make sure the control contains a valid
	  type library.
	
	CAUSE
	=====
	
	The Component Gallery is checking the version of the type library for the
	control against the version of the OLE Control itself. If the versions do not
	match, the error is generated.
	
	RESOLUTION
	==========
	
	The version identification for the control and the control's type library must
	be made to match. The version identification for an OLE control written in MFC
	is located in .cpp file that contains the CWinApp-derived class and will have
	the following format:
	
	     const WORD _wVerMajor = 1;
	     const WORD _wVerMinor = 0;
	
	The version identification for the control's type library is located in the .odl
	file for the control and will have the following format:
	
	  [ uuid(209E0960-66DC-11CF-8B9A-444553540000), version(1.0),
	  helpstring("KBCtl OLE Control module"), control ]
	  library KBCTLLib
	
	Notice that in the previous cases, the version of the control and the control's
	type library (which is generated from the .odl file) match. The version is 1.0
	in both cases.
	
	STATUS
	======
	
	This behavior is by design. This error typically occurs when the version
	identification of a control is incremented but the version of the control's type
	library is not made to match.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC kbVC400bug kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
