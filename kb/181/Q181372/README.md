---
layout: page
title: "Q181372: HttpMon.exe Does Not Write to CSV File"
permalink: /kb/181/Q181372/
---

## Q181372: HttpMon.exe Does Not Write to CSV File

	Article: Q181372
	Product(s): Internet Information Server
	Version(s): winnt:4.0; :2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No data CSV files are generated in the OUTPUTDIRECTORY when the Microsoft
	HttpMon service is started.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the updated version of Httpmon.exe described
	below. The new version of Httpmon.exe 2.0 is build 011298.
	
	MORE INFORMATION
	================
	
	The sample Httpmon.ini file located in the %windir% directory included with the
	application installation does not include a key field and value to run
	correctly. As a result, the application is started (running), but no data is
	written to the data CSV files.
	
	To fix the problem, a new version of the executable has been compiled. It is
	available for free download at the following location:
	
	  ftp.microsoft.com/bussys/utilities/httpmon
	
	  get Httpmon.exe
	  get Readme.txt
	
	After you download these files, replace your existing Httpmon.exe file with the
	new one and restart the service.
	
	NOTE: You must first stop the application before copying the new Httpmon.exe over
	the existing Httpmon.exe.
	
	
	Additional query words: reskit resource kit
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0; :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
