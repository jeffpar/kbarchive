---
layout: page
title: "Q118813: PC Ext: Script File Order of Precedence"
permalink: /kb/118/Q118813/
---

## Q118813: PC Ext: Script File Order of Precedence

	Article: Q118813
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 377 of version 3.2 Microsoft Mail for PC Networks and on page 237 of
	version 3.5 "Administrator's Guide," under the section heading "Specifying a
	File with the Administrator Program," the following incorrect statement
	appears:
	
	  NOTE: A Script file specified in the External-Admin Setup screen Phone number
	  field overrides both the default script file and a script file specified in
	  the External program .INI file with the CommScript option or the -tname
	  command line option.
	
	The correct order of precedence is listed on page 237. The command-line option
	takes precedence over the .INI entry that takes precedence over the Admin
	program script file setting.
	
	External will run the commands it finds last. It checks the following locations
	in this order:
	
	1. The Administrator program
	
	2. The Dynamic Drive Administration program
	
	3. The global section in the .INI file
	
	4. The instance specific section in the .INI file
	
	5. The command-line option
	
	6. Modem script file
	
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
