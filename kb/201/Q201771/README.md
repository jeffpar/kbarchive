---
layout: page
title: "Q201771: How To Set Up an FTP Site So That Users Log Onto Their Folders"
permalink: /kb/201/Q201771/
---

## Q201771: How To Set Up an FTP Site So That Users Log Onto Their Folders

	Article: Q201771
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbhowto kbiis400
	Last Modified: 29-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up an FTP site so that when users log on with
	their user name and password, they are logged onto their respective subfolders
	by default. Although they can navigate to the root folder, they cannot see the
	contents of the other users folders.
	
	When anonymous users view the FTP site, they can only view the contents of the
	root folder. Although they will see the names of the users' subfolders, however,
	they cannot examine their contents.
	
	MORE INFORMATION
	================
	
	To set up the FTP site, perform the following:
	
	1. In User Manager, create a user account for each of your users.
	
	  NOTE: These users need to have the local log on permission. By default, new
	  users belong to the built-in Users group, which has local log on permission.
	
	2. Using the Windows NT Explorer, on a partition formatted with NTFS, give the
	  FTP site's root folder the following security access types:
	
	   - Administrators: Full Control
	   - Everyone: Read
	   - System: Read
	
	3. Create a subfolder for each user. (These subfolders will inherit the root
	  folder's security settings). Make the following security changes:
	
	   - Remove the Everyone group.
	   - Change the System account's folder's access to Full Control (instead of
	     Read).
	   - Add the user who will use that folder, and give that user Full Control
	     access.
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q240727 Overview of How to Use the FTP Utility in a Typical Session
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: vdir directory virtual howto kbhowto username pw pass word personal private individual akz
	
	======================================================================
	Keywords          : kbhowto kbiis400 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	Solution Type     : kbpending
	
	=============================================================================
	
