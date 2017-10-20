---
layout: page
title: "Q216656: INFO: &quot;No matching symbolic info&quot; for Comctl32.dll, Msidle.dll"
permalink: /kb/216/Q216656/
---

## Q216656: INFO: &quot;No matching symbolic info&quot; for Comctl32.dll, Msidle.dll

{% raw %}

	Article: Q216656
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDebug kbide kbVC600 kbOSWinNT400sp4 kbFAQ kbDSupport kbGrpDSTools kbvc6
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When debugging your application in Visual C++ 6.0, you might get the following
	error message
	
	  No matching symbolic info found
	
	for Comctl32.dll and Msidle.dll (and perhaps other files). This happens even
	though you installed the .dbg files from the Vc98\Debug directory of the Visual
	Studio 6.0 CD-ROM.
	
	MORE INFORMATION
	================
	
	The error message is due to the symbol (.dbg) files for the indicated DLLs not
	being installed or being out-of-date with respect to the DLLs. Installing a
	version of Internet Explorer may have updated the DLLs with later versions. You
	can ignore this error message because you should be able to debug your
	application successfully without these files anyway.
	
	Msidle.dll is a component of the Internet Explorer upgrade, which does not
	provide symbol files. Internet Explorer upgrades may update Comctl32.dll and
	other operating system files, making the existing symbol files provided for the
	original operating system or service pack versions out-of-date with respect to
	the new DLLs.
	
	Microsoft Windows NT 4.0 Service Pack and later contain newer versions of
	Comctl32.dll and its symbol file than those shipped on the Visual C++ 6.0
	CD-ROM. Installing the latest service pack and its updated symbol files will
	enable Visual C++ to load those symbols. Currently, the service pack download
	page also contains a link to download the symbols. The Windows NT Service Packs
	and service pack symbols are available on the Web at:
	
	  http://support.microsoft.com/highlights/ntw40.asp
	
	For additional information about installing symbols, please click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q141465 How to Install Symbols for Dr. Watson Error Debugging
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDebug kbide kbVC600 kbOSWinNT400sp4 kbFAQ kbDSupport kbGrpDSTools kbvc600faq 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
