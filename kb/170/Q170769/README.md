---
layout: page
title: "Q170769: PRB: &quot;ODBC Resource DLL Is a Different Version Than ...&quot; Error"
permalink: /kb/170/Q170769/
---

## Q170769: PRB: &quot;ODBC Resource DLL Is a Different Version Than ...&quot; Error

{% raw %}

	Article: Q170769
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.5,2.0,2.1,2.5,2.6,2.7,3.0,3.5
	Operating System(s): 
	Keyword(s): kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270
	Last Modified: 09-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 3.0, 3.5 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing or upgrading ODBC files, you receive one of the following error
	messages:
	
	  The ODBC resource DLL (c:\windows\system\odbcint.dll) is a different version
	  than the ODBC driver manager (c:\windows\system\odbc32.dll).
	
	  -or-
	
	  The ODBC resource DLL (c:\windows\system\odbcint.dll) is a different version
	  than the ODBC setup dll (c:\windows\system\odbccp32.dll).
	
	  -or-
	
	  The ODBC resource DLL c:\windows\system\odbcint.dll) is a different version
	  than the administrator (c:\windows\system\odbcad32.dll).
	
	The message may appear periodically on your screen or when you attempt to open
	the ODBC Administrator.
	
	CAUSE
	=====
	
	This error is usually caused by outdated or mismatched ODBC components. Many
	applications install ODBC, including Visual InterDev, Active Server Pages,
	Windows NT 4.0 Service Packs, and many others. During the installation of ODBC,
	a service or application may have been using one or more ODBC files. The files
	that were in use could not be overwritten, causing a version mismatch between
	the files that were in use and either the ODBC Driver Manager or the ODBC
	Administrator.
	
	Because the ODBC 3.0 and 3.5 and later Driver Manager performs automatic version
	checking between itself and the other ODBC core components, it detects the
	version mismatch and generates the warning.
	
	
	RESOLUTION
	==========
	
	Download and install the latest version of the Microsoft Data Access Components
	(MDAC). This package updates all ODBC and the newer OLE DB drivers and resources
	on the system. The latest version of MDAC can be downloaded from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/data/download.htm
	
	NOTE: You cannot install MDAC separately in a Windows 2000 computer because MDAC
	is part of the system components.
	
	You can also diagnose and reconfigure your current MDAC installation by using the
	Component Checker tool. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q307255 INFO: Component Checker: Diagnose and Reconfigure MDAC Installations
	
	REFERENCES
	==========
	
	You can find information on individual DLLs at the following Microsoft Web
	site:
	
	  http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp?sd=GN
	  (http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp?sd=GN)
	
	Additional query words: reboot machine sp sp1
	
	======================================================================
	Keywords          : kbMDAC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC150 kbMDAC200 kbMDAC210 kbMDAC250 kbMDAC260 kbODBC350 kbODBC300 kbMDAC270
	Version           : :1.5,2.0,2.1,2.5,2.6,2.7,3.0,3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
