---
layout: page
title: "Q241712: Cannot Start 16-Bit Program with Long Path Name"
permalink: /kb/241/Q241712/
---

## Q241712: Cannot Start 16-Bit Program with Long Path Name

{% raw %}

	Article: Q241712
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to start a 16-bit program from a folder that has a full path
	name with more than than 64 characters, the following error message appears:
	
	  <Path>\<Filename>.exe
	  The parameter is incorrect.
	
	If you attempt to run the same program from a command prompt, the error message
	is:
	
	  The system cannot execute the specified program.
	
	If you attempt to start the program by using the Microsoft Windows 3.x File
	Manager tool (Winfile.exe), the following error message appears:
	
	  You do not have permission to access this file.
	
	If you attempt to start the program from a command prompt in Windows NT 3.51, the
	error message is:
	
	  The system cannot execute the specified program.
	
	Using File Manager (Winfile) in Windows NT 3.51, the error message is:
	
	  Not enough memory to start the specified application. Quit one or more
	  applications, and then try again.
	
	In Windows NT 4.0 Service Pack 4, using Windows Explorer generates the following
	error message:
	
	  <Path>\<Filename>.exe
	  The parameter is incorrect.
	
	When you attempt to start the 16-bit program from Winfile, the message is:
	
	  You do not have permission to access this file.
	
	If you attempt to start the program from a command prompt:
	
	  The system cannot execute the specified program.
	
	When you use Windows Explorer in Windows 2000, the error message is:
	
	  <Path>\<Filename>.exe
	  The parameter is incorrect.
	
	When you attempt to start the program from a command prompt in Windows 2000, the
	error message is:
	
	  The system cannot execute the specified program.
	
	CAUSE
	=====
	
	This restriction is enforced in the emulation layer and matches the MS-DOS
	restriction for 16-bit programs.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
