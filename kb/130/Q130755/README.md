---
layout: page
title: "Q130755: PC Adm: Err Msg: Notice 9 Error File Not Accessible"
permalink: kb/130/Q130755/
---

## Q130755: PC Adm: Err Msg: Notice 9 Error File Not Accessible

	Article: Q130755
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add an external postoffice definition using the Mail Administrator
	program (ADMIN.EXE), you may get one of the following messages:
	
	  Notice 9
	  Error file not accessible
	  Check server connection
	  Press Enter to continue
	
	  -or-
	
	  Notice 51
	  Error File not accessible
	  Check Server connection
	  Press enter to continue
	
	CAUSE
	=====
	
	The Notice 9 error occurs when the ADMIN.EXE program is unable to access the
	following two error message files, which are usually located in the GLB
	subdirectory of the postoffice database:
	
	  ERRORADM.GLB
	  ERRORDYN.GLB
	
	The Notice 51 error occurs when you try to go into Admin-Queue, and the following
	files are missing from the \GLB directory:
	
	  ENGMAI.GLB
	  ENGMON.GLB
	  ERRORADM.GLB
	  ERRORDYN.GLB
	
	RESOLUTION
	==========
	
	NOTE: The following is the resolution for both of the above error messages.
	
	Check the GLB subdirectory for the existence of these files. If they do not
	exist, the administrator can replace these files in one of the following ways:
	
	- Find another postoffice in the Mail system that contains these files and copy
	  them from that postoffice to the GLB subdirectory of the problem postoffice.
	
	- Use the complete set of Setup disks for version 3.2 of Microsoft Mail for PC
	  Networks, and install a complete temporary postoffice on a local workstation
	  hard drive. Be careful to install the complete client software (for both
	  MS-DOS and Windows) as well. The temporary postoffice will contain the
	  missing files in the GLB subdirectory. Copy the files to the problem
	  postoffice's GLB subdirectory.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
