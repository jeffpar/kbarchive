---
layout: page
title: "Q90254: NE2000 Clone Card Doesn't Work with Windows for Workgroups"
permalink: kb/090/Q90254/
---

## Q90254: NE2000 Clone Card Doesn't Work with Windows for Workgroups

	Article: Q90254
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	Novell/Eagle NE2000 compatible network cards may not work with Windows
	for Workgroups if there is an IO address problem. The original NE2000
	card supports IO address settings of 300, 320, 340, and 360. The
	Windows for Workgroups drivers support the same addresses.
	
	Some clone cards support alternative IO address settings in addition
	to these; these additional address settings do not work with our
	driver.
	
	To work around the problem, change the IO address to 300, 320, 340, or
	360. You will probably have to change some dip switches or jumpers.
	
	Additional query words: 3.10 3rdparty nic
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
