---
layout: page
title: "Q256147: BS2000 Err Msg: Current Shockwave Cannot Handle New Format"
permalink: /kb/256/Q256147/
---

## Q256147: BS2000 Err Msg: Current Shockwave Cannot Handle New Format

	Article: Q256147
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Bookshelf 2000, you may receive the following error
	message:
	
	  This page contains a new Shockwave format movie that the current Shockwave
	  control cannot handle. Would you like to download the newer version of the
	  control?
	
	If you click No, Bookshelf 2000 starts, but the home screen is not displayed.
	
	If you click Yes, you are connected to a Macromedia Web site from which you can
	download and install the latest version of Macromedia Shockwave Director. When
	you click the Install button, you receive the preceding error message again.
	
	  If you click No, Bookshelf 2000 starts, but the home screen is not
	  displayed.
	
	  If you click Yes, another instance of your Web browser starts, and you are
	  again connected to the same Macromedia Web site as before to obtain the
	  latest version of Macromedia Shockwave Director. You can continue this
	  sequence loop indefinitely.
	
	  NOTE: To exit the loop, quit your Web browser.
	
	CAUSE
	=====
	
	This behavior can occur if Macromedia Shockwave Director version 7.0.3 or later
	is installed on the computer when you install Bookshelf 2000.
	
	Bookshelf 2000 Setup installs Macromedia Shockwave Director version 7.0.2. If you
	install Macromedia Shockwave Director version 7.0.2 on top of Macromedia
	Shockwave version 7.0.3, the functionality of Macromedia Shockwave Director
	within Bookshelf 2000 is broken.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and run the Bsfix00.exe file.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Bsfix00.exe
	  (http://download.microsoft.com/download/bookshelf2000/Patch/1.0/WIN98/EN-US/Bsfix00.exe)
	
	Release Date: Mar-10-2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The Bsfix00.exe file removes registry entries from Microsoft Windows 95,
	Microsoft Windows 98, and Microsoft Windows 2000. When you are prompted to
	restart your computer after you finish running the program, do so.
	
	When your computer has restarted, use the appropriate method for your version of
	Microsoft Windows to reinstall the correct version of Macromedia Shockwave
	Director.
	
	Windows 95/98
	-------------
	
	1. Start Bookshelf 2000.
	
	2. You should receive the following error message:
	
	  One or more Shockwave files are missing. Would you like to go to Macromedia's
	  Web site to repair your Shockwave Player?
	
	3. Click Yes.
	
	  NOTE: If you click No, Bookshelf starts, but you do not receive the Bookshelf
	  home screen.
	
	4. When you are connected to the Macromedia Web site, fill out the registration
	  form, and then follow the instructions on the screen to install the correct
	  version of Macromedia Shockwave Director.
	
	5. If you are not prompted to restart your computer, click "Make sure your
	  installation was successful".
	
	6. When you are prompted to restart your computer, click Yes.
	
	7. Start Bookshself 2000.
	
	NOTE: This preceding method removes the current version of Macromedia Shockwave
	Director and installs the appropriate version (version 7.0.2) for BookShelf
	2000. If you reinstall the latest update of Macromedia Shockwave Director
	(version 7.0.3), BookShelf 2000 becomes broken and cannot function properly. If
	this is the case, repeat the steps in the preceding method.
	
	Windows 2000
	------------
	
	1. Start Bookshelf 2000.
	
	2. You should receive the following error message:
	
	  One or more Shockwave files are missing. Would you like to go to Macromedia's
	  Web site to repair your Shockwave Player?
	
	3. Click Yes.
	
	  NOTE: If you click No, Bookshelf starts, but you do not receive the Bookshelf
	  home screen.
	
	4. When you are connected to the Macromedia Web site, fill out the registration
	  form, and then follow the instructions on the screen to install the correct
	  version of Macromedia Shockwave Director.
	
	5. A second instance of yor Web browser may start and run a Macromedia Shockwave
	  animation movie.
	
	  If this occurs, and the animation movie runs properly, proceed to the next
	  step.
	
	  If the second instance of the Web browser starts but no animation movie is
	  displayed, quit this second instance of the Web browser. This behavior can
	  occur if the connection to the Macromedia Web site is too slow. In this case,
	  click "Make sure your installation was successful". You should receive a
	  screen that displays a different animation movie.
	
	6. Quit your Web browser.
	
	7. Start Bookshelf 2000.
	
	NOTE: Macromedia Shockwave Director version 7.0.3 should be installed on your
	Windows 2000-based computer.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: multi multi-media media mm bs2k dictionary
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf2000
	Version           : WINDOWS:
	
	=============================================================================
	
