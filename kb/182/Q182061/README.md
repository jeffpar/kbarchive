---
layout: page
title: "Q182061: How to Populate a List or Combo Box with Recordset Data"
permalink: /kb/182/Q182061/
---

## Q182061: How to Populate a List or Combo Box with Recordset Data

	Article: Q182061
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3; winnt:
	Operating System(s): 
	Keyword(s): kbfile kbSample kbDAOsearch kbDatabase kbMFC kbODBC KbUIDesign kbVC
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DaoDDX.exe sample demonstrates how to populate list and combo boxes with a
	column from a CDaoRecordset. The information this sample supplies can be used to
	provide the same functionality for Crecordset based objects. This sample uses
	two DDX functions to provide data exchange between the recordsets and the list
	and combo boxes.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DaoDDX.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	This sample contains two DDX functions DDX_BindTextFieldListBoxToColumn() and
	DDX_BindTextFieldComboBoxToColumn() to link a particular column from a recordset
	to a list or combo box. These functions take the following parameters:
	
	- A CDataExchange object
	
	- The resource ID of the control to bind to
	
	- The name of the column to bind to
	
	- A CDaoRecordset object to use to retrieve the information.
	
	These functions also take the following two optional parameters (both of which
	default to false):
	
	- Whether or not to update the column when saving
	
	- Whether or not to allow repeated values in the control
	
	When viewing records, these functions first save the current position in the
	recordset passed in. This position is treated as the current value of the
	current record, and is selected when the population is complete. Then the
	function iterates through all the records in the recordset, either adding the
	current value to the control, or rejecting the current value if it cannot be
	converted to a string or it is a duplicate value and duplicate values are not
	being accepted. The function finishes by restoring the original position of the
	recordset and then selecting that entry.
	
	When saving, if the optional parameter to update the column is set, the function
	takes the current record, and updates the field in the column passed in with the
	currently selected item (or the modified text in a combo box situation). This
	method would be used in tables where the choices being given are not a foreign
	key. In the foreign key situation, which is the method used in the example, a
	second DDX function would be used to tie the selected value for that particular
	control to a field in the result set given.
	
	The function CDaoDDXView::PositionRecordsets() moves through the foreign
	recordsets, positioning each on the record denoted by the key value in the
	CDaoDDXView::m_pEnrollmentSet object. This allows the proper item to be selected
	in each of the controls, because the selection is based on the current record.
	
	REFERENCES
	==========
	
	For more information on how to write custom DDX and DDV functions, see technical
	note 26 in the Visual C++ documentation.
	
	For more information on using the CDaoRecordset and CRecordset classes, see the
	CDaoRecordset and CRecordset entries in the Visual C++ Class Library Reference.
	
	Additional query words: CComboBox ClistBox combobox listbox
	
	======================================================================
	Keywords          : kbfile kbSample kbDAOsearch kbDatabase kbMFC kbODBC KbUIDesign kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbVC500 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVC500Search
	Version           : WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3; winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
