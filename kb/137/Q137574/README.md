---
layout: page
title: "Q137574: Error Message Installing Corel Draw 6.0"
permalink: /kb/137/Q137574/
---

## Q137574: Error Message Installing Corel Draw 6.0

{% raw %}

	Article: Q137574
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Corel Draw version 6.0 in Windows 95, your computer may
	pause for several seconds at a time, or you may receive one of the following
	error messages:
	
	  - Setup Has Encountered a Problem
	  Setup file = Common\List1.c
	  line = 1013
	  Report to Microsoft Product Services
	
	  - Setup Has Encountered a Problem
	  Setup file = Common\List1.c
	  MS Setup Tools error
	
	
	CAUSE
	=====
	
	These errors can occur for the following reasons:
	
	- You are using real-mode CD-ROM drivers. Examples of real-mode CD-ROM drivers
	  are Mscdex.exe and Corelcdx.exe.
	
	- You are installing Corel Draw over a network and you have not mapped a drive
	  letter to the network share containing the source files. Corel Draw Setup
	  cannot correctly interpret universal naming convention (UNC) paths.
	
	RESOLUTION
	==========
	
	To resolve these error messages, use protected-mode CD-ROM drivers rather than
	real-mode versions.
	
	If you are installing Corel Draw over a network, make sure to map the network
	drive from which you are installing Corel Draw.
	
	MORE INFORMATION
	================
	
	
	For additional information about setting up Corel Draw in Windows 95, please
	contact Corel Technical Support.
	
	Note that a similar error can occur with Visio version 4.0 for Windows 95 (32-bit
	version). The error message may state a line number of 1052 instead of 1013.
	This problem also occurs with Corel Print House version 1.0.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
