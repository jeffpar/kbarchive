---
layout: page
title: "Q315817: Memory Leak When You Are Running Server-to-Server Shadowing"
permalink: kb/315/Q315817/
---

## Q315817: Memory Leak When You Are Running Server-to-Server Shadowing

	Article: Q315817
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running server-to-server shadowing with Windows NT 4.0 and Citrix,
	non-paged pool memory may leak and eventually generate a "STOP 0x00000041" error
	message on a blue screen. This problem is compounded when the shadowing session
	is performing intensive graphical functions.
	
	CAUSE
	=====
	
	Non-paged pool memory is being allocated but not freed by the Tdpipe.sys driver.
	The pool tag for the pool that is being allocated is Mdl.
	
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
	
	  Date         Time   Size    File name    
	  ---------------------------------------
	  07-Jan-2002  10:47  12,728  Tdasync.sys
	  07-Jan-2002  10:47  18,648  Tdipx.sys  
	  07-Jan-2002  10:47  17,080  Tdnetb.sys  
	  07-Jan-2002  10:47  10,360  Tdpipe.sys  
	  07-Jan-2002  10:47  16,248  Tdspx.sys  
	  07-Jan-2002  10:47  18,488  Tdtcp.sys  
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Terminal Server Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
