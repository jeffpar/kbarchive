---
layout: page
title: "Q101135: Main Window Does Not Appear When Program Is Launched"
permalink: /kb/101/Q101135/
---

## Q101135: Main Window Does Not Appear When Program Is Launched

	Article: Q101135
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1993 edition,1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1993 edition 
	- Microsoft Cinemania for Windows 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application that uses Microsoft Multimedia Viewer version 2.0 as
	the engine, only the toolbox may appear. Or, if the Show Toolbox option is
	turned off (disabled), the screen may be entirely blank.
	
	RESOLUTION
	==========
	
	If this occurs, use one of the following methods to bring the program window
	into view:
	
	- The opening window position can be manually modified in the [Multimedia
	  Viewer] section of the Win.ini file.
	
	  -or-
	
	- Do the following for your version of Windows:
	
	  Windows 95
	  ----------
	
	  In Windows 95 click the Task Bar with your right mouse button, then click
	  Cascade. This cascades all open windows. After you click Cascade, close or
	  minimize the windows you do not want open.
	
	  Windows 3.x
	  -----------
	
	  Press and hold down the CTRL key and the ESC key (CTRL+ESC) to run the Task
	  List, then click Cascade.
	
	MORE INFORMATION
	================
	
	To manually change the opening position of Viewer, change the [Multimedia
	Viewer] section of the Win.ini file. A typical example of the line in this
	section that determines the opening position is:
	
	  M_WindowPosition=[0,0,597,472,0]
	
	The first two zeros in this line are responsible for the horizontal and vertical
	position of the main opening window (respectively). The larger the first number,
	the farther to the right the window will open. The larger the second number, the
	farther down the screen the window will open. A "0,0" choice will position the
	upper-left corner of the window in the upper-left corner of the monitor.
	
	This problem may be more likely to occur if you have Bookshelf's Word integration
	installed. Quote-Of-The-Day runs Bookshelf off-screen whenever you start Word.
	Because Bookshelf and Cinemania both use the Viewer engine, this affects both
	applications. If Bookshelf's coordinates are not restored, any application using
	Viewer 2.0, will run off-screen and you will only see the toolbox.
	
	Additional query words: msn_bookshelf 1.00 multimedia multi media multi- start started toolbar maximize off screen offscreen Usage Viewer 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbBookshelfSearch kbCineManiaSearch kbBookShelf1993 kbCinemania1994
	Version           : :1993 edition,1994 edition
	
	=============================================================================
	
