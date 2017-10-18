---
layout: page
title: "Q172192: PRB: Error: &quot;Failed to Get Expression Service&quot;"
permalink: kb/172/Q172192/
---

## Q172192: PRB: Error: &quot;Failed to Get Expression Service&quot;

	Article: Q172192
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.1x
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.1x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of ODBC 16-bit components with incompatible versions of OLE DLLs
	causes the error "Failed to get expression service."
	
	The installation of ODBC 2.1x SDK on a fresh installation of Windows 95 also
	causes the error message described above.
	
	The following table shows the difference in version numbers of the OLE DLLs that
	cause this problem.
	
	                              Version installed with
	File name         Windows 95         Windows NT         ODBC 2.1x SDK
	---------------------------------------------------------------------
	
	Compobj.dll          2.2               2.1                  2.02
	Ole2.dll             2.2               2.1                  2.02
	Ole2conv.dll         2.01              2.1                  2.01
	Ole2disp.dll         2.1               N/A                  2.02
	Ole2nls.dll          2.1               2.1                  2.02
	Stdole.tlb           2.1               2.1                  4.2kb (has no
	                                                        internal version)
	Storage.dll          2.2               2.1                  2.02
	Typelib.dll          2.1               2.1                  2.02
	
	Because the files that come with the ODBC 2.1x SDK are older(16-bit) than the
	ones that come with Windows 95, these files are not overwritten.
	
	WORKAROUND
	==========
	
	To work around this problem on a computer running Windows 95, delete the
	existing files mentioned above in the <Windows 95 root>/System directory
	and reinstall the ODBC 2.1x SDK. Make sure that the files have the correct
	version numbers after the ODBC 2.1x SDK reinstallation.
	
	MORE INFORMATION
	================
	
	On computers running Windows NT 4.0, this does not cause a problem because the
	versions of the above files later than 2.02 are the 16/32 interoperability OLE
	DLLs (32-bit), and are installed in the <Windows NT root>/System32
	directory. A fresh installation of the 16-bit ODBC components from the ODBC 2.1x
	SDK are installed into the <Windows NT root>/System directory.
	
	Additional query words: odbc2.1x
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.1x
	Issue type        : kbprb
	
	=============================================================================
	
