---
layout: page
title: "Q156348: Memory-Related Performance Counters Show Zero Values"
permalink: kb/156/Q156348/
---

## Q156348: Memory-Related Performance Counters Show Zero Values

	Article: Q156348
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add one of the following counters of the Server service to your
	Performance Monitor view on Windows NT Server 4.0, you will see that the
	counters are always zero, even though the Server service always allocates some
	memory:
	
	  Pool Nonpaged Bytes
	  Pool Nonpaged Failures
	  Pool Nonpaged Peak
	  Pool Paged Bytes
	  Pool Paged Failures
	  Pool Paged Peak
	
	If you check the Performance Monitor with Windows NT Server 3.51, or Windows NT
	Workstation 3.51 or 4.0, you will always receive nonzero values.
	
	CAUSE
	=====
	
	The server does not track the amount of memory allocated when it is allowed to
	allocate an infinite amount of memory. This is always the case for Windows NT
	Server.
	
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
	
	  Date        Time   Version        Size     File name
	  ----------------------------------------------------
	  11/19/2001  18:00  4.0.1381.7110  231,120  Srv.sys
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
