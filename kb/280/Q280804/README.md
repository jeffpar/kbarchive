---
layout: page
title: "Q280804: Memory Leak in Mapsvc.exe When Synchronizing Many Users"
permalink: /kb/280/Q280804/
---

## Q280804: Memory Leak in Mapsvc.exe When Synchronizing Many Users

	Article: Q280804
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mapping service in Services for UNIX may experience a memory leak when you
	are synchronizing many UNIX users that do not exist in the Microsoft Windows
	NT-based domain.
	
	CAUSE
	=====
	
	For every UNIX user, the Mapping service performs a corresponding lookup for the
	Windows NT user. The Mapping service uses the LSALookUpNames function for this
	lookup, which allocates memory even if the function does not work. If a UNIX
	user does not exist in the Windows NT-based domain, the function does not
	succeed and no attempt is made to free the memory.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version        Size    File name   Platform
	  -------------------------------------------------------------
	23-Nov-2000  13:27  5.2000.328.10  154 KB  Mapper.dll  x86
	 7-Jul-2000  18:27  5.2000.328.12  106 KB  Mapsvc.exe  x86
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
