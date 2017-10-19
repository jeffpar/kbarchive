---
layout: page
title: "Q177575: PRB: ActiveX Controls Passing Variant&#42; Back to VFP Cause Error"
permalink: /kb/177/Q177575/
---

## Q177575: PRB: ActiveX Controls Passing Variant&#42; Back to VFP Cause Error

	Article: Q177575
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox
	Last Modified: 14-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling a method in an ActiveX control built with Microsoft Foundation
	Classes (MFC), if there is an out parameter in the method with a type variant,
	Visual FoxPro returns a type mismatch error.
	
	CAUSE
	=====
	
	When you call a method in the ActiveX control and pass it a variable by
	reference to receive a parameter value back from the ActiveX control, Microsoft
	Visual FoxPro seems to use a data type of BSTR. If the ActiveX method's
	parameter is defined as a Variant in the MFC based ActiveX control, this causes
	MFC to try and coerce the data types to match by using the VariantChangeType
	function. This function returns the type mismatch error.
	
	RESOLUTION
	==========
	
	Controls built with the ActiveX Template Library (ATL) do not have this problem.
	If you build the control in Microsoft Foundation Classes (MFC), avoid using out
	parameter data types of variant.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Creating the Server:
	
	1. Create an MFC ActiveX control using the control wizard.
	
	2. Add a method to the control:
	
	        void CMyCtrl::MyMethod(VARIANT FAR* m_pVariant)
	        {
	        }
	
	3. Build and register the control.
	
	Creating the Client:
	
	1. Create a new form.
	
	2. Add an OLE container object.
	
	3. When the dialog box displays, select the "Insert Control" option.
	
	4. Select the control you just built with MFC.
	
	5. Create a command button on the form and place the following code in the Click
	  event:
	
	  ****Begin Example Code************
	        xy=space(0)
	        THISFORM.OleControl1.mymethod(@xy)
	        *****End Example Code**************
	
	When the button is clicked, the type mismatch error occurs.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q146219 How To Register an ActiveX Control (.ocx) Manually
	
	  Q139154 OLE Control Licensing in Visual FoxPro
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
