---
layout: page
title: "Q132673: NET VIEW /DOMAIN: &lt;domainname&gt; Command Fails"
permalink: /kb/132/Q132673/
---

## Q132673: NET VIEW /DOMAIN: &lt;domainname&gt; Command Fails

	Article: Q132673
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In real mode, the command "net view /domain: <domainname>" fails and you
	receive the following error message:
	
	  Error 6118: The computer(s) sharing resources in this workgroup cannot be
	  located. The computer(s) might have been restarted. Wait a few minutes, and
	  then try again. If the problem persists, make sure your network-adapter
	  settings are correct.
	
	CAUSE
	=====
	
	This problem occurs because the Basic redirector included in Net.exe does not
	support viewing LAN Manager and Windows NT domains.
	
	RESOLUTION
	==========
	
	Because the Basic redirector does support the viewing of workgroups, the command
	"net view /domain" functions in an MS-DOS Command window.
	
	
	MORE INFORMATION
	================
	
	Note that the /DOMAIN (or abbreviated /D) switch is not documented in online
	Help for the NET VIEW command. If you type "net view /?" this switch is not
	listed.
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
