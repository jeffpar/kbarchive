---
layout: page
title: "Q153823: Windows NT Administrator Cannot Delete Win95 User.dat"
permalink: /kb/153/Q153823/
---

## Q153823: Windows NT Administrator Cannot Delete Win95 User.dat

{% raw %}

	Article: Q153823
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Windows 95 user has a profile on a Windows NT server, an associated file
	called User.dat is created on the server. Occasionally, it is necessary for an
	administrator to delete this file. However, the administrator cannot delete this
	file, even if the administrator owns the file, the file is closed, and the
	administrator has complete access to it at both the NTFS and the share levels.
	Only the user who used the profile and who therefore wrote the User.dat file to
	the Windows NT server can delete it.
	
	Here is a possible scenario:
	
	- Windows 95 is set up with User Profiles (for roving features).
	
	- John, a domain user, logs on and writes User.dat on the computer running
	  Windows NT Server.
	
	- John logs out and shuts down the computer running Windows 95.
	
	- Sheryl, the Windows NT Server administrator, tries to delete User.dat using
	  File Manager.
	
	- Access is denied. Sheryl can take ownership of the file, has full NTFS
	  access, full share access, and the file is not open.
	
	- John is given sufficient rights to delete the file. John can now log on to
	  the computer running Windows NT Server and delete User.dat.
	
	RESOLUTION
	==========
	
	Currently, the only resolution is for the user who uses the profile to delete
	User.dat.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
