---
layout: page
title: "Q131472: Mac PC Mail Client Err Msg: &quot;Unable to send mail to...&quot;"
permalink: kb/131/Q131472/
---

## Q131472: Mac PC Mail Client Err Msg: &quot;Unable to send mail to...&quot;

	Article: Q131472
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
	
	You get the following error when trying to send a message from the Macintosh
	client connected to a workgroup postoffice created with the Windows NT Mail:
	
	  Unable to send mail to
	  <network>/<postoffice>/<mailbox>
	
	when <network> is the mail network name, <postoffice> is the Mail
	postoffice name, and <mailbox> is the mailbox (or alias) of the user to
	whom you are sending the message.
	
	CAUSE
	=====
	
	You do not have the See Files MacFile permission set for the workgroup
	postoffice Macintosh-accessible volume.
	
	RESOLUTION
	==========
	
	Run File Manager and use the MacFile menu options to set the See Files, See
	Folders, and Make Changes permissions for the appropriate user group on the
	workgroup postoffice root directory (WGPO by default) and all of its
	subdirectories and files.
	
	MORE INFORMATION
	================
	
	The Macintosh client is designed to be used in conjunction with Microsoft Mail
	Server; however, it is also possible to use Windows NT Mail to establish a
	postoffice that is usable by both PCs and Macintoshes through Services for
	Macintosh. For details about setting this up, query on the following words in
	the Microsoft Knowledge Base:
	
	  MACINTOSH and NT and Mail and SFM
	
	Additional query words: 3.00 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search
	Version           : :3.0,3.5,3.51
	
	=============================================================================
	
