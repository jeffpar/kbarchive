---
layout: page
title: "Q295696: XADM: KMS Not Processing New Client Enrollments"
permalink: /kb/295/Q295696/
---

## Q295696: XADM: KMS Not Processing New Client Enrollments

{% raw %}

	Article: Q295696
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are enrolling new clients in advanced security, the client may not
	receive a reply from the Key Management server (KM server) verifying a
	successful enrollment.
	
	The client forwards the signing public key to the System Attendant mailbox. The
	System Attendant then forwards this mail to the KM server for processing.
	
	The client never receives a reply from the KM server verifying enrollment in
	advanced security.
	
	CAUSE
	=====
	
	The following registry key should match the directory name for the Exchange
	Server Organization .
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA\Parameters\Enterprise
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor.
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA\Parameters\Enterprise
	
	3. Right-click the Enterprise key and modify the value to match the directory
	  name for your Exchange 5.5 Organization.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
