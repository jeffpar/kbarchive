---
layout: page
title: "Q79809: Persistent Net Connections with LAN Manager 2.1"
permalink: kb/079/Q79809/
---

## Q79809: Persistent Net Connections with LAN Manager 2.1

	Article: Q79809
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following information applies to LAN Manager version 2.1 running under
	MS-DOS and OS/2.
	
	One of the features of LAN Manager 2.1 is its ability to automatically save a
	user's net connections. When the user logs on again, the connections are
	automatically re-established. If the connection requires a password, the user is
	prompted.
	
	MORE INFORMATION
	================
	
	In LAN Manager versions 2.0c and earlier, users put the net connections that
	require passwords in their AUTOEXEC.BAT file, thus eliminating the need to wait
	to manually enter the passwords when their system boots up. LAN Manager 2.1
	saves these NET USEs in a file called LMUSER.INI, which supersedes any NET USEs
	in the AUTOEXEC.BAT file.
	
	The /persistent option of the NET USE command has four parameters:
	
	/persistent:YES
	
	  This enables persistent net connections, setting autorestore=yes and
	  saveconnections=yes in LANMAN.INI. Any connections made after issuing this
	  command will be saved in LMUSER.INI; any connections deleted will be removed.
	
	/persistent:NO
	
	  This turns off persistent net connections altogether. It sets autorestore=no
	  and saveconnections=no in LANMAN.INI. No connections will be saved or
	  restored.
	
	/persistent:SAVE
	
	  This first writes any existing connections into the LMUSER.INI file. If the
	  user had any connections in the LMUSER.INI file to servers that are currently
	  down, they will be dropped. This will set autorestore=yes and
	  saveconnections=no in LANMAN.INI.
	
	/persistent:FREEZE
	
	  This option will set autorestore=yes and saveconnections=no in the LANMAN.INI
	  file. The difference between this option and the SAVE option is that FREEZE
	  won't write any existing connections into LMUSER.INI. Also, if the user had
	  connections in the LMUSER.INI file to servers that are currently down, they
	  will NOT be dropped.
	
	Disabling Autosave or Customizing Reconnections
	-----------------------------------------------
	
	You can either totally disable the autosave feature of LAN Manager 2.1 or
	customize the reconnections so you do not have to manually enter any required
	passwords.
	
	To disable the persistent connections entirely, use the following command:
	
	     net use /persistent:no
	
	This will set autorestore=no and saveconnections=no in LANMAN.INI.
	
	To turn off persistent net connections from within Windows, do the following:
	
	1. From the Control Panel, select the Network icon.
	
	2. From the Networks window Options menu, choose Restore Connections at Log On.
	  This will toggle (remove the check mark from) the Restore Connections option,
	  turning off the persistent net connections.
	
	To customize the reconnections to avoid manually entering passwords, do the
	following:
	
	1. (Assume that you have no connections.) Add all the connections that can be
	  made immediately after logon without being prompted for a password (that is,
	  all connections for which your logon password is the correct one).
	
	2. Type "net use /persistent:freeze". This will freeze the LMUSER.INI file with
	  the current set of connections so that any subsequent NET USEs do not update
	  it.
	
	3. In the AUTOEXEC.BAT file, enter the NET USE commands that require passwords.
	  They will not be automatically added to the LMUSER.INI file.
	
	It is important to note that persistent net connections in LAN Manager 2.1 are
	workstation-specific. That is, the LMUSER.INI file is workstation-specific, not
	user-specific. System administrators can use the persistent net connection
	feature to set up any connections that all users logging on to a specific
	workstation would need, and then use the NET USE /PERSISTENT:FREEZE command to
	freeze the connections. The system administrator can then configure each user's
	individual net connections through the use of logon scripts and batch files.
	
	Additional query words: 2.10 2.10a 2.20 connections
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
