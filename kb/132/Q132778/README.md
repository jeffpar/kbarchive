---
layout: page
title: "Q132778: Poor Performance Accessing Network Files with Basic Redirector"
permalink: kb/132/Q132778/
---

## Q132778: Poor Performance Accessing Network Files with Basic Redirector

	Article: Q132778
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience poor performance using the real-mode basic redirector to
	access files on a Windows 95-based server running the Microsoft Client for
	Microsoft Networks.
	
	CAUSE
	=====
	
	The basic redirector incorrectly determines the maximum packet size when it
	communicates with a Windows 95-based server that is using share-level security.
	The maximum packet size the redirector uses is 207 bytes.
	
	RESOLUTION
	==========
	
	Change the Windows 95-based server to use user-level security. To make this
	change, follow these steps on the server:
	
	1. Use the right mouse button to click Network Neighborhood, then click
	  Properties on the menu that appears.
	
	2. On the Access Control tab, click User-Level Access Control.
	
	3. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
