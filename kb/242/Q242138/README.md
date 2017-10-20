---
layout: page
title: "Q242138: Cannot create or add a printer port remotely."
permalink: /kb/242/Q242138/
---

## Q242138: Cannot create or add a printer port remotely.

{% raw %}

	Article: Q242138
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create or add a printer port remotely, you cannot do so.
	
	CAUSE
	=====
	
	This issue occurs because you cannot create or add a printer port remotely by
	using Microsoft Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To work around this issue, use a third-party utility, such as Hewlett-Packard
	(HP) JetAdmin, or write a utility by using the AddPort Application Programming
	Interface (API), which can be found in the Microsoft Win32 Software Development
	Kit (SDK).
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/network ing/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX Based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc? doc=bpj06724
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: hp jetadmin
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
