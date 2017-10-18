---
layout: page
title: "Q124857: PC Ext: EXTERNAL.INI Requires [External] Section"
permalink: kb/124/Q124857/
---

## Q124857: PC Ext: EXTERNAL.INI Requires [External] Section

	Article: Q124857
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0a, 3.2, and 3.2a of Microsoft Mail for PC Networks, the
	Message Transfer Agent (EXTERNAL.EXE) may appear to execute correctly but no
	mail is transferred, and no error message is generated. External will only
	attach to postoffices on M:.
	
	CAUSE
	=====
	
	If EXTERNAL.EXE fails to find an [External] section in an EXTERNAL.INI file, it
	assumes the postoffice on drive M: is both the Home postoffice and the only
	connected postoffice.
	
	RESOLUTION
	==========
	
	Add [External] to the beginning of the section in the EXTERNAL.INI file which
	contains the basic startup information of the MTA.
	
	Additional query words: 3.00 3.00a 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a,3.2,3.2a
	
	=============================================================================
	
