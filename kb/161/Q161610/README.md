---
layout: page
title: "Q161610: PRB: SSARC/SSRESTOR Change 4.0 Database to 4.0a/5.0 Format"
permalink: kb/161/Q161610/
---

## Q161610: PRB: SSARC/SSRESTOR Change 4.0 Database to 4.0a/5.0 Format

	Article: Q161610
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual SourceSafe version 5.0 includes two new utilities, SSARC.EXE and
	SSRESTOR.EXE. These utilities allow the Visual SourceSafe Administrator to
	archive and restore files and projects within Visual SourceSafe databases.
	
	Visual SourceSafe version 4.0 shipped three different builds: 811 (version 4.0),
	831 (version 4.0), and 1309 (version 4.0a). You can find out which build you are
	using by clicking About on the Help menu.
	
	The actual format of the Visual SourceSafe database did not change between builds
	811 and 831 (both are version 4.0) or build 1309 (version 4.0a) and Visual
	SourceSafe version 5.0. However, the format did change between 831 and 1309.
	
	When you use SSARC.EXE and SSRESTOR.EXE on a version 4.0 database (builds 811 or
	831), it is 'silently' upgraded to the new 4.0a/5.0 format. When this upgrade
	occurs, you cannot use the executables from version 4.0 (builds 811 and 831).
	Under this condition you may get the following error message:
	
	  Incompatible database version.
	
	RESOLUTION
	==========
	
	Upgrade to Visual SourceSafe version 4.0a or higher before using the SSARC.EXE
	and SSRESTOR.EXE. You can get version 4.0a by contacting Microsoft Technical
	Support.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
