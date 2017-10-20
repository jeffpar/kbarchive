---
layout: page
title: "Q151903: PRB: VB Does Not Support Dual Interfaces in OLE Controls"
permalink: /kb/151/Q151903/
---

## Q151903: PRB: VB Does Not Support Dual Interfaces in OLE Controls

{% raw %}

	Article: Q151903
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbContainer kbCtrl kbMFC kbVBp400 kbVC400 kbVC410 kbGrpDS
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual Basic Learning Edition for Windows, version 4.0 
	   - Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	   - Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	   - Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	   - Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	   - Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ActiveX Controls that implement a Dual Interface do not use early binding when
	placed on a Visual Basic form. Even if the Dual Interface is marked as the
	default interface in the ActiveX Control's .odl file, Visual Basic still uses
	the standard IDispatch interface for all automation calls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Dual Interface provides an alternative to using the standard IDispatch interface
	when making Automation calls. This technique is also referred to as Early
	Binding because type checking is performed at compile time. Dual Interfaces are
	rapidly becoming popular because they provide increased performance over the
	standard IDispatch interface.
	
	It is possible to add Dual Interface support to automation servers as well as
	ActiveX Controls. The ACDUAL sample provided with Visual C++ 4.1 demonstrates
	the addition of a Dual Interface to the AutoClick automation server. Tech Note
	65, referenced in the References section below, outlines the changes you must
	make to an automation server to support a Dual Interface. Although ACDUAL and
	Tech Note 65 refer to automation servers, the information they provide is also
	applicable to ActiveX Controls.
	
	Visual Basic does support early binding for automation servers that support a
	Dual Interface, but currently does not support Dual Interface ActiveX Controls.
	If you attempt to use the Dual Interface on an ActiveX Control in Visual Basic,
	the standard IDispatch interface is used instead. Future versions of Visual
	Basic may take advantage of Dual Interface ActiveX Controls, but Visual Basic
	4.0 does not.
	
	REFERENCES
	==========
	
	ACDUAL Sample - MFC OLE Samples, Visual C++ 4.1
	
	Tech Note 65: Dual-Interface Support for OLE Automation Servers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbContainer kbCtrl kbMFC kbVBp400 kbVC400 kbVC410 kbGrpDSVB 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
