---
layout: page
title: "Q248298: PC Adm: Administrator Notice 59: Error Accessing Address File"
permalink: kb/248/Q248298/
---

## Q248298: PC Adm: Administrator Notice 59: Error Accessing Address File

	Article: Q248298
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use the Microsoft Mail (MS Mail) Administrator program
	(Admin.exe) to modify groups, the following error message is displayed:
	
	  Notice 59: error accessing address file.
	
	If you troubleshoot with the DOS mail client by selecting Compose, and then
	selecting To, the following error message is displayed:
	
	  Notice 83: Error obtaining postoffice address list. Try again.
	
	CAUSE
	=====
	
	The Admin.nme and Adminshd.nme (Postoffice Address List) file sizes in the
	postoffice Nme directory are 0 bytes.
	
	RESOLUTION
	==========
	
	To rebuild the Postoffice Address List (POL):
	
	1. Start the Gimport.exe utility (version 3.5e) by typing the following at a
	  command prompt:
	
	  gimport -r -d<post_office_drive> admin -p<password>
	
	2. Start the Acctonme.exe utility.
	
	3. Copy the new Admin.nme file to the Adminshd.nme file.
	
	4. Recreate the groups by using either the MS Mail Administrator program or the
	  Gimport utility.
	
	5. Use either the MS Mail Administrator program or the Import utility to add any
	  external users back to the POL, because they were lost in the POL rebuild.
	
	6. To update the global address list with the new POL addresses, start the
	  Rebuild utility by typing the following at a command prompt:
	
	  rebuild -f -d<post_office_drive>
	
	MORE INFORMATION
	================
	
	For additional information about the Acctonme and Gimport utilities, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q129500 PC Adm: Automating the Resetting of Group Files with GIMPORT
	
	  Q99419 PC DB: Database Maintenance Utilities [Complete]
	
	For additional information about the Rebuild utility, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	Additional query words: Admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	
