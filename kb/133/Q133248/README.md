---
layout: page
title: "Q133248: Microsoft Plus! for Windows 95 Questions and Answers"
permalink: /kb/133/Q133248/
---

## Q133248: Microsoft Plus! for Windows 95 Questions and Answers

	Article: Q133248
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains questions and answers about Microsoft Plus! for Windows
	95.
	
	MORE INFORMATION
	================
	
	1. Q. I enabled the Smooth Edges Of Screen Fonts feature, but I do not see any
	  difference. What does this feature do and how can I tell if I am using it?
	
	  A. This feature fills the jagged edges of fonts with pixels of an intermediate
	  color to make the edges look smoother. You need a Windows 95 video driver
	  using more than 256 colors to use this feature.
	
	  To see if the feature is working, type some large text in Paint and save it.
	  Do this again with the Smooth Edges Of Screen Fonts option turned off. Open
	  both files and position them so you can see both. On the View menu, point to
	  Zoom, then click Large Size. Compare the two documents.
	
	2. Q. I enabled the Show Windows Contents While Dragging feature, but it does
	  not work for all programs. Why?
	
	  A. Many programs simulate window dragging by drawing a ghost rectangle and
	  then moving the window when the mouse button is released. These programs
	  bypass the code that implements the Show Windows Contents While Dragging
	  feature and continue to function as they were originally written.
	
	3. Q. I installed animated icons, but they are black and white and do not work.
	  Why?
	
	  A. The following requirements must be met for animated icons to work
	  correctly:
	
	   - You must be using protected-mode disk drivers.
	
	   - You must be using a Windows 95 video driver that meets certain criteria.
	     Not all Windows 95 video drivers support animated icons.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q123334 Requirements for Animated Cursors
	
	4. Q. My Microsoft Plus! screen saver does not display the entire screen. I
	  enabled the "Stretch desktop wallpaper to fit the screen" feature but it does
	  not help. What is wrong?
	
	  A. Nothing is wrong. The amount of detail displayed depends on the video
	  resolution you are using. For example, if you are using a 640 x 480
	  resolution, less of the screen is displayed than if you use a 1024 x 768
	  resolution. To determine which resolution you are using, follow these steps:
	
	  1. Use the right mouse button to click the desktop, then click Properties on
	     the menu that appears.
	
	  2. Click the Settings tab.
	
	  3. Check the Desktop Setting area.
	
	5. Q. When I upgraded my hard disk to DriveSpace 3, the amount of space used on
	  my compressed drive increased. Why?
	
	  A. Microsoft Plus! supports storing up to two gigabytes (GB) of data on a
	  compressed drive. Earlier versions of DriveSpace and DoubleSpace support
	  storing only 512 megabytes (MB). To accomplish this increase in capacity, the
	  compressed drive's reported cluster size has been increased from 8K to 32K.
	
	  The smallest file allocation table (FAT) unit is one cluster. On a typical
	  hard disk (between 250 and 500 MB), the cluster size is 8K. On such a drive,
	  a 1-byte file uses a single cluster, leaving 7999 bytes unused. This unused
	  space is called slack space. Moving a 1-byte file from a drive with 8K
	  clusters to a drive with 32K clusters results in greater slack space and
	  greater reported used disk space. To maintain compatibility, DriveSpace 3
	  drives must report the increased slack space.
	
	6. Q. I compressed my hard disk with DriveSpace 3 and now my MS-DOS-based
	  programs do not have enough memory to run in MS-DOS mode. How can I get
	  enough memory to run these programs?
	
	  A. To support the enhanced compression capabilities in Microsoft Plus!, the
	  compression driver uses more conventional memory.
	
	  Microsoft Plus! includes a wizard to help you create a boot disk that does not
	  load the real-mode compression driver. To start this wizard, run the
	  Nocomp.exe tool from the Program Files\Plus!\System folder.
	
	7. Q. There is a folder on my hard disk called ~MSSETUP.T. Do I need to keep
	  this folder?
	
	  A. This folder is used while you are setting up Microsoft Plus!. It is not
	  needed after Setup is finished so you can remove it.
	
	8. Q. I ran the Internet Setup Wizard and now I no longer have a local telephone
	  number to access The Microsoft Network. Why?
	
	  A. The Microsoft Network uses two sets of telephone access numbers. One set
	  provides access to The Microsoft Network, while the other set provides access
	  to the Internet and to The Microsoft Network. If you have only one access
	  number, your area may not have a number for accessing the Internet and The
	  Microsoft Network.
	
	9. Q. Why can I not save the password for my Internet service provider after I
	  install Microsoft Plus!?
	
	  A. You cannot save your password if the password cache feature is not
	  enabled.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q137361 Save Password Check Box is Unavailable
	
	10. Q. The Internet Setup Wizard replaced the DNS configuration settings on my
	  computer. Why?
	
	  A. Windows 95 supports only three DNS entries, so the Internet Setup Wizard
	  replaces existing entries as necessary.
	
	Additional query words: win95q a win95faq w95tlc dblspace drvspace compression
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : :95
	
	=============================================================================
	
