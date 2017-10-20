---
layout: page
title: "Q159982: Assigning Specific LUs to TN3270 Users Doesn't Work Reliably"
permalink: /kb/159/Q159982/
---

## Q159982: Assigning Specific LUs to TN3270 Users Doesn't Work Reliably

{% raw %}

	Article: Q159982
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 Service Pack 1 (SP1) TN3270 Server service supports the
	TN3270E specification, which allows a specific LU to be requested by the TN3270E
	emulator.
	
	In the TN3270 Administrator program, it is also possible to assign a specific LUA
	LU to a specific client TCP/IP address. However, if the TN3270E emulator does
	not request this specific LUA LU name, the user may receive another available
	LUA LU (if an LU is assigned to any IP address, or to the subnet mask of the
	user) and not the specific LU.
	
	CAUSE
	=====
	
	The SNA Server 2.11 SP1 TN3270E service was not designed to support LU-to-IP
	address assignment if the TN3270E emulator does not request this specific LU.
	Instead, this configuration would cause the TN3270E server to prevent other TN
	users from accessing this specific LU.
	
	RESOLUTION
	==========
	
	Reliable LU-to-IP address assignment has been added to the SNA Server 2.11 SP1
	TN3270E server through an update available from Microsoft Product Support, for
	either TN3270 or TN3270E clients. This feature is also supported in SNA Server
	3.0.
	
	
	STATUS
	======
	
	This feature has been added to 2.11 and is available from Microsoft. Contact
	Microsoft Product Support Services for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
