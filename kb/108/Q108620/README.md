---
layout: page
title: "Q108620: PRB: Can't Find QuickTime Movie Embedded in General Field"
permalink: /kb/108/Q108620/
---

## Q108620: PRB: Can't Find QuickTime Movie Embedded in General Field

	Article: Q108620
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you double-click a QuickTime movie that is embedded in a general field, a
	dialog box with the following message is displayed:
	
	  The movie file "<name of movie>" cannot be found. Without this file,
	  the movie cannot play properly.
	
	CAUSE
	=====
	
	Because QuickTime movies can be very large in size, they can only be linked to
	the general field rather than truly embedded. If a QuickTime movie is linked to
	a general field, the movie must be able to be located for it to be played.
	
	RESOLUTION
	==========
	
	Link the QuickTime movie to the field again so that the path to the movie is
	updated.
	
	MORE INFORMATION
	================
	
	FoxPro for Macintosh comes with a QT OLE Server program that is used for
	inserting (linking) QuickTime movies in general fields in FoxPro databases.
	Visual FoxPro for Macintosh version 3.0b comes with Microsoft Movie version
	1.0.1.
	
	Steps to Reproduce Problem
	--------------------------
	
	These steps apply to FoxPro for Macintosh version 2.x only.
	
	1. Insert a QuickTime movie in the general field of a FoxPro for Macintosh
	  database by opening the general field and choosing Insert Object from the
	  Edit menu. Select QuickTime Movie from the list of object types shown in the
	  Insert Object dialog box. Then choose the File button and locate the desired
	  QuickTime movie.
	
	  The QuickTime movie should now be linked to the general field.
	
	2. Double-click the movie to play it. If it plays properly, close the general
	  field. If it doesn't play, repeat step 1.
	
	3. Switch to the Finder and drag the QuickTime movie that is linked to the
	  general field to the Trash. (Make sure you have a backup copy of the movie.)
	
	4. Empty the Trash.
	
	5. Switch back to FoxPro and reopen the general field by double-clicking it in
	  the Browse window.
	
	6. Double-click the movie. The dialog box described above should appear.
	
	Additional query words: vFoxMac FoxMac object linking and embedding errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
