---
layout: page
title: "Q105194: How to Enable Automatic Logon to a RAS Server"
permalink: /kb/105/Q105194/
---

## Q105194: How to Enable Automatic Logon to a RAS Server

{% raw %}

	Article: Q105194
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.51,4.0; :3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	The Windows NT Remote Access Service (RAS) features a graphical user
	interface Phone Book program for entering and maintaining the names
	and telephone numbers of remote networks. Clients can connect to and
	disconnect from these networks through the Phone Book manually. It is
	possible to have RAS automatically dial a number for you when you log
	on by using RASDIAL.EXE, a command line interface to RAS in Windows
	NT.
	
	Use the following procedure to automatically connect to a RAS server
	for a desired User when you start Windows NT:
	
	1. Log on to Windows NT as the user who should automatically connect.
	
	2. Make note of an existing RAS Access entry name or create a new one called
	  MYSERVER. Verify that all the necessary information is in the entry.
	
	  NOTE: This procedure assumes that the user is already familiar with setting up
	  entries in Remote Access address book.
	
	3. In Program Manager, open the Startup group and choose New from the File menu.
	
	4. From the New Program Object box, select Program Item and choose OK.
	
	5. Enter the following on the command line:
	
	  RASDIAL.EXE MYSERVER.
	
	6. Choose OK.
	
	The next time this user logs on to the workstation, RASDIAL will
	connect to MYSERVER.
	
	RASDIAL is one of the programs installed when installing RAS in
	Windows NT. RASDIAL is a command line program which can be used at
	the Command Prompt (CMD.EXE) or in a batch file. To learn more about
	the available parameters for RASDIAL, type RASDIAL /? at the Command
	Prompt for online help.
	
	Additional query words: prodnt nthowto at automate
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1,3.51,4.0; :3.1
	
	=============================================================================
	

{% endraw %}
