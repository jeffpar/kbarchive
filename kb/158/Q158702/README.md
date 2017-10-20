---
layout: page
title: "Q158702: INFO: How ANALYZE Passes Work"
permalink: /kb/158/Q158702/
---

## Q158702: INFO: How ANALYZE Passes Work

{% raw %}

	Article: Q158702
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ANALYZE database scan and repair tool scans a Visual SourceSafe database in
	four different passes. Each pass completes a different database operation and,
	depending on the problem found, some passes may take significantly longer than
	others. ANALYZE may be re-creating vital Visual SourceSafe files during these
	slow periods.
	
	MORE INFORMATION
	================
	
	The following list is a description of each pass that ANALZYE performs and any
	issues that may arise:
	
	Pass 1 of 4
	-----------
	
	ANALYZE builds a project list that it uses throughout passes 2 and 3. All of the
	project history logs are validated and compared with the current child list.
	ANALYZE also maps memory for all of the files that it plans to scan. This pass
	of ANALYZE should be significantly shorter than passes 2 and 3.
	
	The following error may appear when you are running ANALYZE:
	
	  Unable to create the filemapping for the database
	
	If this error occurs, you must contact Product Support for assistance. This is a
	serious error that may cause severe database problems.
	
	Pass 2 of 4
	-----------
	
	ANALYZE loads the files into memory and validates the log entries for each file.
	ANALYZE also validates the parent/child relationship in the file. This
	information is used later in pass 3 to rebuild projects, if necessary.
	
	Pass 3 of 4
	-----------
	
	ANALYZE rebuilds the project by using the information in pass 2 to validate the
	project. If the project is missing or invalid, ANALYZE traces the files back up
	and down the tree to determine the true contents of the project. If the project
	does not exist, ANALYZE creates the project. If ANALYZE creates the project, all
	of the log entries for the files are created by referencing the child files. The
	history of the files is not correct (correct user and date information), but the
	history is complete enough to avoid further database errors.
	
	
	Pass 4 of 4
	-----------
	
	ANALYZE processes the user and rights system. Any inconsistencies in these
	systems are repaired. For the remainder of the pass, ANALYZE cleans up code.
	
	
	Additional query words: RIGHTS.DAT UM.DAT mapping
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
