---
layout: page
title: "Q100841: WFWG: Redirecting DIR /W to LPTx Results in Blank Page"
permalink: kb/100/Q100841/
---

## Q100841: WFWG: Redirecting DIR /W to LPTx Results in Blank Page

	Article: Q100841
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Redirecting the output of a wide directory list to a parallel port connected
	over a network using Windows for Workgroups 3.1 may not list the contents of the
	directory. For example, the following format results in listing only the
	directory header and footer
	
	  DIR /W > LPTx
	
	where "x" ranges from 1 to 9.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1.
	
	
	Additional query words: 3.10 print command line
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
