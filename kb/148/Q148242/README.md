---
layout: page
title: "Q148242: HOWTO: Handle OCM_CTLCOLORxxx Reflected Messages"
permalink: /kb/148/Q148242/
---

## Q148242: HOWTO: Handle OCM_CTLCOLORxxx Reflected Messages

	Article: Q148242
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGr
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to change the background color of an OLE control that
	subclasses a Windows Control, with sample code for an Edit control.
	
	This article should apply to Button, Static, ListBox, and ComboBox controls as
	well.
	
	MORE INFORMATION
	================
	
	Please refer to the following article in the Microsoft Knowledge Base:
	
	  Q130952 WM_CTLCOLORxxx Message Changes for Windows 95
	
	for more about the exact WM_CTLCOLORxxx message sent by each control. If a
	control sends the WM_CTLCOLORSTATIC, you have to handle the OCM_CTLCOLORSTATIC
	message in the OCX and so on.
	
	To change the background color of an OLE Control that subclasses an Edit Control,
	you must handle the OCM_CTLCOLOREDIT(32-bit) messages. These messages are
	intercepted by the "reflector window" (created for an OLE control that
	subclasses a Windows control) that reflects them back to the OLE control itself.
	In response to these reflected messages, you must set the background color (and
	optionally the foreground color) and return a handle to a brush initialized with
	the background color.
	
	Step-by-Step Example
	--------------------
	
	1. Generate an MFC ActiveX Control Wizard Application, and select the option
	  that allows you to subclass an Edit control.
	
	2. To handle an OCM_CTLCOLOREDIT reflected window message, declare the following
	  handler function in the .h file of your control's class:
	
	  LRESULT OnOcmCtlColor(WPARAM wParam, LPARAM lParam);
	
	3. In the .cpp file of your control's class, add an ON_MESSAGE entry to the
	  message map:
	
	  ON_MESSAGE(OCM_CTLCOLOREDIT, OnOcmCtlColor)
	
	4. Declare CBrush* m_pBackBrush in your control's .h file.
	
	5. Set m_pBackBrush to NULL in the constructor.
	
	6. Release the GDI object and delete the brush object in the control destructor:
	
	  CEdtclrCtrl::~CEdtclrCtrl()
	      {
	         if(m_pBackBrush!=NULL)
	  	{
	             m_pBackBrush->DeleteObject();
	             delete m_pBackBrush;
	  	}
	      }
	
	REFERENCES
	==========
	
	Refer to technical article [ASCII 147]TN062: Message Reflection for Windows
	Controls[ASCII 148] and the article [ASCII 147]ActiveX Controls: Sub-classing a
	Windows Control in Visual C++ Programmer's Guide.[ASCII 148]
	
	Additional query words: list box combo
	
	======================================================================
	Keywords          : kbcode kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
