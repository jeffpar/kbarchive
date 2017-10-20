---
layout: page
title: "Q200491: BUG: Incorrect Coordinates Passed to OLEDragDrop/OLEDragOver"
permalink: /kb/200/Q200491/
---

## Q200491: BUG: Incorrect Coordinates Passed to OLEDragDrop/OLEDragOver

{% raw %}

	Article: Q200491
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbDragDrop kbMFC kbGrpDSMFCATL
	Last Modified: 27-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an ActiveX control, such as Microsoft TreeView control and
	Microsoft ListView control, from the COMCTL32.ocx file, (located in Visual C++
	version 5.x), or the MSCOMCTL.ocx file (located in Visual C++ version 6.0) in a
	Microsoft Foundation Classes (MFC) application, then the x- and y-coordinates
	that are passed to the OLEDragDrop() and OLEDragOver() event handlers are
	incorrect. The passing of these incorrect handlers causes the control's
	HitTest() method to return a wrong value.
	
	CAUSE
	=====
	
	The control's HitTest() method needs and takes a Twips units and a positive
	y-coordinate value. However, the y-coordinate is a negative value when it is
	passed in to the MFC container's OLEDragDrop() and OLEDragOver() event handlers.
	In addition, the values passed in are measured in pixel units instead of Twips
	units.
	
	RESOLUTION
	==========
	
	Use the following code to perform the conversion from pixel units to Twips units
	in the OLEDragDrop/OLEDragOver event handlers:
	
	     void ConvertXYtoTwips(float FAR* x, float FAR* y)
	     {
	        // Get a device context.
	        HDC hdc = GetDC(NULL);
	
	        // Determine how many Twips are in one pixel.
	        CPoint pOne(1, 1);
	        SetMapMode(hdc, MM_TWIPS);
	        DPtoLP(hdc, &pOne, 1);
	
	        // Convert *x and *y to Twips units.
	        float xx = *x * pOne.x;
	        float yy = *y * pOne.y;//NOTE: both *y and pOne.y are negative values.
	
	        // Release the device context.
	        ReleaseDC(NULL, hdc);
	
	        // X and y are in Twips pixel units.
	        *x = xx;
	        *y = yy;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	To better illustrate the usage of the ConvertXYtoTwips() function defined in the
	"Resolution" section, a Microsoft TreeView control (m_TreeView variable) is used
	in an AppWizard generated MFC Dialog-based container application (m_TestDlg).
	The following code shows how to highlight a node based on the mouse selection in
	the OLEDragDrop event handler, OnOLEDragDropTreectrl1(), of the dialog box:
	
	     BEGIN_EVENTSINK_MAP(CTestDlg, CDialog)
	        //{{AFX_EVENTSINK_MAP(CTestDlg)
	        ON_EVENT(CTestDlg, IDC_TREECTRL1, 1555 /* OLEDragDrop */,
	           OnOLEDragDropTreectrl1,
	           VTS_PDISPATCH VTS_PI4 VTS_PI2 VTS_PI2 VTS_PR4 VTS_PR4)
	        //}}AFX_EVENTSINK_MAP
	     END_EVENTSINK_MAP()
	
	     void CTestDlg::OnOLEDragDropTreectrl1(
	        LPDISPATCH FAR* Data, long FAR* Effect,
	        short FAR* Button, short FAR* Shift, float FAR* x, float FAR* y)
	     {
	        // Convert x and y to Twips pixel units.
	        ConvertXYtoTwips(x, y);
	
	        // Determine which node should be highlighted in the
	        // Microsoft TreeView control.
	        CNode node = m_TreeView.HitTest(*x, *y);
	        if (node)
	        {
	           VARIANT var;
	           var.vt = VT_DISPATCH;
	           var.pdispVal = node.m_lpDispatch;
	           m_TreeView.SetDropHighlight(&var);
	        }
	     }
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an AppWizard dialog-based application with ActiveX Controls support.
	  The dialog class is called CTestDlg.
	
	2. Insert a Microsoft TreeView control into the dialog resource.
	
	3. Use ClassWizard to associate the TreeView control with a member variable
	  called m_TreeView. This association also causes Visual C++ to insert the C++
	  wrapper classes for the TreeView control into the project.
	
	4. Add some nodes to the TreeView control in response to the WM_INITDIALOG
	  message of the CTestDlg dialog class. The following code sample illustrates
	  this addition:
	
	     // The node becomes a child node of the node named it is connected to.
	     #define tvwChild   (short) 4
	
	     #include "node.h"     // for CNode class
	     BOOL CTestDlg::OnInitDialog()
	     {
	        CDialog::OnInitDialog();
	
	        // ...
	
	        m_TreeView.SetOLEDropMode(1);
	
	        CNodes nodes = m_TreeView.GetNodes();
	        nodes.Clear();
	
	        COleVariant NOPARAM( DISP_E_PARAMNOTFOUND, VT_ERROR );
	
	        CNode node = nodes.Add(
	           LPVARIANT(NOPARAM),                 // VARIANT* Relative
	           LPVARIANT(NOPARAM),                 // VARIANT* Relationship
	           LPVARIANT(COleVariant("R")),        // VARIANT* Key
	           LPVARIANT(COleVariant("First")),    // VARIANT* Text
	           LPVARIANT(NOPARAM),                 // VARIANT* Image
	           LPVARIANT(NOPARAM));                // VARIANT* SelectedImage
	
	        node = nodes.Add(
	           LPVARIANT(COleVariant("R")),        // VARIANT* Relative
	           LPVARIANT(COleVariant( tvwChild ) ),// VARIANT* Relationship
	           LPVARIANT(COleVariant("C1")),       // VARIANT* Key
	           LPVARIANT(COleVariant("Child 1")),  // VARIANT* Text
	           LPVARIANT(NOPARAM),                 // VARIANT* Image
	           LPVARIANT(NOPARAM));                // VARIANT* SelectedImage
	
	        node = nodes.Add(
	           LPVARIANT(COleVariant("R")),        // VARIANT* Relative
	           LPVARIANT(COleVariant( tvwChild ) ),// VARIANT* Relationship
	           LPVARIANT(COleVariant("C2")),       // VARIANT* Key
	           LPVARIANT(COleVariant("Child 2")),  // VARIANT* Text
	           LPVARIANT(NOPARAM),                 // VARIANT* Image
	           LPVARIANT(NOPARAM));                // VARIANT* SelectedImage
	
	        node = nodes.Add(
	           LPVARIANT(NOPARAM),                 // VARIANT* Relative
	           LPVARIANT(NOPARAM),                 // VARIANT* Relationship
	           LPVARIANT(COleVariant("S")),        // VARIANT* Key
	           LPVARIANT(COleVariant("Second")),   // VARIANT* Text
	           LPVARIANT(NOPARAM),                 // VARIANT* Image
	           LPVARIANT(NOPARAM));                // VARIANT* SelectedImage
	
	        return TRUE;  // Return TRUE unless you set the focus to a control.
	     }
	
	5. Use ClassWizard to add an OLEDragDrop event handler for the TreeView control.
	  Add the code in OnOLEDragDropTreectrl1() without calling the
	  ConvertXYtoTwips() function. The call to HitTest() returns NULL if the
	  incorrect x and y values are used.
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbCmnCtrls kbDragDrop kbMFC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
