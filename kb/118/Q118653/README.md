---
layout: page
title: "Q118653: NET Commands Available in Microsoft Network Clients"
permalink: /kb/118/Q118653/
---

## Q118653: NET Commands Available in Microsoft Network Clients

{% raw %}

	Article: Q118653
	Product(s): Microsoft Windows NT
	Version(s): 2.2,3.1,3.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft LAN Manager, version 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The different NET commands available from the command prompt vary with the
	different network clients available from Microsoft. This list notes which NET
	commands are available for each of the different clients. This list can be
	useful if you need a specific command, but aren't sure which clients support
	that command.
	
	MORE INFORMATION
	================
	
	Use the following key when viewing the list:
	
	  DOS LM   =  LAN Manager (Enhanced Workstation) under DOS
	  WFW      =  Windows for Workgroups (Full Redirector)
	  Add-On   =  Workgroup Add-On for MS-DOS (Full Redirector)
	  MSWGCN   =  Workgroup Connection (Full Redirector)
	  NT       =  Windows NT operating system
	  OS/2 LM  =  LAN Manager under OS/2
	
	             DOS LM   WFW   Add-On   MSWGCN   NT   OS/2 LM
	             ------   ---   ------   ------   --   -------
	     ACCESS     X                                     X     ACCESS
	   ACCOUNTS                                   X       X     ACCOUNTS
	      ADMIN     X                                     X     ADMIN
	      AUDIT                                           X     AUDIT
	       COMM                                           X     COMM
	   COMPUTER                                   X             COMPUTER
	     CONFIG     X      X       X       X      X       X     CONFIG
	    CONSOLE                                           X     CONSOLE
	   CONTINUE     X                             X       X     CONTINUE
	       COPY     X                                     X     COPY
	     DEVICE                                           X     DEVICE
	       DIAG            X       X                            DIAG
	      ERROR                                           X     ERROR
	       FILE                    X              X       X     FILE
	    FORWARD                                           X     FORWARD
	      GROUP                                   X       X     GROUP
	       HELP     X      X       X       X      X       X     HELP
	    HELPMSG     X                             X       X     HELPMSG
	       INIT            X       X                            INIT
	
	 LOCALGROUP                                   X             LOCALGROUP
	
	        LOG     X                                     X     LOG
	
	LOGFILE NUL:     X                                     X     LOGFILE NUL:
	
	     LOGOFF     X      X       X       X              X     LOGOFF
	      LOGON     X      X       X       X              X     LOGON
	       MOVE     X                                     X     MOVE
	       NAME     X                             X       X     NAME
	
	NET (shell)     X      X       X       X              X     NET (shell)
	
	   PASSWORD     X      X       X       X              X     PASSWORD
	      PAUSE     X                             X       X     PAUSE
	      PRINT     X      X       X       X      X       X     PRINT
	        RUN                                           X     RUN
	       SEND     X                             X       X     SEND
	
	  SEPARATOR                                           X     SEPARATOR
	
	    SESSION                    X              X       X     SESSION
	      SHARE                    X              X       X     SHARE
	      START     X      X       X       X      X       X     START
	
	 STATISTICS                                   X       X     STATISTICS
	
	     STATUS                                           X     STATUS
	       STOP     X      X       X       X      X       X     STOP
	       TIME     X      X       X       X      X       X     TIME
	        USE     X      X       X       X      X       X     USE
	       USER                                   X       X     USER
	        VER     X      X       X       X              X     VER
	       VIEW     X      X       X       X      X       X     VIEW
	        WHO     X                                     X     WHO
	             ------   ---   ------   ------   --   -------
	             DOS LM   WFW   Add-On   MSWGCN   NT   OS/2 LM
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbLanManSearch kbWFWSearch kbWFW311 kbLanMan220
	Version           : :2.2,3.1,3.11
	
	=============================================================================
	

{% endraw %}
