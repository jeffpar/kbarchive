---
layout: page
title: "Q112614: WFWG: Add/Remove Windows Components Option Unavailable"
permalink: /kb/112/Q112614/
---

## Q112614: WFWG: Add/Remove Windows Components Option Unavailable

	Article: Q112614
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to add or remove Windows components within the Windows Setup
	program, the Add/Remove Windows Components selection under Options is
	unavailable.
	
	CAUSE
	=====
	
	This option is unavailable if an administrative setup has been performed. The
	purpose of an administrative setup (one in which the /A and /N options are used)
	is to configure a workstation to run Windows from a shared directory.
	
	Because Windows is being run from a shared directory, the Add/Remove Windows
	option is intentionally unavailable to keep users from deleting files that are
	used by others.
	
	Additional query words: 3.11 greyed grayed out gray grey dim dimmed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
