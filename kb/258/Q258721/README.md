---
layout: page
title: "Q258721: HTTP Compression Will Not Work with URLs that Include a &quot;/&quot;"
permalink: kb/258/Q258721/
---

## Q258721: HTTP Compression Will Not Work with URLs that Include a &quot;/&quot;

	Article: Q258721
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Neither static nor dynamic compression works if the URL contains a slash as part
	of the parameters passed to the executing DLL file. You can confirm that the
	file is not being compressed because it is not in the Internet Information
	Services (IIS) compressed folder. By default, the compressed folder is located
	at:
	
	  %WINNT%\IIS Temporary Compressed Files
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q255801 How to Determine if HTTP Compression Is in Use
	
	MORE INFORMATION
	================
	
	For example, invoking these URLs generates compressed output:
	
	  http://server/isapi.dll
	
	  -or-
	
	  http://server/isapi.dll?Param=Value
	
	However, this URL does not generate compressed output:
	
	  http://server/isapi.dll/Dir?Param=Value
	
	REFERENCES
	==========
	
	  Q241428 HTTP Compression Does Not Compress Office Documents
	
	  Q255832 HTTP Compressed Files Not Created in Temporary Folder
	
	  Q234497 How to Specify Additional Document Types for HTTP Compression
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
