---
layout: page
title: "Q49525: Ways to Stop LAN Manager 2.x Server or Workstation"
permalink: kb/049/Q49525/
---

## Q49525: Ways to Stop LAN Manager 2.x Server or Workstation

	Article: Q49525
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you cannot stop the server or workstation services for the server local
	console ("access denied" messages), this is because of the strengthening of
	security in OS/2 LAN Manager versions 2.x over earlier releases.
	
	If you are in user-mode security (security = user in LANMAN.INI), you should do
	the following to stop the server or workstation:
	
	1. Log off and immediately log on again, but this time use a user name that is
	  defined as an account with ADMIN privileges for the machine on which you want
	  to stop the server or workstation.
	
	2. If you need information on how to define a new user name as an account name
	  that has ADMIN privileges for the machine on which you want to stop the
	  server or workstation.
	
	If you are in share-mode security (security = share in LANMAN.INI), you should do
	the following to stop the server or workstation:
	
	1. Reboot the machine, and before the workstation or server is started, rename
	  C:\LANMAN\ACCOUNTS\NET.ACC to C:\LANMAN\ACCOUNTS\NETACC.SAV.
	
	2. If necessary, before rebooting the machine, edit STARTUP.CMD or other .CMD
	  files that automatically start the workstation or server. You can press
	  CTRL+C to halt execution of STARTUP.CMD if that is appropriate in your
	  situation.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
