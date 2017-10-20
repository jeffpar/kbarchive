---
layout: page
title: "Q242550: INFO: Required System Files for WebClasses (IIS Applications)"
permalink: /kb/242/Q242550/
---

## Q242550: INFO: Required System Files for WebClasses (IIS Applications)

{% raw %}

	Article: Q242550
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbWebClasses kbGrpDSASP kbFAQ kbDSupport kbVBp600FAQ
	Last Modified: 17-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WebClasses (Internet Information Server applications) rely on several system
	files to run. This article lists the dependent files and describes how to
	install them on a Web server.
	
	MORE INFORMATION
	================
	
	The following table lists the recommended minimum file versions to run
	WebClasses. You can use earlier versions of the OLE automation and run-time
	libraries, but current versions are highly recommended.
	
	+--------------------------------------------------------------------------------------------------+
	| File Name                                    | Version     | Location                            | 
	+--------------------------------------------------------------------------------------------------+
	| Mswcrun.dll (WebClass runtime file)          | 6.00.88.4   | Program Files\Common Files\Designer | 
	+--------------------------------------------------------------------------------------------------+
	| Msvbvm60.dll (Visual Basic 6.0 runtime file) | 6.00.89.64  | WINNT\System32                      | 
	+--------------------------------------------------------------------------------------------------+
	| Oleaut32.dll                                 | 2.40.4275.1 | WINNT\System32                      | 
	+--------------------------------------------------------------------------------------------------+
	| Olepro32.dll                                 | 5.0.4275.1  | WINNT\System32                      | 
	+--------------------------------------------------------------------------------------------------+
	| Asycfilt.dll                                 | 2.40.4275.1 | WINNT\System32                      | 
	+--------------------------------------------------------------------------------------------------+
	| Stdole2.tlb                                  | 2.40.4275.1 | WINNT\System32                      | 
	+--------------------------------------------------------------------------------------------------+
	| Comcat.dll                                   | 4.71.1460.1 | WINNT\System32                      | 
	+--------------------------------------------------------------------------------------------------+
	
	These file versions are installed with Microsoft Windows NT 4.0 Service Pack 5
	(SP5) and Microsoft Visual Studio 6.0 SP5.
	
	DLL Help Version Database
	-------------------------
	
	The DLL Help Database contains information about dynamic-link library (DLL) files
	that ship with particular Microsoft Products. For more information, see the
	following DLL Help Web site:
	
	  http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp
	
	Recommended Method to Configure System Files on the Web Server
	--------------------------------------------------------------
	
	When you deploy a WebClass to a Web server that may not have the WebClass runtime
	file or other dependent files installed or updated, Microsoft recommends that
	you create a standard setup package using the Package and Deployment Wizard
	(PDW) that ships with Visual Studio 6.0. Include dependent files to ensure that
	the target Web server has the minimum requirements to run a WebClass.
	
	Additional query words: needed to run
	
	======================================================================
	Keywords          : kbVBp600 kbWebClasses kbGrpDSASP kbFAQ kbDSupport kbVBp600FAQ 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis400 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :4.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
