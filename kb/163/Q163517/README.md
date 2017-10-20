---
layout: page
title: "Q163517: Sense Code 080E0000 Trying to Connect to an AS/400"
permalink: /kb/163/Q163517/
---

## Q163517: Sense Code 080E0000 Trying to Connect to an AS/400

{% raw %}

	Article: Q163517
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any attempt to connect to an AS/400 fails even when the appropriate device and
	controllers exist. The Windows NT Server Event Viewer Application log records
	the following event:
	
	  Event 18
	  APPC session activation failure:
	  BIND negative response or UNBIND request received
	  Sense data = 080E0000
	
	The AS/400 will show a status on the line and the controller, but will not show a
	corresponding device, even if it has been created manually. If the device has
	not been created manually, the System Operator message queue on the AS/400 will
	record errors related to the creation of the device.
	
	CAUSE
	=====
	
	IBM implemented a directory search filter in OS/400 V3R2. This feature, if not
	properly configured, will reject connection attempts and will return the
	080E0000 sense code.
	
	MORE INFORMATION
	================
	
	The command WRKCFGL (Work with Configuration Lists) will have entries for the
	directory search filter. If a particular entry is set for *REJECT, it must be
	changed to *ACCEPT to allow connections.
	
	The following IBM AS/400 book describes this feature in detail:
	
	  SC41-3300 Tips and Tools for securing the AS/400
	
	The International Business Machines (IBM) products discussed here are
	manufactured by IBM a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or reliability.
	
	Additional query words: as400 as/400 appc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
