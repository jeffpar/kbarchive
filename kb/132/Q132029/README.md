---
layout: page
title: "Q132029: ADT2: DOC GetRecordsetClone Method Unsuccessful Win 95/NT 3.5"
permalink: kb/132/Q132029/
---

## Q132029: ADT2: DOC GetRecordsetClone Method Unsuccessful Win 95/NT 3.5

	Article: Q132029
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you use the GetRecordSetClone method from the Data Outline control, you may
	receive the following error message:
	
	  The Microsoft Data Outline Control returned the following error: The control
	  could not create an OLE RecordsetClone.
	
	This error message occurs after you have installed the OLE 2.02 DLL (dynamic-link
	library) files from either the Microsoft Access version 2.0 Service Pack or from
	some other source containing the OLE 2.02 DLL files.
	
	CAUSE
	=====
	
	The OLE 2.02 DLLs include a registration script file named OLE2.REG. This file
	is used by the Registry application to build a special tree that contains
	information about the applications or DLLs in the REG.DAT file.
	
	One branch of this tree contains registration information for the file named
	DAO2016.DLL. This file is used by the GetRecordSetClone method that is accessed
	by the Data Outline control.
	
	When you run the OLE2.REG file to register the OLE 2.02 DLLs in Microsoft Windows
	NT, it rebuilds this branch of the registration tree from scratch and drops the
	registration information regarding the DAO2016.DLL file.
	
	
	RESOLUTION
	==========
	
	To correct this problem, register the DAO2016.DLL file with the MSAREG.EXE file
	that comes with Microsoft Access Developer's Toolkit.
	
	To register the DAO2016.DLL file using the MSAREG.EXE file, follow these steps:
	
	1. Locate the MSAREG.EXE file. The default location for this file is the
	  \ACCESS\ADT directory.
	
	2. Locate the DAO2016.DLL file. The default location for this file is the
	  WINNT\SYSTEM directory.
	
	3. Open File Manager, and on the File menu, click run. In the Run dialog box,
	  type "c:\access\adt\msareg c:\winnt\system\dao2016.dll" (without the
	  quotation marks) in the Command Line box. Click the OK button.
	
	  Note that the MSAREG.EXE file gives no indication that the file is registered.
	  It does this registration silently.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 2.0
	running under Windows NT version 3.5. This problem no longer occurs with the
	Data Outline Control version 1.1 distributed with the Microsoft Access
	Developer's Toolkit for Windows 95 version 7.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a computer running Windows NT version 3.5 and a clean version of
	  Microsoft Access version 2.0 that has Microsoft Access Developer's Toolkit
	  installed.
	
	2. Create a new form and insert a Data Outline Control that refers to at least
	  two levels. Save the form as MyDOC.
	
	  NOTE: For instructions about how to use the Data Outline control, see the OLE
	  Data Outline Control Help file, OUTL1016.HLP, in your ADT directory.
	
	3. Add a text box to the MyDOC form and call it MyText.
	
	4. Add a command button to the MyDOC form called MyButton, and set the control's
	  OnClick property to the following event procedure:
	
	        Sub MyButton_Click ()
	           Dim rs As Object, iLevel As Integer
	           iLevel = MyDOC.Object.GetLevel()
	           Set rs = MyDOC.Object.GetRecordsetClone(iLevel)
	           MyText  = rs.fields(0)
	           Set rs = Nothing
	        End Sub
	
	5. Save and close the MyDOC form.
	
	6. Open the MyDOC form in Form view, select a level on the Data Outline control
	  and click the Mybutton command button. Note that the text box named MyText
	  changes to the first field in the level of the Data Outline control that you
	  selected.
	
	7. Quit Microsoft Access and install the OLE 2.02 DLLs.
	
	8. Restart Microsoft Access. Open the form and click the Mybutton command button
	  again. Note that you receive the following error message:
	
	  The Microsoft Data Outline Control returned the following error: control
	  could not create an OLE RecordsetClone.
	
	REFERENCES
	==========
	
	For more information about the Windows NT Registry for 16-bit applications,
	please see the Windows NT version 3.5 Resource Kit.
	
	For an overview of the Windows NT Registry, please see Microsoft Windows NT,
	"Resource Guide," pages 322-368.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
