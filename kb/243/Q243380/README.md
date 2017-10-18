---
layout: page
title: "Q243380: XADM: Using Windows 2000 Backup Utility to Perform Online Backup"
permalink: kb/243/Q243380/
---

## Q243380: XADM: Using Windows 2000 Backup Utility to Perform Online Backup

	Article: Q243380
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the steps necessary to use the Microsoft Windows 2000 Backup
	utility to perform an online backup of one or more Microsoft Exchange Server
	computers.
	
	MORE INFORMATION
	================
	
	To use the Backup Wizard to perform an online backup of your Exchange Server
	computers, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Backup. Or, simply type "ntbackup" (without the quotation
	  marks) at the command prompt.
	
	2. In the "What to Back Up" dialog box, select "Back up selected files, drives,
	  or network data", and then click Next. This initiates an online backup.
	
	3. In the "Items to Back Up" dialog box, expand the Exchange Server tree, select
	  any or all Exchange Server computers in the organization that you want to
	  back up, and then click Next.
	
	  NOTE: You are not able to select the dimmed box next to the words "Microsoft
	  Exchange." You must double-click Microsoft Exchange or click the plus sign
	  (+) to expand the Exchange Server tree. You can expand the tree down to the
	  directory or information store for any server.
	
	4. Verify that the file listed in the "Backup media or file name" box is the
	  file to which you want to back up the data, and then click Next.
	
	5. Click Finish to proceed with the backup.
	
	To back up your Exchange Server computers without using the wizard, follow these
	steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Backup. Or, simply type "ntbackup" (without the quotation
	  marks) at the command prompt.
	
	2. In the "Welcome to the Windows 2000 Backup and Recovery Tools" dialog box,
	  click the Backup tab, and then expand the Microsoft Exchange tree. Select any
	  or all Exchange Server computers in the organization that you want to back
	  up.
	
	  NOTE: You are not able to select the dimmed box next to the words "Microsoft
	  Exchange." You must double-click Microsoft Exchange or click the plus sign
	  (+) to expand the Exchange Server tree. You can expand the tree down to the
	  directory or information store for any server.
	
	3. Verify that the file in the "Backup media or file name" box is the file to
	  which you want to back up the data, and then click Start Backup.
	
	4. Verify the information in the Backup Job Information dialog box, and then
	  click Start Backup
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000AdvServSearch kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
