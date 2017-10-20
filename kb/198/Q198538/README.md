---
layout: page
title: "Q198538: DocMgrEx.exe Assoc Multiple File Extensions w/1 Doc Type"
permalink: /kb/198/Q198538/
---

## Q198538: DocMgrEx.exe Assoc Multiple File Extensions w/1 Doc Type

{% raw %}

	Article: Q198538
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbDocView kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DocMgrEx.exe is a sample that shows how to support multiple extensions
	associated with one document type (or template) in MFC's Doc/View architecture.
	
	This sample implements the code required to allow registration, unregistration,
	file open, and file save operations in an otherwise regular MFC application. The
	classes touched include the following:
	
	- The CWinApp-derived class.
	
	- The undocumented CDocManager class.
	
	- A custom CFileDialog-derived class that allows transparent file operations
	  with the newly defined CDocManagerEx.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DocMgrEx.exe
	
	NOTE: To Build this project with VS .NET, change the path in the #include of
	AfxImpl.h on line 472 of DocManagerEx.cpp:
	
	  Change from:
	  #include <..\src\afximpl.h>
	
	  To:
	  #include <..\src\mfc\afximpl.h>
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	To change the extensions supported by different document types, or to add new
	document types, edit the application's string table. In the string resource
	associated with the document type resource ID, the fourth "\n" delimited
	substring should read as follows:
	
	  DocType files (.ex1;.ex2;ex3)
	
	The 5th substring should read as follows:
	
	  .ex1;.ex2;.ex3
	
	NOTE: DocType is the external name of the document type; and ex1, ex2, ex3 are
	the extensions you want to associate with your document type.
	
	When testing the application, you will notice its behavior is similar to
	DevStudio with regard to file open/save operations. For example, when trying to
	open a file, the user specifies only a file name (without an extension), the
	application will successively append the extensions from the currently active
	filter, trying to build the file name of an existing file. If this yields no
	result, the application will either tell the user that the file does not exist
	(if the OFN_FILEMUSTEXIST flag was specified) or it will create a new file with
	no extension. Saving operations are very similar.
	
	Implementation Details
	----------------------
	
	To implement correct registration code we needed to override
	CDocManager::RegisterShellFileTypes().
	
	Unregistration is a bit more complicated, because the corresponding functions in
	CWinApp and CDocManager were not declared virtual. Therefore, we needed to
	implement the correct code in an override of
	CDocManager::UnregisterShellFileTypes(), and copy and paste the code from
	CWinApp::UnregisterShellFileTypes() and CWinApp::ProcessShellCommand() in our
	own CWinApp-derived class.
	
	To implement file operations transparently, we overrode
	CDocManager::DoPromptFileName() and CDocManager::OpenDocumentFile(). To minimize
	the number of changes, the global function MatchDocType() has been defined to
	replace the use of CDocTemplate::MatchDocType() member function. The new
	function behaves as expected when multiple extensions are provided for one
	document template.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141921 HOWTO: How to Support Two File Extensions per MFC Document Type
	
	Additional query words: DocMgrEx
	
	======================================================================
	Keywords          : kbfile kbSample kbDocView kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	
	=============================================================================
	

{% endraw %}
