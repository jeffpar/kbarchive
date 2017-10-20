---
layout: page
title: "Q140384: FTP Server Welcome Banner Has Old Computer Name"
permalink: /kb/140/Q140384/
---

## Q140384: FTP Server Welcome Banner Has Old Computer Name

{% raw %}

	Article: Q140384
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install FTP Server on Windows NT versions 3.5 or 3.51, the FTP Server
	service takes the name of the Windows NT Server or Workstation you install it
	on. If, later, you change the Windows NT computer name, the new name is
	reflected in browse lists, but not in the FTP banner that users receive when
	they connect to the server.
	
	For example, if you install FTP Server on a server named "SERVER_1," a user sees
	the following logon message:
	
	  C:\WINDOWS>ftp
	  ftp> open SERVER_1
	  Connected to SERVER_1.
	  220 SERVER_1 Windows NT FTP Server (Version 3.5).
	
	If you change the computer name to SERVER_2, a user sees the following logon
	message:
	
	  C:\WINDOWS>ftp
	  ftp> open SERVER_2
	  Connected to SERVER_2.
	  220 SERVER_1 Windows NT FTP Server (Version 3.5).
	
	NOTE: You can also connect to the FTP Server using the server's old name.
	
	CAUSE
	=====
	
	This computer name for the FTP Server is hard coded into the FTP Server service
	and can not be modified by registry or .INI file changes.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	You can remove the FTP Server service and related registry keys and then
	reinstall it.
	
	NOTE: This may not be a desirable solution if the FTP Server configuration is
	complex.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Windows NT Workstation or Server version
	4.0.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
