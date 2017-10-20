---
layout: page
title: "Q178080: WD97: WordPerfect File Contains Garbled Text If Opened in Word"
permalink: /kb/178/Q178080/
---

## Q178080: WD97: WordPerfect File Contains Garbled Text If Opened in Word

{% raw %}

	Article: Q178080
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbmigrate word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to open a WordPerfect file that has an extension other than
	"doc" or "wpd" in Word, Word may open the file in text-only format.
	
	NOTE: When the file is opened as text, the document will be displayed incorrectly
	and you will see strange or incorrect (garbage) characters.
	
	CAUSE
	=====
	
	When the WordPerfect file you are opening has an extension other than .doc or
	.wpd, Word may not recognize the file as a WordPerfect document and may use the
	wrong file converter to open the file.
	
	When Word cannot determine which file converter to use, it will use the Text Only
	file converter.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Setting Word to Open a WordPerfect File with a Different Extension
	------------------------------------------------------------------
	
	To set word to open a WordPerfect file with a different extension, follow these
	steps:
	
	1. Quit Word and all other Windows programs.
	
	2. On the Start menu, click Run.
	
	3. In the Open box, type "RegEdit" (without the quotation marks) and click OK.
	
	4. In the Registry Editor, open the following Import registry key:
	
	      HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Text
	      Converters\Import
	
	  -or-
	
	  The Import key may be located in the following location in the registry:
	
	      HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Text
	      Converters\Import
	
	5. In the WordPerfect6x key, click to select Extensions.
	
	6. On the Edit menu, click Modify.
	
	7. In the Value Data box, you may see some extensions similar to the following:
	
	  doc wpd
	
	8. Add your specific extension to this list.
	
	  For example, if you have saved files in WordPerfect with a "wp7" extension,
	  add the wp7 extension to the Value Data box. The Value Data box should now
	  resemble the following:
	
	  doc wpd wp7
	
	  NOTE: You can add all the different extensions you use for saving your
	  WordPerfect files to this list.
	
	9. Repeat steps 7-8 for each extension you want to add, and then click OK.
	
	10. On the Registry menu, click Exit.
	
	After you restart Word, it will use the WordPerfect 6.x file converter to open
	your WordPerfect files with the different extensions.
	
	WORKAROUND
	==========
	
	To specify which file converter to use when Word opens a WordPerfect file,
	follow these steps:
	
	1. Start Word and open a new, blank document.
	
	  Do not try to open your WordPerfect file.
	
	2. On the Tools menu, click Options.
	
	3. On the General tab, click to select the "Confirm conversion at open" check
	  box, and then click OK.
	
	4. On the File menu, click Open.
	
	5. Select the WordPerfect document you want to open, and then click Open.
	
	6. In the Convert File dialog box, select WordPerfect 6.x, and then click OK.
	
	Word will now open your WordPerfect document correctly using the WordPerfect 6.x
	converter.
	
	MORE INFORMATION
	================
	
	Starting with WordPerfect version 6.x, the default file extension when saving
	files from WordPerfect is "wpd." Microsoft Word will automatically recognize and
	open files created in WordPerfect 6.x and later with the "wpd" extension.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q157084 WD97: Text Converters Installed in a Typical Setup
	
	  Q162987 WD97: Supported Non-Word File Formats
	
	WordPerfect is manufactured by Corel Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For information about how to contact Corel Corporation, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	Additional query words: wp6 wp7
	
	======================================================================
	Keywords          : kb3rdparty kbmigrate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
