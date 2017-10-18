---
layout: page
title: "Q262173: Memory Leak Occurs When MSWC.IISLog Is Repeatedly Instantiated"
permalink: kb/262/Q262173/
---

## Q262173: Memory Leak Occurs When MSWC.IISLog Is Repeatedly Instantiated

	Article: Q262173
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis500 kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A memory leak may occur when the Internet Information Server (IIS) Log component
	(IISLog) is repeatedly instantiated. The amount of memory loss that occurs is
	directly related to the number of times that the IIS Log Component is
	instantiated.
	
	
	CAUSE
	=====
	
	This problem occurs because there are Active Template Library (ATL) macros
	calling the SysAllocString function with no corresponding the SysFreeString
	function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis500 kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
