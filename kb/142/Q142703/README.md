---
layout: page
title: "Q142703: Setting MS-DOS Client 3.0 to Automatically Log On to Domain"
permalink: kb/142/Q142703/
---

## Q142703: Setting MS-DOS Client 3.0 to Automatically Log On to Domain

	Article: Q142703
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.0,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In certain situations it may be necessary for a computer running MS-DOS
	Networking Client 3.0 that is connecting to a Windows NT Server Domain to be
	able to provide all user identification and password without the user being
	present to enter this information at the system. This can be accomplished by
	using a command line utility, several switches and a text file passed to the
	utility.
	
	MORE INFORMATION
	================
	
	The command line utility in the MS-DOS Networking Client 3.0 is the NET LOGON
	command. In certain situations where power to an MS-DOS client is terminated
	ungracefully, it may be desirable to configure the MS-DOS client to
	automatically reconnect to the Windows NT domain with no user interaction or
	where a user may be unavailable to interact with the system.
	
	WARNING: The following set of procedures allows the MS-DOS client to basically
	bypass normal Windows NT Domain USERID/PASSWORD security. User IDs and passwords
	for this client are maintained in plain-text format and are accessible to anyone
	who has direct access to the MS-DOS client. Therefore, it may be necessary,
	depending upon your situation, to restrict this particular user's access to the
	domain and its resources by implementing strict share level controls, group
	controls, and/or limit this user's logon to the Medium Access Control (MAC)
	address defined on the MS- DOS client's network interface board.
	
	Configuring an MS-DOS Networking Client to Log On to Domain Automatically
	-------------------------------------------------------------------------
	
	1. On a Windows NT Domain Controller Server in User Manager create a user
	  account to be used by the MS-DOS client. Provide password, group membership,
	  home directory, logon times, logon script, logon location and other account
	  information as deemed necessary.
	
	2. Setup your MS-DOS 3.0 Networking Client system to automatically logon to your
	  domain. This is done, if you used defaults values, by running SETUP.EXE from
	  the C:\NET subdirectory on your client's hard drive. This setup program can
	  be set to automatically run the network client at startup. It does this by
	  adding NET commands to the AUTOEXEC.BAT file or by allowing you to use the
	  NET commands in another batch file that can be called at startup (or when
	  executed by a user). We will be editing this batch file in the next step.
	
	3. At the MS-DOS client, run your text editor and remark out (REM) the NET START
	  command.
	
	  For example, this NETSTART.BAT is the batch file used on a client with the
	  TCP/IP protocol:
	
	     C:\NET\net initialize
	     C:\NET\netbind.com
	     C:\NET\umb.com
	     C:\NET\tcptsr.exe
	     C:\NET\tinyrfc.exe
	     C:\NET\nmtsr.exe
	     C:\NET\emsbfr.exe
	     rem C:\NET\net start
	
	  This keeps the network redirector from starting and allows us to start it with
	  the options that are entered in the next line you see here:
	
	  C:\NET\net logon {userid} {localpassword} /domain:{ntdomainname} /yes
	        /savepw:no < C:\NET\password.txt
	
	  NOTE: Make sure that you do NOT enter a hard return at the end of this line.
	  Let the line wrap as you type it and then finish it with a hard return. The
	  finished batch file looks like this:
	
	     C:\NET\net initialize
	     C:\NET\netbind.com
	     C:\NET\umb.com
	     C:\NET\tcptsr.exe
	     C:\NET\tinyrfc.exe
	     C:\NET\nmtsr.exe
	     C:\NET\emsbfr.exe
	     rem C:\NET\net start
	  C:\NET\net logon {userid} {localpassword} /domain:{ntdomainname} /yes
	     /savepw:no < C:\NET\password.txt
	
	4. Save your batch file and create a new text file with the user account's
	  password on the first line (the password is case sensitive) followed by a
	  hard return. Save the file in the C:\NET subdirectory with the name
	  PASSWORD.TXT.
	
	5. Try running the batch file. If it does not work make sure that the the user
	  and domain information are correct, then check to make sure that the MS-DOS
	  client is initializing the network board and loading the protocols properly.
	
	Additional query words: prodnt 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : winnt:3.0,3.5,3.51
	
	=============================================================================
	
