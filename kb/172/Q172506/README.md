---
layout: page
title: "Q172506: Step By Step Setup Cannot Find Installation Directory On Disk"
permalink: /kb/172/Q172506/
---

## Q172506: Step By Step Setup Cannot Find Installation Directory On Disk

{% raw %}

	Article: Q172506
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Access 97 Visual Basic Step by Step ISBN 1-57231-319-6 
	- MSPRESS Microsoft Excel 97/Visual Basic Step by Step ISBN 1-57231-318-8 
	- MSPRESS Microsoft Word 97 Step by Step Complete Course ISBN 1-57231-579-2 
	- MSPRESS Microsoft Office 97/Visual Basic Step by Step ISBN 1-57231-389-7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for the Step by Step practice files, you may
	receive an error message similar to the following:
	
	  The book's files are supposed to be in a directory named 'Access VBA
	  practice.' Setup cannot find this directory, so it's exiting.
	
	The directory name will be different depending on the Step by Step book you are
	using.
	
	CAUSE
	=====
	
	This error occurs when you are using MS-DOS or real-mode CD-ROM drivers to view
	the Step by Step CD-ROM. The Step by Step CD-ROMs were manufactured using long
	filenames and filenames containing spaces and lowercase letters. These filenames
	and directory names are not readable by real-mode drivers.
	
	WORKAROUND
	==========
	
	To work around this problem use the following steps:
	
	1. Insert the Step by Step CD-ROM into your CD-ROM drive.
	
	2. Click Start, point to Programs, and then click Windows Explorer.
	
	3. In the All Folders pane of Windows Explorer, scroll down until you see your
	  CD-ROM drive. Double-click the CD-ROM drive.
	
	4. In the All Folders pane, use the right-mouse button to click the practice
	  folder. The practice folder will have one of the following names:
	
	  ACCESS~1 Access 97 Visual Basic Step by Step
	  EXCELV~1 Excel 97 Visual Basic Step by Step
	  OFFICE~1 Office 97 Visual Basic Step by Step
	  WINWOR~1 Word 97 Step by Step (part of Complete Course)
	  WORDAT~1 Word 97 Advanced Topics Step by Step
	
	5. Click Copy on the shortcut menu. A copy of the practice folder and its
	  contents is stored on the Clipboard.
	
	6. In the All Folders pane, click your hard drive.
	
	7. In the Contents pane, use the right-mouse button to click a blank area, and
	  then click Paste on the shortcut menu.
	
	8. In the Contents pane, use the right-mouse button to click on the newly copied
	  practice folder, and then click Rename on the shortcut menu. Change the
	  folder name to a name that matches your book. Examples include:
	
	  Access VBA Practice
	  Excel VBA Practice
	  Office VBA Practice
	  Winword SBS Practice
	  Word AT Practice
	
	9. Close the Windows Explorer.
	
	At this point the practice files are installed on your hard disk. However, the
	files are all marked as Read Only.
	
	To remove the Read-only attribute, follow these steps:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. Navigate to the practice directory.
	
	3. With the practice directory open in the right pane of Windows Explorer, on
	  the Edit Menu, click Select All.
	
	4. Right-click anywhere in the selected area and click Properties on the
	  shortcut menu.
	
	5. Under Attributes, click the Read-Only check box once to select it, and then
	  click the check box again to clear it.
	
	NOTE: This procedure will not correct long practice file filenames. For some
	titles you will need to decode names such as "ATLESS~2.DOC" to "AT Lesson
	02.doc". Microsoft is aware of this additional issue and will post further
	information when available.
	
	This procedure will not install the Internet shortcuts mentioned in the
	"Installing and Using the Practice Files" section of your book. To install the
	Internet shortcuts, copy them from the root directory of the CD-ROM to your
	desktop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: mspress ms_press press sbs bookbug
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
