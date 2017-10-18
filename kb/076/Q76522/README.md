---
layout: page
title: "Q76522: PC Adm: How to Tell Who Owns a Group or Shared Folder"
permalink: kb/076/Q76522/
---

## Q76522: PC Adm: How to Tell Who Owns a Group or Shared Folder

	Article: Q76522
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Microsoft Mail for PC Networks Administrator program (ADMIN.EXE)
	to determine who owns a shared folder or a group folder.
	
	To generate a report file, use the Local-Admin, Folders, Print, File command and
	enter a text filename. The resulting text file is a log of mail system public
	folders showing the folder name, folder type (shared or group), the privileges,
	and the owner name.
	
	The following is a sample report created from the Administrator program:
	
	  ----------------------------------------------------------------------
	           Log of Mail System Public Folders   09-23-91 08:16
	
	  Folder Type:
	     SH = Shared         GR = Group
	
	  User Access Privileges:
	     Delete Folder   R = Read Folder     W = Write Folder
	
	  Folder Name               Type  Privileges      Owner Name    Page  1
	  ----------------------------------------------------------------------
	
	  reports                    SH      R W          Administrator
	  management                 GR      R W D        John Jones
	  sales                      GR      R W          Pat Davis
	  junestats                  SH      R W D        Sarah Mavis
	  travel                     GR      R W D        Pat Davis
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300b kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
