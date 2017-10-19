---
layout: page
title: "Q123470: INFO: How SourceSafe Selects a Viewer for a File"
permalink: /kb/123/Q123470/
---

## Q123470: INFO: How SourceSafe Selects a Viewer for a File

	Article: Q123470
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft SourceSafe for MS-DOS, versions 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for Windows, versions 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for Windows NT, versions 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for Macintosh, versions 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for UNIX, versions 3.01, 3.02, 3.04 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To check settings to select a viewer for a file, SourceSafe follows these steps
	in order:
	
	1. Uses SRCSAFE.ini or SS.ini settings for selected extension. For example:
	
	  .DOC = C:\WINWORD\WINWORD.EXE %1
	
	2. Uses Editor setting in SRCSAFE.INI or SS.INI to set a default editor for all
	  files opened in SourceSafe. For example:
	
	  Editor = C:\WINWORD\WINWORD.EXE %1
	
	3. Uses the Windows registration database and WIN.INI to determine association
	  for the selected file's extension.
	
	4. Uses its default editor. To have SourceSafe use its default editor set the
	  variable in the SRCSAFE.INI or SS.INI to null. For example:
	
	  .PRG =
	
	MORE INFORMATION
	================
	
	In Visual SourceSafe 6.0 only, you can select an editor from the Visual
	SourceSafe Explorer. To do this, hold down the shift key, right-click on a file,
	select "View...," and then click Advanced >>. You can select the option to
	use the Visual SourceSafe default editor, registered application, or an editor
	of your choice.
	
	Additional query words: ss3 initialization
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe302 kbSSafe301DOS kbSSafe302DOS kbSSafe301 kbSSafe304 kbSSafe304DOS kbSSafe301Mac kbSSafe304Mac kbSSafe301UNIX kbSSafe302UNIX kbSSafe304UNIX kbSSafe302Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe301NT kbSSafe302NT kbSSafe304NT
	Issue type        : kbinfo
	
	=============================================================================
	
