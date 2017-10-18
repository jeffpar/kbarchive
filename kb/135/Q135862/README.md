---
layout: page
title: "Q135862: HOWTO: How to Use OLE2UI Functionality in 32-bit Applications"
permalink: kb/135/Q135862/
---

## Q135862: HOWTO: How to Use OLE2UI Functionality in 32-bit Applications

	Article: Q135862
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbDlg kbMFC kbVC200 kbVC220 kbGrpDSMFCATL kbDialog kbNoUpdate
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE2UI library is a 16-bit DLL provided with the 16-bit OLE SDK. It contains
	a number of APIs that are useful for user interface (UI) related functionality.
	However, beginning with Windows NT version 3.51, this DLL is no longer provided.
	OLEDLG.DLL provides the dialog boxes that were included in OLE2UI. Two DLLs
	(MFCUIW32 and MFCUIA32) essentially wrap the APIs from OLEDLG.DLL, providing the
	ANSI and Unicode versions of the dialog boxes. If your application uses one of
	the approximately 122 other APIs that are no longer provided, copy the source
	code from the 32-bit version provided as a sample in the Visual C++ version 2.x
	directory ...\SAMPLES\MFC\MFCUIX32.
	
	MORE INFORMATION
	================
	
	The two DLLs (MFCUIW32 and MFCUIA32) support the following APIs:
	
	OleUIAddVerbMenu
	OleUIBusy
	OleUICanConvertOrActivateAs
	OleUIChangeIcon
	OleUIChangeSource
	OleUIConvert
	OleUIEditLinks
	OleUIInsertObject
	OleUIObjectProperties
	OleUIPasteSpecial
	OleUIPromptUser
	OleUIUpdateLinks
	
	OLEDLG.DLL provides the A and W versions of these functions.
	
	To use one of the other functions, you have two options:
	
	- Create a DLL using the sample code, and statically link to the library. This
	  option is best if you were using a lot of the functions.
	
	-or-
	
	- Include the prototype for the function in one of your header files, and copy
	  the source code from the .cpp file in the MFCUIX32 directory to your .cpp
	  file. This option is probably best if you are using only one or two of the
	  functions. For example, if you would like to use
	  XformRectInPixelsToHimetric(), copy the prototype from \msvc20\...
	  \mfcuix32\olestd.h, line 433, and the source code from \msvc20\ ...
	  \mfcuix32\oleutl.cpp starting at line 401.
	
	REFERENCES
	==========
	
	For a list of the API entry points that have been removed, please see the
	project definition file (OLE2UI.DEF) in the \MSVC20\SAMPLES\MFC\MFCUIX32
	directory.
	
	Additional query words: kbinf 2.00 2.10 2.20
	
	======================================================================
	Keywords          : kbole kbActiveX kbDlg kbMFC kbVC200 kbVC220 kbGrpDSMFCATL kbDialog kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : :2.0,2.1,2.2
	Issue type        : kbhowto
	
	=============================================================================
	
