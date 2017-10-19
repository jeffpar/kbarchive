---
layout: page
title: "Q112183: PRB: Copied QuickTime Movie Appears to Play in Fast Forward"
permalink: /kb/112/Q112183/
---

## Q112183: PRB: Copied QuickTime Movie Appears to Play in Fast Forward

	Article: Q112183
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are playing a movie stored in a general field, the QuickTime object
	linking and embedding (OLE) server application plays the first frame of the
	movie and then quits, returning the focus to the general field window.
	
	CAUSE
	=====
	
	When the movie was pasted into the general field, only a single frame of the
	movie was copied to the Clipboard before pasting.
	
	RESOLUTION
	==========
	
	Before choosing Copy from the Edit menu, make sure you select all the frames of
	the movie. You can do this in either of two ways:
	
	- From the Edit menu, choose Select All.
	
	-or-
	
	- With the frame control positioned to the extreme left of the progress
	  indicator located at the bottom of the movie window, press the SHIFT key and
	  drag the frame control to the extreme right of the progress indicator.
	  Release the SHIFT key.
	
	Using either method, all frames in the movie should be selected, indicated by the
	black fill of the interior of the progress indicator. Once all the frames have
	been copied, return to FoxPro and paste the new contents of the Clipboard into
	the general field. The single movie frame will be replaced with the entire
	movie.
	
	NOTE: There are two alternatives to the previous method of inserting a QuickTime
	movie into a general field. The first alternative is to choose Insert Object
	from the Edit menu. This item is available when a general field window is the
	active window. For more information about the Insert Object menu command, see
	page 57 of the FoxPro for Macintosh "User's Guide."
	
	The second method is to issue the APPEND GENERAL command in the Command window.
	The syntax of this command is as follows:
	
	    APPEND GENERAL <general field>
	      FROM <file>
	      [LINK] [CLASS <ole class>]
	
	An explanation of this command can be found on page 183 of the FoxPro for
	Macintosh "Language Reference." In the case of QuickTime movies, the OLE class
	is "QuickTime Movie".
	
	For example, given a QuickTime movie named QTLogo located in the Macintosh
	HD:Movies subfolder and a table in the currently selected work area with a
	general field named Object, you could use the following command to insert QTLogo
	into the Object general field:
	
	    APPEND GENERAL Object ;
	      FROM "Macintosh HD:Movies:QTLogo" ;
	      CLASS "QuickTime Movie"
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a table that contains a general field, or create a new one by typing the
	  following command in the Command window:
	
	        CREATE TABLE QTTable (Object G)
	
	2. Switch back to the Finder and open the QuickTime server application, "QT Ole
	  Server", which is located in the System Folder:Extensions: Microsoft:MS QT
	  OLE subfolder.
	
	3. From the File menu, choose Open, and select a movie. Play the movie to be
	  certain that the movie consists of more than a single frame.
	
	4. From the Edit menu, choose Copy.
	
	5. Return to FoxPro, and choose Browse from the Database menu.
	
	6. From the Browse menu, choose Append Record.
	
	7. Double-click the general field. A window titled "QTTable.Object" appears.
	
	8. From the Edit menu, choose Paste. The first frame of the movie should appear
	  in the general field.
	
	9. Double-click the general field. The QuickTime OLE server application will
	  come to the foreground to play the movie contained in the general field.
	  Since only a single frame was copied to the Clipboard in step 4, the
	  QuickTime OLE server application will appear for only an instant and then
	  terminate.
	
	Additional query words: VFoxMac FoxMac QT QTIME EMBED LINK quick time fastforward
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
