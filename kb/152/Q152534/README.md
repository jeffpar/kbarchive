---
layout: page
title: "Q152534: Dbctl.exe Using ODBC in an ActiveX Control"
permalink: kb/152/Q152534/
---

## Q152534: Dbctl.exe Using ODBC in an ActiveX Control

	Article: Q152534
	Product(s): Microsoft C Compiler
	Version(s): 2.5,2.6,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbSample kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDS
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DBCTL demonstrates a way to use ODBC in an ActiveX Control (OLE Control). A
	Visual C++ and a Visual Basic client application are included as part of this
	sample. The Visual C++ client is called DBUSR, the Visual Basic client is called
	DBVBUSR.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Dbctl.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running DBCTL.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	DBCTL creates and opens a Class Wizard-configured CRecordset object from within
	the virtual override of COleControl::OnSetClientSite. The CRecordset- derived
	object is configured to the COURSE table of the STDREG32.MDB that comes with the
	sample. Please note that you have to create a user or a system DSN called
	"student registration" in your ODBC control panel with Access ODBC Driver and
	have to point this DSN to the STDREG32.MDB file.
	
	The CRecordset-derived object is closed from within its own destructor. The
	CRecordset object is destructed with a call to the delete operator from within
	the COleControl derived class destructor.
	
	The control exposes one method, a DisplayRecords method, that simply lists the
	contents of the recordset in the control.
	
	The OLE Control subclasses a listbox. The string items are added to the listbox
	by using SendMessage.
	
	The DBUSR.EXE and DBVBUSR.EXE demonstrate using the custom control.
	
	Additional query words: Dbctl
	
	======================================================================
	Keywords          : kbfile kbProgramming kbSample kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSODBC kbMDAC260 kbmdac270 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.5,2.6,4.0,4.1,5.0,6.0
	
	=============================================================================
	
