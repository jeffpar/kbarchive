---
layout: page
title: "Q117713: PC Win: Files Used with Regenerate Command"
permalink: /kb/117/Q117713/
---

## Q117713: PC Win: Files Used with Regenerate Command

	Article: Q117713
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Regenerate command is used to create the default user list for a remote mail
	user. The Regenerate command is displayed after selecting the Remote command
	with the ADMIN.EXE program.
	
	The following files are read when using the Regenerate command with the ADMIN.EXE
	program:
	
	  REMOTE.OVL
	  NETWORK.GLB
	  ACCESS2.GLB
	  GROUP.GLB
	  All *.XTN files in the \XTN sub-directory
	  All *.USR files in the \USR sub-directory
	  All *.TPL files in the \TPL sub-directory
	
	The following file is written when using the Regenerate command with the
	ADMIN.EXE program:
	
	  RNETWORK.GLB
	
	MORE INFORMATION
	================
	
	The Regenerate command is commonly used to re-create the RNETWORK.GLB file after
	External Postoffices or Gateways have been defined. An Init-Disk or Update-Disk
	commands would follow in order to update the Remote Mail user's address list.
	
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
