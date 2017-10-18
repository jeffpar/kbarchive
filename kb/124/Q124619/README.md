---
layout: page
title: "Q124619: Error Changing User Password Using Postoffice Manager"
permalink: kb/124/Q124619/
---

## Q124619: Error Changing User Password Using Postoffice Manager

	Article: Q124619
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.2; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an administrator running Windows NT attempts to change a user password in a
	Microsoft Mail version 3.2 postoffice, the following error appears if the user
	is using Schedule+ and has forgotten his/her password:
	
	  That action could not be completed. Check that your postoffice has sufficient
	  free disk space and that your network connection is active.
	
	The problem does not occur if the user is not using Schedule+.
	
	
	RESOLUTION
	==========
	
	In Windows NT 3.5, upgrade to Windows NT 3.51 and apply Windows NT 3.51 Service
	Pack 4.
	
	In Windows NT 3.51, apply Windows NT 3.51 Service Pack 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	
	Additional query words: prodnt msmail32.exe mail32 have
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2; winnt:3.5,3.51
	
	=============================================================================
	
