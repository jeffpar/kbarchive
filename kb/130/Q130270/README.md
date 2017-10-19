---
layout: page
title: "Q130270: BUG: SourceSafe Reports a Date/Time of 1/1/70"
permalink: /kb/130/Q130270/
---

## Q130270: BUG: SourceSafe Reports a Date/Time of 1/1/70

	Article: Q130270
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbSSafe400bug kbSSafe500bug kbSSafe600bug kbVBp300bug kbVBp400bug kbVBp500bug
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe reports a date/time of 1/1/70 on all files within a project.
	
	CAUSE
	=====
	
	This is caused by a corrupt Status.dat file.
	
	
	RESOLUTION
	==========
	
	You may repair the Status.dat file by doing one of the following:
	
	- Download the latest versions of Analyze and DDCONV. For information on
	  downloading these files, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190881 ANALYZE5.EXE Utility for Visual SourceSafe
	
	  Run DDCONV -S <path to data directory>.
	
	- Delete the Status.dat file and run ANALYZE <path to data directory> -f.
	
	NOTE: If you have SourceSafe version 4.0 (build 811 or 831), you should obtain
	version 4.0a (build 1309) from Microsoft Technical Support before repairing the
	Status.dat file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: REBUILD
	
	======================================================================
	Keywords          : kbnetwork kbSSafe400bug kbSSafe500bug kbSSafe600bug kbVBp300bug kbVBp400bug kbVBp500bug kbVBp600bug kbSSafe310bug kbSSafe304bug 
	Issue type        : kbbug
	
	=============================================================================
	
