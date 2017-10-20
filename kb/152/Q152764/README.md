---
layout: page
title: "Q152764: Garbled Characters Appear in Windows NT Print Queue"
permalink: /kb/152/Q152764/
---

## Q152764: Garbled Characters Appear in Windows NT Print Queue

{% raw %}

	Article: Q152764
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix kbPrinting
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a downlevel client (such as Windows 95) sends a print job to a Windows NT
	print server, you may not be able to read the document name on the server's
	print queue; however, the document prints correctly.
	
	CAUSE
	=====
	
	A downlevel client sends the document name formatted in its codepage and the
	protocol is not able to specify the codepage used. If the server has the same
	locale settings as the client, the document name is readable. However, there is
	a problem where the ANSI codepage is used to translate the document name instead
	of the OEM codepage.
	
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
	
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
