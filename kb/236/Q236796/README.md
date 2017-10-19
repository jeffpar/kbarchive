---
layout: page
title: "Q236796: How to Suppress Restart after an Unattended NTOP Installation"
permalink: /kb/236/Q236796/
---

## Q236796: How to Suppress Restart after an Unattended NTOP Installation

	Article: Q236796
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Windows NT Option Pack (NTOP) in unattended mode, the
	computer will restart itself after the setup. You can suppress the restart by
	adding an extra switch to the setup command line. To do this, use the following
	command line:
	
	  setup.exe /U:<full path to unattended.txt> /R:N
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
