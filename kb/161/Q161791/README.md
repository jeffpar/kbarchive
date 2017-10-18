---
layout: page
title: "Q161791: XADM: Err Msg: The Command LODCTR DSACTRS.INI Failed"
permalink: kb/161/Q161791/
---

## Q161791: XADM: Err Msg: The Command LODCTR DSACTRS.INI Failed

	Article: Q161791
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might receive the following error while updating Microsoft Exchange Server
	version 4.0:
	
	  The command lodctr dsactrs.ini failed, returning an error code of
	  <112>.
	
	  Processing file 'server.ins', at or near line 122
	  An internal component has failed.
	  Microsoft Exchange Server Setup
	  ID no: c103264c
	
	When upgrading to Microsoft Exchange Server version 5.0, you might receive the
	following error:
	
	  The command lodctr dsactrs.ini failed, returning an error code of
	  <112>.
	
	  Processing file 'server.ins', at or near line 138
	  An internal component has failed.
	  Microsoft Exchange Server Setup
	  ID no: c103798a
	
	CAUSE
	=====
	
	The following two files in the <WINNT>\SYSTEM32 directory are either
	missing, corrupt or you do not have permission to access them:
	
	  Perfc009.dat
	  Perfh009.dat
	
	RESOLUTION
	==========
	
	If the files are there, check to make sure that you have the correct permissions
	to access and write to those files. If you have the correct permissions, then
	you may need to rename the files and expand them from the Windows NT Server
	compact disk.
	
	If the files are missing or need to be replaced, expand them off the Windows NT
	Server compact disk and into the <WINNT>\SYSTEM32 directory. The following
	command-line command demonstrates how this can be done:
	
	  expand <CD drive>:\i386\perfc009.da_ c:\winnt35\system32\perfc009.dat
	
	NOTE: Renaming, replacing, or deleting these DAT files will cause the counters
	for any installed applications to be removed, and you will have to reinstall
	other applications if you replace these two files.
	
	MORE INFORMATION
	================
	
	The Lodctr utility adds performance monitor counter information to these two DAT
	files. If the files are missing or you do not have access to them, the above
	errors will occur. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q156494 XADM: Restoring Lost Performance Counters for Exchange
	
	These errors can also be cause by a corruption in the performance counter
	descriptions in the registry. For more information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q189943 Performance Counters Become Corrupted After BackOffice 4.0 Setup
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
