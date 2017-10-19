---
layout: page
title: "Q131098: Mac PC Mail Client Err Msg: Cannot open key file"
permalink: /kb/131/Q131098/
---

## Q131098: Mac PC Mail Client Err Msg: Cannot open key file

	Article: Q131098
	Product(s): Microsoft Windows NT
	Version(s): 3.0,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors appear when you try to start Microsoft Mail for PC
	Networks, Macintosh workstation, version 3.0 when you are connected to a
	workgroup postoffice created with Windows NT Mail (MSMAIL32.EXE).
	
	  Cannot open key file.
	
	  -and-
	
	  Unable to read inbox.
	
	Mail starts and you can open your inbox, but none of your messages appear in it.
	You can also compose a new message, but when you attempt to send it, the
	following error appears:
	
	  Unable to transmit message. Try again. If the problem persists, check if the
	  server volume is still mounted. Otherwise, contact your administrator."
	
	CAUSE
	=====
	
	You do not have the Make Changes MacFile permission set for the workgroup
	postoffice Macintosh-accessible volume.
	
	RESOLUTION
	==========
	
	Use the File Manager MacFile menu on the Windows NT server to give all Macintosh
	Mail users accessing the postoffice See Files, See Folders, and Make Changes
	permissions to the workgroup postoffice root directory (WGPO by default) and all
	of its subdirectories and files.
	
	MORE INFORMATION
	================
	
	The Macintosh client is designed to be used in conjunction with Microsoft Mail
	Server; however, you can also use Windows NT Mail to establish a postoffice that
	is usable by both PC and Macintoshes clients through Services for Macintosh
	(SFM). For information, query on the following words in the Microsoft Knowledge
	Base (including the quotation marks):
	
	  Windows NT and Mail and SFM
	
	Additional query words: 3.10 prodnt apple
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search
	Version           : :3.0,3.5,3.51
	
	=============================================================================
	
