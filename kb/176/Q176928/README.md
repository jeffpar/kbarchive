---
layout: page
title: "Q176928: Bookshelf Err Msg: Could Not Open the File..."
permalink: /kb/176/Q176928/
---

## Q176928: Bookshelf Err Msg: Could Not Open the File...

{% raw %}

	Article: Q176928
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmm kbsetup kbimu
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Bookshelf 98 for Windows, you may receive
	the following error message when the progress bar reaches the 85-87% range:
	
	  Could not open the file. Please check that the disk is not full, and that you
	  have access to the directory.
	
	CAUSE
	=====
	
	This behavior can occur if a previous attempt to install Bookshelf 98 did not
	complete successfully.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and reinstall Bookshelf 98. To do so, use the
	following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK:
	
	     winfile.exe
	
	3. On the File menu, click Search.
	
	4. In the Search For box, type "install.log" (without the quotation marks).
	
	5. In the Start From box, type the following line, and then click OK
	
	     c:\ 
	
	  where C is the letter of the hard drive where Bookshelf is installed.
	
	6. Note the path for the Install.log file that appears in the Search Results
	  window, and then close File Manager.
	
	7. Insert the Bookshelf CD-ROM into your CD-ROM drive. Press and hold down the
	  SHIFT key when you insert the CD-ROM to prevent the Bookshelf Setup program
	  from starting automatically.
	
	8. Click Start, and then click Run.
	
	9. In the Open box, type the following line, and then click OK
	
	     d:\apps\unwise.exe <install path>
	
	  where D is the drive letter of your CD-ROM drive, and <install path> is
	  the path to the Install.log file you obtained in step 4. The line should
	  appear similar to the following:
	
	     d:\apps\unwise.exe c:\progra~1\micros~5\booksh~1\install.log
	
	10. Click Automatic, click Next, and then click Finish.
	
	11. Click Start, and then click Run.
	
	12. In the Open box, type the following line, and then click OK
	
	     d:\setup.exe
	
	  where D is the drive letter of your CD-ROM drive.
	
	13. Follow the instructions on the screen to reinstall Bookshelf 98.
	
	Additional query words: 98 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbsetup kbimu 
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1998
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
