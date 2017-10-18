---
layout: page
title: "Q158500: Updated DAO SDK Required for Visual C++ 4.2"
permalink: kb/158/Q158500/
---

## Q158500: Updated DAO SDK Required for Visual C++ 4.2

	Article: Q158500
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbDAOsearch
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The incorrect version of the DAO SDK was shipped with Visual C++ 4.2. This can
	cause run-time errors during execution of programs built with the DAO SDK. In
	addition, a number of corrections were made with the Visual C++ 4.2b patch. An
	updated version of the DAO SDK has been provided, recompiled using Visual C++
	4.2b.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dbdao42.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running Dbdao42.exe to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	In order to manage the heap properly, the DAO SDK must be recompiled to link
	with MFC42.DLL. The most common symptom is a failure to use CString properly
	during run time, which causes assertions at various locations within
	DBGHEAP.CPP.
	
	In order not to break applications built using Visual C++ 4.0 and 4.1, the DAO
	SDK dynamic link library (DLL) has been renamed. The table below shows the 4.2
	names and their 4.0/4.1 equivalents:
	
	4.0 / 4.1 Version       4.2 Equivalent           Does:
	------------------------------------------------------
	
	dbdao3.dll ddao3.dll ANSI / Release dbdao3.lib ddao3.lib " / " dbdao3d.dll
	ddao3d.dll ANSI / Debug dbdao3d.lib ddao3d.lib " / " dbdao3d.pdb ddao3d.pdb " /
	" dbdao3u.dll ddao3u.dll UNICODE / Release dbdao3u.lib ddao3u.lib " / "
	dbdao3ud.dll ddao3ud.dll UNICODE / Debug dbdao3ud.lib ddao3ud.lib " / "
	dbdao3ud.pdb ddao3ud.pdb " / "
	
	You will want to copy the Visual C++ version 4.2 compatible files into the same
	locations as their 4.0/4.1 equivalents.
	
	For any projects built with Visual C++ 4.2, you will want to link to the 4.2
	version of the DAO SDK lib files. Because the updated DAO SDK files were built
	using the 4.2b patch, it is also recommended (but not fully required) that you
	apply the Visual C++ 4.2b patch.
	
	Finally, in order to distribute your DAO 3.0-based application, you will want to
	acquire the latest DAO 3.0 components, as described in the article Q160554
	mentioned in the REFERENCES section below.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: <LINK TYPE="ARTICLE" VALUE="Q160554">Q160554</LINK>
	
	  TITLE     : PATCH: Updated DAO Redistributable Components
	
	  ARTICLE-ID: <LINK TYPE="ARTICLE" VALUE="Q156934">Q156934</LINK>
	
	  TITLE     : PATCH: Visual C++ 4.2b Patch
	
	  ARTICLE-ID: <LINK TYPE="ARTICLE" VALUE="Q151426">Q151426</LINK>
	
	  TITLE     : How to Create a DAO Setup that Installs Jet IISAM Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbProgramming kbDAOsearch 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	
	=============================================================================
	
