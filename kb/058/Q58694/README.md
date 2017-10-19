---
layout: page
title: "Q58694: Purpose of Using Local Security in LAN Manager"
permalink: /kb/058/Q58694/
---

## Q58694: Purpose of Using Local Security in LAN Manager

	Article: Q58694
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Local security is not for casual use. It should be used to protect data on
	production servers from unauthorized access by people who have physical access
	to these production servers.
	
	Do not install local security on a production server without first installing it
	on a test server to ensure that the usage and implications of local security are
	clearly understood.
	
	How much security is required in your situation is something you must decide;
	however, it is expected that in the majority of cases local security is more
	security than is needed.
	
	Local security was added to OS/2 LAN Manager version 2.0 to meet the specialized,
	more stringent security needs of what is expected to be a small minority of OS/2
	LAN Manager customers. Therefore, we expect that for most OS/2 LAN Manager
	customers, the additional planning and administration required to run local
	security will not be necessary.
	
	Additional query words: 2.00 2.10 2.1a 2.20 local security
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
