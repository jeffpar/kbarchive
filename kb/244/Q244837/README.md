---
layout: page
title: "Q244837: Function Exports Missing from Ws2_32.dll"
permalink: /kb/244/Q244837/
---

## Q244837: Function Exports Missing from Ws2_32.dll

{% raw %}

	Article: Q244837
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a program that uses Windows Sockets on Terminal Server Edition, you
	may receive an error message similar indicating that an entry point is missing
	from Ws2_32.dll, as shown in the following examples:
	
	  Run-time error '453' Can't find DLL entry point WPUCompleteOverlappedRequest
	  in ws2_32
	
	  Run-time error '453' Can't find DLL entry point WSAProviderConfigChange in
	  ws2_32
	
	NOTE: The exact format of the error message depends on the software development
	environment used to build the program.
	
	CAUSE
	=====
	
	The WPUCompleteOverlappedRequest and WSAProviderConfigChange entry points are
	not exported by the version of Ws2_32.dll that is included with Terminal Server
	Edition. Therefore, they are inaccessible at run time.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, replace the Terminal Server Edition version of the
	Ws2_32.dll file with the version of this file that is included with Windows NT
	4.0 Service Pack 5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server version
	4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
