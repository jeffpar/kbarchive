---
layout: page
title: "Q232333: Error Message When Using a Colon in File or Folder Name in SFU"
permalink: /kb/232/Q232333/
---

## Q232333: Error Message When Using a Colon in File or Folder Name in SFU

	Article: Q232333
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Services for UNIX Client for NFS component to create a file or
	folder name that contains a colon on an NFS file share, you may receive an error
	message. For example, if you attempt to create a folder named 7:5, you may
	receive an error message similar to the following example:
	
	  MakeDir cannot create 7:5 : Not owner.
	
	CAUSE
	=====
	
	When only one character precedes a colon in a file or folder name, Windows NT
	interprets the file or folder name as a drive letter.
	
	RESOLUTION
	==========
	
	To resolve this issue, do not use file or folder names that have only one
	character preceding a colon.
	
	Additional query words: sfu
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTServicesUnix
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
