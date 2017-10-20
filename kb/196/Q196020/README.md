---
layout: page
title: "Q196020: WD97: How to Rebuild User Preference and Options Settings"
permalink: /kb/196/Q196020/
---

## Q196020: WD97: How to Rebuild User Preference and Options Settings

{% raw %}

	Article: Q196020
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to rebuild user preferences and user option settings
	in Microsoft Word 97.
	
	Word stores user preferences and option settings in the following Registry keys:
	
	User Preferences
	----------------
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Data
	
	User Options
	------------
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Options
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To rebuild the Word Data and Options Registry keys, do the following:
	
	1. Quit all applications.
	
	2. Click the Windows Start button, and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	4. Go to the following Registry key:
	
	  User Preferences
	  ----------------
	
	            HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Data
	
	  NOTE: The Status bar will display the following:
	
	        My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office
	        \8.0\Word\Data
	
	User Options
	------------
	
	        HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Options
	
	NOTE: The Status Bar will display the following:
	
	        My Computer\HKEY_CURRENT_USER\Software\Microsoft\Office
	        \8.0\Word\Options
	
	5. Click the Registry key to select it.
	
	6. On the Registry menu, click Export Registry File, type a file name, and then
	  click Save.
	
	7. On the Edit menu, click Delete.
	
	8. Close the Registry.
	
	NOTE: Repeat steps 4-7 to export and delete both keys, as necessary.
	
	When you restart Word, new settings will be stored in the Data and Options
	registry keys.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q121709 WD: How to Ignore User Settings When You Start Word
	
	Additional query words: 8.0 Word8 rename delete restore rebuild options tshoot troubleshoot troubleshooting refresh registry regedit register howto
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
