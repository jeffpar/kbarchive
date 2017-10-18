---
layout: page
title: "Q143031: Error Starting Mail Server in Windows NT 3.51 Resource Kit"
permalink: kb/143/Q143031/
---

## Q143031: Error Starting Mail Server in Windows NT 3.51 Resource Kit

	Article: Q143031
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Mail Server (MailSrv) utility in Windows NT Resource Kit
	version 3.51, the following error message appears:
	
	  Error starting service smtpsrv
	  Press OK to continue, or cancel to stop
	  The data area passed to the system call is too small.
	
	CAUSE
	=====
	
	The SMTPSrv service requires a Fully Qualified Domain Name (FQDN). A FQDN
	consists of a Host name and a Domain name. When you install Windows NT Server
	and the TCP/IP protocol, the computer name is entered as the Host name by
	default. The Domain name is left blank.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Start Control Panel Network.
	
	2. Select the TCP/IP Protocol and choose Configure.
	
	3. Choose DNS and enter the Domain name.
	
	  NOTE: Contact your network administrator for the exact domain name.
	
	MORE INFORMATION
	================
	
	Mail Server is a Simple Mail Transport Protocol (SMTP) and Post Office Protocol
	versions 2 and 3 (POP2/POP3) server and implementation of the SendMail daemon
	for Windows NT Workstation and Windows NT Server. The Mail Server installs many
	services including SMTPSrv, which handles the receiving of SMTP mail. The
	remaining services depend on SMTPSrv to start.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbMSPressSearch kbWinNTS351search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.51
	
	=============================================================================
	
