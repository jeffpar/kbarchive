---
layout: page
title: "Q249826: Corrupted or Inconsistent Version of Odbc32.dll Stops ASP Pages"
permalink: /kb/249/Q249826/
---

## Q249826: Corrupted or Inconsistent Version of Odbc32.dll Stops ASP Pages

{% raw %}

	Article: Q249826
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Odbc32.dll file is missing, corrupted, or replaced with an older version,
	ASP pages may stop functioning. The following error message may appear in the
	event log when an ASP page is requested:
	
	  Event ID 205 Source: WAM
	  "HTTP server was unable to load ISAPI application:
	  "C:\winnt\system32\inetsrv\asp.dll". The data is the error."
	
	When you using DllRegisterServer (Regsvr32) to re-register Asp.dll, an error
	message indicates that the action was not successful, for example:
	
	  The dynamic link library ODBC32.dll cannot be found in the specified path" .;
	  C:\winnt\system32; C:\winnt\system; C:\winnt; C:\winnt\system32\; C:\winnt;
	  C:\Program Files\Mts.
	
	CAUSE
	=====
	
	When you install older versions of database software or middleware, the existing
	Odbc32.dll file may be overwritten. DLL version conflicts between Odbc32.dll
	files can cause Asp.dll to stop functioning. The same problem can occur if you
	accidentally delete or rename the Odbc32.dll file in the Winnt\System32
	directory.
	
	RESOLUTION
	==========
	
	To resolve the problem, install the latest version of MDAC to replace the
	Odbc32.dll file with the latest version. Download MDAC from the following
	location:
	
	  http://www.microsoft.com/data
	
	Restart the computer if needed.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
