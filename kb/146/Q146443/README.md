---
layout: page
title: "Q146443: PRB: Msmask32.ocx Does Not Work Properly in MFC Containers"
permalink: kb/146/Q146443/
---

## Q146443: PRB: Msmask32.ocx Does Not Work Properly in MFC Containers

	Article: Q146443
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbole kbCtrl kbprb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Masked Edit Control's Format property is set, it does not automatically
	format its contents upon losing focus. When embedded in a Visual Basic 4.0 form
	or Microsoft Access 7.0 form, the control automatically formats its contents
	when the control loses focus.
	
	CAUSE
	=====
	
	The Masked Edit Control uses a proprietary Visual Basic interface called
	IVBFormat. The absence of IVBFormat support in a control container prevents the
	Masked Edit Control from automatically updating its contents as specified by the
	Format property. Control containers created with Visual C++ do not support
	IVBFormat. Other control containers, such as Visual FoxPro 3.0 forms, which do
	not support this interface, will also experience limited functionality from the
	Masked Edit Control.
	
	RESOLUTION
	==========
	
	The IVBFormat interface is proprietary and subject to change. Documentation or
	specifications for this interface are not available. The Masked Edit Control can
	be used in a Visual C++ control container application, but the automatic
	formatting feature will remain disabled. Other properties such as the control's
	Mask property, will function properly in the absence of IVBFormat support.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbole kbCtrl kbprb 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
