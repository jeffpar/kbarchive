---
layout: page
title: "Q240958: Command Failed Error Occurs When Using SNACFG"
permalink: kb/240/Q240958/
---

## Q240958: Command Failed Error Occurs When Using SNACFG

	Article: Q240958
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to use the SNA Server command line utility Snacfg.exe to edit the
	Host Account Cache from a computer in a remote Windows NT domain, the following
	error message may occur:
	
	  Command Failed
	
	Example:
	
	  SNACFG #Drive:\path\com.cfg HSMAPPING ABC\USERXXX /ADD /HSDOMAIN:LMVSTS
	  /HSUSER:XXXX
	
	CAUSE
	=====
	
	Snacfg.exe does not support the use of these commands from a Windows NT domain
	that is different than the Windows NT domain where the master Windows NT Account
	Synchronization (SNAPMP) service is running.
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	The following criteria must be met in order to properly run Snacfg.exe:
	
	- The user must be a member of the domain where the Windows NT Password
	  Synchronization Service has been installed.
	
	- Because Snacfg.exe requires some additional SNA Server Manager components to
	  function properly, Snacfg.exe must be run from a computer that also has SNA
	  Server or the SNA Server client for Windows NT with SNA Server Manager
	  installed.
	
	MORE INFORMATION
	================
	
	If the user logged in is not a member of the domain where the Windows NT
	Password Synchronization Service has been installed, a trust relationship must
	be established between the two domains.
	
	For additional information on using Snacfg.exe to configure Host Security
	Domains, please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q236847 SNACFG Should Allow Configuration of Host Security Domains
	
	Additional query words: Host Security
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
