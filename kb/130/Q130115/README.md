---
layout: page
title: "Q130115: PC Adm: Err Msg: Notice 163 Failed to Complete Deinstallation"
permalink: /kb/130/Q130115/
---

## Q130115: PC Adm: Err Msg: Notice 163 Failed to Complete Deinstallation

	Article: Q130115
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove the Directory Server in Admin, Config, DirSync, Options, you may
	get the following error:
	
	  Notice 163 Failed to complete deinstallation of directory server.
	
	CAUSE
	=====
	
	The SRVCONF.GLB and MASTER.GLB file may be locked open.
	
	RESOLUTION
	==========
	
	Remove the lock on the SRVCONF.GLB or MASTER.GLB file.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
