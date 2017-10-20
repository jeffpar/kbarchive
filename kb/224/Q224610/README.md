---
layout: page
title: "Q224610: BUG: C2146/C2501 In the .tlh or .tli files Created by #import"
permalink: /kb/224/Q224610/
---

## Q224610: BUG: C2146/C2501 In the .tlh or .tli files Created by #import

{% raw %}

	Article: Q224610
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbCOMt kbVC kbGrpDSMFCATL kbSmartPtr
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using #import to create smart pointers for an ActiveX server, you may see
	C2146 and C2501 compiler errors in either of the .tlh or .tli files. This will
	happen if the type library used IFontDisp and IPictureDisp interfaces.
	
	  circ3.tlh(54) : error C2146: syntax error : missing ';' before identifier
	  'Font'
	  circ3.tlh(54) : error C2501: 'FontPtr' : missing storage-class or type
	  specifiers
	
	CAUSE
	=====
	
	IFontDisp and IPictureDisp are just typedefs for the interfaces Font and Picture
	respectively. The header file Comdef.h incorrectly declares smart pointer
	classes for the synonyms IFontDisp and IPictureDisp rather than the actual
	interface types Font and Picture. This is what results in the compilation error.
	
	RESOLUTION
	==========
	
	In order to get around this error, #import the typelib Stdole2.tlb prior to
	importing the ActiveX servers typelib and make sure that they exist in the same
	namespace. For example, if you were using the CIRC3 MFC ActiveX control, employ
	the following code as the workaround:
	
	  #import "c:\winnt\system32\stdole2.tlb" rename_namespace("New") exclude("GUID", "DISPPARAMS", "EXCEPINFO", \ 
	  	"OLE_XPOS_PIXELS", "OLE_YPOS_PIXELS", "OLE_XSIZE_PIXELS", "OLE_YSIZE_PIXELS", "OLE_XPOS_HIMETRIC", \ 
	  	"OLE_YPOS_HIMETRIC", "OLE_XSIZE_HIMETRIC", "OLE_YSIZE_HIMETRIC", "OLE_XPOS_CONTAINER", \ 
	  	"OLE_YPOS_CONTAINER", "OLE_XSIZE_CONTAINER", "OLE_YSIZE_CONTAINER", "OLE_HANDLE", "OLE_OPTEXCLUSIVE", \ 
	  	"OLE_CANCELBOOL", "OLE_ENABLEDEFAULTBOOL", "FONTSIZE", "OLE_COLOR")
	  #import "debug\circ3.tlb" rename_namespace("New")
	  using namespace New;
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	One case where this issue showed up involved using #import to create smart
	pointers for the Circ3 MFC ActiveX control sample. The steps to reproduce the
	behavior are shown here:
	
	1. Create a default MFC or Win32 project.
	
	2. Add the following lines of code along with other header files in a .cpp file.
	  The Circ3 sample has to build before you can do this.
	
	  #import "circ3.ocx"
	  using namespace Circ3Lib;
	
	  NOTE: You will have to provide the full path to Circ3.ocx if it isn't in your
	  path. Also, #import by default will setup a namespace for each type library.
	
	3. Build the project. At this point there will be a C2146 error.
	
	REFERENCES
	==========
	
	  Q185284 FIX: #import Does not Correctly Handle GUID Parameters
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbCOMt kbVC kbGrpDSMFCATL kbSmartPtr 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
