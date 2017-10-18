---
layout: page
title: "Q190148: BUG: ATL Object Wizard Doesn't Add Entry to Connection Point Map"
permalink: kb/190/Q190148/
---

## Q190148: BUG: ATL Object Wizard Doesn't Add Entry to Connection Point Map

	Article: Q190148
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbActiveX kbCOMt kbConnPts kbVC600bug kbATL300bug kbGrpDSMFCATL kbNoU
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IConnectionPointContainer::FindConnectionPoint() might fail with the following
	error:
	
	  CONNECT_E_NOCONNECTION (0x80040200 - there is no connection for this
	  connection id)
	
	In ATL, AtlAdivse() wraps this call and returns the previous error code. In MFC,
	AfxConnectionAdvise() wraps this call and returns FALSE on failure of this call.
	
	CAUSE
	=====
	
	The ATL Object Wizard has an option to add connection point support to your COM
	object. This enables connection points for your COM object by deriving your
	object's class from IConnectionPointContainerImpl, adding a connection point map
	(BEGIN_CONNECTION_POINT_MAP / END_CONNECTION_POINT_MAP), and adding an event
	interface (dispinterface) definition to the .idl file and making it the default
	source interface for the COM object. However, the wizard does not add the event
	interface to the connection point map.
	
	RESOLUTION
	==========
	
	Add the CONNECTION_POINT_ENTRY to the connection point map manually. Prefix
	DIID_ to the event interface name to generate the IID for the entry. For
	example:
	
	     BEGIN_CONNECTION_POINT_MAP(CFoo)
	        CONNECTION_POINT_ENTRY(DIID__DMyEvent)
	     END_CONNECTION_POINT_MAP()
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default ATL AppWizard EXE or DLL project.
	
	2. Add an object using the ATL Object Wizard. (Choose New ATL Object from the
	  Insert menu). Select any one of the different COM object types. On the
	  Attributes tab of the ATL Object Wizard, select the Support Connection Points
	  box.
	
	3. In the <projectname>.idl file, you can see that in addition to the
	  object's interface, there is an event interface which is the default source
	  interface in the coclass of this object.
	
	4. In the header file for the object class, you can see that the object class is
	  derived from IConnectionPointContainerImpl, and there is a connection point
	  map. Note that there is not a connection point entry for the event interface.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jaganathan Thangavelu, Microsoft Corporation
	
	
	Additional query words: IConnectionPointContainer IConnectionPoint
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbActiveX kbCOMt kbConnPts kbVC600bug kbATL300bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
