---
layout: page
title: "Q239049: HTTP Compression Maximum Size Setting Not Checked Using HTMLA"
permalink: /kb/239/Q239049/
---

## Q239049: HTTP Compression Maximum Size Setting Not Checked Using HTMLA

	Article: Q239049
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
	
	When you use the HTML Web Administration Forms (HTMLA) and set the master
	properties for HTTP compression, you can set the maximum disk space that can be
	used for the compressed files. This number is not checked for correctness.
	
	RESOLUTION
	==========
	
	Make sure that the maximum size of the directory to contain the compressed files
	is sufficiently lower than the number you set. Always double-check the number
	used to make sure it was not mistyped.
	
	STATUS
	======
	
	This is a known issue in the HTML Web Administration Forms used in Internet
	Information Services 5.0.
	
	Additional query words: iis HTTP compression HTMLA
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
