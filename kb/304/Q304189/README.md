---
layout: page
title: "Q304189: Error Entering Negative Number for ASP Files Cached in Memory"
permalink: /kb/304/Q304189/
---

## Q304189: Error Entering Negative Number for ASP Files Cached in Memory

	Article: Q304189
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enter a negative number (for example, "-1") in the ASP files cached in
	memory text box in the Internet Services Manager (ISM), you may receive the
	following error message:
	
	  Unacceptable Character
	  You can only type a number here.
	
	CAUSE
	=====
	
	The ASP file cache text boxes can only contain positive integers.
	
	RESOLUTION
	==========
	
	Although there is no option to cache an unlimited number of files in memory, you
	can specify up to 2,000,000,000 files to be cached in memory.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Although "-1" (meaning unlimited in-memory cache) is a legal metabase value for
	the AspScriptFileCacheSize property, this cannot be changed in the ISM. The ISM
	can only contain positive integers.
	
	
	Additional query words: kbiisSearch, kbiis510
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
