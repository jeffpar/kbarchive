---
layout: page
title: "Q138366: Event ID 10 Appears When Using Simple TCP/IP Services"
permalink: /kb/138/Q138366/
---

## Q138366: Event ID 10 Appears When Using Simple TCP/IP Services

{% raw %}

	Article: Q138366
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT simple TCP/IP services to view the "Quote of the
	Day", the following event appears in the System Log (as seen with the Event
	Viewer):
	
	  Event ID: 10
	  Source: SIMPTCP
	  Type: Error
	  Description: The simple TCP/IP service could not find the UDP QOTD Port. The
	  UDP QOTD service is not started.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Open the SERVICES file in the %SystemRoot%\SYSTEM32\DRIVERS\ETC directory
	  using a text editor, such as Notepad.
	
	2. Ensure the following entry exists in the SERVICES file:
	
	  qotd               17/tcp    quote
	  qotd               17/udp    quote
	
	NOTE: The entry in the SERVICES file uses the following format:
	
	  <service name> <port number>/ <protocol> [aliases...]
	  [#<comment>]
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
