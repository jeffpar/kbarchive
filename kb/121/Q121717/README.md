---
layout: page
title: "Q121717: PC DB: Err Msg: The Folder Conversion Process Was Halted..."
permalink: /kb/121/Q121717/
---

## Q121717: PC DB: Err Msg: The Folder Conversion Process Was Halted...

{% raw %}

	Article: Q121717
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the CONVERT.EXE program as described on page 17 of the
	version 3.2 Microsoft Mail for PC Networks "User's Guide" for Windows and
	Presentation Manager, you may receive the following error message:
	
	  The folder conversion process was halted by an error while copying.
	  No folders or messages were converted.
	
	CAUSE
	=====
	
	This error occurs when some or all of your folders are stored on the local hard
	disk drive rather than on the postoffice. The Convert program is designed to
	look for a user's folders on the postoffice and will not check any local drives
	or directories.
	
	RESOLUTION
	==========
	
	The Mail administrator can move the folders back onto the postoffice by logging
	in to Mail with the MS-DOS client, selecting Options, Folders, Private-Storage,
	and then selecting S for Server.
	
	You can then run Convert again; it will perform the conversion successfully.
	
	MORE INFORMATION
	================
	
	Folder corruption can cause a similar problem. In this case, try archiving the
	folders and then retrieving them. If any of the folders cannot be archived, the
	Mail administrator may need to use the FIXFLD.EXE utility to try to repair
	them.
	
	For more information about the FIXFLD.EXE utility and how to obtain it, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
