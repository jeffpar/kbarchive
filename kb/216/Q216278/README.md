---
layout: page
title: "Q216278: BUG: Unspecified Error When Running VB Program Hosting ATL Ctrl"
permalink: /kb/216/Q216278/
---

## Q216278: BUG: Unspecified Error When Running VB Program Hosting ATL Ctrl

{% raw %}

	Article: Q216278
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrl kbCtrlCreate kbPersistSt kbVBp600 kbATL300bug kbGrp
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Visual Basic program that contains an ATL ActiveX control, you
	may get the following error message:
	
	  System Error &H80004005 (-2147467259). Unspecified error.
	
	CAUSE
	=====
	
	If you created the control using the ATL Object Wizard and added the "HWND"
	option in the Stock Properties tab, you will get an entry in the .IDL for a
	[propget] function for the "Window" stock property.
	
	In addition, the property map will contain a PROP_ENTRY(HWND...) macro. When the
	control is first initialized, the persistence code will go through the property
	map and call the [propput] functions for each entry via ITypeInfo::Invoke().
	Because there is no [propput] function in the .IDL for the Window property, the
	type library won't have this function, and ITypeInfo::Invoke() will fail.
	
	RESOLUTION
	==========
	
	Persisting an HWND doesn't make sense; just comment out the PROP_ENTRY(HWND...)
	macro in the property map. To prevent this line from being added in the future,
	remove the following line from Control.h in \Program Files\Microsoft Visual
	Studio\Common\MSDev98\Template\ATL:
	
	  [!if=(SP_HWND, "TRUE")]	PROP_ENTRY("HWND", DISPID_HWND, CLSID_NULL)[!endif]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrl kbCtrlCreate kbPersistSt kbVBp600 kbATL300bug kbGrpDSMFCATL kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
