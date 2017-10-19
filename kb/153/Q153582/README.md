---
layout: page
title: "Q153582: How to Get Container hWnd from Windowless Custom OLE Control"
permalink: /kb/153/Q153582/
---

## Q153582: How to Get Container hWnd from Windowless Custom OLE Control

	Article: Q153582
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.x 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An OLE control that is invisible at run time does not have a window handle.
	Hence the GetParent() Windows API function cannot be used to obtain the hWnd of
	the container's window. This article shows how you can implement a read-only
	hWndParent property for a custom OLE control that returns the container window's
	hWnd.
	
	MORE INFORMATION
	================
	
	The window handle of the container's window can be obtained by calling
	IOleInPlaceSite::GetWindow(). The IOleInPlaceSite interface pointer can be
	obtained by QueryInterfacing for it from the ClientSite pointer in the override
	of OnSetClientSite(). Note that this technique can also be used for OLE controls
	that have a window handle at run-time.
	
	Step-by-step example
	--------------------
	
	1. Create a rudimentary 32-bit OLE Control using the MFC CDK that ships with
	  Visual C++ 4.x. This article assumes that this custom OCX is called Test
	  (coclass name) and that the control class name is CTestCtrl.
	
	2. In the .CPP file for your control class, add the OLEMISC_INVISIBLEATRUNTIME
	  flag to your control. It should look something like this:
	
	  ////////////////////////////////////////////////////////////////////// 
	        // Control type information
	
	        static const DWORD BASED_CODE _dwTestOleMisc =
	        OLEMISC_INVISIBLEATRUNTIME |
	        OLEMISC_ACTIVATEWHENVISIBLE |
	        OLEMISC_SETCLIENTSITEFIRST |
	        OLEMISC_INSIDEOUT |
	        OLEMISC_CANTLINKINSIDE |
	        OLEMISC_RECOMPOSEONRESIZE;
	
	3. Use the Visual C++ MFC ClassWizard to add the following Property to your
	  control class. The external name of this Property is hWndParent. It is
	  implemented as a Get method only (called GetHWndParent), so it is a read-only
	  property. It takes no parameters and returns the hWnd as an OLE_HANDLE.
	
	  You will also need to add a protected member variable m_hWndParent (to
	  actually hold the window handle as an OLE_HANDLE) and override the virtual
	  function OnSetClientSite in the header file for the control class as
	  follows:
	
	        Class CTestControl::COleControl
	        {
	         .
	         .
	         .
	
	        // Overrides
	        virtual void OnSetClientSite();
	
	         .
	         .
	
	         // Implementation
	         protected:
	            OLE_HANDLE m_hWndParent;
	
	            .
	            .
	         };
	
	4. Add the following code to the implementation file (.CPP) of the control
	  class:
	
	        ///////////////////////////////////////////////////////////////////// 
	        // CTestCtrl::CTestCtrl - Constructor
	
	        CTestCtrl::CTestCtrl()
	        {
	         InitializeIIDs(&IID_DTest, &IID_DTestEvents);
	
	         // TODO: Initialize your control's instance data here.
	
	         m_hWndParent = NULL;
	
	         .
	         .
	         .
	         }
	
	         void CTestCtrl::OnSetClientSite()
	         {
	          if (m_pClientSite)
	          {
	           IOleInPlaceSite *pOleInPlaceSite = NULL;
	
	           if (NOERROR == m_pClientSite >QueryInterface(IID_IOleInPlaceSite,
	                                            (LPVOID *)&pOleInPlaceSite))
	                {
	                 pOleInPlaceSite->GetWindow((HWND *)&m_hWndParent);
	                 pOleInPlaceSite->Release();
	                }
	           else
	              m_hWndParent = NULL;
	           }
	           else
	           m_hWndParent = NULL;
	          }
	
	          OLE_HANDLE CTestCtrl::GetHWndParent()
	          {
	           // TODO: Add your property handler here
	
	           return m_hWndParent;
	          }
	
	5. Build the Test OLE control from Visual C++ 4.x to automatically register the
	  control if everything compiles properly.
	
	6. From Visual Basic 4.0 32-bit, open a new project, and add the Test OLE
	  control to the Visual Basic toolbox by choosing it from the Tools Custom
	  Controls menu.
	
	7. Add an instance of the Test OLE control to Form1. This will be named Test1.
	  Also add a Picture Box control (Picture1) to Form1, and then draw another
	  Test OLE control (Test2) directly inside the PictureBox.
	
	8. Add the following code to the general declarations portion of Form1:
	
	     Private Sub Form_Click()
	        Debug.Print Hex(Test1.hWndParent), Hex(Form1.hWnd)   'Both are same
	        Debug.Print Hex(Test2.hWndParent), Hex(picture1.hWnd)'Both are same
	        End Sub
	
	9. Run the Visual Basic program, and click the form. You should see the same
	  values for the Window handles printed on the same line in the Debug window in
	  each of the two cases.
	
	Additional query words: 4.00 vb4win vb4all vbctrl
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch kbVC32bitSearch
	Version           : 4.00 | 4.00
	
	=============================================================================
	
