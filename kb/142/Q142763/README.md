---
layout: page
title: "Q142763: PRB: Path Problems on Client Installation of SourceSafe"
permalink: /kb/142/Q142763/
---

## Q142763: PRB: Path Problems on Client Installation of SourceSafe

	Article: Q142763
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It may appear that certain configurable items are not working properly.
	
	CAUSE
	=====
	
	The Srcsafe.ini file contains a reference to a local drive when the network
	address is the intended entry.
	
	RESOLUTION
	==========
	
	The path to the shadow directory should be made using Universal Naming
	Conventions (UNC) to prevent confusion when using Visual SourceSafe from another
	computer located on the network. If, for example, the shadow directory is set
	via the SSADMIN program on the server to D:\ssafe\shadow on the server's local D
	drive, each workstation will attempt to locate its own D:\ssafe\shadow
	directory, which may not exist. Changing the path to the correct UNC (for
	example \\myserver\myshare\shadow) will work correctly from the server and all
	workstations.
	
	NOTE: This problem and resolution also applies to the Journal file setting.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From a computer that is being used as a network location for the Visual
	  SourceSafe data, use the Ssadmin.exe program.
	
	2. On the Tools menu, click Options, and then click Shadow Directories. Set the
	  project to Shadow to $/ and select a directory by using the Browse button.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138296 Using UNC Paths in Visual SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
