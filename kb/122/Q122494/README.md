---
layout: page
title: "Q122494: Network Storm Caused By Basic Redirector"
permalink: /kb/122/Q122494/
---

## Q122494: Network Storm Caused By Basic Redirector

{% raw %}

	Article: Q122494
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Workgroup Add-On for MS-DOS 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your network workstation configured with the Basic Redirector from the Microsoft
	Network Client version 3.0 for MS-DOS, or from the Microsoft Workgroup Add-On
	for MS-DOS version 3.11 may hang and create a network storm (excessive network
	traffic that can render a network ineffective). This problem will only occur
	with some applications in specific situations.
	
	CAUSE
	=====
	
	When an application requests a read past the end of a file on a network server,
	the server will respond with an indication that there is no data in the
	requested range. The redirector then adjusts the request, based on the current
	size of the file on the server.
	
	In the case of an empty (zero-byte) file, there is an error in the adjustment
	code of the Basic Redirector which causes the it to repeatedly make the same
	network request. The sequence of network requests are a Seek, followed by a
	Read, then another Seek and Read, and another, and so on.
	
	Some commercial applications can, in some circumstances, initiate this sequence
	of requests, triggering the network "storm".
	
	WORKAROUND
	==========
	
	Use the Full Redirector, the redirector from Lan Manager version 2.2, or Windows
	for Workgroups version 3.11.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Workgroup Add-On for
	MS-DOS, Version 3.11 and Microsoft Network Client v3.0 for MS-DOS. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: wfw wfwg prodnt 3.00 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbWFWSearch kbNetworkClientSearch kbNetworkClient300DOS
	Version           : :
	
	=============================================================================
	

{% endraw %}
