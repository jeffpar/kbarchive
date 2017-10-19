---
layout: page
title: "Q141399: PC Adm: Err Msg: Could Not Access Server's Configuration"
permalink: /kb/141/Q141399/
---

## Q141399: PC Adm: Err Msg: Could Not Access Server's Configuration

	Article: Q141399
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose External-Admin, Create, Modify, or Delete in the Mail
	Administration program (ADMIN.EXE), you may get the following error message:
	
	  Notice 60
	  Could Not Access Server's Configuration
	
	CAUSE
	=====
	
	Notice 60 will be displayed if the MASTER.GLB for the postoffice being
	administered is corrupt.
	
	RESOLUTION
	==========
	
	Get a copy of the MASTER.GLB from a recent backup of your postoffice. Be sure to
	check that the file is 176 bytes in size.
	
	Additional query words: 3.20 errmsg err corrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
