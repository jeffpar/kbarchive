---
layout: page
title: "Q250267: Cannot Resolve Groups When Files Move Between Windows NT Servers"
permalink: kb/250/Q250267/
---

## Q250267: Cannot Resolve Groups When Files Move Between Windows NT Servers

	Article: Q250267
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move files from one member server to another, and some file access
	control entries (ACEs) contain local groups, the new member server may not be
	able to resolve the security identifiers (SIDs) for the local groups on the old
	member server. Local groups defined in the file ACEs on the old server may
	appear as Unknown on the new server.
	
	CAUSE
	=====
	
	This behavior can occur because the local group SID, along with the SID for any
	local user accounts, is valid only on that member server and does not exist on
	the new member server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the Getsid utility to obtain the security
	identifiers for the local groups on both the new and the old server. Use the
	Scopy utility to copy the files to the new server. Use the Subinacl utility to
	change the SID on the file access control entry from the SID of the old local
	group to the SID of the local group on the new server. Follow these steps:
	
	1. Use the Getsid utility to obtain the SIDs for the old and the new local
	  groups, and redirect the output to a text file as in the following example:
	
	 Getsid \\oldserver localgroup \\newserver localgroup>sid.txt
	
	  The output looks like this:
	
	 The SID for account SERVER1\mygroup does not match account SERVER2\mygroup
	 The SID for account SERVER1\mygroup is S-1-5-21-275538420-358423036-7473742-1001
	 The SID for account SERVER2\mygroup is S-1-5-21-763131457-352918740-1170935872-1007
	
	2. Copy the files from the old server to the new server, using the Scopy
	  utility.
	
	  After you copy the files, file permissions on the new server list the local
	  group as Unknown.
	
	  NOTE: Before performing this step, make sure your user account belongs to at
	  least one domain global group that has Full Control permissions and is listed
	  on the file ACE. Otherwise you will lose access to these files on the new
	  server when you replace the local group SID with a local group SID from the
	  destination server.
	
	3. Use Subinacl to change the old local group SID to the new local group SID, as
	  in the following example:
	
	 Subinacl /subdirectories x:\directory\*.* /replace=oldsid=newsid
	
	  The following example illustrates how to use the Subinacl utility to change
	  the SID from the old SID to the new SID for all files in the C:\Test
	  directory, using the SIDs from Step 1):
	
	 subinacl /subdirectories C:\Test\*.* /replace=S-1-5-21-763131457-352918740-1170935872-1007=S-1-5-21-275538420-358423036-7473742-1001
	
	4. Check the file access control list (ACL) on the new server. The Unknown
	  listing should be gone, and the ACL should now list the local group.
	
	MORE INFORMATION
	================
	
	The utilities Getsid, Scopy, and Subinacl are available in the Microsoft Windows
	NT Server 4.0 Resource Kit. Be sure to use Subinacl version 1.73 from the
	Windows NT Server 4.0 Resource Kit Supplement 3 or later. If you run
	'subinacl/?' and no version number appears, you have an older version.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
