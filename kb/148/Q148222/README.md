---
layout: page
title: "Q148222: HOWTO: Update Property Values in a Property Page"
permalink: /kb/148/Q148222/
---

## Q148222: HOWTO: Update Property Values in a Property Page

	Article: Q148222
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbCOMt kbCtrl kbMFC kbPropSheet kbVC400 kbVC500 kbVC600 kbGrpDSMF
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft OLE Control Developer's Kit (CDK) 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. Part or all of the information in this article applies to managed Visual C++ code and may be applied only by using the .NET Framework.
	
	SUMMARY
	=======
	
	To modify a property of an OLE control, you would normally change the properties
	value in the control's property page. However, it is possible for a property to
	be modifiable from more than one property page especially in development
	environments such as Visual Basic. In this case, when you change the property in
	the control's property page, you should synchronize the value in Visual Basic's
	Property Form. This article shows by example how to do it.
	
	MORE INFORMATION
	================
	
	For example, in Visual Basic, place the Circ3 sample control on the Form page.
	Then click the right mouse button to select properties for the control. You will
	notice that the same properties can be seen in Visual Basic's Properties window.
	For example, one of the properties of Circ3 is the CircleOffset property. If you
	change this value in the Control's property page and click Apply, you will
	notice that the value has not been updated in Visual Basic's Properties window.
	To synchronize the value in both, you need to call BoundPropertyChanged(dispid)
	for each property you want to update.
	
	NOTE: The dispid is the id of the property to update. It is usually found in the
	header file of the COleControl-derived class. The dispids for the Circ3 control
	follow:
	
	     // Dispatch and event IDs
	     public:
	            enum {
	            //{ {AFX_DISP_ID(CCirc3Ctrl)
	            dispidCircleShape = 2L,
	            dispidCircleOffset = 3L,
	            dispidFlashColor = 1L,
	            dispidNote = 4L,
	            eventidClickIn = 1L,
	            eventidClickOut = 2L,
	            //} }AFX_DISP_ID
	            };
	
	The following sample code shows how to modify the Circ3 sample to synchronize the
	CircleShape and CircleOffset properties given the dispids above.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     void CCirc3Ctrl::OnCircleShapeChanged()
	     {
	        SetModifiedFlag();
	
	        // force the control to redraw itself
	        InvalidateControl();
	
	        // reset the circle offset, if necessary
	        if (m_circleShape)
	           SetCircleOffset(0);
	
	        BoundPropertyChanged(dispidCircleShape);      // *ADD THIS LINE*
	     }
	
	     void CCirc3Ctrl::SetCircleOffset(short nNewValue)
	     {
	        // Validate the specified offset value
	        if ((m_circleOffset != nNewValue) && m_circleShape&&
	            InBounds(nNewValue))
	        {
	           m_circleOffset = nNewValue;
	           SetModifiedFlag();
	           BoundPropertyChanged(dispidCircleOffset); // *ADD THIS LINE*
	           InvalidateControl();
	        }
	     }
	
	Additional query words: Property Page Form Browser
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbCOMt kbCtrl kbMFC kbPropSheet kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
