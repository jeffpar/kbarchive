---
layout: page
title: "Q107170: Viewer's .BMK and .ANN Files"
permalink: /kb/107/Q107170/
---

## Q107170: Viewer's .BMK and .ANN Files

{% raw %}

	Article: Q107170
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The formats of the .ANN and .BMK files used by the Microsoft Multimedia Viewer
	version 2.0 are not documented.
	
	When a user adds annotations to a title using Viewer's Annotate dialog box, the
	annotations are stored in the file FILENAME.ANN in the Windows directory, where
	FILENAME is the filename of the .MVB file. Viewer cannot access the annotations
	if the .ANN file is moved out of the Windows directory.
	
	Bookmarks are saved to and retrieved from the VIEWER.BMK file. This file must
	also reside in the Windows directory.
	
	MORE INFORMATION
	================
	
	The only interface that Viewer provides to the annotations is the Annotate()
	command. This command brings up the Annotate dialog box. Viewer does not provide
	a way to programmatically determine whether a topic has annotations, nor does it
	provide a way to retrieve the annotations for a topic. Viewer also does not
	allow the paper clip annotation bitmap to be customized.
	
	The bookmark facility can be accessed only via the BookmarkDefine() and
	BookmarkMore() commands. The BookmarkDefine() command displays the Define dialog
	box where the user can enter bookmarks. The BookmarkMore() command displays a
	dialog box with a list of all the bookmarks defined in the title. Viewer does
	not provide a way to programmatically retrieve a list of all the bookmarks
	defined in the title, or to determine whether a given topic has a bookmark.
	There is also no way to obtain a list of the topics that have bookmarks.
	
	Additional query words: 2.00 file format
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
