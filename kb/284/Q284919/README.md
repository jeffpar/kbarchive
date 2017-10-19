---
layout: page
title: "Q284919: Dr.Watson Error Occurs with Dfsadmin.exe Importing .csv File"
permalink: /kb/284/Q284919/
---

## Q284919: Dr.Watson Error Occurs with Dfsadmin.exe Importing .csv File

	Article: Q284919
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsgkbfaq
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to import a .csv file that is exactly 4,096 bytes in size (or a
	multiple of 4,096 bytes), an application exception may occur. When this occurs,
	an entry that is similar to the following entry may be recorded in the
	Drwtsn32.log file:
	
	  Application exception occurred:
	  App: exe\dfsadmin.dbg (pid=101)
	  When: 12/29/2000 @ 15:7:41.106
	  Exception number: c0000005 (access violation)
	
	  (Some details have been omitted for clarity.)
	
	  function: FindNextLine
	  01005c2b 803900 cmp byte ptr [ecx],0x0 ds:00c71000=??
	  01005c2e 7410 jz FindNextLine+0x19 (01005c40)
	  01005c30 8a01 mov al,[ecx] ds:00c71000=??
	  01005c32 3c0d cmp al,0xd
	  01005c34 740a jz FindNextLine+0x19 (01005c40)
	  01005c36 3c0a cmp al,0xa
	  01005c38 7406 jz FindNextLine+0x19 (01005c40)
	  01005c3a 41 inc ecx
	  01005c3b 803900 cmp byte ptr [ecx],0x0 ds:00c71000=??
	  01005c3e 75f0 jnz FindNextLine+0x9 (01005c30)
	  FAULT ->01005c40 8a01 mov al,[ecx] ds:00c71000=??
	  01005c42 3c0d cmp al,0xd
	  01005c44 7404 jz FindNextLine+0x23 (01005c4a)
	  01005c46 3c0a cmp al,0xa
	  01005c48 7503 jnz FindNextLine+0x26 (01005c4d)
	  01005c4a 41 inc ecx
	  01005c4b ebf3 jmp FindNextLine+0x19 (01005c40)
	  01005c4d b800000000 mov eax,0x0
	  01005c52 803901 cmp byte ptr [ecx],0x1 ds:00c71000=??
	  01005c55 83d0ff adc eax,0xff
	  01005c58 23c1 and eax,ecx
	  01005c5a c20400 ret 0x4
	
	WORKAROUND
	==========
	
	To work around this problem, import a .csv file that is not 4,096 bytes in size
	(or a multiple of 4,096).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: dfs
	
	======================================================================
	Keywords          : kberrmsg kbfaq
	Component         : NetworkMgmtTool
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
