---
layout: page
title: "Q322898: Advanced Local Maps Use a Different Name Format in SFU 3.0"
permalink: /kb/322/Q322898/
---

## Q322898: Advanced Local Maps Use a Different Name Format in SFU 3.0

	Article: Q322898
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Services For UNIX (SFU) 2.0 mapping server stores advanced maps that
	have been created by using local accounts with the computer name as part of the
	map:
	
	  <computer name>\<local user account>
	
	In SFU 3.0, these maps are stored with the universal $LocalHost machine name:
	
	  $LOCALHOST\<local user account>
	
	When you move SFU 2.0 maps to an SFU 3.0 mapping server, you must delete and then
	re-create these maps.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Only a Few Advanced Maps
	------------------------
	
	If there are only a few advanced maps, delete them by using SFU Administrator.
	Note that the MAPADMIN command-line utility cannot delete these maps.
	
	Many Advanced Maps
	------------------
	
	If there are lots of advanced maps, edit the backup file, and make the changes
	before you restore to the new mapping server.
	
	The backup file is a simple text file in the following format:
	
	  *:\\<computer
	  name>\ntuser:1:nisdomain:nisserver:unixuser:passwd:uid:gid:
	
	Open the backup file in a text editor (such as Notepad.exe), and then replace the
	<computer name> with the $LOCALHOST value by using the Replace command on
	the Edit menu:
	
	  *:\\$LOCALHOST\ntuser:1:nisdomain:nisserver:unixuser:passwd:uid:gid:
	
	Additional query words: solarcoaster interix
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
