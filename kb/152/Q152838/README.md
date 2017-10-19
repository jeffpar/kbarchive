---
layout: page
title: "Q152838: Mail Could Not Connect To Your Mail Server"
permalink: /kb/152/Q152838/
---

## Q152838: Mail Could Not Connect To Your Mail Server

	Article: Q152838
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the MS MAIL 32 SPOOLER, the following error message
	appears:
	
	  Mail could not connect to your Mail server. The configuration for the Mail
	  server path is missing or invalid.
	
	CAUSE
	=====
	
	This error is caused when attempting to start the MS MAIL 32 SPOOLER before
	Microsoft Mail is completely set up and configured. If the MAIL icon has been
	changed to start Mailsp32.exe instead of Msmail32.exe, and Mail has not been
	configured on this computer, the error will occur. In addition, the error occurs
	if the MS MAIL 32 SPOOLER is invoked from the command line.
	
	RESOLUTION
	==========
	
	Configure Microsoft Mail on the local computer before attempting to start the MS
	MAIL 32 SPOOLER.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q101899Re-creating the Windows NT Mail Postoffice
	
	Additional query words: prodnt msmail
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
