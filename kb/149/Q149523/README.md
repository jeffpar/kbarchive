---
layout: page
title: "Q149523: Server Operators Cannot View Administrative Shares in NT"
permalink: kb/149/Q149523/
---

## Q149523: Server Operators Cannot View Administrative Shares in NT

	Article: Q149523
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
	
	In Windows NT versions 3.5 and 3.51, if you try to connect to an administrative
	share as a regular domain user without any special privileges, you will receive
	the following error:
	
	  Access is Denied.
	
	In Windows NT version 3.5, if you try to connect to an administrative share as a
	member of the Server Operators group, you will be connected with full control.
	
	In Windows NT version 3.51, if you try to connect to an administrative share as a
	member of the Server Operators group, you will be able to connect to the share
	and a drive will be mapped to the share in file manager but you will not have
	access to the share. The left side of the screen in File Manager will show the
	path to the administrative share and the right side which, usually displays the
	available files will show:
	
	  You do not have permission to access this directory.
	
	CAUSE
	=====
	
	On page 471 of the System Guide, C$ and ADMIN$ shares are discussed. The guide
	says that only members of the Administrators, Backup Operators, and Server
	Operators groups can connect to these shares.
	
	The documentation is correct in saying that these users can connect to these
	shares but fails to elaborate that the Server Operators members can not access
	the files in these shares. The access to the administrative shares has been
	minimized by default to make the network more secure. Backup Operators retain
	permission to access files in these administrative shares, based on the
	assumption that backing up the data in these administrative shares is a critical
	function.
	
	WORKAROUND
	==========
	
	To work around this problem, complete the following steps:
	
	1. Log on as an administrator.
	
	2. Go into File Manager and highlight the share you want to give Server
	  Operators permissions to.
	
	3. Choose 'Disk' from the toolbar menu and select 'Share As...'
	
	4. In the Shared Directory dialogue box, select the 'New Share' button. Enter
	  the share name, path, and comment.
	
	5. Select the 'Permissions...' button. Add the Server Operators group and grant
	  its members full control. Remove the group Everyone.
	
	The Server Operators will now be able to access this share with the share name
	you specified.
	
	Additional query words: prodnt 3.5
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
