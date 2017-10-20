---
layout: page
title: "Q167710: XCLN: POP and IMAP Security Issues"
permalink: /kb/167/Q167710/
---

## Q167710: XCLN: POP and IMAP Security Issues

{% raw %}

	Article: Q167710
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0;Win95:4.0,5.0;WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	The Computer Emergency Response Team Coordination Center (CERT/CC) recently
	released a warning memorandum that stated that certain implementations of
	Post Office Protocol (POP) and Internet Mail Access Protocol (IMAP) mail
	were vulnerable to a "Root Level" attack from outside agents. (Agents here
	means users or software designed to maliciously attack a foreign server or
	mail system.) Microsoft Exchange Clients are not vulnerable to such
	attacks.
	
	This kind of attack or security breach is only possible under certain
	iterations of the UNIX operating system; the problem is due to the way file
	and user access are offered. Because Microsoft Exchange Server is based on
	the Windows NT Server operating system, our products are not vulnerable to
	such attacks.
	
	For more information, please go to the following URL
	
	  http://www.cert.org/
	
	and view the following bulletin:
	
	  CERT* Advisory CA-97.09
	  Original issue date: April 7, 1997
	  Last revised: April 18, 1997
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0;Win95:4.0,5.0;WinNT:4.0,5.0
	
	=============================================================================
	

{% endraw %}
