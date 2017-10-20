---
layout: page
title: "Q134753: PC Gen: README.TXT: Mail 3.5 Diagnostics Utility"
permalink: /kb/134/Q134753/
---

## Q134753: PC Gen: README.TXT: Mail 3.5 Diagnostics Utility

{% raw %}

	Article: Q134753
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	The following is the README.TXT from the version 3.5 Microsoft Mail for PC
	Networks Mail Diagnostics disk.
	
	     
	
	  MICROSOFT MAIL POSTOFFICE DIAGNOSTICS UTILITY
	---------------------------------------------
	
	THIS UTILITY IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
	EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES
	OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
	
	WARNING: In order to avoid any risk of loss of data or data corruption,
	please make a backup copy of your Microsoft Mail postoffice. DO NOT RUN
	THIS UTILITY ON A PRODUCTION POSTOFFICE WITHOUT A BACKUP BEING AVAILABLE.
	
	Introduction
	------------
	
	The Microsoft Mail Postoffice Diagnostics utility is a Windows-based
	utility that checks Microsoft Mail databases on version 2.1, and 3.x
	postoffices. Microsoft designed this utility to enable you to better
	administer and maintain your postoffice without relying on Microsoft
	Product Support Services.
	
	WARNING: Before you use the Diagnostics utility to fix the database, make
	an ADDITIONAL backup copy of your Microsoft Mail postoffice. If an error
	occurs during a fix, you can restore the backup made immediately before you
	used the Diagnostics utility to perform the fix. In all other
	circumstances, you should restore the database from your most recent
	regularly scheduled backup.
	
	You can use the Diagnostics utility tools to diagnose and resolve potential
	corruption problems on the postoffice. The Diagnostics utility contains a
	General Postoffice Summary tool and four tools that check:
	
	* Address and group files
	
	* User mail files
	
	* Server folder files
	
	* Directory synchronization (Dir-Sync) files (version 3.x postoffices only)
	
	The utility adds to the utility log file any problems it finds in the
	database. You can also use the Diagnostics utility tools to check and fix
	the database. When you use the check and fix tools, you decide which
	problems the utility fixes.
	
	WARNING: If you use the Diagnostics utility to check and fix the database,
	no users or programs should access the postoffice while the utility is
	running. It is also best to check the database when there is little or no
	activity on the postoffice; checking the database when users are logged on
	to the postoffice can cause inaccurate error reporting.
	
	Requirements
	------------
	
	To use this utility, you must have:
	
	* Microsoft Mail postoffice version 2.1 or 3.x
	
	* Administrator access rights to the postoffice
	
	* Full network operating system access rights to the postoffice and all its subdirectories
	
	* Hardware and software required for Microsoft Windows
	
	Installing and Starting the Diagnostics Utility
	-----------------------------------------------
	
	To install the Diagnostics utility
	
	1. Start Windows.
	
	2. In the Windows Program Manager, choose Run from the File menu.
	
	3. Insert the disk into your floppy disk drive.
	
	4. In the Command Line box, type the following and press ENTER
	
	  " <drive>:setup " (without the quotation marks)
	
	  where <drive> is the floppy disk drive containing the MS Mail PO
	  Diagnostics 3.5 Setup Disk. For example, if the MS Mail PO Diagnostics 3.5
	  Setup Disk is in drive A, type the following command:
	
	  " a:setup " (without the quotation marks)
	
	To start the Diagnostics utility
	
	*  In the MS Mail PO Diag 3.5 group, double-click the
	  MS Mail PO Diagnostics 3.5 icon. The Microsoft Mail Postoffice
	  Diagnostics dialog box appears.
	
	WARNING: Do not use the Diagnostics utility to check and fix the database
	unless you have a recent backup of the postoffice. Not all problems can be
	fixed by the utility, and maintaining a good backup schedule is essential
	to restoring postoffice operation, especially in cases where the database
	is corrupt.
	
	Be aware that the size of your postoffice affects the time required to
	check and fix the database. You may notice this when running the Address
	and Group or User Mail tools--checking and fixing the database with these
	tools may require several hours to complete.
	
	Fixing Database Errors
	----------------------
	
	DO NOT use the Diagnostics utility to fix the database errors while other
	programs or users are accessing the postoffice database. This may cause
	improper fixes or corruption to the postoffice database.
	
	It is recommended that you should run Diagnostics utility to check the
	postoffice database first before fix. This will allow you to analyze the
	database problems encountered and decide which database errors that you
	should fix.
	
	Finding Information About the Diagnostics Utility
	-------------------------------------------------
	
	The documentation for the Diagnostics utility is online Help.
	
	To view the table of contents for Help, choose Contents from the Help menu.
	
	To view Help instructions, choose How To Use Help from the Help menu.
	
	Maintaining the Network Connection
	----------------------------------
	
	It is important to maintain the network connection to the postoffice when
	using the Diagnostics utility. If you are disconnected from the network
	while the Diagnostics utility is running, the tools may report missing
	files or directories.
	
	Additional Information About Error Messages
	-------------------------------------------
	
	Error 117
	---------
	
	When you fix the database, and the following error message appears
	
	  Detected an incorrect value in file <filename>. The value will be reset
	  to its default. Do you want it corrected? [117]
	
	If <filename> is      Do this
	----------------      ---------
	ACCESS.GLB            After the fix, a user may have been reset to the
	or                    default user attributes, or may have lost the
	ACCESS2.GLB           ability to create and access private, group or
	                     shared folders.
	
	                     Check the user access privileges and folder
	                     privileges for every user in your postoffice. You
	                     can print the user report (using the Administrator
	                     program Local-Admin Print commands) to check the
	                     user access and folder privileges for users in your
	                     postoffice. If you find the privileges for a user
	                     are not correct, you can then change the user access
	                     or folder privileges using the Administrator program
	                     Local-Admin Modify commands.
	
	ACCESS3.GLB           If there are any DOS Remote users who are set to
	                     CALL/REQUEST remote user type, ensure that their
	                     remote user access times are correct (using the
	                     Administrator program Remote Modify commands).
	
	                     If there are any DOS Client users, request them
	                     to check the location of their folders (using the
	                     Mail program Options Folders Private-Storage
	                     commands). The location of the folders may have
	                     been reset to the server.
	
	                     If there are any DOS Client users, request them to
	                     check their logfile paths for compose messages and
	                     read messages (using the Mail program Options
	                     Configure commands). These may have been changed.
	
	GLOBAL.GLB            Check the Mail default options for creating users
	                     in your postoffice (using the Administrator program
	                     Local-Admin Options commands). These options may
	                     have been reset to the initial defaults.
	
	MASTER.GLB            Ensure that the hop count for indirect postoffices
	                     is correct (using the Administrator program Config
	                     Hop count commands).
	
	                     If the postoffice accesses a SNADS gateway, ensure
	                     that the address mappings are correct.
	
	PROCESS.GLB           If the postoffice is configured for directory
	                     synchronization, ensure that the schedule for
	                     directory synchronization processes is correct:
	                     - schedule for Server (using the Administrator
	                       program Config Dir-Sync Server Schedule commands)
	                     - schedule for Requestor (using the Administrator
	                       program Config Dir-Sync Requestor Schedule
	                       commands)
	
	REQCONF.GLB           If the postoffice is configured as a Requestor
	                     in directory synchronization, ensure that the
	                     requestor configuration is correct:
	                     - registration (using the Administrator program
	                       Config Dir-Sync Requestor Registration commands)
	                     - address types (using the Administrator program
	                       Config Dir-Sync Requestor Types commands)
	                     - configuration (using the Administrator program
	                       Config Dir Sync Requestor Options commands)
	
	SRVCONF.GLB           If the postoffice is configured as a Server in
	                     directory synchronization, ensure that the server
	                     configuration is correct:
	                     - configuration (using the Administrator program
	                       Config Dir-Sync Server Options commands)
	                     - requestor list (using the Administrator program
	                       Config Dir-Sync Server Requestors Modify commands)
	
	Error 129
	---------
	
	The utility available from Microsoft Product Support Services is called
	FIXFLD, not FOLDFIX, as described in the online Help.
	
	Unknown or inaccessible address -- User Mail/Blank Message Creation
	-------------------------------------------------------------------
	
	The User Mail Check and Fix detects missing .MAI files if under
	"Details of Check" you selected "Mailbag Pointers." When the utility
	recreates the .MAI file, the mail is addressed with a TO and FROM of
	TESTNET/TESTPO/Admin.
	
	When the user opens this mail message, he or she is instructed to resubmit
	it. If the user replies to this message, the Mail program will issue the
	following message:
	
	  Unknown or inaccessible address:
	  TESTNET/TESTPO/Admin
	  Press any key to continue...
	
	To resolve this problem, ask the user to forward this message to the
	recipient, not create a reply. (The recipient's name can be found on the
	message header in the Inbox.)
	
	Problems with Directory Synchronization
	---------------------------------------
	
	The instructions for error 161 incorrectly states that the utility will
	detect a missing MSTTRANS.GLB file. The Directory Synchronization Check
	does not detect a missing MSTTRANS.GLB file on a directory server
	postoffice. If Directory Synchronization does not work, check to see that
	the MSTTRANS.GLB file is in the GLB subdirectory. If the MSTTRANS.GLB file
	is missing, ignore the instructions for resynchronizing and call Product
	Support Services.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}
