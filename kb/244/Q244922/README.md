---
layout: page
title: "Q244922: &quot;STOP 0x00000050&quot; in Rdr.sys with Special Pool Enabled"
permalink: kb/244/Q244922/
---

## Q244922: &quot;STOP 0x00000050&quot; in Rdr.sys with Special Pool Enabled

	Article: Q244922
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience random blue-screen error messages in Windows NT with pool
	corruption. When you have the Special Pool feature enabled, you may receive the
	following error message on a blue screen as a result of pool corruption:
	
	  Stop 0x00000050 (0xf6eb8000, 0x00000001, 0x00000000, 0x80156000)
	
	CAUSE
	=====
	
	This behavior occurs because of a 4-byte overrun in Rdr.sys that is caused when
	a third-party Server Message Block (SMB) server returns a 36-byte buffer when
	SMB_QUERY_FILE_BASIC_INFO is sent back to the client. Typically, a 40-byte
	buffer is returned. This causes the buffer to be off by 4 bytes and Rdr.sys to
	write past its allocated pool.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional information about tracking pool corruption, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q188831 How to Use the Special Pool Feature to Isolate Pool Damage
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
