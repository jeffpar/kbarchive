---
layout: page
title: "Q180331: Cannot Redirect with Long Folder Name in MS-DOS Prompt Session"
permalink: /kb/180/Q180331/
---

## Q180331: Cannot Redirect with Long Folder Name in MS-DOS Prompt Session

	Article: Q180331
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change folders to a folder with a long file name using quotation marks
	(") to specify the long file name in an MS-DOS prompt session and then attempt
	to redirect (>) a file in that folder to the printer port (LPT1), you may
	receive the following error message:
	
	  File Creation Error
	
	RESOLUTION
	==========
	
	To work around this behavior, change folders to the folder with the long file
	name by using the folder's short file name alias. For example, to change to the
	C:\My Long File Folder folder, use the following command:
	
	  cd mylong~1
	
	Then, use the redirect command. For example:
	
	  type myfile.fil > lpt1
	
	Additional query words: send copy
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
