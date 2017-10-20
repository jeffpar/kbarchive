---
layout: page
title: "Q185950: Updating User Profiles in Mixed Environments"
permalink: /kb/185/Q185950/
---

## Q185950: Updating User Profiles in Mixed Environments

{% raw %}

	Article: Q185950
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the update process for User Profiles and the update
	process for Mandatory User Profiles in mixed Windows NT 3.51 and Windows NT 4.0
	computer environments.
	
	MORE INFORMATION
	================
	
	In a Windows NT 3.51 environment, profiles are used for domain users. User
	Profiles are created with the User Profile Editor tool.
	
	The update process for User Profiles:
	
	- Windows NT 3.51 will use a <username>.usr profile file.
	
	- Windows NT 4.0 will use an Ntuser.dat profile file.
	
	- Both profiles are found in the \\<nt3.51_server>\<share>
	  directory.
	
	- If USER1 logs on to a Windows NT 3.51 computer, the
	  \\<NT3.51_server>\<share>\User1.usr profile file will be used.
	
	- If USER1 logs on to a Windows NT 4.0 computer, the
	  \\<NT3.51_server>\<share>\User1.pds\Ntuser.dat profile file will
	  be used. The User1.pds directory is automatically created when logged on to
	  for the first time. The Ntuser.dat file will be found here and is created
	  automatically.
	
	NOTE: From this point on, the Windows NT 3.51 and Windows NT 4.0 profiles will
	remain independent of each other.
	
	The update process for Mandatory User Profiles:
	
	- If user USER1 uses the profile User1.man found in the
	  \\<NT3.51_server>\<share>\directory, the process will be the same
	  as with user profiles (as above), except it is not automatic. The
	  administrator will have to create the following:
	
	   - The directory \\<nt3.51_server>\<share>\<user1.pds>
	
	   - The Ntuser.man file (renamed from Ntuser.dat) in the previously created
	     directory.
	
	Additional query words: winnt profile
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
