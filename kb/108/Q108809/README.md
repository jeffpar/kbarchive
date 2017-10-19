---
layout: page
title: "Q108809: PC MMTA: External Instances Using Dynamic Drives Can't Overlap"
permalink: /kb/108/Q108809/
---

## Q108809: PC MMTA: External Instances Using Dynamic Drives Can't Overlap

	Article: Q108809
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks Multitasking Message Transfer Agent, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When multiple instances of the External Mail program (EXTERNAL.EXE) are run on a
	single OS/2 workstation, the ranges of drive letters used for dynamic drives on
	each instance of External must not overlap within the EXTERNAL.INI configuration
	file.
	
	MORE INFORMATION
	================
	
	Dynamic drive names are specified with -F on the External or Dispatch command
	line, or by the DrivesDynamic entry in the EXTERNAL.INI file. This option is
	required only if dynamic drives are used (specified with DynAdmin or DrivesUNC
	or DrivesNovell).
	
	Examples
	--------
	
	The following instances are compatible:
	
	  external -fmn
	  external -fop
	  external -fqr
	  external -fst
	
	The following are not compatible:
	
	  external -fmn
	  external -fop
	  external -fno
	
	In the second example above, the last instance conflicts with the first two
	instances and must be modified to reflect distinct and mutually exclusive drive
	ranges in order for the participating postoffices to be initialized correctly by
	the External Mail program.
	
	For more information, see page 36 in the Microsoft Mail "Multitasking MTA
	Administrator's Guide."
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	
