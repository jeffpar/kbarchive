---
layout: page
title: "Q197781: CopyProxy Does Not Make a Copy for Dual Interfaces"
permalink: /kb/197/Q197781/
---

## Q197781: CopyProxy Does Not Make a Copy for Dual Interfaces

{% raw %}

	Article: Q197781
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 13-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call CoCopyProxy API on a proxy for a custom (automation) interface that
	is marshalled by the automation marshaller (Oleaut32.dll), the API will return
	the following error:
	
	  S_OK
	
	However, no copy will be made.
	
	If you build a proxy/stub .dll for the same interface and use it as the
	marshaller, the API CoCopyProxy() works.
	
	CAUSE
	=====
	
	The old code had the assumption that CreateProxy returned a valid interface
	parameter, which is not TRUE for automation proxies. Automation proxies return
	the interface pointer only after the channel is connected.
	
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
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
