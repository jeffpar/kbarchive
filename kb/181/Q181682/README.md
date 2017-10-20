---
layout: page
title: "Q181682: Project SBS: Cannot Find Installation Directory On CD-ROM"
permalink: /kb/181/Q181682/
---

## Q181682: Project SBS: Cannot Find Installation Directory On CD-ROM

{% raw %}

	Article: Q181682
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Project 98 Step by Step ISBN 1-57231-605-5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for the Microsoft Project 98 Step by Step
	practice files, you may receive an error message similar to the following:
	
	  The book's files are supposed to be in a directory named 'Project 98 SBS
	  Practice.' Setup cannot find this directory, so it's exiting.
	
	CAUSE
	=====
	
	There are two possible causes for this error. One is a known problem with the
	Setup directions on page xxii. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q****** Project SBS Page xxii: Setup Directions Do Not Work
	
	This error also occurs when you are using MS-DOS or real-mode CD-ROM drivers to
	view the Project 98 Step by Step CD-ROM. The Step by Step CD- ROMs were
	manufactured using long filenames and filenames containing spaces and lowercase
	letters. These filenames and directory names are not readable when using real
	mode drivers.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	Copy the Files to Your Hard Disk
	--------------------------------
	
	1. Insert the Project 98 Step by Step CD-ROM into your CD-ROM drive.
	
	2. Click Start, point to Programs, and then click Windows Explorer.
	
	3. In the All Folders pane of Windows Explorer, scroll down until you see your
	  CD-ROM drive. Double-click the CD-ROM drive.
	
	4. If necessary, navigate through the CD-ROM drive until you see the practice
	  folder. The practice folder may have a name similar to one of the following
	  names:
	
	  Projec~9
	  Practi~1
	
	5. In the All Folders pane, use the right mouse button to click (right-click)
	  the practice folder.
	
	6. Click Copy on the shortcut menu. A copy of the practice folder and its
	  contents are stored on the Clipboard.
	
	7. In the All Folders pane, click your hard drive.
	
	8. In the Contents pane, right-click a blank area, and then click Paste on the
	  shortcut menu.
	
	9. In the Contents pane, use the right mouse button to click on the newly copied
	  practice folder, and then click Rename on the shortcut menu. Change the
	  folder name to the following
	
	  Project 98 SBS Practice
	
	  and then on the File menu, click Close.
	
	At this point the practice files are installed on your hard disk. However, the
	files are all still marked as Read Only.
	
	Remove the Read Only Attribute
	------------------------------
	
	To remove the Read-only attribute, follow these steps:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. Navigate to the practice directory.
	
	3. With the practice directory open in the right pane of Windows Explorer, on
	  the Edit Menu, click Select All.
	
	4. Right-click anywhere in the selected area and click Properties on the
	  shortcut menu.
	
	5. Under Attributes, click the Read-Only check box once to select it, and then
	  click the check box again to clear it.
	
	This procedure will not install the Internet shortcuts mentioned in the
	"Installing and Using the Practice Files" section of your book. To install the
	Internet shortcuts, copy them from the root directory of your CD-ROM to your
	desktop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in "Microsoft Project 98 Step by
	Step."
	
	
	Additional query words: press ms_press 1-57231-605-5
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
