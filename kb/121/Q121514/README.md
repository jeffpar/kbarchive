---
layout: page
title: "Q121514: Renaming File in File Manager Appears to the Delete File"
permalink: /kb/121/Q121514/
---

## Q121514: Renaming File in File Manager Appears to the Delete File

	Article: Q121514
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In File Manager, if you type a space on the To line of the Rename dialog box and
	choose OK, Windows appears to delete the file. You cannot find the file by
	searching for a space.
	
	CAUSE
	=====
	
	The file has not actually been deleted. Windows has renamed the file to
	"current" (without the quotation marks) in the directory that the file resided
	in originally.
	
	RESOLUTION
	==========
	
	To correctly rename the file:
	
	1. In File Manager, select the file named "current."
	
	2. From the File menu, choose Rename.
	
	3. Type the new filename on the To line and choose OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups versions
	3.10 and 3.11. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3.11 file name can't locate renaming winfile
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
