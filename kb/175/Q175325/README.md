---
layout: page
title: "Q175325: PRB: Can't Create VB ActiveX Control with Embedded Licensed Ctrl"
permalink: /kb/175/Q175325/
---

## Q175325: PRB: Can't Create VB ActiveX Control with Embedded Licensed Ctrl

{% raw %}

	Article: Q175325
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you embed a licensed ActiveX control inside a Visual Basic ActiveX control
	and then attempt to use it on another machine, the Visual Basic ActiveX control
	can fail to instantiate.
	
	CAUSE
	=====
	
	By default, Visual Basic ActiveX controls do not support embedding licensed
	controls.
	
	RESOLUTION
	==========
	
	There are two possible solutions:
	
	1. If you make the outer Visual Basic control licensed, embedded licensed
	  controls will be created successfully. You can turn on licensing by selecting
	  Project/<ProjectName> Properties, clicking the General tab and checking
	  "Require License Key."
	
	  -or-
	
	2. For a licensed control to support being instantiated in a Visual Basic
	  control, it needs to support the following interface GUID:
	
	  {0x6e6e9780, 0x165d, 0x11d0, {0xb3, 0xe6, 0x00, 0xa0, 0xc9, 0x0f, 0x27,
	  0x31}}
	
	Visual Basic will call QueryInterface() on the embedded licensed control's
	IClassFactory for the GUID above. If the embedded control's IClassFactory
	::QueryInterface function returns S_OK and a pointer to the IUnknown interface,
	Visual Basic will create the licensed control using the cached license key.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If the outer Visual Basic control is converted to a licensed control, and if the
	client/container creates the outer Visual Basic control dynamically (via a
	function call), as opposed to inserting it into a dialog, a license key will
	have to be passed to the function. Hosting licensed ActiveX controls in Internet
	Explorer will also require a license key. See the REFERENCES section of this
	article for more information.
	
	When you use a licensed control in a non-ActiveX Control project, Visual Basic
	caches the control's run-time license key as part of the compiled program. When
	you run the program on a machine that doesn't have a design- time license,
	Visual Basic will use the stored license key to instantiate the licensed
	control.
	
	Licensed controls that come with Visual Basic that cannot be used inside a
	UserControl include Crystal(crystl32.ocx)and DBGrid(dbgrid32.ocx).
	
	The common controls in COMCTL32.OCX are licensed but were written so you can use
	them in a Visual Basic ActiveX control.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q151771 193025 159923 : SAMPLE: LICREQST.EXE Requesting a License Key from an
	  Object
	
	  Q159923 : HOWTO: Using Licensed ActiveX Controls in Internet Explorer
	
	  Q193025 : BUG: Cannot Dynamically Add a Non-Licensed MFC Control
	
	Additional query words: kbdsi kbDSupport kbVBp kbVBp500 kbVBp600 kbActiveX KbCtrl KbInternet
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
