---
layout: page
title: "Q234310: DirLV Sample Populates List Control Similar to Explorer"
permalink: /kb/234/Q234310/
---

## Q234310: DirLV Sample Populates List Control Similar to Explorer

	Article: Q234310
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsample kbCmnCtrls kbListView kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DirLV.exe is a sample that demonstrates how to implement an Explorer-like
	ListView control. The control handles some user-defined messages that make it
	display the contents of a specified directory. The ListView control displays the
	associated icon, the long file name, the size of the file, the file type, its
	creation date, and the file attributes.
	
	The sample illustrates how to:
	
	- Use the system image list in an MFC application to display the icon
	  associated with every file.
	- Implement the ListView control as a virtual ListView, that is, specify
	  LVS_OWNERDATA as a style for the ListView control. This causes the system to
	  send LVN_GETDISPINFO notifications to the control's parent for every item in
	  the list that needs to be displayed. This approach greatly improves
	  performance for large directories.
	- Implement mouse and keyboard navigation: double-clicking a directory, or
	  pressing ENTER when the focus item is a directory, changes the displayed
	  directory.
	- Use a fast sorting algorithm provided in the Standard Template Library (STL),
	  to order the files alphabetically.
	
	The sample does not use ITEMIDLISTs to identify shell elements (that is, files)
	nor does it use any of the associated shell interfaces. As a consequence, it
	does not recognize link files as such, it does not handle virtual directories,
	and it fails to identify an icon for console applications that don't have an
	icon associated with them.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DirLV.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	REFERENCES
	==========
	
	See the VListVw sample in the Online documentation.
	
	(c) Microsoft Corporation Cosmin Radu, All Rights Reserved. Contributions by
	1999, Microsoft Corporation.
	
	
	Additional query words: List View CListCtrl SHGetFileInfo Directory LB_DIR Virtual Control
	
	======================================================================
	Keywords          : kbsample kbCmnCtrls kbListView kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	
	=============================================================================
	
