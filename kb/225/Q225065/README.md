---
layout: page
title: "Q225065: PRB: Cannot Manipulate Columns of MS DataGrid in Visual C++ at D"
permalink: /kb/225/Q225065/
---

## Q225065: PRB: Cannot Manipulate Columns of MS DataGrid in Visual C++ at D

{% raw %}

	Article: Q225065
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbVC600 kbGrpDSVCDB
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft DataGrid version 6.0 does not support modifications to the columns of
	Grid at design time when using it in Visual C++.
	
	RESOLUTION
	==========
	
	You can manipulate the columns of DataGrid programmatically at run time. The
	sample code below shows how to add/remove a column, and modify the column's
	caption when using ADO data control and DataGrid with an MFC CVCDataGridDlg
	class.
	
	Insert the following variables and member function prototypes in the
	corresponding dialog class declaration:
	
	- CDataGrid m_Grid; // DataGrid variable.
	
	- CAdodc m_DataControl; // ADO Data Control variable.
	
	- void OnAdd( ) // Function for adding a column.
	
	- void OnRemove( ) // Function for removing a column.
	
	- void OnModify( ) // Function for modifying a column.
	
	Sample Code:
	
	  //implementation
	  #include "columns.h"    // CColumns collection object header file.
	  #include "column.h"     // CColumn object header file.
	  #include "_recordset.h" // C_Recordset object header file.
	  #include "fields.h"     // CFields collection object header file.
	  #include "field.h"      // CFields object header file.
	  #include <comdef.h>
	
	  // Adding a column.	
	  void CVCDataGridDlg::OnAdd() 
	  {
	     //Get the total number of columns.
	     short i = (short)(m_DataGrid.GetColumns().GetCount());<BR/>
	     //Insert the new column.
	     m_DataGrid.GetColumns().Add(i);
	     CString rCaption;
	     GetDlgItemText(IDC_EDIT2,rCaption);
	     //Set the caption of the column.
	    m_DataGrid.GetColumns().GetItem(_variant_t(i)).SetCaption((LPCTSTR)rCaption);
	    m_DataGrid.Refresh();
	  }
	
	  // Removing a column.
	  void CVCDataGridDlg::OnRemove() 
	  {
	     m_DataGrid.GetColumns().Remove( _variant_t((long) atoi(m_Edit.GetBuffer(m_Caption.GetLength()) )));
	     m_DataGrid.Refresh();
	  }
	
	  // Modifying a column caption.
	  void CVCDataGridDlg::OnModify() 
	  {
	     CString rCaption, rColNum;
	     GetDlgItemText(IDC_EDIT1,rColNum);
	     GetDlgItemText(IDC_EDIT2,rCaption);
	     m_DataGrid.GetColumns().GetItem(_variant_t((long) atoi(rColNum))).SetCaption((LPCTSTR) rCaption);<BR/>
	     m_DataGrid.Refresh();
	  }
	
	STATUS
	======
	
	The behavior is by design.
	
	MORE INFORMATION
	================
	
	Step to Reproduce the Problem
	-----------------------------
	
	1. Create an MFC Appwizard Project.
	
	2. Insert a Microsoft ADO Data Control, version 6.0 (OLEDB).
	
	3. Insert a Microsoft DataGrid Control, version 6.0 (OLEDB).
	
	4. Right-click the DataGrid control.
	
	RESULTS: Note that the "Edit" option for making changes to the columns of
	DataGrid at design time is absent. This option is available in Visual Basic 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbVC600 kbGrpDSVCDB 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
