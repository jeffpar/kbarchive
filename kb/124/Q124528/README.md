---
layout: page
title: "Q124528: PRB: How to Handle the Error &quot;INI in 2.2 format&quot;"
permalink: /kb/124/Q124528/
---

## Q124528: PRB: How to Handle the Error &quot;INI in 2.2 format&quot;

	Article: Q124528
	Product(s): Microsoft SourceSafe
	Version(s): 3.0x
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the error "INI in 2.2 format."
	
	CAUSE
	=====
	
	This error can occur after updating to 3.0X from a 2.X version. The install
	script should execute UPDINI.EXE automatically to modify the 2.X INI files.
	However, you may need to execute this program manually to solve the following
	errors:
	
	- "File <path>SRCSAFE.INI not found"
	
	- "The <INI file> file still has the 2.2 format. Please run UPDINI.EXE on
	  this file"
	
	RESOLUTION
	==========
	
	To resolve these errors, execute UPDINI.EXE. This program is located in ADMIN
	directory. Example:
	
	  C:\SS\ADMIN\UPDINI -m<path to SYSTEM.INI>
	
	To modify an SS.INI file:
	
	  C:\SS\ADMIN\UPDINI -m<path to SS.INI>\SS.INI
	
	This program should make the necessary modifications to the .INI files.
	
	Additional query words: update upgrade
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Version           : 3.0x
	Issue type        : kbprb
	
	=============================================================================
	
