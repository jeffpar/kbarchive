---
layout: page
title: "Q260744: HOWTO: Set ActiveX Control Design-Time Properties at Run Time"
permalink: /kb/260/Q260744/
---

## Q260744: HOWTO: Set ActiveX Control Design-Time Properties at Run Time

{% raw %}

	Article: Q260744
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbMFC kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some properties of an ActiveX control may be read-only at run time, which makes
	dynamic creation difficult. Design mode can be simulated temporarily for
	property initialization by overriding the control container's OnAmbientProperty
	handler.
	
	MORE INFORMATION
	================
	
	For ActiveX controls that offer design-time properties, the author of the
	control probably disallowed dynamic run-time manipulation of these properties on
	purpose. Take care when you adjust these properties. In some cases, however, the
	following method may yield useful results. Always carefully test your solution.
	The control may not be able to switch modes easily, so this technique should be
	used with care, and only to allow these properties to be set when the control is
	created dynamically, not as license to modify these settings at will.
	
	The RichTextBox control is an example of a control that offers such properties.
	Because the Multiline and Scrollbars properties of the RichTextBox control are
	read-only at run time, this control is almost impossible to create dynamically
	except in its default form. The solution, in an MFC container, is to override
	OnAmbientProperty. This function receives, along with a pointer to the control
	site, the DISPID of the ambient property, and a pointer to the value it should
	return. This allows the container to convince the control that it is in design
	mode when the value of DISPID_AMBIENT_USERMODE is queried for.
	
	Following is an example of how to override this function:
	
	  BOOL CRichTextDlg::OnAmbientProperty(COleControlSite* pSite, DISPID dispid, VARIANT* pvar) 
	  {
	  	if ((dispid == DISPID_AMBIENT_USERMODE) && !m_bInitDone)
	  	{
	  		V_VT(pvar) = VT_BOOL;
	  		V_BOOL(pvar) = 0;
	  		return TRUE;
	  	}
	
	  	return CDialog::OnAmbientProperty(pSite, dispid, pvar);
	  }
	
	A member variable, m_bInitDone, was added to the class. It determines the result
	to return from the function. Once initialization of the control has been
	completed, this variable should be set so that the container reveals its true
	state.
	
	REFERENCES
	==========
	
	For additional information about extensive customization of MFC control
	containers, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q196835 How to Override MFC's Default Control Containment
	
	Additional query words: DISPID_AMBIENT_USERMODE Ambient
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbMFC kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
