---
layout: page
title: "Q173523: IIS 3.0 Can Fail in Low Memory Conditions"
permalink: /kb/173/Q173523/
---

## Q173523: IIS 3.0 Can Fail in Low Memory Conditions

{% raw %}

	Article: Q173523
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Microsoft Internet Information Server version 3.0, there is a
	possibility that, under low memory conditions, the World Wide Web service will
	fail.
	
	The following STOP error message appears when Drwtsn32.exe is called to handle a
	user mode exception (this STOP error message usually does not produce a DRWTSN32
	log file):
	
	  The instruction at "0x53d08b16" referenced memory at "0x00000010". The memory
	  could not be "read".
	
	
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
	
	
	Additional query words: usermode
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis300
	Version           : winnt:3.0,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
