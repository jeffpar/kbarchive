---
layout: page
title: "Q241672: File Transfers Between Computers Are Slower Than Expected"
permalink: /kb/241/Q241672/
---

## Q241672: File Transfers Between Computers Are Slower Than Expected

	Article: Q241672
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File transfers between Windows NT 4.0-based computers with similar names are
	slower than expected. A network trace shows that the data transfer size is
	512-byte increments, rather than the 4,096-byte or larger default size used by
	Windows NT.
	
	CAUSE
	=====
	
	A problem in the redirector (Rdr.sys) causes the workstation to incorrectly mark
	a connection to a remote server as "loopback." This occurs when the remote
	server has a NetBIOS name that is a subset of the local NetBIOS computer name.
	For example, a connection to a server named Test is incorrectly considered a
	loopback connection from workstations named Testx, Test1, Testabc, and so on.
	
	The redirector treats loopback connections differently than it does remote
	connections. On connections to remote servers, the redirector makes an initial
	read or write request of 512 bytes and then increases the request size if both
	computers are capable of handling larger requests. On loopback connections, the
	entire transfer is in 512-byte increments. Making these small read and write
	requests generates network overhead, and the request takes longer to finish.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Size     File name  Platform
	  ----------------------------------------------
	  09/14/99  01:08p  265,008  Rdr.sys    Intel
	  09/14/99  01:07p  512,144  Rdr.sys    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: slow performance core mode raw
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
