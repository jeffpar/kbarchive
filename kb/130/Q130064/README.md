---
layout: page
title: "Q130064: PC DirSync: Err Msg: &#91;XX&#93; Error Obtaining Message #: YY"
permalink: /kb/130/Q130064/
---

## Q130064: PC DirSync: Err Msg: &#91;XX&#93; Error Obtaining Message #: YY

{% raw %}

	Article: Q130064
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORT.EXE may record the following error message in the DIRSYNC.LOG when the
	DS_MSG.GLB file is not found in the GLB subdirectory of the Mail database:
	
	  [XX] Error Obtaining Message #: YY
	
	CAUSE
	=====
	
	IMPORT.EXE attempts to get a message from the directory synchronization message
	resource file DS_MSG.GLB. If Import has any problems reading the resource file,
	it builds an internal message indicating the message number it was looking for.
	
	RESOLUTION
	==========
	
	Copy the DS_MSG.GLB file from either an existing version 3.2, 3.2a, or 3.5
	Microsoft Mail postoffice or from the Microsoft Mail Installation diskettes.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
