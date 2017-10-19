---
layout: page
title: "Q271603: XADM: How to Use the Inbox Rules Manager Program"
permalink: /kb/271/Q271603/
---

## Q271603: XADM: How to Use the Inbox Rules Manager Program

	Article: Q271603
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Microsoft Exchange Inbox Rules Manager
	Program (Rulesmgr.exe). Please contact Microsoft Product Support Services (PSS)
	to open a support incident and speak with a Support Professional to obtain this
	tool.
	
	
	MORE INFORMATION
	================
	
	If you are an administrator, you can use Inbox Rules Manager to scan the Inbox
	Rules for mailboxes on one or more Exchange Server computers in a site. You can
	configure Inbox Rules Manager to include or exclude certain mailboxes or
	distribution lists (DLs) from the scan.
	
	Inbox Rules Manager can report on the following types of rules:
	
	- Rules that forward messages to custom recipients.
	
	- Rules that forward messages to DLs.
	
	- Rules that forward messages to foreign addresses of one or more types.
	
	- Rules that reply to messages.
	
	This functionality enables you to determine which users have rules that forward
	messages out of the company. Therefore, you can use this tool to keep track of
	which users are forwarding mail out of an organization, rather than block all
	forwarded messages at the Internet Mail Service.
	
	If you are troubleshooting a rapidly growing information store and you suspect
	that rules are causing messages to bounce, Inbox Rules Manager can quickly
	determine which mailboxes have rules that forward or reply to messages.
	
	To use Inbox Rules Manager:
	
	1. Install the Microsoft Exchange Server Administrator program on the computer
	  that you want to run Inbox Rules Manager on.
	
	2. Use the Exchange Service Account to log on to Microsoft Windows NT.
	
	3. Copy Rulesmgr.exe and Rulecls.dll to a folder on the local computer.
	
	4. Start Windows NT Explorer or File Manager, locate Rulesmgr.exe, and then
	  double-click the file.
	
	5. Click Next, and then follow the directions.
	
	The program writes to the output file that you specify. By default, the output
	file is C:\Rulesmgr.txt.
	
	Command-Line Options
	--------------------
	
	Inbox Rules Manager supports the following command line options:
	
	- -logmin: Use this option to set the logging level to Minimum.
	
	- -logmed: Use this option to set the logging level to Medium.
	
	- -logmax: Use this option to set the logging level to Maximum.
	
	Requirements
	------------
	
	Inbox Rules Manager requires that the Administrator program is installed on the
	computer on which it is run.
	
	In addition, the following files must be present:
	
	- Advapi32.dll
	
	- Comctl32.dll
	
	- Comdlg32.dll
	
	- Dapi.dll
	
	- Exchmem.dll
	
	- Gdi32.dll
	
	- Kernel32.dll
	
	- Libxds.dll
	
	- LZ32.dll
	
	- Mapr32.dll
	
	- Mfc42.dLL
	
	- Mpr.dll
	
	- Msvcrt.dll
	
	- Msvcirt.dll
	
	- Msvcirt40.dll
	
	- Netapi32.dll
	
	- Netrap.dll
	
	- Ntdll.dll
	
	- Ole32.dll
	
	- Rpcns4.dll
	
	- Rpcrt4.dll
	
	- Rulecls.dll
	
	- Samlib.dll
	
	- Shell32.dll
	
	- User32.dll
	
	- Version.dll
	
	Troubleshooting
	---------------
	
	Inbox Rules Manager generates a log that contains all the errors that the program
	encounters. You can use the following command-line options to increase the
	amount of information logged:
	
	- -logmin
	
	- -logmed
	
	- -logmax
	
	By default, the log file is C:\Rulesmgr.log.
	
	Additional query words: rulesmgr exe xadm
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
