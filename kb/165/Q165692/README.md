---
layout: page
title: "Q165692: INFO: Visual C++ 5.0 Readme, OLE DB SDK Issues"
permalink: kb/165/Q165692/
---

## Q165692: INFO: Visual C++ 5.0 Readme, OLE DB SDK Issues

	Article: Q165692
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OLE DB SDK Issues
	-----------------
	
	OLE DB SDK
	ADO, OLE DB, and Visual C++
	Remove UUID2.LIB from link line of OLE DB SDK TableCopy Sample
	TableCopy Faults with Oracle Data Connections
	
	MORE INFORMATION
	================
	
	OLE DB SDK
	----------
	
	OLE DB is a set of OLE interfaces that provides applications with uniform access
	to data stored in diverse information sources. These interfaces support the
	amount of DBMS functionality appropriate to the Data Connection, enabling it to
	share its data. To learn more about OLE DB, please refer to the SDKGUIDE.hlp,
	OLEDB1.hlp, and RELNOTES.DOC files located in the \OLEDB\DOC directory on the
	disc.
	
	To install the OLE DB SDK, run the SETUP.exe program located in the OLEDB folder
	in the root of the Visual C++ compact disc.
	
	ADO, OLE DB, and Visual C++
	---------------------------
	
	ADO is an object model on top of the OLE DB interfaces. It reduces the number of
	interfaces required to implement an application. ADO also provides a type
	library which OLE DB does not. If you wish to use OLE DB with the new compiler
	COM support, you must write to ADO.
	
	Visual C++ 5.0 ships two versions of ADO. The beta version in the OLE DB SDK and
	the shipping version in redist\ado. Use the shipping version to build and test
	your application before releasing it. You must also distribute the shipping
	version of ADO with your application.
	
	Remove UUID2.LIB from link line of OLE DB SDK TableCopy Sample
	--------------------------------------------------------------
	
	The TableCopy sample in the OLE DB SDK 1.1 will not compile correctly with Visual
	C++ 5.0. You will receive a link error stating that UUID2.LIB is not found. This
	is because UUID.LIB, UUID2.LIB, and UUID3.LIB have been combined in Visual C++
	5.0 in the UUID.LIB file. To fix the build problem, go to Project Settings for
	the sample, select the Link tab, select All configurations, and remove the
	UUID2.LIB entry from the Object/Library Modules line. You should then be able to
	successfully compile and link this sample.
	
	TableCopy Faults with Oracle Data Connections
	---------------------------------------------
	
	The TableCopy sample will not function correctly with an Oracle Data Connection.
	Select a different Data Connection type to use this sample.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
