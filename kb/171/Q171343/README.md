---
layout: page
title: "Q171343: FP: How to Edit the List of Servers in FrontPage Explorer"
permalink: /kb/171/Q171343/
---

## Q171343: FP: How to Edit the List of Servers in FrontPage Explorer

	Article: Q171343
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97,macintosh:1.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194109.
	
	SUMMARY
	=======
	
	This article explains how to remove Web server or file location entries that
	appear in the "Web Server or File Location" list in the Open FrontPage Web
	dialog box (File menu).
	
	MORE INFORMATION
	================
	
	Windows Versions
	----------------
	
	To delete Web server or file location entries that appear in the Open FrontPage
	Web dialog box, edit the Fpexplor.ini file and modify the [Recently Opened
	Servers] section. To do this, follow these steps:
	
	1. On the Windows Start menu, point to Programs, and then click Windows
	  Explorer.
	
	2. In the Windows folder, double-click the Fpexplor.ini file.
	
	3. Locate the [Recently Opened Servers] section in the Fpexplor.ini file.
	
	4. Delete the line that contains the Web server you do not want to be listed in
	  the "Web Server or File Location" list in the Open FrontPage Web dialog box.
	  For example, if the [Recently Opened Servers] section of the Fpexplor.ini
	  file looks like this:
	
	     [Recently Opened Servers]
	     Recent Server Count=4
	     WebServer0=file:///c:/temp
	     WebServer1=carboncopy
	     WebServer2=production_Web
	     WebServer3=finance_Web
	
	  delete the Web that you do not want. For example, delete the
	  WebServer2=production_Web line so that the [Recently Opened Servers] section
	  looks like this:
	
	     [Recently Opened Servers]
	     Recent Server Count=4
	     WebServer0=file:///c:/temp
	     WebServer1=carboncopy
	     WebServer3=finance_Web
	
	5. Renumber the WebServer entries so that the first entry is WebServer0 and each
	  subsequent entry increments by one. Change the Recent Server Count value to
	  equal the number of servers listed in this section. For example, the
	  [Recently Opened Servers] section of the Fpexplor.ini file should look like
	  this:
	
	     [Recently Opened Servers]
	     Recent Server Count=3
	     WebServer0=file:///c:/temp
	     WebServer1=carboncopy
	     WebServer2=finance_Web
	
	6. Save and close the file.
	
	Macintosh Version
	-----------------
	
	To remove the Web server entries, follow these steps:
	
	1. Open the System Folder folder.
	
	2. Open the Preferences folder.
	
	3. Delete the FrontPage Explorer Preferences file.
	
	  All Web server entries, except the default hard disk, will be removed from the
	  "Web Server or File Location" list.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97,macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
