---
layout: page
title: "Q260694: Description of the MaxClientRequestBuffer Registry Value"
permalink: /kb/260/Q260694/
---

## Q260694: Description of the MaxClientRequestBuffer Registry Value

{% raw %}

	Article: Q260694
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis400 kbiis500
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You can use the new Internet Information Server (IIS) registry value
	MaxClientRequestBuffer to limit the cumulative bytes size of the request line
	and header fields sent in a request to IIS.
	
	NOTE: In IIS 4.0, MaxClientRequestBuffer is only recognized when the program runs
	on Windows NT 4.0 Server Service Pack 5 or later.
	
	MORE INFORMATION
	================
	
	Reason for MaxClientRequestBuffer
	---------------------------------
	
	The MaxClientRequestBuffer registry value was added to IIS as a security measure,
	so that the maximum size of the request line and header fields could be set by
	the IIS administrator in order to reduce the likelihood of an attack caused by
	requests containing large amounts of data in the request line or headers.
	
	NOTE: The HTTP specifications do not specify the maximum size of the request line
	or header fields.
	
	For more information about a security problem that may occur when very large URLs
	that contain escape characters are used, see the security bulletin MS00-023
	(http://www.microsoft.com/TechNet/security/bulletin/ms00-023.asp).
	
	
	Default Sizes in IIS 4 and 5
	----------------------------
	
	In IIS 4.0, the default maximum size of request line and header fields is 2
	megabytes (MB).
	
	In IIS 5.0, this is reduced to 128 kilobytes (KB).
	
	Details of the Request Structure
	--------------------------------
	
	The data limited by MaxClientRequestBuffer (the response line and headers),
	consists of all data from the first byte of the request through the last byte
	before the entity body. This includes the method, the URL, any additional path
	information, the query string, the HTTP version, all the headers, and the
	characters that delimit all parts of the request. In other words, this includes
	all data that is not part of the request's entity body.
	
	Use POST Instead of GET to Send Large Amounts of Data in Request:
	
	GET requests use the URL portion of the request line to send information to IIS.
	The POST method, however, sends the information in the request's entity body
	instead. Therefore, you should consider using the POST method to send a large
	amount of data in the request.
	
	MaxClientRequestBuffer Limit Is Affected by Buffers:
	
	Because IIS reads the blocks of the request data into buffers, the limit set by
	MaxClientRequestBuffer is not extremely precise. Therefore, after you use
	MaxClientRequestBuffer, you may have to test to see if the actual limit on the
	size of the client request and header fields is what you expect.
	
	Side Effect on SF_STATUS_REQ_READ_NEXT
	--------------------------------------
	
	The use of MaxClientRequestBuffer can affect Internet Server Application
	Programming Interface (ISAPI) filters. If a filter attempts to use the
	SF_STATUS_REQ_READ_NEXT feature to read in a complete request before it would
	normally happen, it can encounter this limit, which causes requests to fail.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q255574 INFO: IIS Reports an Error with Filters Using the
	  SF_STATUS_REQ_READ_NEXT Return Value.
	
	Add the MaxClientRequestBuffer Registry Value
	---------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the maximum size of a URL request, perform the following to add the
	MaxClientRequestBuffer registry value:
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\w3svc\parameters
	
	3. From the Edit menu, select Add Value, and then add the following registry
	  value:
	
	  Value Name: MaxClientRequestBuffer
	  Data Type: REG_DWORD
	
	4. In the DWORD Editor dialog box, under Radix, select Decimal. In the Data text
	  box, type the number of bytes for the maximum URL request size.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 4 get request sp sp5 sp6 http 1.0 1.1 start-line header-fields entity-body entity-fields hack vulnerability akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
