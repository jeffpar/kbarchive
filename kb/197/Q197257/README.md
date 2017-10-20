---
layout: page
title: "Q197257: PRB: Problems Using Subclassed TreeView MFC Control in VB"
permalink: /kb/197/Q197257/
---

## Q197257: PRB: Problems Using Subclassed TreeView MFC Control in VB

{% raw %}

	Article: Q197257
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create a TreeView subclassed control using C++ with MFC ActiveX control
	Wizard. It works correctly in the MFC container, but when used in the VB
	container, the background color behind the "+", "-", and dotted lines is the
	container's background color rather than the TreeView control's background
	color. Further, when the VB project is compiled and run, an error message is
	generated indicating that the control can not be created and the application
	terminates.
	
	CAUSE
	=====
	
	The cause for the first problem is that the TreeView control creates bitmaps for
	the "+", "-", and dotted line when the control is first created. These bitmaps
	are used if the background color is not changed. When VB is used as the
	container, the TreeView control uses the container's back color as the default
	color.
	
	The cause of the second problem is that the "SysTreeView32" window class needs to
	be registered before it can be created. A VB application won't register it
	automatically.
	
	RESOLUTION
	==========
	
	To fix the first problem, set the TreeView control's back color after the
	"SysTreeView32" window is created so that the bitmaps for "+", "-", and dotted
	lines are regenerated.
	
	To fix the second problem, call "InitCommonControls()" before calling
	"COleControl::OnCreate(lpCreateStruct)" to create the window.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Steps to create a TreeView subclassed control with VC++
	-------------------------------------------------------
	
	1. In VC++ Create a MFC ActiveX control Wizard project with project name
	  "MyTreeView". Choose "SysTreeView32" as the class you want to subclass in the
	  second step and keep all other settings as it is. Press "Finish".
	
	2. Go to the following function in the MyTreeViewCtrl.cpp file:
	
	        BOOL CMyTreeViewCtrl::PreCreateWindow(CREATESTRUCT& cs)
	
	  Add the following line:
	
	        cs.style |= TVS_EDITLABELS | TVS_HASBUTTONS | TVS_HASLINES;
	
	  before this line:
	
	        return COleControl::PreCreateWindow(cs);
	
	3. In Class view, right click CMyTreeViewCtrl and select "Add Member Function"
	  from the popup menu. Type HTREEITEM in the Function Type field, place the
	  following text in the Function Declaration field, and click "OK".
	
	     TreeInsertItem(const TCHAR* name,HTREEITEM hParent,HTREEITEM
	                    hInsertAfter)
	
	4. Replace the TreeInsertItem function in MyTreeViewCtrl.cpp with:
	
	        HTREEITEM CMyTreeViewCtrl::TreeInsertItem(const TCHAR* name,
	              HTREEITEM hParent,HTREEITEM hInsertAfter)
	        {
	           TV_ITEM item;
	           TCHAR szName[256];
	
	           item.mask = TVIF_TEXT;
	           _tcsncpy(szName, name, 255);
	           item.pszText=szName;
	
	           TV_INSERTSTRUCT tsInsert;
	           tsInsert.hParent=hParent;
	           tsInsert.hInsertAfter=hInsertAfter;
	           tsInsert.item=item;
	
	           return TreeView_InsertItem(m_hWnd,&tsInsert);
	        }
	
	5. Select the View / Class Wizard menu option and click "Message Maps" tab.
	  Select "CMyTreeViewCtrl" as the class name. Double click "WM_CREATE" in the
	  "Messages" list box and click OK to ad the OnCreate message handler to the
	  CMyTreeViewCtrl class.
	
	6. In CMyTreeViewCtrl.cpp change the CMyTreeViewCtrl::OnCreate function to:
	
	        int CMyTreeViewCtrl::OnCreate(LPCREATESTRUCT lpCreateStruct)
	
	        {
	           if (COleControl::OnCreate(lpCreateStruct) == -1)
	              return -1;
	
	           HTREEITEM root=TreeInsertItem(_T("Root"),TVI_ROOT,TVI_LAST);
	           HTREEITEM sub1=TreeInsertItem(_T("sub1"),root,TVI_LAST);
	           HTREEITEM subsub1=TreeInsertItem(_T("subsub2"),sub1,TVI_LAST);
	           TreeInsertItem(_T("sub2"),root,TVI_LAST);
	           return 0;
	        }
	
	7. Build the project and the control will be registered automatically.
	
	Steps to create a VB sample
	---------------------------
	
	1. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Select Components from the Project menu, check "MyTreeView ActiveX Control
	  module" and click OK.
	
	3. Add a MyTreeViewCtrl control to Form1.
	
	4. Press "F5" to run the application and double click on 'Root'. When you expand
	  the + signs, you will observe the background color difference.
	
	5. Compile the application to EXE and run the exe file. You will get a "Debug
	  Assertion Error" message and your application will terminate.
	
	Note that this ocx works properly when sited on an MFC based application.
	
	Steps to Correct the Problems
	-----------------------------
	
	1. Return to the MFC ActiveX control, "MyTreeView".
	
	2. In the function CMyTreeViewCtrl::OnCreate in MyTreeViewCtrl.cpp replace the
	  line:
	
	           if (COleControl::OnCreate(lpCreateStruct) == -1)
	              return -1;
	
	  with the following:
	
	           ::InitCommonControls();
	
	           if (COleControl::OnCreate(lpCreateStruct) == -1)
	              return -1;
	
	           SendMessage(TVM_SETBKCOLOR, 0, (LPARAM)RGB(255,255,255));
	           SendMessage(TVM_SETIMAGELIST , TVSIL_NORMAL , 0);
	
	3. Rebuild the project.
	
	4. Run the VB sample again and observe that everything works correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbMFC kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
