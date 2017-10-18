---
layout: page
title: "Q91221: NET.EXE Does Not Always Load Full Redirector by Default"
permalink: kb/091/Q91221/
---

## Q91221: NET.EXE Does Not Always Load Full Redirector by Default

	Article: Q91221
	Product(s): Microsoft Access Distribution Kit
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Workgroup Connections Setup, if you select "Do not run Workgroup
	Connections," the AUTOSTART= statement is left blank in SYSTEM.INI. If you
	execute a NET command requiring a loaded network redirector, NET.EXE should load
	the full redirector by default, regardless of the NET command. Depending on what
	command you execute, NET.EXE may not load the full redirector.
	
	
	NET LOGON and NET START RDR both require network redirectors. If no redirector is
	loaded or specified by the AUTOSTART= statement, NET.EXE should load the full
	redirector. However, if you execute NET LOGON, NET.EXE loads the full
	redirector; if you execute NET START RDR, it loads the basic redirector.
	
	Additional query words: 1.0 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWFWSearch kbWFW310
	Version           : :1.0
	
	=============================================================================
	
