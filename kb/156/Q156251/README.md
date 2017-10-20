---
layout: page
title: "Q156251: ADT95: Cannot Configure Local Dropbox in Replication Manager"
permalink: /kb/156/Q156251/
---

## Q156251: ADT95: Cannot Configure Local Dropbox in Replication Manager

{% raw %}

	Article: Q156251
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you try to create a local shared network folder, also called dropbox
	folder, on a computer running Windows NT 4.0 or later, you may receive one of
	the following error messages:
	
	  Dropbox address '' is syntactically invalid.
	
	  -or-
	
	  Microsoft Replication Manager can't use the specified folder. Select or enter
	  a valid shared network folder.
	
	RESOLUTION
	==========
	
	Install the updates to Mswng300.dll and Msajetfs.dll. For more information about
	this update and how to obtain it, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151186 ACC95: Updated Jet DLLs Available in Download Center
	
	NOTE: Alternatively, you can create a dropbox on a network drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access Developers
	Toolkit for Windows 95. This problem no longer occurs in Microsoft Office 97
	Developer Edition Tools.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Microsoft Replication Manager, on the Tools menu, click Configure
	  Microsoft Replication Manager.
	
	2. On the first screen, select any managed folder, and then click Next.
	
	3. Click an item in the "Shared Folders on This Computer" list, and click Next.
	  Note that you receive the error message mentioned in the "Symptoms" section.
	
	Additional query words: dropbox address is syntactically invalid Microsoft replication manager can t use the specified folder
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
