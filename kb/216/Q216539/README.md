---
layout: page
title: "Q216539: Err Msg: An Error Occurred in the Secure Channel Support"
permalink: /kb/216/Q216539/
---

## Q216539: Err Msg: An Error Occurred in the Secure Channel Support

{% raw %}

	Article: Q216539
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access an Internet Information Server (IIS) Web site using the Secure
	Sockets Layer (SSL) protocol, one of the following three errors may occur in the
	client browser:
	
	- 
	
	  Internet Explorer cannot open the internet site https://site. An error
	  occurred in the Secure Channel Support.
	
	- 
	
	  The page cannot be displayed.
	
	- If the IIS computer is running Windows NT 4.0 Service Pack 4, an Access
	  Violation error may occur.
	
	CAUSE
	=====
	
	The properties of the CA Root (issuer) match the properties of the server
	certificate (subject) exactly.
	
	RESOLUTION
	==========
	
	To resolve this problem, do not supply values that are identical to the
	attributes of the CA Root when you request SSL certificates in IIS.
	
	MORE INFORMATION
	================
	
	When you request an SSL certificate for IIS using Key Manager (Keyring.exe), the
	following fields are required:
	
	- Organization
	
	- Organizational Unit
	
	- Common Name
	
	- Country
	
	- State/Province
	
	- Locality
	
	If the values supplied for these fields match the equivalent attributes of the
	Certificate Root Authority, the errors will occur.
	
	
	Additional query words: prodie iis schannel certsrv ntop certificate keyring CA Root SSL
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA PPC x86
	
	=============================================================================
	

{% endraw %}
