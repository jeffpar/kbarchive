---
layout: page
title: "Q156429: Supported 16-bit Utilities and NetWare-Aware Applications"
permalink: /kb/156/Q156429/
---

## Q156429: Supported 16-bit Utilities and NetWare-Aware Applications

	Article: Q156429
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some utilities that are included with NetWare 3.1x and NetWare 4.x do not work
	with Windows NT 4.0 running Client Services or Gateway Services for NetWare.
	
	MORE INFORMATION
	================
	
	To find out what NetWare utilities are compatible with Windows NT 4.0, perform
	the following steps:
	
	1. Go to Control Panel
	
	2. Click on GSNW or CSNW
	
	3. Click Help
	
	4. Click Help Topics
	
	5. Click Run 16-Bit Utilities and NetWare-Aware Applications
	
	The following is the list of supported 16-bit NetWare Utilities.
	
	MS-DOS 16-Bit NetWare Utilities
	-------------------------------
	
	You can use the Explorer or the net use command to perform the same functions as
	the NetWare attach, capture, login, and logout utilities, which are not
	supported and can cause failures. Use the net view command to perform the same
	function as the NetWare slist utility. Like the NetWare capture command, the net
	use command enables MS-DOS and Windows applications to print to a specific port.
	In addition, you can use the Printers folder to connect to printer queues.
	
	  Utility     Issue
	  -------     -----
	  chkvol      None
	  colorpal    None
	  dspace      None
	  flag        None
	  flagdir     None
	  fconsole    None
	  filer       None
	  grant       None
	  help        None
	  listdir     None
	  map         None
	  ncopy       None
	  ndir        None
	  pconsole    None
	  psc         None
	  pstat       None
	  rconsole    Servers don't show if rconsole is run from a 4.x server.
	  remove      None
	  revoke      None
	  rights      None
	  security    None
	  send        None
	  session     Search mapping is not supported; will always map as root.
	  setpass     None
	  settts      None
	  slist       None
	  syscon      None
	  tlist       None
	  userlist    None
	  volinfo     If update interval = 5, this command executes very slowly.
	  whoami      None
	
	NOTE: The Send and Whoami commands are not supported when connected to an NDS
	server.
	
	Additional query words: prodnt Novell unsupported netx vlm api csnw gsnw
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
