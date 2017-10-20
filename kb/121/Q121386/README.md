---
layout: page
title: "Q121386: Using Systems Management Server in a Split-Domain Model"
permalink: /kb/121/Q121386/
---

## Q121386: Using Systems Management Server in a Split-Domain Model

{% raw %}

	Article: Q121386
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbPCM kbPGC smsinv smspcm smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The use of Systems Management Server in certain domain structures can sometimes
	lead to confusion about the capabilities and limitations of Systems Management
	Server; specifically when Systems Management Server is used in a wide area
	network (WAN) consisting of a single domain separated by routers. In this
	situation, special consideration must be given to site type and placement and
	logon script configuration, as well as package distribution technique.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	Consider a common retail company utilizing a primary domain controller (PDC) at
	the corporate office, and a backup domain controller (BDC) at each outlet (to
	perform logon validation locally) linked to each other by 19.2 Kb routed links.
	
	1. In this situation, Systems Management Server should be implemented as
	  follows:
	
	  a. Install a central Systems Management Server site at the corporate office.
	
	  b. If the remote offices have a large number of clients, install a primary
	     site there; if not, a secondary site should be installed.
	
	  c. Establish the needed parent-child assignments and addresses.
	
	  d. If logon scripts are to be used, ensure replication is set up at the PDC
	     and all BDCs.
	
	  e. Ensure that NONE of the Systems Management Server sites in the domain
	     selected Automatically Detecting Logon Servers, and that NONE of the sites
	     in the domain are using the Automatically Configure Logon Script options.
	
	2. Now, each client at outlet xyz will have a site-domain assignment such as
	  "xyz:corpdom" for example, and clients at the corporate office will have an
	  assignment such as "abc:corpdom" (these assignments will be used again
	  later). Systems Management Server makes the "ownership" distinction based on
	  the combination of the 3-letter site code combined with the domain name.
	
	3. If logon scripts are going to be used, manually assign a script to each user
	  account (through multi-select in User Manager) and ensure the needed script
	  files are copied into the REPL$\SCRIPTS directory on the export server
	  (usually the PDC). Here is a list of the files needed in REPL$\SCRIPTS
	  directory or wherever you run your logon scripts from:
	
	     CHOICE.COM     : When a slow network connection is detected, choice
	                      prompts the user.
	     CLRLEVEL.COM   : Needed to reset the DOS errorlevel flags.
	     DOSVER.COM     : Temporary only to detect Windows 95 clients.
	     NETSPEED.COM   : Used to detect if a slow network link is being used
	                      for the logon.
	     NETSPEED.DAT   : Companion to NETSPEED.COM.
	     SETLS16.EXE    : Finds logon servers and manages client mapping and
	                      connections (MS-DOS clients).
	     SETLS32A.EXE   : Windows NT Alpha clients.
	     SETLS32I.EXE   : Windows NT Intel clients.
	     SETLS32M.EXE   : Windows NT MIPS clients.
	     SETLSOS2.EXE   : OS/2 clients.
	     SMSLS.BAT      : Main SMS script file for Windows NT and MS-DOS.
	     SMSLS.CMD      : For OS/2 clients.
	     SMSLS.INI      : Mapping file for resource domains (optional).
	
	4. If a BDC goes down, a client logon request will most likely be serviced by
	  the PDC and the logon script will execute through the 19.2K link. The SMSLS
	  script will detect that this client belongs to site xyz and that the current
	  site is abc. When these site codes differ, the script will gracefully exit
	  two times and on the third time, the client will be MOVED to the abc site.
	  This is not a desirable situation, so it is recommended that you increase the
	  following registry item to a higher number depending on the link speed and
	  BDC availability:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ 
	          SMS\Components\SMS_Maintenance_Manager
	
	  REG_DWORD: Inventory False Logon Limit (default=3)
	
	  WARNING: Using the Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of the
	  Registry Editor can be solved. Use this tool at your own risk.
	
	5. The other area to discuss is that when sending packages from the central site
	  to the child sites, each child site must be separately targeted (a different
	  job for each destination site). This is needed so that the client station's
	  PGC and PCM will not see another site's distribution servers in the list of
	  servers hosting the package (this list is generated at job activation time).
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbPCM kbPGC smsinv smspcm smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
