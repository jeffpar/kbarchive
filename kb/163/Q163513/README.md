---
layout: page
title: "Q163513: Mac Multimedia: Internet Config Error Messages and Solutions"
permalink: /kb/163/Q163513/
---

## Q163513: Mac Multimedia: Internet Config Error Messages and Solutions

	Article: Q163513
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996 edition,1996-1997,1997 edition
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbimukbfaq
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf version 1996-1997 for the Macintosh 
	- Microsoft Cinemania for the Macintosh versions 1996 edition, 1997 edition 
	- Microsoft Encarta 96 Encyclopedia for Macintosh 
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	- Microsoft Encarta 98 Encyclopedia for Macintosh 
	- Microsoft Music Central for the Macintosh, 1996, 1997 editions 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click an Internet link in one of the programs listed earlier in this
	article, nothing may happen, or you may receive one of the following error
	messages:
	
	  Internet Config could not launch the helper application for that URL. See the
	  Encarta 97 Read Me for more assistance.
	
	  Internet Config is not properly installed. Please launch Internet Config and
	  ensure that you have a valid helper application selected for this Internet
	  resource type.
	
	In addition, when you start the Internet Config extension, the list in the
	Helpers window may be empty, or you may receive the following error message:
	
	  Could not create a new document because an unexpected end of file was
	  reached. This usually indicates that your "Internet Preferences" file is
	  corrupt. Throw it away and re-enter your preferences. (-39)
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- You have not started the Internet Config extension.
	
	- The HTTP setting in the Internet Config extension is configured to use a Web
	  browser that is no longer installed on your computer.
	
	- The Internet Preferences file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. If you use America Online (AOL) as your Internet service provider (ISP) and
	  you use version 2.7 or earlier of the AOL software, download and install the
	  latest version of the AOL software from the AOL Web site.
	
	2. Verify that Internet Config starts properly. To do this, follow these steps:
	
	  a. On the Apple menu, point to Control Panels, and then click Extensions
	     Manager.
	
	  b. In the list of extensions, click to select the Internet Config Extension
	     check box.
	
	  c. Click Restart, or quit Extensions Manager and then restart the computer.
	
	3. On the Apple menu, point to Control Panels, and then click Internet Config
	  Extension.
	
	4. Click Helpers.
	
	5. In the list of helpers, click HTTP, and then click Change.
	
	  NOTE:If the list of helpers is empty, rebuild the Internet Preferences file.
	  To do this, follow these steps:
	
	  a. Double-click the hard disk icon on the desktop, double-click the System
	     folder, and then double-click the Preferences folder.
	
	  b. Drag the Internet Preferences file to the Trash.
	
	  c. On the Special menu, click Restart.
	
	  d. Repeat steps 3-5.
	
	6. Click Choose Helper, click the Web browser you want to use when you connect
	  to the Internet from one of the programs listed earlier in this article, and
	  then click Open.
	
	7. Click OK, and then close the Helpers window.
	
	8. Quit the Internet Config extension.
	
	MORE INFORMATION
	================
	
	Internet Config 1.3 is a public domain utility that enables you to specify the
	programs you want to use to connect to your ISP.
	
	Additional query words: 1996 1997 multi multi-media media macmm internetconfig ic
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbimu kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbCineManiaSearch kbBookShelf1996Mac kbBookShelf1997Mac kbCinemania1996Mac kbCinemania1997Mac kbMusicCentralMacSearch kbEncartaEnCyc1996Mac kbEncartaEnCyc1997Mac kbEncartaEnCyc1998Mac kbMusicCentralMac1996
	Version           : :1996 edition,1996-1997,1997 edition
	Issue type        : kbprb
	
	=============================================================================
	
