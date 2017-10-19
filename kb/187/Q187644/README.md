---
layout: page
title: "Q187644: PRB: ATL Controls Fail to Recognize Default Button on VB Form"
permalink: /kb/187/Q187644/
---

## Q187644: PRB: ATL Controls Fail to Recognize Default Button on VB Form

	Article: Q187644
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbKeyAccel kbVBp kbVC500 kbVC600 kbATL3
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ATL-based ActiveX control has the focus on a Visual Basic form, it does
	not give the focus to the default button on the form (the button with a Default
	property of True) when you press ENTER.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add an ActiveX control that was written in ATL to a Visual Basic form.
	
	2. Add a Command button to the form. Set the Default property to True.
	
	3. Add an ActiveX control that was not written in ATL to the form.
	
	4. Implement the Click event for the Command button as follows:
	
	        Private Sub Command1_Click()
	           MsgBox "Hello from Command1"
	        End Sub
	
	5. Run the form. Select the ActiveX control that was not written in ATL and
	  press ENTER. This causes the default Command button to activate and the
	  message box appears.
	
	6. Select the ATL-based control and press ENTER. The Command button does not get
	  activated and the message box does not appear.
	
	CAUSE
	=====
	
	The reason for this behavior is that the default implementation in ATL of the
	IOleControlImpl::GetControlInfo() and
	IOleInPlaceActiveObjectImpl::TranslateAccelerator() methods just returns
	E_NOTIMPL. The container calls GetControlInfo to get the control's keyboard
	mnemonics and keyboard behavior, and it calls TranslateAccelerator() to process
	the keys.
	
	RESOLUTION
	==========
	
	Because the implementation in ATL of these IOleControlImpl-based methods simply
	returns E_NOTIMPL, the control writer must override these methods in the control
	class.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To override this behavior implement IOleControlImpl::GetControlInfo() and
	IOleInPlaceActiveObjectImpl::TranslateAccelerator() in your control class as
	shown below:
	
	Sample Code
	-----------
	
	     STDMETHOD(GetControlInfo)(CONTROLINFO *pCI)
	     {
	        if(!pCI)
	        {
	           return E_POINTER;
	        }
	        pCI->hAccel   = NULL;
	        pCI->cAccel   = 0;
	        pCI->dwFlags  = 0;
	
	        return S_OK;
	     }
	
	     STDMETHOD(TranslateAccelerator)(MSG *pMsg)
	     {
	        if (
	           ((pMsg->message >= WM_KEYFIRST) && (pMsg->message <= WM_KEYLAST))
	           &&
	           ((VK_TAB == pMsg->wParam) || (VK_RETURN == pMsg->wParam))
	        )
	        {
	           CComQIPtr<IOleControlSite,&IID_IOleControlSite>
	           spCtrlSite(m_spClientSite);
	           if(spCtrlSite)
	           {
	              return spCtrlSite->TranslateAccelerator (pMsg,0);
	           }
	        }
	        return S_FALSE;
	     }
	
	In the above sample, the TranslateAccelerator code processes only the TAB and the
	ENTER keys.
	
	REFERENCES
	==========
	
	Visual C++ Help; search on "IOleControl::GetControlInfo" and
	"IOleInPlaceActiveObject::TranslateAccelerator"
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q179696 PRB: Focus and Tab Issues with ATL Subclassed Edit Control
	
	Additional query words: ATL Tabbing SubEdit GetControlInfo TranslateAccelerator IOleControl IOleControlImpl kbATL200 kbATL210 kbCtrl kbVC500 kbDSupport kbdsd kbatl300 kbvc600
	
	======================================================================
	Keywords          : kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbKeyAccel kbVBp kbVC500 kbVC600 kbATL300 MSGRAPH kbGrpDSMFCATL kbAcceleratorKey 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbVCNET
	Version           : :2.0,2.1,3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
