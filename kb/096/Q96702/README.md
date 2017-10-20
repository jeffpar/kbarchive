---
layout: page
title: "Q96702: Bookshelf 1992: Manual Installation Instructions"
permalink: /kb/096/Q96702/
---

## Q96702: Bookshelf 1992: Manual Installation Instructions

{% raw %}

	Article: Q96702
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article includes instructions to manually install Bookshelf.
	
	MORE INFORMATION
	================
	
	NOTE: These directions assume your hard disk is drive C and your CD-ROM drive is
	drive X.
	
	To manually install Bookshelf, do the following:
	
	1. Create a directory called Viewer on drive C.
	
	2. Copy all files from the X:\Viewer directory on the CD-ROM to the C:\Viewer
	  directory.
	
	3. Copy *.ico from the X:\Books directory on the CD-ROM to C:\Viewer.
	
	4. Edit the PATH statement in your Autoexec.bat file to include the C:\Viewer
	  directory.
	
	5. The Bookshelf Setup program installs special screen fonts. To install these
	  fonts manually, do the following.
	  a. In the Microsoft Windows Control Panel, click Fonts from the Settings
	     menu.
	
	  b. If you are using Windows 3.x, click Add Fonts.
	
	     If you are using Windows 95, click File, then click Install New Font.
	
	  c. In the Add Fonts dialog box, select drive X in the drives control. Then,
	     in the Directories control, select the VIEWER directory. The List of Fonts
	     control shows the following contents:
	
	  Lucida Sans B 10,12,14
	  Lucida Sans B1 10,12,14
	  Lucida Sans B2 10,12,14
	  Symbol B
	
	  d. Click Select All.
	
	  e. Click OK.
	
	  f. Click Close.
	
	6. To create a new program group called "Microsoft Bookshelf - 1992", use the
	  steps below.
	
	  If you are using Windows 3.x, do the following:
	  a. On the File menu, in Program Manager click New.
	
	  b. Select New Program Group and click OK.
	
	  c. In the Program Group Properties dialog box, type "Microsoft Bookshelf -
	     1992" (without the quotation marks) in the Description filed and click OK.
	
	  If you are using Windows 95, do the following:
	  a. With your right mouse button, click Start. Click Explore. Then,
	     double-click the Programs folder.
	
	  b. Click File, then click New, then click Folder.
	
	  c. Rename the folder "Microsoft Bookshelf - 1992" (without the quotation
	     marks).
	
	7. For each item in the table below, perform the following steps to add a
	  program item to the Microsoft Bookshelf - 1992 group.
	
	  If you are using Windows 3.x:
	  a. In the Program Manager, click New on the File menu, then click OK, then
	     proceed to step b, below.
	
	  If you are using Windows 95:
	  a. Open the Microsoft Bookshelf - 1992 folder. On the File menu in Explorer,
	     click New, and then click Shortcut.
	
	  b. Type the description and command line in the corresponding fields in the
	     Program Item Properties dialog box. In the table below, the underscore (_)
	     is used as a line continuation character. When you type the command line
	     in the dialog box, do not type the underscore; type the entry as a
	     continuous line.
	
	  c. Click Change Icon. In the Change Icon dialog box, type the path to the
	     icon file and click OK. Then, click OK again.
	
	        Description:  Bookshelf 1992
	        Command Line: c:\viewer\viewer.exe x:\books\books92.mvb
	        Icon:         c:\viewer\books92.ico
	
	        Description:  Concise Quotes
	        Command Line: c:\viewer\viewer.exe x:\books\cquote92.mvb
	        Icon:         c:\viewer\cquote92.ico
	
	        Description:  Bartlett's
	        Command Line: c:\viewer\viewer.exe x:\books\bquote92.mvb
	        Icon:         c:\viewer\bquote92.ico
	
	        Description:  Encyclopedia
	        Command Line: c:\viewer\viewer.exe x:\books\encyc92.mvb
	        Icon:         c:\viewer\encyc92.ico
	
	        Description:  Dictionary
	        Command Line: c:\viewer\viewer.exe x:\books\dict92.mvb
	        Icon:         c:\viewer\dict92.ico
	
	        Description:  Thesaurus
	        Command Line: c:\viewer\viewer.exe x:\books\roget92.mvb
	        Icon:         c:\viewer\roget92.ico
	
	        Description:  Atlas
	        Command Line: c:\viewer\viewer.exe x:\books\atlas92.mvb
	        Icon:         c:\viewer\atlas92.ico
	
	        Description:  1992 Almanac
	        Command Line: c:\viewer\viewer.exe x:\books\wa92.mvb
	        Icon:         c:\viewer\wa92.ico
	
	        Description:  Bookshelf Overview
	        Command Line: c:\viewer\viewer.exe -imenuHelpdemo _
	                      x:\books\bks92.mvh
	        Icon:         c:\viewer\overview.ico
	
	        Description:  Multimedia Works Demonstration
	        Command Line: x:\demo\workscbt.exe x:\demo\demo386.les
	        Icon:         x:\demo\demo.ico
	
	        Description:  Bookshelf Readme
	        Command Line: notepad.exe x:\readme.txt
	        Icon:         <no change required>
	
	        Description:  Quickeys
	        Command Line: c:\viewer\quickeys.exe
	        Icon:         <no change required>
	
	8. Exit Windows and restart your computer. The installation is complete.
	
	Additional query words: 1992 multi media multimedia multi-media installation
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
