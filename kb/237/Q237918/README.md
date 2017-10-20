---
layout: page
title: "Q237918: WD97: How to Clear the Poppy Macro Virus"
permalink: /kb/237/Q237918/
---

## Q237918: WD97: How to Clear the Poppy Macro Virus

{% raw %}

	Article: Q237918
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta wd2000
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article contains information about the Poppy Macro virus and how to clear
	it from your computer.
	
	MORE INFORMATION
	================
	
	The Poppy Macro virus functions in the following ways:
	
	- It infects your Normal template by placing code in the Visual Basics for
	  Applications (VBA) module called ThisDocument.
	
	- It makes changes in the registry by changing the registered user and
	  organization.
	
	- It imports a class.sys module to the Normal.dot file.
	
	- On the fourteenth of every month after the month after May, a message box
	  appears that says "<UserName> is a Jerk."
	
	Attempts to clear the code in the ThisDocument module will remove the virus code,
	but some macro storage components are left behind. The macro virus protection
	feature finds this information, and the warning message is displayed.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q161515 WD97: Macro Virus Warning Displayed When No Macros Exist in File
	
	To completely clear the Poppy Macro virus, follow these steps:
	
	1. Obtain the latest virus program (or signature file) from your anti-virus
	  software vendor, run the program on a known infected document, and check to
	  make sure that it appears "clean". (To contact your anti-virus software
	  vendor, please see the "References" section later in this article.)
	
	2. Rename the Normal template (Normal.dot file). To do this, follow these steps:
	
	  a. Quit all instances of Word, including WordMail.
	
	  b. On the Windows taskbar, click Start, point to Find, and click Files or
	     Folders.
	
	  c. In the Named box, type "Normal.dot" (without the quotation marks).
	
	  d. In the Look in box, select your local hard disk drive (or an alternate
	     user template location if you are running Word from a network server).
	
	  e. Click Find Now to search for the file.
	
	  f. For each occurrence of Normal.dot that appears in the Find dialog box,
	     right-click the file. Click Rename on the shortcut menu. Give the file a
	     new name, such as OldNormal.dot or Normal-1.dot.
	
	3. Delete the Data key.
	
	NOTE: Deleting the Data key resets several options back to the default settings,
	including the File menu's most recently used file list, and many settings you
	customize in the Options dialog boxes.
	
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To delete the Data key, follow these steps:
	
	  a. Quit all instances of Word, including WordMail.
	
	  b. On the Windows taskbar, click the Start button and click Run.
	
	  c. In the Open box, type "regedit" (without the quotation marks) and click
	     OK.
	
	  d. Locate the following key by double-clicking the appropriate folders:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Data
	
	  e. With the Data folder selected (on the left), click Delete on the Edit menu
	     to delete the key.
	
	  f. Click Yes when you are prompted to confirm the deletion.
	
	  g. Quit the registry editor and restart Word.
	
	
	REFERENCES
	==========
	
	For additional information about what to do if you think you have a Word macro
	virus, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q181079 WD97: What to Do If You Have a Macro Virus
	
	For information about how to contact your anti-virus application vendor, click
	the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: symantec network associates cheyenne macafee ibm
	
	======================================================================
	Keywords          : kbdta wd2000 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
