---
layout: page
title: "Q110023: GP Fault When Playing Multiple AVI Files"
permalink: /kb/110/Q110023/
---

## Q110023: GP Fault When Playing Multiple AVI Files

{% raw %}

	Article: Q110023
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a general protection (GP) fault in the selected codec driver
	when you play multiple AVI files at the same time that have different data
	rates.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain the new version of the Avifile.dll file
	available in the Video 1.1e for Windows Run-Time Edition update.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Compress a 200K/sec file as noninterleaved.
	
	2. Compress a second file, that is 100K/sec, as noninterleaved.
	
	3. If you play the 200K/sec file, then the 100K/sec file, the read buffer
	  created for the first file will be made too small for the second file
	  resulting in the GP fault.
	
	  NOTE: If you play the 100K/sec file, then the 200K/sec file, the read buffer
	  for the 100K/sec file is large enough to accommodate the 200K/sec file and no
	  error will result.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo110
	Version           : :1.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
