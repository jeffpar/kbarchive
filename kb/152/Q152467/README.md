---
layout: page
title: "Q152467: PGC Errors at the Client When Registry Entry Contains a Space"
permalink: kb/152/Q152467/
---

## Q152467: PGC Errors at the Client When Registry Entry Contains a Space

	Article: Q152467
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbPGC smsdatabase smspgc
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When an application created with Program Group Control is run, and the Registry
	setting for that application has a space in it, Program Group Control will not
	be able to start the application. PGC will consider the application to be
	incorrectly configured.
	
	
	CAUSE
	=====
	
	Windows NT allows registry entries containing spaces. Program Group Control does
	not recognize registry names with a space.
	
	RESOLUTION
	==========
	
	Do not specify a registry name containing spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0, 1.1 and 1.2. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbPGC smsdatabase smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
