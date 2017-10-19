---
layout: page
title: "Q223817: XWEB: POST w/ Long URLs May Fail; 2-KB Limit in Exchfilt.dll"
permalink: /kb/223/Q223817/
---

## Q223817: XWEB: POST w/ Long URLs May Fail; 2-KB Limit in Exchfilt.dll

	Article: Q223817
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the POST command in an application with an URL over 2 KB in size
	(2048 characters), the POST command returns an error code instead of
	successfully posting.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Server Outlook Web Access (OWA) component installs a
	global ISAPI filter, Exchfilt.dll, which will not pass URLs over 2 KB in length.
	There is a fixed buffer size in Exchfilt.dll of 2048 characters.
	
	If OWA is installed on your Microsoft Internet Information Server (IIS) computer,
	the ISAPI filter limitation on Exchfilt.dll may also affect other applications
	trying to pass a long URL.
	
	For additional information on ISAP filters see the following article in the
	Microsoft Knowledge Base:
	
	  Q150312 How to Install an Isapi Filter DLL
	
	  -and-
	
	  Windows NT 4.0 Options Pack online documents
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
