---
layout: page
title: "Q87182: PROFS: What to Do with Files in the ERR Directory"
permalink: /kb/087/Q87182/
---

## Q87182: PROFS: What to Do with Files in the ERR Directory

{% raw %}

	Article: Q87182
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Files are copied into the ERR subdirectory only if they are found to be
	corrupted, or if the Microsoft Mail Gateway to IBM PROFS program cannot carry
	out one of its functions (for example, if the program cannot insert mail items
	from the CSIWORK file into the database).
	
	All files copied into the ERR directory keep their names, but the extensions
	change to three-digit numbers. For example, the first CSIWORK.DAT file copied to
	the ERR directory is named CSIWORK.001. If the gateway program has to copy
	another CSIWORK file into ERR, it calls it CSIWORK.002.
	
	Any file in the ERR directory can be copied back into the VMGATE directory, to
	give the gateway program another chance to process it. For example,if you copy
	VMGATE\ERR\CSIWORK.001 to VMGATE\CSIWORK.DAT, the gateway again attempts to
	insert its contents into the mail system database.
	
	Note that if you are using the -P0xx option on the command line of the gateway
	program, this will change the file extensions in the VMGATE directory. For
	example, if you use the -P049 option, the files in the VMGATE directory will all
	have the extension .D49 rather than .DAT. This must be considered when copying
	files from the ERR directory into VMGATE. The gateway program will ignore files
	in VMGATE with an extension that is inconsistent with the -P0xx option.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan ERR
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
