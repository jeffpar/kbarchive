---
layout: page
title: "Q161877: Event 0 Source 0: ExIfStart Registry Key for Server Not Found 2l"
permalink: /kb/161/Q161877/
---

## Q161877: Event 0 Source 0: ExIfStart Registry Key for Server Not Found 2l

{% raw %}

	Article: Q161877
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the computer running Windows NT Server is also running Cheyenne software
	Arcserver backup software, Windows NT Server periodically generates events that
	have no source or event ID. The message is:
	
	  ExIfStart Registry key for server not found 2l.
	
	CAUSE
	=====
	
	Arcserve uses Raima database software as part of its backup package. During the
	Arcserve installation process, this database software is not installed; only a
	database file and a software piece for it are installed.
	
	A Raima executable file named Rds.exe runs as part of the backup process, and it
	looks for the registry entry ExIfStart. Because the full Raima installation has
	not been run, the entry is not there.
	
	Note that the error message is harmless, and does not affect either Windows NT or
	the backup process.
	
	STATUS
	======
	
	The Cheyenne ArcServe tape backup software is manufactured by Cheyenne Software,
	Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Cheyenne Software is working on a resolution for this problem. As of yet, there
	is no fix. You can reach Cheyenne Software at:
	
	  Cheyenne Software
	  (800) 243-9462
	  (516) 484-5110
	  Internet: http://www.chey.com/
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
