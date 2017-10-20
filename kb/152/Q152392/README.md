---
layout: page
title: "Q152392: PRB: Component Gallery Unable to Import OLE Control"
permalink: /kb/152/Q152392/
---

## Q152392: PRB: Component Gallery Unable to Import OLE Control

{% raw %}

	Article: Q152392
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbActiveX kbCOMt kbCtrl kbide kbMFC kbVC400 kbVC500 kbVC600 kbCompGallery kbGr
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Developer Studio with Visual C++, versions 4.0 and 4.1, reports the
	error message:
	
	  Unable to import OLE control.
	
	Make sure the control contains a valid type library" when attempting to import an
	ActiveX control (OLE control).
	
	In Visual C++, version 4.2, the error states:
	
	  The OLE control is not registered properly or its type library version is
	  incorrect.
	
	In Visual C++, versions 5.0 and 6.0, the error states:
	
	  Unable to open this ActiveX Control. Make sure the control contains a valid
	  type library.
	
	CAUSE
	=====
	
	By default, MFC applications use ID binding to call methods in ActiveX controls.
	Because of this behavior, Developer Studio checks to make sure that the version
	of the type library is the same as that of the control. If the versions are not
	the same, Developer Studio reports an error.
	
	This error is usually caused by incrementing the version of the ActiveX Control
	but not the version of the type library.
	
	For more information on ID binding, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q138138 Three Binding Types (Late, ID, Early) Possible in VB for Apps
	
	RESOLUTION
	==========
	
	Make sure that the version of the ActiveX control matches the version of its
	type library.
	
	In an MFC control, the version of the control is represented by constants found
	in the implementation file for the OLE control class:
	
	  const WORD _wVerMajor = 1;
	  const WORD _wVerMinor = 0;
	
	In the same project, the version for the type library is represented by the
	version keyword in the .odl file for the OLE control:
	
	     [ uuid(AFCDB500-BB23-11CF-A685-00AA00A70FC2), version(1.0),
	       helpstring("VersionTest OLE Control module"), control ]
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	An updated version of this control would have version identifiers similar to the
	following:
	
	     const WORD _wVerMajor = 2;
	     const WORD _wVerMinor = 4;
	
	     [ uuid(AFCDB500-BB23-11CF-A685-00AA00A70FC2), version(2.4),
	       helpstring("VersionTest OLE Control module"), control ]
	
	Additional query words: import control MfcOLE CDKIss VWBIss
	
	======================================================================
	Keywords          : kberrmsg kbActiveX kbCOMt kbCtrl kbide kbMFC kbVC400 kbVC500 kbVC600 kbCompGallery kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
