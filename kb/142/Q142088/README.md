---
layout: page
title: "Q142088: WD97: Merge to Fax Not Available"
permalink: kb/142/Q142088/
---

## Q142088: WD97: Merge to Fax Not Available

	Article: Q142088
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Electronic Fax is not available as a merge option.
	
	CAUSE
	=====
	
	This problem can occur because of either of the following reasons:
	
	- The fax software is not set up properly.
	
	  -or-
	
	- The fax software is not MAPI compliant.
	
	RESOLUTION
	==========
	
	Method 1: Add entry to Msmail.ini
	---------------------------------
	
	If your fax software is MAPI compliant, and you suspect the fax software is not
	set up properly, use a text editor such as Notepad to modify the [EFAX
	Transport] section of the Msmail.ini file to include the following statement:
	
	  LocalFax=1
	
	If LocalFax is not set to 1, Word will not present Fax as a merge destination.
	
	Method 2: Contact your fax vendor
	---------------------------------
	
	If your fax software is not MAPI compliant, contact your electronic fax vendor.
	
	MORE INFORMATION
	================
	
	For information on electronic mail support in Microsoft Word, please see the
	following article in the Microsoft Knowledge Base.
	
	  Q109833 How to Switch from MAPI to VIM Electronic Mail Support
	
	Additional query words: winword 8.0 word8 word97 fax efax electronic mail merge print merging faxing mailmerge present option
	
	======================================================================
	Keywords          : kbualink97 kbusage word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
