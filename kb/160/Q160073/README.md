---
layout: page
title: "Q160073: RFX_Binary Updates Unchanged CByteArray Data"
permalink: kb/160/Q160073/
---

## Q160073: RFX_Binary Updates Unchanged CByteArray Data

	Article: Q160073
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbfile kbDatabase kbMFC kbODBC kbVC kbVC500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MFC ODBC classes attempt to update the CByteArray data for a record each
	time you move off that record, even if the data was not changed.
	
	If you have a field that cannot be updated, you may receive an error when the
	update fails. For example, if your recordset contains a SQL Server TIMESTAMP
	column, you may see the following error:
	
	  Can't update a TIMESTAMP column.
	
	The RFX_Binary() function is incorrectly casting the BYTE* data member of the
	CByteArray to a CByteArray*. Because of this, the CByteArray data always appears
	to have been changed since the last update. In the DoFieldExchange() of your
	recordset class, replace calls to RFX_Binary() with calls to the with
	RFX_Binary_Fix() function.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Rfxbinfx.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The RFX_Binary() function is called from within the CRecordset DoFieldExchange()
	function to handle CByteArray data.
	
	Once you have downloaded Rfxbinfx.exe and run the .exe to extract the
	RFX_Binary_Fix source code, include RFXBINFX.H in your recordset CPP file.
	
	In your implementation of the DoFieldExchange() function, change each call to
	RFX_Binary to a call to the RFX_Binary_Fix function.
	
	Additional query words: kbVC420bug kbDSupport IsFieldDirty SetFieldDirty BLOB
	
	======================================================================
	Keywords          : kbfile kbDatabase kbMFC kbODBC kbVC kbVC500fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
