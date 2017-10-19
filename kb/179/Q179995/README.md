---
layout: page
title: "Q179995: Memory Leak in FPNW Causes Windows NT Server to Hang"
permalink: /kb/179/Q179995/
---

## Q179995: Memory Leak in FPNW Causes Windows NT Server to Hang

	Article: Q179995
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A memory leak in File and Print Services for NetWare (FPNW) may cause Windows NT
	to stop responding (hang). Performance Monitor shows private bytes for
	Nwssvc.exe growing excessively until the system hangs.
	
	CAUSE
	=====
	
	Memory allocated during a logon attempt is not being freed.
	
	
	NOTE: JetDirect is no longer supported by HP. They now use SDI (Simple Device
	Installation) to install network printers. For more information on this, see:
	
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	or
	http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
