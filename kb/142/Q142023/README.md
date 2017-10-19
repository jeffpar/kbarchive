---
layout: page
title: "Q142023: GSNW &quot;User Already Logged On&quot; to MS-Mail Post Office"
permalink: /kb/142/Q142023/
---

## Q142023: GSNW &quot;User Already Logged On&quot; to MS-Mail Post Office

	Article: Q142023
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients connecting to a Windows NT Gateway Services for NetWare share where the
	MS-MAIL Post Office is located on the NetWare server will receive the message
	
	  user already logged on
	
	if the user's connection to the Post Office is abruptly lost and they try to
	reconnect to the Post Office.
	
	CAUSE
	=====
	
	When the user's connection is abruptly lost, the user's .mmf (mail) file is left
	open on the NetWare server. When the user tries to connect again, MS- MAIL will
	see that the file is open and assume the user is already logged on.
	
	RESOLUTION
	==========
	
	Use the Listuser.exe utility to determine the eight digit user ID numbers used
	by MS-Mail to identify each user. Close the user's open .mmf file on the NetWare
	server.
	
	
	MORE INFORMATION
	================
	
	The LISTUSER utility displays a list of all users on a given postoffice,
	including their associated eight-digit user ID numbers (these numbers are used
	by the MS-Mail system to identify each individual user). LISTUSER will work with
	version 2.1 and later postoffices. LISTUSER also shows the size of the .mmf
	files on the server, and can search for a specific name on the postoffice.
	
	Use this program whenever you need to know the ID number associated with any of
	the users.
	
	Syntax:
	
	listuser admin -ppassword [-ddrive] [-f] [-x] [-nname] [-s] [-?]
	
	Where:
	
	drive   Is the drive where the Mail database is located (the default is m).
	-f      Shows the user's full name in addition to the alias [optional].
	-x      Shows the delete status of the users and any deleted users
	       [optional].
	-nname  Displays only those names that match the name parameter. This
	       option by itself will search the alias and the hex ID. If the f
	       option is specified, the full name field is searched.
	-s      Shows the size of any .MMF files that are on the server.
	-?      Shows the usage screen.
	
	Alternatives
	------------
	
	You can also determine a user's ID number by performing the following steps:
	
	1. Run Mail and log on as the user.
	
	2. Select Options, select Folders, and then select Private Storage.
	
	3. Select Local-Storage.
	
	4. Type c:\ (or whichever local drive is available).
	
	5. Quit Mail.
	
	6. Type dir c:\*.idx.
	
	  The filename you see is that user's ID number.
	
	7. To return the folders back to the server, re-run Mail, select Options, select
	  Folders, select Private Storage, and then select Server.
	
	For more information about the Listuser.exe utility, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q99419
	  TITLE : PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: msmail
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
