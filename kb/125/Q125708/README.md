---
layout: page
title: "Q125708: Applications Using Common Dialogs Append Default Extension"
permalink: /kb/125/Q125708/
---

## Q125708: Applications Using Common Dialogs Append Default Extension

{% raw %}

	Article: Q125708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a file in an application, you cannot give the file any extension
	other than that application's default extension. For example, when you specify
	the filename FILENAME.EXT for a file in Notepad, the file is saved as
	FILENAME.EXT.TXT.
	
	CAUSE
	=====
	
	This behavior is by design for any application that uses the common dialog boxes
	(such as the Save As dialog box). This behavior is generally desirable because
	it lets you see the appropriate files for the application you are using when you
	use the common Open dialog box to open files.
	
	Note that if the extension you specify when you are saving a file is a registered
	file type in Windows, an application that uses the common dialog boxes will not
	append its default extension to the filename you specify. For example, you can
	specify an .INI extension for a file that you save in Notepad because files with
	an .INI extension are associated with the Notepad application.
	
	RESOLUTION
	==========
	
	To save a file with an extension that is not registered as a file type in
	Windows, place quotation marks around the filename. To save a file with the
	filename FILENAME.EXT, enter
	
	  "FILENAME.EXT" (with quotation marks)
	
	in the Save As dialog box.
	
	MORE INFORMATION
	================
	
	If you save files with a particular extension frequently, you may want to create
	a registered file type for that extension. To do so, follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu, click Options.
	
	3. Click the File Types tab.
	
	4. Click the New Type button.
	
	5. Type a description and extension in the Description Of Type and Associated
	  Extensions boxes.
	
	6. Click the New button.
	
	7. In the Action box, type the action to be performed by the application
	  associated with the new file type. For example, type "open" (without the
	  quotation marks) in the Action box.
	
	8. In the Application Used To Perform Action box, type the complete path and
	  filename of the application associated with the new file type.
	
	9. Click the OK button. In the Add New File Type dialog box, click OK. In the
	  Options dialog box, click OK.
	
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	

{% endraw %}
