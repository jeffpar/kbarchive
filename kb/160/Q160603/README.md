---
layout: page
title: "Q160603: No Output from DBMON Using OutputDebugString While Debugging"
permalink: /kb/160/Q160603/
---

## Q160603: No Output from DBMON Using OutputDebugString While Debugging

	Article: Q160603
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DBMON is a utility that can be used to monitor output from an application that
	calls the OutputDebugString function when the application is not being run from
	within a debugger.
	
	The problem is that no output is available when the application is being run from
	within a service.
	
	CAUSE
	=====
	
	In OutputDebugString, the DBWinMutex is created with a NULL SECURITY_ATTRIBUTES.
	This implies a default security descriptor, which means the ACL of the security
	context that OutputDebugString is called within. However, this means that this
	mutex can only be used within the security context that first created this
	mutex, and no other security context can use OutputDebugString to talk to DBMON.
	The problem is really in the first code to call OutputDebugString, when running
	from a service running under another security context.
	
	
	RESOLUTION
	==========
	
	Apply Windows NT 4.0 Service Pack 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt debugging
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
