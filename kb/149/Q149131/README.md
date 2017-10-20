---
layout: page
title: "Q149131: Windows NT FTP Client Creates 0-Byte File"
permalink: /kb/149/Q149131/
---

## Q149131: Windows NT FTP Client Creates 0-Byte File

{% raw %}

	Article: Q149131
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the GET command with the Windows NT FTP client to transfer a
	nonexistent file, a file may be created with a size of 0 bytes.
	
	CAUSE
	=====
	
	The GET command copies a remote file to the local computer using the currently
	selected file transfer type. Before you transfer the file, the GET command
	creates a file with a length of 0 bytes while it checks to see if the file may
	be copied to the local computer. If the file transfer from the remote computer
	fails, the empty file may not be deleted.
	
	WORKAROUND
	==========
	
	Use the MGET command to transfer files instead of the GET command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
