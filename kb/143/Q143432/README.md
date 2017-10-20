---
layout: page
title: "Q143432: HOWTO: Gain Access to an ActiveX Control from its Property Page"
permalink: /kb/143/Q143432/
---

## Q143432: HOWTO: Gain Access to an ActiveX Control from its Property Page

{% raw %}

	Article: Q143432
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbMFC kbVC100 kbVC150 kbVC200 kbVC500 kbVC600 kbGrpDSMFCATL kbA
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using an ActiveX control, you find situations where there is a need to call
	member functions or gain access to member variables of the control derived class
	from its associated property page. This can be achieved by making use of the
	array of IDispatch pointers (held by each property page) that represent the
	objects being affected due to the manipulations done through the property page.
	This article explains in detail how this can implemented and gives a code sample
	to illustrate it.
	
	MORE INFORMATION
	================
	
	Property sheets, in an ActiveX control, allow an end user to directly manipulate
	the control's properties by displaying one or more property pages that display a
	collection of properties. These properties could belong either to one particular
	control or to a collection of ActiveX controls.
	
	Each ActiveX control property page is an in-proc object with its own CLSID that
	implements the interface IPropertyPage. The IPropertyPage::SetObjects member
	function is used to provide a property page with pointers to the objects
	(IUnknowns) manipulated by this particular page. Please refer to the OLE
	Programmer's Reference, Vol. 1, for more information about the SetObjects
	function.
	
	The MFC implementation for the IPropertyPage interface stores the object pointers
	as an array of IDispatchs representing the controls that are affected by a
	particular property page. This array can be accessed by using
	COlePropertyPage::GetObjectArray(). The property pages in MFC make use of this
	IDispatch array to apply the changes directly to those objects (that is, the
	controls) by creating a COleDispatchDriver-derived class, attaching the
	IDispatch to this class, and invoking the SetProperty/GetProperty of
	COleDispatchDriver to convey the change to the control-derived class.
	
	An ActiveX Control generated using the ControlWizard creates a property page that
	can be used to manipulate the properties of one particular ActiveX control
	rather than manipulating a collection of controls. Hence, the control associated
	to a property page can be accessed by obtaining the previously mentioned
	IDispatch array in the COlePropertyPage and calling the static function
	CCmdTarget::FromIDispatch to return a pointer to the CCmdTarget object
	associated with any one of the IDispatchs. The sample code section of this
	article illustraties this method.
	
	Note that calling CCmdTarget::FromIDispatch(), for an IDispatch pointer belonging
	to an ActiveX Control, will always return NULL in versions before MFC 4.x. For
	more information about this problem, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q138414 PRB: FromIDispatch Returns NULL for OLE Control
	
	This is no longer a problem in versions MFC 4.x.
	
	
	Sample Code
	-----------
	
	     // The header file of the control-derived class must be included in
	     // the same source file.
	     #include "myctrl.h"
	
	     CMyCtrl* CMyPropPage::GetControlClass()
	     {
	       CMyCtrl *pMyCtrl;
	       ULONG Ulong;
	
	       // Get the array of IDispatchs stored in the property page
	       LPDISPATCH FAR *m_lpDispatch = GetObjectArray(&Ulong);
	
	       // Get the CCmdTarget object associated to any one of the above
	       // array elements
	       pMyCtrl = (CMyCtrl*) CCmdTarget::FromIDispatch(m_lpDispatch[0]);
	
	       // Cleanup
	       return pMyCtrl;
	     }
	
	     // If your control has a public member variable, in this case
	     // I am using m_direct_control, then that variable can be
	     // manipulated as follows.
	
	     void CMyPropPage::OnLButtonDown(UINT nFlags, CPoint point)
	        {
	          // Modify a member variable of Control directly.
	          CMyCtrl *pMyCtrl = GetControlClass();
	          if (pMyCtrl)
	          {
	             pMyCtrl->m_direct_control++;
	   
	             // Display the new value of the variable in a message box.
	             char buf[100];
	             AfxMessageBox (_itoa (pMyCtrl->m_direct_control, buf, 10));
	          }
	   
	          COlePropertyPage::OnLButtonDown(nFlags, point);
	        }
	
	In this code, it is assumed that the array of IDispatchs returned from
	GetObjectArray holds the same IDispatch pointer because in a default
	ControlWizard-generated application, each property page manipulates a particular
	ActiveX control.
	
	IMPORTANT NOTE: You may get NULL returned from CCmdTarget::FromIDispatch() when
	the control is created with aggregation support. This behavior is noticable in
	containers such as Visual C++ 6.0 ActiveX Test Container, Excel 97, Excel 2000,
	Frontpage 98, and perhaps others. Therefore, the proposed method above won't
	work in those containers. A possible workaround is to make the control
	nonaggregatable by setting the following in the control constructor:
	
	  CPropPageAccessCtrl::CPropPageAccessCtrl()
	  {
	      InitializeIIDs(&IID_DPropPageAccess, &IID_DPropPageAccessEvents);
	
	  //new code
	  //no aggregation please!  
	      m_xInnerUnknown = 0; //Base class COleControl set this with call to EnableAggregation()
	  //end of new code
	  }
	
	While this workaround will work for Visual C++ ActiveX Test Container 6.0, this
	workaround is not an option for containers that only support such aggregatable
	controls as Excel 97 and Excel 2000. Disabling aggregation would prevent end
	users from adding the control to an Excel spreadsheet. One could add a long
	property to the control and set it to the "this" pointer of the control. Then,
	one could retrieve this property from the page, do a cast on the value to the
	control's type, and use it. For additional information about this method, please
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q205670 HOWTO: Get Access to an ActiveX Control from its Property Page
	
	Additional query words: ocx visualc
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbMFC kbVC100 kbVC150 kbVC200 kbVC500 kbVC600 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
