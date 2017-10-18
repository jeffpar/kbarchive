---
layout: page
title: "Q132396: FIX: Error C2065: 'DDX_FieldCBIndex' : undeclared identifier"
permalink: kb/132/Q132396/
---

## Q132396: FIX: Error C2065: 'DDX_FieldCBIndex' : undeclared identifier

	Article: Q132396
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC22
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use ClassWizard to map a drop list combobox to a foreign CRecordset
	object's field through a record view integer member variable, ClassWizard
	generates a call to DDX_FieldCBIndex in the record view's DoDataExchange()
	member function:
	
	     void CMyRecordView::DoDataExchange(CDataExchange* pDX)
	     {
	        ...
	        //{ {AFX_DATA_MAP(CMyRecordView)
	        DDX_FieldCBIndex(pDX, IDC_COMBO1, m_pSet->m_id, m_pSet);
	        //} }AFX_DATA_MAP
	     }
	
	When compiling the program, the compiler gives you the following compiler error:
	
	  error C2065: 'DDX_FieldCBIndex' : undeclared identifier
	
	CAUSE
	=====
	
	The DDX_FieldCBIndex function is not implemented by the Microsoft Foundation
	Classes.
	
	RESOLUTION
	==========
	
	Do not bind the integer data member of the record view to a drop down combo box.
	Bind the data member to an edit control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	When implementing CRecordView and CRecordSet classes, ClassWizard completes two
	data exchanges. Data is exchanged between the record view control and the record
	view data members and between it and the record set data members, which are
	linked to the database fields.
	
	                 RFX                          DDX
	
	   Data          Record                       Dynamic
	   Source  <---- Field   --->   record   <--- Data --->   controls
	   record        Exchange       view          Exchange
	   set
	
	For record view data members that have a corresponding database field, the
	DDX_Fieldxxx set of functions are used to perform DDX. For those members without
	corresponding database fields, the DDX_xxx set of functions are used. For every
	DDX_xxx function, there is typically a corresponding DDX_Fieldxxx function.
	
	The corresponding data exchange function for DDX_FieldCBIndex() is DDX_CBIndex(),
	which obtains the index position of the item in the listbox portion of the
	combobox. This information is meaningless outside of the combo box unless it
	corresponds to a predefined string. If this is the case, then the data member
	should be bound to an edit control.
	
	REFERENCES
	==========
	
	For more information on binding record view fields to recordset objects, please
	see the following MFC Encyclopedia articles:
	
	  ClassWizard: Mapping Form Controls to Recordset Fields
	  ClassWizard: Foreign Objects
	
	Additional query words: 1.50 1.51 1.52 2.00 2.10 2.20
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbNoUpdate kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
