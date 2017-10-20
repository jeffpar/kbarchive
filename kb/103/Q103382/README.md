---
layout: page
title: "Q103382: PC Win: Err Msg: Notice 73: You Don't Have Sufficient Rights.."
permalink: /kb/103/Q103382/
---

## Q103382: PC Win: Err Msg: Notice 73: You Don't Have Sufficient Rights..

{% raw %}

	Article: Q103382
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a folder, the following error message may appear:
	
	  Notice 73
	  You don't have sufficient rights to access this folder
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Only the person who created the folder (the owner) can delete the folder,
	  unless he or she granted delete privileges when the folder was created. The
	  administrator can use the Administrator program (ADMIN.EXE) to find out who
	  created the folder and then ask the user to delete the folder. The
	  administrator can also remove the user's rights to create shared folders.
	
	- Verify the rights and ownership of all files, especially in the following
	  directories:
	
	  GLB
	  ATT\SUBS
	  FOLDERS\SUBS
	  MBG
	  KEY
	  MAI\SUBS
	  P1
	
	- Check for shared folders on the server, and limit the file sharing through
	  the network operating system.
	
	Additional query words: 3.00 3.0b 3.20 errmsg notice73 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
