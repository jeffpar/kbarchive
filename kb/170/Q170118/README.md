---
layout: page
title: "Q170118: PRB: &quot;Couldn't Find Installable ISAM&quot; with Excel 97 Data"
permalink: kb/170/Q170118/
---

## Q170118: PRB: &quot;Couldn't Find Installable ISAM&quot; with Excel 97 Data

	Article: Q170118
	Product(s): Microsoft C Compiler
	Version(s): 2000,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDAOsearch kbDatabase kbExcel kbMFC kbOSWin2000 kbVC kbVC500 kbVC600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0, used with:
	   - the hardware: Intel x86 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to use the Excel 97 ISAM included with DAO 3.5, a DAO 3170 error
	occurs with the text "Couldn't find Installable ISAM". When using the MFC DAO
	classes with DB Tracing enabled, the error may look something like the following
	text:
	
	  
	
	  DAO Call Failed.
	  pDAOTableDefs->Append(m_pDAOTableDef)
	  In file daocore.cpp on line 2075
	  scode = 800A0C62
	
	  Error Code = 3170
	  Source = DAO.TableDef
	
	CAUSE
	=====
	
	The documentation from the DAO 3.5 SDK that comes with Visual C++ incorrectly
	shows the connect string information for Excel 97. The information for the
	Connect property shows that the connect string for Excel 97 is "Excel 97". This
	is not correct.
	
	RESOLUTION
	==========
	
	The correct string is "Excel 8.0".
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDAOsearch kbDatabase kbExcel kbMFC kbOSWin2000 kbVC kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
