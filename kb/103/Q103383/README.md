---
layout: page
title: "Q103383: PC Ext: Missing .XTN File Causes Errors in External 3.2"
permalink: /kb/103/Q103383/
---

## Q103383: PC Ext: Missing .XTN File Causes Errors in External 3.2

{% raw %}

	Article: Q103383
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail for PC Networks reports the following error when
	you try to initialize the External Mail program (EXTERNAL.EXE) from a postoffice
	that is missing an .XTN file:
	
	  Postoffice record retrieval failed, file: xxxxxxxx
	
	The error will be in the log file or on the screen only if you specify the -V or
	LogVerbose command-line option. If you do not specify the LogVerbose option,
	External will appear to hang after testing permanent and dynamic drive
	connections, and will not initialize the postoffices that correspond to the
	missing .XTN files.
	
	If you specify the -Q1 option, the above error will be logged and the following
	error will also appear:
	
	  Failure initializing postoffice list at NET/PO
	
	RESOLUTION
	==========
	
	Create a new .XTN file called xxxxxxxx.XTN, where xxxxxxxx is the file not found
	by External, or restore the .XTN file from the last backup.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
