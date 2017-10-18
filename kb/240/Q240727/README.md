---
layout: page
title: "Q240727: How to Use the FTP Utility in a Typical Session"
permalink: kb/240/Q240727/
---

## Q240727: How to Use the FTP Utility in a Typical Session

	Article: Q240727
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This article explains how to use the FTP utility, which is included with Windows
	NT 4.0, in a typical FTP session. This article covers the following topics:
	
	- Opening an FTP site
	
	- Browsing the list of files and folders
	
	- Changing folders
	
	- Copying a file from the FTP site to your local computer
	
	- Copying a file from your local computer to the FTP site
	
	- Ending an FTP session
	
	MORE INFORMATION
	================
	
	NOTES:
	
	- The FTP utility is run from the command prompt.
	- After each description of how to perform a step in the typical FTP session is
	  sample screen output from that part of the session.
	- All FTP commands are case sensitive.
	
	Opening an FTP Site
	-------------------
	
	To open an FTP site, perform the following:
	
	1. At the command prompt, type the following:
	
	  ftp ServerName
	
	  Note that the prompt changes to ftp>.
	
	2. Type "anonymous" (without the quotation marks) when prompted for the user.
	
	3. Type any password.
	
	Note: The "anonymous" user name is typically used to log on to FTP sites,
	particularly those that are not set up for users to copy files to. Usually, any
	text can be supplied for the password, including no text (just press the ENTER
	key when prompted for the password).
	
	  C:\>ftp <ServerName>
	  Connected to <ServerName>.
	  220 <ServerName> Microsoft FTP Service (Version 4.0).
	  User (<ServerName>:(none)): anonymous
	  331 Anonymous access allowed, send identity (e-mail name) as password.
	  Password:
	  230 Anonymous user logged in.
	  ftp>
	
	Browsing the List of Files and Folders
	--------------------------------------
	
	To view the list of files and folders, type "dir" (without the quotation marks)
	at the ftp prompt.
	
	  ftp> dir
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for /bin/ls.
	  08-29-99  08:11PM                   35 File1.txt
	  08-29-99  08:11PM       <DIR>          Folder1
	  226 Transfer complete.
	  98 bytes received in 0.00 seconds (98000.00 Kbytes/sec)
	  ftp>
	
	Changing Folders
	----------------
	
	To change to a different folder (also known as the working directory), use the
	"cd" (without the quotation marks) command.
	
	Note: To change to the root folder, type either "cd /" (without the quotation
	marks) or "cd \" (without the quotation marks). To change to the parent folder,
	use two periods ("cd .." (without the quotation marks)).
	
	  ftp> cd folder1
	  250 CWD command successful.
	  ftp>
	
	Copying a File From the FTP Site to Your Local Computer
	-------------------------------------------------------
	
	To copy a file from the FTP site to your local computer, use the "get" (without
	the quotation marks) command.
	
	  ftp> get file1.txt
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for file1.txt(35 bytes).
	  226 Transfer complete.
	  35 bytes received in 0.16 seconds (0.22 Kbytes/sec)
	  ftp>
	
	Copying a File from your Local Computer to the FTP Site
	-------------------------------------------------------
	
	To copy a file from your local computer to the FTP site, use the "put" (without
	the quotation marks) command.
	
	Note: Most sites only allow users to do this if they have logged on using a
	specific, preassigned user name, NOT the "anonymous" user.
	
	  ftp> put myfile.txt
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for MyFile.txt.
	  226 Transfer complete.
	  36 bytes sent in 0.00 seconds (36000.00 Kbytes/sec)
	  ftp>
	
	Ending an FTP session
	---------------------
	
	To end the FTP session, use the "bye" (without the quotation marks) command.
	
	  ftp> bye
	  221
	
	  C:\>
	
	Additional References
	---------------------
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q229005 How to Connect to a Web or FTP Site Using Non-Default Port
	
	For a full list of the commands and parameters that can be used with the FTP
	utility, perform the following:
	
	1. From the Start menu, click Help.
	
	2. Click the Index tab, and then type "ftp utility" (without the quotation
	  marks).
	
	3. In the list box, double-click the ftp utility entry.
	
	4. For a list of all FTP commands, double-click the (untitled #0) entry. For a
	  list of parameters available when starting the ftp utility, double-click the
	  (untitled #0) entry.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: kbhowto howto overview iis file transfer protocol remote host machine pc akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
