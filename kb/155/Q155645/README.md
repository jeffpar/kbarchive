---
layout: page
title: "Q155645: PRB: ActiveX Control Fails in Visual Basic but Works Fine in MFC"
permalink: /kb/155/Q155645/
---

## Q155645: PRB: ActiveX Control Fails in Visual Basic but Works Fine in MFC

	Article: Q155645
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.0; winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbContainer kbCtrl kbCtrlCreate kbMFC kbVC400 kbVC410 kbVC420 kb
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article documents known problems that can cause an ActiveX control to fail
	to work in Visual Basic for Windows while still allowing the control to work
	successfully in an MFC control container.
	
	MORE INFORMATION
	================
	
	Occasionally an ActiveX control works successfully in an MFC control container
	but fails when used in Visual Basic. The failure in Visual Basic is usually
	caused by a problem with the control. The following are known problems that can
	cause this type of behavior.
	
	- The control has been created with the simple frame option specified in
	  ControlWizard but there is no call to the COleControl::EnableSimpleFrame
	  method.
	
	  By default, if the simple frame option is specified, ControlWizard adds a call
	  to EnableSimpleFrame to the COleControl-derived class's constructor.
	  ControlWizard also adds the OLEMISC_SIMPLEFRAME MiscStatus bit to the status
	  bits for the control. If the call to EnableSimpleFrame is removed but the
	  OLEMISC_SIMPLEFRAME MiscStatus bit is still specified, Visual Basic crashes
	  with an Access Violation when the control is added to a form.
	
	  If the OLEMISC_SIMPLEFRAME MiscStatus bit is turned on for a control, the
	  COleControl::EnableSimpleFrame method must be called.
	
	- The control has been given a property that is declared as type BSTR in the
	  control's .odl file, but which is really of some other type, such as long,
	  short, or double. Typically this kind of type mismatch happens when the .odl
	  file for the control has been manually edited rather than letting ClassWizard
	  handle the adding and removing of properties.
	
	  In order for the problem to occur, the property must have been added via
	  ClassWizard as a non-BSTR type and have been implemented as a member
	  variable, not as Get/Set methods. If the control's .odl file is manually
	  edited and the type of the property is then changed to BSTR but the
	  corresponding control member variable type and dispatch map entry are not
	  changed to reflect the new type, Visual Basic can crash with an Access
	  Violation when the control is added to a form.
	
	- A control implements a property, event, or method that has the same name as
	  one of Visual Basic's extended properties, events, or methods.
	
	  For example, if the control implements properties named DragIcon or DragMode,
	  the problem might occur.
	
	  To avoid the problem, rename the conflicting property, event, or method.
	
	
	NOTE: For information on all of Visual Basic's extended properties, methods, and
	events, please refer to the online topic "Object Property" in Visual Basic.
	
	The problem has been fixed in Visual Basic 5.0.
	
	Additional query words: VB OCX
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbContainer kbCtrl kbCtrlCreate kbMFC kbVC400 kbVC410 kbVC420 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVC410 kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.0; winnt:4.0,4.1,4.2
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
