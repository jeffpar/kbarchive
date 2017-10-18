---
layout: page
title: "Q170828: Unable to Update MSN Phone Book"
permalink: kb/170/Q170828/
---

## Q170828: Unable to Update MSN Phone Book

	Article: Q170828
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, you may receive the following
	error message:
	
	  Your phone book could not be updated. Please check if you have the necessary
	  disk space.
	
	If you attempt to download the MSN phone book manually, you receive the following
	error message:
	
	  This task cannot be completed at this time. Please try again later.
	
	CAUSE
	=====
	
	The MSN phone book file (Phone.pbk) may be marked with the Read-Only attribute.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Read-Only attribute from the MSN phone book
	file. To do so, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "phone.pbk" (without the quotation marks), and then
	  click Find Now.
	
	3. Right-click the Phone.pbk file, and then click Properties.
	
	4. In the Phone Properties dialog box, under Attributes, click the Read-Only
	  check box to clear it.
	
	5. Click OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0
	
	=============================================================================
	
