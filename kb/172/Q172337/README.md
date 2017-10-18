---
layout: page
title: "Q172337: FIX: SSARC &amp; SSRESTOR Do Not Store Macintosh Resource Fork Data"
permalink: kb/172/Q172337/
---

## Q172337: FIX: SSARC &amp; SSRESTOR Do Not Store Macintosh Resource Fork Data

	Article: Q172337
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbVS97sp2fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using SSARC and SSRESTOR to archive and restore files from a database that
	has Macintosh SourceSafe clients and stores Macintosh files, the file's resource
	fork is not included as part of the archive. Restoring the archive to another
	database causes resource fork information to be lost. Attempting to get or
	checkout these files on a Macintosh client produces the following error
	message:
	
	  File '<path>:<filename>' not found where <filename> has
	  either a .c or a .d extension.
	
	CAUSE
	=====
	
	SSARC and SSRESTOR do not make use of the information stored in files with the
	.c or .d extension in the SourceSafe database. These files contain the resource
	fork information for Macintosh files.
	
	RESOLUTION
	==========
	
	It is possible to copy the Macintosh resource fork information to the restored
	database. SSARC & SSRESTOR may re-map the physical filenames when archiving
	from one database and restoring into another database. The following steps can
	be used to copy the resource fork information:
	
	1. Find the physical name of the file in the old database.
	
	2. Copy the old .c or .d file.
	
	3. Find the new physical file name for the file in the restored to database.
	
	4. Rename the old .c or .d file to the new physical file name.
	
	5. Place the renamed file in the appropriate subdirectory in the restored to
	  SourceSafe Database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q131447 HOWTO: Use PHYSICAL Command to Find SourceSafe Database File
	
	  Q157714 How SourceSafe Stores Log Files
	
	Additional query words: mac
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp2fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
