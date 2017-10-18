---
layout: page
title: "Q262291: DOC: Win2000 Supports Delegations with Kerberos Authentication"
permalink: kb/262/Q262291/
---

## Q262291: DOC: Win2000 Supports Delegations with Kerberos Authentication

	Article: Q262291
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbGrpDSCom kbDSupport
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the context-sensitive help of DCOMCNFG.exe, on the Default Properties tab,
	the drop-down list for Default Impersonation Level states that "The Windows 2000
	authentication service does not support Delegate". Microsoft has confirmed that
	this is a documentation error. Windows 2000 implements the Kerberos v5
	authentication protocol, and this authentication service supports delegate level
	impersonation.
	
	MORE INFORMATION
	================
	
	COM security is based on the security that is provided by Windows NT, Windows
	2000, and the underlying remote procedure call (RPC) security mechanisms. COM
	security relies on authentication and authorization: authentication is the
	process that verifies a caller's identity, and authorization is the process that
	determines whether a caller is authorized to perform the requested task.
	
	In the COM security model, servers manage objects, and clients access objects
	through servers. Through impersonation, servers can attempt to access resources
	or other servers on the client's behalf. The client can set an impersonation
	level that determines to what extent the server can act as the client.
	
	On Windows 2000, there are four impersonation levels:
	
	- Anonymous
	- Identify
	- Impersonate
	- Delegate
	
	Prior to Windows 2000, "identify" and "impersonate" were the only supported
	impersonation levels. On Windows 2000, "delegate" level impersonation is
	supported when you use the Kerberos authentication service.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run DCOMCNFG.exe.
	
	2. On the Default Properties tab, click to highlight the Default Impersonation
	  Level drop-down list.
	
	3. Press the F1 key. The last line of the context-sensitive help states that
	  "The Windows 2000 authentication service does not support Delegate".
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q158508 COM Security Frequently Asked Questions
	
	  Q266080 Answers to Frequently Asked Kerberos Questions
	
	  Q176799 INFO: Using DCOM Cnfg (DCOMCNFG.EXE) on Windows NT
	
	  Q252589 Dcomcnfg.exe Utility Improvements, Fixes, Registry Entries and Format
	  of Ports Range Value
	
	  Q166992 Standard Security Practices for Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbGrpDSCom kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
