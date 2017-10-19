---
layout: page
title: "Q49749: NetWkstaSetUid() Returns ERROR_INVALID_PARAMETER in Error"
permalink: /kb/049/Q49749/
---

## Q49749: NetWkstaSetUid() Returns ERROR_INVALID_PARAMETER in Error

	Article: Q49749
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOM
	=======
	
	The NetWkstaSetUid() function returns an error message of
	"ERROR_INVALID_PARAMETER" for any server name other than NULL.
	
	CAUSE
	=====
	
	The NetWkstaSetUid() api is obsolete and exists only for compatibility with LAN
	Manager 1.x.
	
	RESOLUTION
	==========
	
	Use NetWkstaSetUid2() if LAN Manager 2.x is runnning.
	
	Additional query words: 1.00 1.01 2.00 api
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
