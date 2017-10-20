---
layout: page
title: "Q86965: X400: X.25 Line Requirements for X.400 Gateway Operation"
permalink: /kb/086/Q86965/
---

## Q86965: X400: X.25 Line Requirements for X.400 Gateway Operation

{% raw %}

	Article: Q86965
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to X.400 requires using a dedicated X.25 to either
	the central office or another message transfer agent (MTA). If the other MTA is
	within 50 feet, a null modem cable can be used.
	
	The X.400 gateway does not allow for dial-up X.25 lines. Although dial-up X.25
	lines are more popular and less expensive, the X.400 gateway does not currently
	support either the scripting for dial-up X.25 or communication protocols to
	ensure an error-free transmission to the central office connection.
	
	Use of null modem cables can be used as per RS232 specifications. This generally
	means that any connection within 50 feet between the hardware cards can be
	supported.
	
	The most used method of connecting to the central office is through dedicated
	X.25 lines.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
