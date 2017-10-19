---
layout: page
title: "Q196196: FIX: Analyze Creates New GUID When Repairing the UM.dat"
permalink: /kb/196/Q196196/
---

## Q196196: FIX: Analyze Creates New GUID When Repairing the UM.dat

	Article: Q196196
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600fix kbAnalyze kbSSafeAnalyze
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to restore an archived project to the same database that it was
	archived from, you might get the following message:
	
	  Destination database is not the same as the original. Some links may not be
	  restored.
	
	CAUSE
	=====
	
	If any repairs to the file were needed when you ran Analyze (build 2327 or
	earlier) with the -f switch, a new GUID in the UM.dat was created. As a result,
	an archive GUID and the UM.dat GUID are out of sync.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Analyze, build 8169, no longer regenerates the GUID
	in the UM.dat unnecessarily.
	
	MORE INFORMATION
	================
	
	Visual SourceSafe stores a 16-byte GUID in the header part of UM.dat file, which
	is used to uniquely identify a database. SSARC and SSRESTOR uses this
	information to determine whether it is restoring to the same database or a
	different one. Whenever UM.dat needs to be repaired and you run Analyze -f
	against the database, Analyze rebuilds the UM.dat. Builds of Analyze prior to
	8169 create a new GUID while rebuilding the UM.dat file, even if the header
	information in the UM.dat file is not corrupt.
	
	When Visual SourceSafe arches a file, SSARC stores the GUID in the .ssa file.
	When Visual SourceSafe restores the archived file, SSRESTOR compares the
	existing GUID in the target UM.dat with the GUID in the .ssa file. Since Analyze
	created a new GUID after archiving the database, SSRESTOR thinks that the target
	database is different from the original database and sends the error message
	listed in the previous SYMPTOMS section.
	
	Analyze build 8169 does not create a new GUID unless the header information in
	the UM.dat file is corrupt.
	
	You can download and install the latest Analyze utility from the following
	article in the Microsoft Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	NOTE: Always back up your database before running Analyze.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600fix kbAnalyze kbSSafeAnalyze 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
