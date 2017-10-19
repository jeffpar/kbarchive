---
layout: page
title: "Q203017: PRB: &quot;Only one database connection is supported at one time&quot;"
permalink: /kb/203/Q203017/
---

## Q203017: PRB: &quot;Only one database connection is supported at one time&quot;

	Article: Q203017
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe400 kbSSafe500 kbSSafe600 kbVBp _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When saving or opening a Visual Basic Group file (.vbg) that contains two or
	more Visual Basic projects (.vbp) that are under source control, you receive the
	following message even though all Visual Basic projects are in the same Visual
	SourceSafe database:
	
	  "Only one database connection at a time is supported."
	
	The following error message appears:
	
	  "The database is unavailable. Would you like to disable source control
	  integration?"
	
	CAUSE
	=====
	
	There are different SCC_Aux_Path values in the Mssccprj.scc file for the
	different .vbp's.
	
	RESOLUTION
	==========
	
	This resolution is valid only when all Visual Basic projects are actually in the
	same SourceSafe database and this message still appears.
	
	Manually edit the SCC_Aux_Path setting in the Mssccprj.scc file. This file is
	located in the same folder as the .vbp file. Make sure that the identical
	SCC_Aux_Path setting appears in all the Visual Basic projects' Mssccprj.scc, and
	that this is a valid path to the desired Srcsafe.ini file.
	
	The Mssccprj.scc is read only, so you should make it writable, then reset the
	read-only attribute after editing it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The SCC_Aux_Path is the path to the Srcsafe.ini file that Visual Basic uses to
	connect to the Visual SafeSource database.
	This error can occur if multiple SCC_Aux_Path's are pointing to different
	Srcsafe.ini files or to the same Srcsafe.ini, but using a different path.
	
	Two possible scenarios of the same Srcsafe.ini are:
	
	1. The Srcsafe.ini is on a network share, where one SCC_Aux_Path is pointing to
	  a UNC, and another is pointing to the same share using a mapped drive letter.
	2. The Srcsafe.ini is in a directory that does not comply to the DOS 8.3 naming
	  convention, where one SCC_Aux_Path has the full path name, and another has a
	  truncated (DOS-style) path.
	
	The Mssccprj.scc file will look like the following:
	
	  SCC = This is a Source Code Control file
	
	  [Project1.vbp]
	  SCC_Aux_Path =C:\Program Files\Microsoft Visual Studio\Common\VSS,
	  SCC_Project_Name ="$/Project1", PCAAAAAA
	
	NOTE: Do not edit the SCC_Project_Name, only change the SCC_Aux_Path entry to use
	the same path in each project.
	
	REFERENCES
	==========
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q147585 INFO: The Mssccprj.scc File and How Is It Used
	
	Additional query words: kbDSupport scc
	
	======================================================================
	Keywords          : kbinterop kbSSafe400 kbSSafe500 kbSSafe600 kbVBp _IK kbGrpDSSSafe 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSSafe600 kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
