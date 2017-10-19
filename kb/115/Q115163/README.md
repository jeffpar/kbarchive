---
layout: page
title: "Q115163: PC Gen: Automating Multiple Mail Logins on NetWare 3.11"
permalink: /kb/115/Q115163/
---

## Q115163: PC Gen: Automating Multiple Mail Logins on NetWare 3.11

	Article: Q115163
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	You can set up Microsoft Mail for PC Networks on a Novell 3.11 file server
	in such a way that any valid Mail user can automatically log in to his or
	her own Mail and Schedule+ accounts from any configured PC workstation,
	based on his or her Novell login.
	
	
	BASIC REQUIREMENTS
	------------------
	
	- Each user's Novell login name must match his or her mailbox name.
	
	- Each user's Mail message file (MMF) must be stored on the file server.
	
	- The ServerPath= line in the [Microsoft Mail] section of the MSMAIL.INI file
	  must be the same on each workstation. It must be based on consistent default
	  drive mappings to each user's Mail database, regardless of the Novell home
	  server or which postoffice a user resides on.
	
	- Each user must have his or her own home directory on the server, with a
	  consistent drive and path that is identical for every user.
	
	  NOTE: This requirement is only needed for Schedule+.
	
	SETUP
	-----
	
	File Server(s)
	--------------
	
	
	Add a routine similar to the following to your system login script so that
	an MS-DOS environmental variable containing the user's Novell Login
	Name/Microsoft Mail Mailbox Name gets set when each user first logs in to
	his or her home server. This variable will be used to pass the user's name
	to MAIL.EXE, MSMAIL.EXE, or SCHDPLUS.EXE when you start the executable
	file.
	
	NOTE: You will need to adjust the following routine to match your own
	system.
	
	
	      IF MEMBER OF "pcmail" THEN
	         DOS SET Mailbox="%LOGIN_NAME"
	         MAP ROOT R:=Server15/SYS:apps\mail
	      END
	
	Workstations
	------------
	
	1. Each workstation must have sufficient MS-DOS environment space available to
	  store up to a 10-digit variable and its name. Modify each workstation's
	  CONFIG.SYS file if you need to do so to increase the command processor's
	  environmental block. In most cases, 1024 (as shown below) is adequate;
	  however, specific values will depend on your own configuration.
	
	  SHELL=C:\DOS\COMMAND.COM C:\DOS\ /e:1024 /p
	
	2. Log a workstation back into the Novell server and verify that step 1 is
	  working properly. After you log in, type SET from an MS-DOS prompt. If your
	  Novell login name was JohnDoe, you should see the following line:
	
	  MAILBOX=JohnDoe
	
	MS-DOS Clients
	--------------
	
	
	Create an MSMAIL.BAT file similar to the following, but adjust it for your
	own configuration.
	
	     @Echo Off
	     cd r:\data
	     r:\exe\mail %mailbox% -dr
	
	Windows Clients
	---------------
	
	
	Modify the Command Line field in the Microsoft Mail icon's Program Item
	Properties box (by selecting the icon and then pressing ALT+ENTER) to be
	similar to the following example:
	
	  c:\msmail\msmail.exe %mailbox%
	
	Schedule+ Clients
	-----------------
	
	1. Modify the Command Line field in the Microsoft Schedule+ icon's Program Item
	  Properties box to be similar to the following example:
	
	  c:\schdplus\schdplus.exe %mailbox%
	
	2. Assuming all users' home directories are at the root of drive H, move and
	  rename all users' local calendar files (*.CAL) to the H:\LOCAL.CAL
	  subdirectory.
	
	3. Modify the LocalPath= line in the [Microsoft Schedule+] section of each
	  workstation's SCHDPLUS.INI file to read as follows:
	
	  LocalPath= h:\local.cal
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
