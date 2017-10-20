---
layout: page
title: "Q159866: WD97: How to Set Table Width to Percentage of Browser Window"
permalink: /kb/159/Q159866/
---

## Q159866: WD97: How to Set Table Width to Percentage of Browser Window

{% raw %}

	Article: Q159866
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden system files in
	the Windows folder.
	
	SUMMARY
	=======
	
	Microsoft Word 97 saves Hypertext Markup Language (HTML) tables in a fixed
	width. This article describes how to save an HTML table with a width that equals
	a percentage of the window width.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95 or Windows NT. Microsoft cannot guarantee
	that problems resulting from the incorrect use of Registry Editor can be solved.
	Use Registry Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys And Values
	Help topic in Registry Editor (Regedit.exe). Note that you should make a backup
	copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	When you save a Microsoft Word 97 in HTML format, a table in the document is
	saved as a fixed width table by default. When you view the document with a Web
	browser, you may be unable to see the right side of the table unless you scroll
	right. You can avoid having to scroll through the window to view portions of the
	table, by adding the PercentageTableWidth option to the Windows registry. This
	option saves the table using a percentage so that the table automatically
	adjusts to the size of the browser window.
	
	To add the PercentageTableWidth option to the registry, do the following:
	
	1. Quit all applications.
	
	2. Click the Windows Start button, and then click Run.
	
	3. In the Open dialog box, type "regedit" (without the quotation marks), and
	  then click OK.
	
	4. Go to the following registry key:
	
	      HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Text Converters
	   Export\HTML
	
	  The status bar will display the following:
	
	  My Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Text
	  Converters\Export\HTML
	
	5. Click the HTML key to select it.
	
	6. On the Registry menu, click Export Registry File, type a file name, and then
	  click Save.
	
	7. On the Edit menu, point to New, and then click Key.
	
	8. Type Options, and then press ENTER.
	
	  The Options key should be selected.
	
	9. On the Edit menu, point to New, and then click String Value.
	
	10. Type PercentageTableWidth and then press ENTER.
	
	  The PercentageTableWidth string name is selected.
	
	11. On the Edit menu, click Modify.
	
	12. In the Edit String dialog box, type "1" (without the quotation marks), and
	  then click OK.
	
	13. On the Registry menu, click Exit.
	
	When you restart Word, new settings will be stored in the registry key.
	
	Additional query words: 8.0 word8 word97 convert
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
