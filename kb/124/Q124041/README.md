---
layout: page
title: "Q124041: PC Win: Problems with CONVERT.EXE when Upgrading Folders"
permalink: /kb/124/Q124041/
---

## Q124041: PC Win: Problems with CONVERT.EXE when Upgrading Folders

	Article: Q124041
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use CONVERT.EXE to convert your Microsoft Mail for MS-DOS client folders
	to Microsoft Mail for Windows client folders. Under certain circumstances, this
	conversion will halt before completing. The folders that are converted appear to
	be corrupt. Using the FIXFLD.EXE utility does not fix the corruption.
	
	CAUSE
	=====
	
	This problem is caused by the Owner field of certain records in the user's IDX
	file (which is a textized hexadecimal number) containing lowercase hexadecimal
	digits. CONVERT.EXE in version 3.0 and 3.0b of Microsoft Mail for Windows
	assumes the hexadecimal numbers are all uppercase.
	
	RESOLUTION
	==========
	
	The fix is to force the Owner field to uppercase before converting it to binary.
	This fix was incorporated in a new version of CONVERT.EXE released with
	Microsoft Mail for PC Networks version 3.2.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in earlier versions of CONVERT.EXE.
	Microsoft Mail version 3.2 incorporates the change.
	
	
	Additional query words: 2.10 3.00 convert folder
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
