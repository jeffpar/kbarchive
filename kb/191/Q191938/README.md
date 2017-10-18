---
layout: page
title: "Q191938: WD97: &quot;User Options&quot; File Location Path Has No Function"
permalink: kb/191/Q191938/
---

## Q191938: WD97: &quot;User Options&quot; File Location Path Has No Function

	Article: Q191938
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The User Options setting is no longer used as it is in some earlier versions of
	Microsoft Word. If a path is set for User Options, the path is ignored by Word.
	
	MORE INFORMATION
	================
	
	To show the User Options setting, use the following steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the File Locations tab.
	
	3. In the File types list, select User Options. The path for User Options is
	  displayed under Location.
	
	NOTE: The Location path for User Options is blank by default. This option is no
	longer used in Word 97 for Windows.
	
	The User Options file location in some earlier versions of Word points to the
	location of the Winword.opt file. The Winword.opt is a binary file that some
	earlier versions of Word for Windows use to store user preference settings. Most
	user preferences are set when you click Options on the Tools menu and make
	changes to the settings on the various tabs. Microsoft Word 97 for Windows does
	not use an .opt file to store user preferences; instead, Word uses the Windows
	Registry to store the settings of user preferences.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In Word 97 for Windows, user preferences are stored in the Windows Registry in
	the following registry keys:
	
	HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Data
	
	  -and-
	
	HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Options
	
	NOTE: If a path is set for User Options, an INI-PATH string value will be set in
	the Options registry key; however, since Word no longer uses this setting, it
	will be ignored.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q172674 WD: Where Word Settings Are Stored
	
	  Q140097 WD: How to Rebuild User Preference and Options Settings
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
