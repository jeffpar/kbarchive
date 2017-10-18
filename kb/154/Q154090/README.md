---
layout: page
title: "Q154090: SCM.EXE Asserts Error When Many OLE Applications Installed"
permalink: kb/154/Q154090/
---

## Q154090: SCM.EXE Asserts Error When Many OLE Applications Installed

	Article: Q154090
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51; :3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error may occur when the OLE service is started:
	
	  SCM.EXE caused an error at 0x01D77ABE: Referenced memory at 0x004E0000 Memory
	  can not be written
	
	NOTE: The parameters (such as 0x01D77ABE and 0x004E0000) are specific to your
	system configuration.
	
	CAUSE
	=====
	
	SCM is attempting to add entries to a table beyond the defined maximum table
	size.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt RPC OLE VB VC Q149722
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTAdvSerSearch kbWinNTAdvServ351 kbWinNTAdvServ350
	Version           : winnt:3.5,3.51; :3.5,3.51
	
	=============================================================================
	
