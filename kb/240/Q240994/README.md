---
layout: page
title: "Q240994: Roaming Profile Permissions Not Inherited on Server"
permalink: /kb/240/Q240994/
---

## Q240994: Roaming Profile Permissions Not Inherited on Server

{% raw %}

	Article: Q240994
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that roaming profiles stored on the computer running Windows NT
	Server do not inherit the parent folder's permissions or the source folder's
	permissions from the local drive.
	
	CAUSE
	=====
	
	This behavior occurs because the process used in Userenv.dll to create the new
	profile folder uses the CreateSecureDirectory() API to set the following
	permissions:
	
	  Administrators = FULL
	  <%username%> = FULL
	  System = FULL
	
	When the user logs off, the CopyProfileDirectory() API is used, which does not
	assign any permissions.
	
	RESOLUTION
	==========
	
	To resolve this behavior, perform one of the following:
	
	- Create the profile folder in advance if it is necessary for the profile
	  folder to inherit the parent's permissions.
	
	-or-
	
	- Delete the profile folder on the server after the user has logged on but
	  prior to the user logging off. The process used to create the folder when the
	  user logs off (or update the profile on the server) does not set any
	  permissions, effectively inheriting the parent's permissions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
