---
layout: page
title: "Q114961: RFX_Date() function for TIMESTAMP_STRUCT"
permalink: /kb/114/Q114961/
---

## Q114961: RFX_Date() function for TIMESTAMP_STRUCT

	Article: Q114961
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbYear2000 kbDatabase kbMFC kbODBC kbVC
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RFX_Date() record field exchange function transfers data from a date/time
	field to a CTime object. AppWizard/ClassWizard will use this RFX_Date() function
	when mapping date/time fields to variables.
	
	The CTime object doesn't allow dates before the year 1970 and after the year 2037
	(the CRT stores the time as a signed long, so the limit is actually Jan 18, 2038
	19:14:07). Therefore, it may be better to use a TIMESTAMP_STRUCT (defined in the
	SQLEXT.H) to retrieve the date/time information.
	
	The structure TIMESTAMP_STRUCT is defined as:
	
	  typedef struct tagTIMESTAMP_STRUCT
	      {
	          SWORD year;
	          UWORD month;
	          UWORD day;
	          UWORD hour;
	          UWORD minute;
	          UWORD second;
	          UDWORD fraction;
	      } TIMESTAMP_STRUCT;
	
	NOTE: The code in the following sample is not needed if you are using MFC version
	3.1 or above (i.e. VC++ 2.1 or greater). MFC version 3.1 and above includes an
	overloaded RFX_Date function that takes a TIMESTAMP_STRUCT. In this case, simply
	changing the declaration of the recordset members to TIMESTAMP_STRUCT and
	modifying any initializations of those members is sufficient.
	
	The RFXDTE sample contains two files; RFXDATE.H and RFXDATE.CPP. These define a
	RFX_Date() function which accepts a TIMESTAMP_STRUCT reference. To use the
	function, you need to include the .CPP file into your project. If your project
	doesn't use the standard precompiled header STDAFX.H then you may need to add
	header files to the top of the .CPP file. Either in your precompiled header or
	the RFXDATE.CPP file, you must include AFXWIN.H, AFXEXT.H, and AFXDB.H.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Rfxdte.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Record field exchange (RFX) functions are called in the DoFieldExchange()
	function of a CRecordset. RFX functions handle the transfer of data from a field
	of a resultset (table that results from an SQL query) and the data members of a
	CRecordset object.
	
	To use the RFX_Date function in the RFXDTE sample, first define a
	TIMESTAMP_STRUCT member of a CRecordset class. Then, pass the variable as the
	third parameter to the RFX routine. The prototype for the function is:
	
	  void RFX_Date(CFieldExchange* pFX, const char *szName,
	      TIMESTAMP_STRUCT& value);
	
	Be sure to include RFXDATE.H in the source file that calls RFX_Date().
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbYear2000 kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52,2.0,2.1,4.0
	
	=============================================================================
	
