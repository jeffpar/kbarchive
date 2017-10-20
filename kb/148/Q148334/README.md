---
layout: page
title: "Q148334: Remote Users Can Compress and Uncompress NTFS Files"
permalink: /kb/148/Q148334/
---

## Q148334: Remote Users Can Compress and Uncompress NTFS Files

{% raw %}

	Article: Q148334
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If a user on a Windows NT Workstation 3.51 has write privileges on a Windows NT
	Server 3.51, the user can compress or uncompress NTFS files on the server.
	
	MORE INFORMATION
	================
	
	NTFS compression is a write operation. Anyone with write privileges can compress
	and uncompress files on the shared NTFS partition. If you are concerned about
	users compressing and uncompressing large number of files and directories on the
	NTFS partition, use the Windows NT security model to restrict user access. For
	example, you may want to give a user write privileges to his or her own
	directory on a large server, and restrict write privileges on the root directory
	or other users' files.
	
	Additional query words: 3.51 prodnt compact
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
