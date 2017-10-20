---
layout: page
title: "Q167696: FIX: Debug Static MFC Library Links to UrlMon.dll/Wininet.dll"
permalink: /kb/167/Q167696/
---

## Q167696: FIX: Debug Static MFC Library Links to UrlMon.dll/Wininet.dll

{% raw %}

	Article: Q167696
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbInternet kbMFC kbVC500bug kbVC600fix kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that statically links to the debug version of MFC also links to
	urlmon.dll and wininet.dll. The MFC static library brings in references to these
	DLLs even though the application does not use functionality in these DLLs.
	Executing this application on a machine that does not have these DLLs results in
	a message indicating that these DLLs cannot be found.
	
	CAUSE
	=====
	
	The debug static version of MFC has references to symbols in these DLLs even
	when the application is not using any functionality in these DLLs.
	
	RESOLUTION
	==========
	
	Install these DLLs on the system from the ActiveX SDK. The release version does
	not link to these DLLs, so it is not necessary to redistribute these when
	releasing the product. These DLLs are needed only when debugging the
	application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an AppWizard Application so that it statically links to MFC.
	
	2. Build the debug version.
	
	3. Execute this on a machine that does not have urlmon.dll and wininet.dll.
	
	REFERENCES
	==========
	
	Please refer to ActiveX SDK documentation for more information on installing
	these DLLs.
	
	For information on the ActiveX SDK, visit the Microsoft web site:
	
	  http://www.microsoft.com/workshop/default.asp
	
	Additional query words: wininet urlmon
	
	======================================================================
	Keywords          : kbActiveX kbInternet kbMFC kbVC500bug kbVC600fix kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
