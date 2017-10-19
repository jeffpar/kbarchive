---
layout: page
title: "Q69994: Using argv and envp Variables in a LAN Manager 2.00 Service"
permalink: /kb/069/Q69994/
---

## Q69994: Using argv and envp Variables in a LAN Manager 2.00 Service

	Article: Q69994
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	Question:
	
	I have written a LAN Manager version 2.00 service that tries to launch
	a second process (that is, run another .EXE file). However, the
	DosExecPgm() call keeps returning ERROR_FILE_NOT_FOUND, even though
	the .EXE I'm trying to start exists in the same directory as my service
	.EXE. Why isn't my second .EXE being found?
	
	Response:
	
	When LAN Manager 2.00 launches a service (for example, in response to
	the Net Start command), it passes to the service no explicit arguments
	and no environment variables [the argument and environment pointers in
	the DosExecPgm() call are both set to NULL]. This results in the new
	process inheriting the environment established by CONFIG.SYS. If the
	.EXE for your new process cannot be found in the PATH listed in
	CONFIG.SYS, your DosExecPgm() call will fail. The following are four
	possible solutions:
	
	1. Insist that your users place your .EXEs in the same directory and hard code
	  the full pathname.
	
	2. As part of the installation of your service, have the user add the location
	  of your .EXEs to the CONFIG.SYS PATH variable.
	
	3. Extract from the argv[0] variable, passed to your service by OS/2, the path
	  of your first .EXE and use it to build the full pathname for the .EXE you're
	  attempting to launch. This will only work if all of your .EXEs exist in the
	  same directory.
	
	4. Add a keyword to LANMAN.INI for your service that supplies the necessary
	  path.
	
	Of these three solutions, solutions 1 and 2 place unreasonable
	restrictions on the user. The second solution can also cause problems
	if there are other .EXEs with the same name as yours in the path. The
	fourth solution is good if your service needs to create temporary
	files or other files that the user may not want in the same directory
	as the .EXEs (since the user may have read/execute-only privileges on
	that directory). Although it is probably best to keep all of your
	.EXEs together, it is not the best solution when attempting to start
	child processes.
	
	The third solution is the best and is used for standard LAN Manager
	2.00 services to launch child processes. Argv[0] can be safely used to
	determine your services "home" directory, since it always contains the
	full pathname of the .EXE that was started. This is guaranteed by how
	LAN Manager issues the DosExecPgm() call. Because the user must keep
	all of his or her .EXEs in a single directory, this also places the
	least number of restrictions on the user.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
