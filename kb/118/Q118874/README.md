---
layout: page
title: "Q118874: Command-Line Options for MVIEWER2.EXE"
permalink: /kb/118/Q118874/
---

## Q118874: Command-Line Options for MVIEWER2.EXE

	Article: Q118874
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	The syntax for the command line to launch the Viewer application
	(MVIEWER2.EXE) with a title is as follows:
	
	     MVIEWER2.EXE title.mvb
	
	where "title.mvb" would be replaced with the filename of the title to be
	opened.
	
	To start Viewer at a particular topic within a title, the -i command-line
	option can be used. This is the syntax for the -i command-line option:
	
	     MVIEWER2.EXE -i context_string title.mvb
	
	where "context_string" would be replaced with the context string of the
	topic to be initially displayed. The -i switch is most useful for testing.
	
	To cause a title to always open at a given topic, you can use the CONTENTS=
	option in the .MVP file.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
