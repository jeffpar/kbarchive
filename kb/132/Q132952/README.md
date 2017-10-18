---
layout: page
title: "Q132952: PC Adm: ADMIN.EXE Started from MS-DOS w/o Prompt for Password"
permalink: kb/132/Q132952/
---

## Q132952: PC Adm: ADMIN.EXE Started from MS-DOS w/o Prompt for Password

	Article: Q132952
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Administrator program (ADMIN.EXE) from MS- DOS,
	the mail administrator can access the utility without being prompted for a
	password.
	
	CAUSE
	=====
	
	The password for the user ADMIN was changed to a blank password (no characters).
	
	RESOLUTION
	==========
	
	Change the password for the ADMIN account from a blank password. There are two
	procedures to do this:
	
	Procedure A
	-----------
	
	Run ADMIN.EXE. From the Local-Admin/Recover options, select the Administrator
	account (ADMIN), and recover the account using the global password.
	
	Procedure B
	-----------
	
	1. Run MAIL.EXE, the MS-DOS mail client, through the Options/Password option,
	  type in the old password (for a blank password, press the ENTER key).
	
	2. Type in the new password. Press ENTER. To confirm the password, type in the
	  new password.
	
	MORE INFORMATION
	================
	
	With a blank password, the command line of:
	
	  ADMIN.EXE ADMIN -D<drive>
	
	is sufficient to gain access to the Administrator's program. For security
	purposes, it is recommended you have a password for the ADMIN account.
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	
