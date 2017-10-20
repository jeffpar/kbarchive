---
layout: page
title: "Q163594: SLI_OPEN Fails w/ LUA_CANCELLED After SLI_CLOSE Completes"
permalink: /kb/163/Q163594/
---

## Q163594: SLI_OPEN Fails w/ LUA_CANCELLED After SLI_CLOSE Completes

{% raw %}

	Article: Q163594
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogrammingkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Issuing SLI_CLOSE to cancel an SLI_OPEN sometimes causes a subsequent SLI_OPEN
	on the same LU to fail with an LUA_CANCELLED (0x0021) primary return code.
	
	CAUSE
	=====
	
	When an SLI_CLOSE is issued, the SLI library calls RUI_TERM to shutdown the LU
	session. If a new SLI_OPEN is called on this same LU, the underlying RUI
	interface may complete the RUI_TERM in error, causing the SLI_OPEN to fail with
	LUA_CANCELLED.
	
	RESOLUTION
	==========
	
	A hotfix to SNA Server 2.11 SP1 and 3.0 is available to correct this problem.
	The updated modules are:
	
	 <snaroot>\system\WINRUI32.DLL  (for Windows NT clients)
	 <winroot>\system\WINRUI32.DLL  (for Windows 95 clients)
	 <winroot>\system\WINRUI.DLL    (for Windows 3.x clients)
	 <snaroot>\RUI.DLL              (for OS/2 clients)
	 <snaroot>\DOSACS.LIB           (for MS-DOS clients)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.0, 2.1, 2.11, 2.11
	SP1 and 3.0.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
