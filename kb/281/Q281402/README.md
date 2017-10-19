---
layout: page
title: "Q281402: IIS Problems After Applying a Security Patch"
permalink: /kb/281/Q281402/
---

## Q281402: IIS Problems After Applying a Security Patch

	Article: Q281402
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some systems encounter Internet Information Services (IIS) failures, logon
	problems, and Dr. Watson exceptions after security patches are applied.
	
	CAUSE
	=====
	
	The patch may have been installed before all components were at the required
	service pack level. All components need to be at the service pack level that is
	described in the Microsoft Knowledge Base articles that are associated with the
	service packs.
	
	NOTE: Even if you have previously applied Service Pack 5 or Service Pack 6a, it
	is possible to have some older dynamic-link libraries (DLLs) if you have
	installed other software that has replaced them.
	
	RESOLUTION
	==========
	
	If you have not yet installed the security patch, apply the service pack before
	you install the patch.
	
	If you have already installed the patch and are now experiencing IIS, File
	Transfer Protocol (FTP), or similar problems, follow these steps to resolve the
	problem:
	
	1. Type "prmcan4i -x" (without the quotation marks) at a command prompt to
	  extract the files within the hotfix executable file.
	
	2. Type "hotfix -y /m" (without the quotation marks) at a command prompt to
	  unistall the hotfix.
	
	3. Reapply the service pack and restart your computer.
	
	4. Type "prmcan4i" (without the quotation marks) at a command prompt to
	  reinstall the hotfix.
	
	5. Restart your computer.
	
	MORE INFORMATION
	================
	
	Refer to the Knowledge Base article that is associated with the security update
	for more information. To determine which Knowledge Base article is associated
	with the security update, read the security bulletin that is associated with the
	patch.
	
	For more information, see the following Microsoft Web site:
	
	  Microsoft Security Bulletin Search Page
	  http://www.microsoft.com/technet/treeview/default.asp?url=/technet/security/current.asp
	
	Additional query words: IIS FTP WATSON SECURITY PATCH HOTFIX
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
