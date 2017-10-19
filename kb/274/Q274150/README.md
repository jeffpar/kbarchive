---
layout: page
title: "Q274150: Web Page Does Not Display Data from Include File"
permalink: /kb/274/Q274150/
---

## Q274150: Web Page Does Not Display Data from Include File

	Article: Q274150
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an HTML or HTM page contains an include file, the data from the include
	file may not display in the browser. A blank space is displayed where the
	include file data should be.
	
	CAUSE
	=====
	
	HTML and HTM files do not interpret include files by default.
	
	RESOLUTION
	==========
	
	Map the .html and .htm extensions to the Ssinc.dll file by performing the
	following steps. Ssinc.dll is the ISAPI filter responsible for parsing
	server-side include files.
	
	1. In the Internet Service Manager, select the virtual directory where the .htm
	  or .html page resides, right-click the directory, and then click Properties.
	  (If the page resides in the root directory of the Web site, right-click the
	  Web site, and then click Properties.)
	
	2. On the Virtual Directory tab, click the Configuration button. If there is no
	  Configuration button available, click Create, and then click Configuration.
	  (If you are viewing the properties of a Web site, the Configuration button is
	  on the Home Directory tab.)
	
	3. On the App Mappings tab, click Add.
	
	4. In the Executable field, browse to Winnt\System32\Inetsrv\Ssinc.dll, and then
	  click Open.
	
	5. In the Extension field, type .html, and then click OK.
	
	6. Repeat steps 3 through 5 to map the .htm extension to Ssinc.dll.
	
	7. Apply the settings, and then click OK twice.
	
	When the client requests the .html or .htm page containing an include file,
	Ssinc.dll will parse the include file.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q246806 Access Denied for the Default Document File Mapped to Ssinc.dll
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
