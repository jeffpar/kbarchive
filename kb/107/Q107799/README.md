---
layout: page
title: "Q107799: Post Office Directory Name Cannot Contain Extended Characters"
permalink: kb/107/Q107799/
---

## Q107799: Post Office Directory Name Cannot Contain Extended Characters

	Article: Q107799
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a Windows for Workgroups 3.11 post office, you may
	receive the following error message:
	
	  That action could not be completed. Check that your post office has
	  sufficient free space and that your network connection is active.
	
	CAUSE
	=====
	
	This error occurs if you try to create a post office in a directory that
	contains extended characters in its name.
	
	RESOLUTION
	==========
	
	To avoid this error, create the post office in a directory that does not contain
	any extended characters in its name. The default and preferred directory name to
	use for the post office is WGPO.
	
	STEPS TO REPRODUCE BEHAVIOR
	===========================
	
	
	Additional query words: 3.11 PO postoffice ANSI 230 198 248 216 229 197
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
