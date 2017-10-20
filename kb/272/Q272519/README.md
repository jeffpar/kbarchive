---
layout: page
title: "Q272519: How to Redirect a Client Drive in Terminal Services"
permalink: /kb/272/Q272519/
---

## Q272519: How to Redirect a Client Drive in Terminal Services

{% raw %}

	Article: Q272519
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbTermServ w2000termsrv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Windows 2000 Terminal Services with a Remote Desktop Protocol (RDP)
	client computer, client-side drive redirection is not available by default.
	
	MORE INFORMATION
	================
	
	To use client-side drive redirection, use one of the following methods:
	
	- Use the Drive Share utility from the Microsoft Windows 2000 Resource Kit. You
	  can download the Drive Share utility from the following Microsoft Web site:
	
	  http://www.windows2000.com
	
	For additional information about the Drive Share utility, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q244725 Using Drive Share with Terminal Services
	
	- Use the net use command with a persistent switch to redirect or map a
	  client's local drive so that it can be used in a Terminal Services session.
	  To do this, follow these steps:
	
	  1. Share the drive on the client computer that is to be mapped. For example,
	     to redirect drive A, start Windows Explorer, right-click Drive A, click
	     Sharing, and then click "Share this folder".
	
	  2. From the client computer, establish a session with the Terminal Services
	     server.
	
	  3. Open a Cmd.exe prompt and type the following syntax to map the drive:
	
	  net use <driveletter>: \\<clientname>\<sharename>
	  /persistent:yes
	
	  where <driveletter> is the drive letter that you want to use for
	  redirection, and <sharename> is what the drive was shared out as on the
	  client computer. You need to run this command only once in the session. After
	  that, every time the connection is made, the drive is mapped.
	
	For example, to map the drive C on the client workstation to the drive X in the
	Terminal Services client session, following these steps:
	
	1. Share drive C on the client as "C".
	
	2. Connect to the Terminal Services server, and in the session, open a Cmd.exe
	  prompt.
	
	3. Type "net use X: \\<clientname>\C /persistent:yes" (without the
	  quotation marks)
	
	You should now see drive X in Windows Explorer.
	
	If a session originates from one client computer, when the session is
	disconnected, and then reconnected from a different computer, redirection does
	not take place in the new session.
	
	If different users log on to the Terminal Services server from the same
	workstation, place the net use command listed in step three (without the
	/persistent:yes switch) in a logon script.
	
	A Virtual Private Network (VPN) connection must be initiated before you attempt
	drive redirection. Drive redirection does not work through an Internet
	connection.
	
	Additional query words: redirect map client drive terminal services share
	
	======================================================================
	Keywords          : kbTermServ w2000termsrv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
