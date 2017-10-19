---
layout: page
title: "Q128370: PC MAPI: MAPISendDocuments Removes Spaces in Filenames"
permalink: /kb/128/Q128370/
---

## Q128370: PC MAPI: MAPISendDocuments Removes Spaces in Filenames

	Article: Q128370
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Simple Messaging Application Programming Interface (MAPI) function
	MAPISendDocuments, which is included with Microsoft Mail for PC Networks,
	handles file names with space characters incorrectly. File names with spaces are
	fairly common on advanced file systems, such as NTFS. MAPISendDocuments actually
	removes the spaces and truncates the file name.
	
	When you attempt to pass a file name with spaces in it MAPISendDocuments will
	display the following error,
	
	  The file "XXXXXXXX" could not be accessed
	
	where XXXXXXX is the file name (with spaces omitted).
	
	WORKAROUND
	==========
	
	All files passed to MAPISendDocuments should not contain space characters. If
	you do have some files with spaces, rename the file to remove the spaces.
	
	NOTE: Some development tools have functions that will convert the filename to a
	standard MS-DOS 8.3 format. In Microsoft VC++ version 2.0, the function
	GetShortPathName will convert the filename.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
