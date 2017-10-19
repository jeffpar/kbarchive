---
layout: page
title: "Q242456: FTP Service Ignores File Names/User Names Beginning with 0xF&#42;"
permalink: /kb/242/Q242456/
---

## Q242456: FTP Service Ignores File Names/User Names Beginning with 0xF&#42;

	Article: Q242456
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If file names or user names are sent to the server containing characters with
	0xF* ANSI code (0x03C* Unicode), the server ignores those characters.
	
	The user cannot login nor does the FTP service recognize files that are being
	sent to the server under this condition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
