---
layout: page
title: "Q198232: PRB: Delete All Columns in the List Control"
permalink: /kb/198/Q198232/
---

## Q198232: PRB: Delete All Columns in the List Control

{% raw %}

	Article: Q198232
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrl kbVC500 kbVC600
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete columns from the List control, you might receive
	unexpected results. In particular, trying to delete all the columns in the List
	control might not work.
	
	CAUSE
	=====
	
	Because of the internal design of the List control, this problem can occur when
	you delete all the columns from a List control through a forward iterating loop.
	For example, when you delete the column at index 0, Column(0), the indices of
	all of the remaining columns decrement by one (for example, Column(1) becomes
	Column(0)).
	
	The following sample code does not delete all of the columns:
	
	     CListCtrl *m_pList = NULL;
	     m_pList = (CListCtrl*) GetDlgItem(IDC_LIST1);
	     int nColumns = 10;
	     for ( int i = 0; i < nColumns; i++)
	
	       m_pList->DeleteColumn (i);
	
	In the first pass of the loop, Column(0) is deleted and all the column indices
	decrement by one. As a result, Column(1) becomes Column(0) in the first pass of
	the loop. In the second pass of loop, the value of i is 1, so Column(1) is
	deleted and the loop never gets to Column(0).
	
	RESOLUTION
	==========
	
	If you want to delete all the columns in a loop, you need to delete the columns
	in the reverse order in which they were added. So you need to have a
	decrementing loop instead of an incrementing loop. If the total number of
	columns is ten (0-9) in the List control, you need to start deleting from the
	last column, Column(9), instead of the first, Column(0), as in the following
	example:
	
	     CListCtrl *m_pList = NULL;
	     m_pList = (CListCtrl*) GetDlgItem(IDC_LIST1);
	     int nColumns = 10;
	     for ( int i = nColumns-1; i >= 0; i--)
	       m_pList->DeleteColumn (i);
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Add and Delete All Columns from the List Control
	---------------------------------------------------------
	
	1. Open Visual C++. Click New on the File menu and select MFC AppWizard in the
	  Projects tab.
	
	2. Type ListCtrlTest in the Project name box and click OK.
	
	3. In the next step, Step 1, select Dialog based for "What type of application
	  would you like to create?" and click Finish. Click OK on the New Project
	  Information dialog box.
	
	4. Add a command button to your dialog box from the Controls bar. Right-click on
	  the command button and then click Properties. Change the Caption of the
	  command button to CreateColumns and change the ID to IDC_CREATECOLUMNS. Close
	  the Properties dialog box.
	
	5. Add another command button. Use the Properties dialog box to change the
	  Caption to DeleteAllColumns and change the ID to IDC_DELETEALLCOLUMNS.
	
	6. Add a List control to your dialog box from the Controls bar. Open the
	  Properties dialog box. Click the Styles tab and change the View to Report.
	  Close the Properties dialog box.
	
	7. Press the CTRL key and double-click the List control to add the member
	  variable for it. Type m_listctrl in the Member variable name box and click
	  OK.
	
	8. Double-click the CreateColumns command button to add a command handler to it.
	  Click OK to open the code window and place the following code in the
	  CListCtrlTestDlg::Oncreatecolumns() function:
	
	        CString str;
	        for (int i = 0; i>10; i++) // Insert ten columns.
	        {
	           str.Format("Column#: %d", i);
	           m_listctrl.InsertColumn(i, str, LVCFMT_LEFT, 75);
	
	        }
	
	9. Double-click the DeleteAllColumns command button to add a command handler to
	  it. Place the following code in the CListCtrlTestDlg::OnDeleteallcolumns()
	  function:
	
	        // Delete all the columns in descending order.
	        for ( int i = 9; i >=0; i--)
	           m_listctrl.DeleteColumn(i);
	
	10. Save, compile, and run your code.
	
	REFERENCES
	==========
	
	LISTHDR MFC sample in VC++ Help.
	
	CListCtrl documentation in MSDN.
	
	Additional query words: MFC Listview CListCtrl
	
	======================================================================
	Keywords          : kbcode kbCtrl kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
