---
layout: page
title: "Q245033: Event ID 2005 Message Occurs When You Print to a Line Printer"
permalink: kb/245/Q245033/
---

## Q245033: Event ID 2005 Message Occurs When You Print to a Line Printer

	Article: Q245033
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the line printing (LPR) utility to set up a line printer, when you
	try to print a document, you may receive the following error message in
	Microsoft Event Viewer:
	
	  Event ID: 2005
	  Description: LPR print monitor failed to open a temporary file while spooling
	  output to port IP address: the system may be low on disk space or the Spool
	  directory is write-protected.
	
	CAUSE
	=====
	
	This issue can occur in any of the following scenarios:
	
	- You do not have the appropriate permissions to the spool folder that is
	  located at %SystemRoot%\System32\Spool\Printers by default.
	
	- You added a print component such as TCP/IP printing and did not reapply the
	  service pack that the operating system is currently running on. In this case,
	  the spooler files are mismatched.
	
	- The Everyone group does not have Read permissions.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. On the Printers folder, click Server Properties on the File menu, and then
	  click the Advanced tab to check the permissions on the spool folder.
	
	2. Configure default permission on the Printers folder and all folders below it.
	
	For additional information about the default NTFS spool permissions, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q148437 Default NTFS Permissions in Windows NT
	
	3. Confirm the permissions on the system root and volume root, and then make
	  sure that the Everyone group has at least Read permissions.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q152763 File Delete Child Directory Permission in NTFS
	
	4. Run the following command to confirm that the destination LPR port that is
	  created is actually a port to a valid Line Printer Daemon (LPD) server:
	
	  lpq -s <server IP address or host name> -p <print queue name>
	
	  For example, to test to see if a physical printer with the IP address of
	  192.168.1.15 and a queue name of RAW is available as an LPD, run the
	  following command line:
	
	  lpq -s 192.168.1.15 -p RAW
	
	  Depending on the printer, when you run the command, either a blank line, or
	  the following data is displayed:
	
	  Windows 2000 LPD Server
	  Printer \\192.168.1.15\RAW
	  Owner Status Jobname Job-Id Size Pages Priority
	  ---------------------------------------------------------------------------
	
	  If the results of the command describe an error, correct the error so that the
	  destination can be put back online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprint kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
