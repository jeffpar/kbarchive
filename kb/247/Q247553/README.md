---
layout: page
title: "Q247553: Windows NT Option Pack (NTOP) Downgrades MDAC Components"
permalink: /kb/247/Q247553/
---

## Q247553: Windows NT Option Pack (NTOP) Downgrades MDAC Components

	Article: Q247553
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Windows NT Option Pack (NTOP), some MDAC components may be
	downgraded to the version that is included with the NTOP regardless of the
	version of MDAC that is already installed on the computer.
	
	CAUSE
	=====
	
	IIS 4.0 ignores the MDAC file and registry version information and installs the
	version of MDAC included in the IIS 4.0 Setup program.
	
	WORKAROUND
	==========
	
	To work around this problem, you can manually suppress the entire MDAC portion
	of the IIS 4.0 (Option Pack) Setup program.
	
	NOTE: If you do not have a version of MDAC installed before you attempt this
	workaround, your IIS installation may fail to function properly. MDAC is
	required by IIS for some of its basic functionality. Use this workaround at your
	own risk.
	
	To suppress the MDAC installation during IIS 4.0 setup, do the following:
	
	1. Copy the Windows NT Option Pack files to a temporary directory on your hard
	  drive.
	
	2. Edit the Iisv4.inf file in the temporary directory where you copied the IIS
	  4.0 Setup files.
	
	3. Locate the section [Components.x86], and use a semicolon (;) to comment out
	  the following line:
	
	  ;DAC=dagsetup.dll,DAGSetup,dagsetup.inf
	
	4. Repeat step 3 for the section [Components.alpha].
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
