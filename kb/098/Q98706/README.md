---
layout: page
title: "Q98706: Login Scripts to Change a User to Home Directory"
permalink: /kb/098/Q98706/
---

## Q98706: Login Scripts to Change a User to Home Directory

	Article: Q98706
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Because the NET USE /HOME command places you at the root of your share, rather
	than the home directory in your share, you must manually change to your home
	directory. The procedure outlined below passes a variable (your logon name) to
	allow automatic changing to your home directory. It assumes that your home
	directory and login name are the same, and that your home directory is directly
	off of the root of your server share.
	
	MORE INFORMATION
	================
	
	On the Server
	-------------
	
	Because a LAN Manager login script cannot contain replaceable parameters, set up
	your login script like the file below:
	
	  NETLOGON.BAT
	  ------------
	  echo net use s: \\servername\public >c:\local.bat
	  echo net use v: \\servername\apps >>c:\local.bat
	  echo net use r: /home >>c:\local.bat
	
	Notice that the NET USE commands are redirected into a file on your local hard
	drive and called LOCAL.BAT. Also notice the first NET USE has only one redirect
	symbol(>). This is necessary to recreate the LOCAL.BAT file; all succeeding
	commands are appended to the end of the file by using the double redirect
	(>>).
	
	On Each Workstation
	-------------------
	
	Create a batch file similar to the batch file below:
	
	  LOGON.BAT
	  ---------
	  net logon %1
	  call c:\local.bat
	  cd r:\%1
	  r:
	
	Execute the LOGON.BAT file with a parameter of your username--"logon
	username"--where username becomes the %1 variable.
	
	The flow of the batch file is:
	
	1. Assume a username of maryjo
	
	2. Assume a directory named maryjo exists off of the root of your share on the
	  server.
	
	3. User maryjo enters the command "logon maryjo" (without the quotation marks).
	
	4. The LOGON.BAT file runs with "maryjo" as the %1 variable.
	
	5. You are logged on as maryjo, and the script file then executes.
	
	6. The login script redirects all commands to the C:\LOCAL.BAT file.
	
	7. The login script ends, and the LOCAL.BAT file is called.
	
	8. All commands redirected to LOCAL.BAT by means of the login script are
	  executed in the LOCAL.BAT file.
	
	9. The LOCAL.BAT file ends, and the LOGON.BAT continues to execute.
	
	10. The command "cd r:\%1" is executed, which causes the directory to be changed
	  to R:\MARYJO.
	
	11. The command "r:" is executed, and you then are in directory R:\MARYJO>.
	
	This procedure allows you to log in from any workstation on the network, run your
	login script and automatically be changed to your home directory. Because the
	login script is redirected to a local file, and the file is updated at every
	login, the administrator can easily make changes to the login scripts on the
	server and be assured the changes are run at your next login.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
