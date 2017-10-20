---
layout: page
title: "Q134688: SNA Server Does Not Allow Configuration of LU Address 255"
permalink: /kb/134/Q134688/
---

## Q134688: SNA Server Does Not Allow Configuration of LU Address 255

{% raw %}

	Article: Q134688
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Admin does not allow you to configure LU number 255 when you
	configure 3270, LUA, or Downstream LUs with SNA Server Admin.
	
	NOTE: VTAM allows you to configure dependent LUs with a local address (locaddr
	parameter in VTAM) of 255.
	
	CAUSE
	=====
	
	SNA Server Admin allows you to configure LU numbers only up to 254.
	
	Earlier versions of VTAM have a problem configuring and using LUs with a local
	address of 255. Although the problem has been resolved on the host this
	restriction still exists in SNA Server.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the files SNASERVR.EXE, TRCSERVR.EXE, SNAADMIN.EXE,
	SNACFG.DLL, and SNACFG.EXE, to correct this problem.
	
	To work around this problem, do not use LU number 255 with SNA Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
