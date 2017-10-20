---
layout: page
title: "Q171406: WD97: How to Disable the Use of Universal Naming Convention (UNC"
permalink: /kb/171/Q171406/
---

## Q171406: WD97: How to Disable the Use of Universal Naming Convention (UNC

{% raw %}

	Article: Q171406
	Product(s): Word 97 for Windows
	Version(s): Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): kbnetwork kbdtakbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Microsoft Word 97 SR-1 allows you to use drive letter mappings and disable
	Universal Naming Convention (UNC) by using the DontUseUNC registry switch.
	
	There are many situations in which a network administrator may prefer to have
	Word use a mapped drive letter rather than the UNC file location. For example,
	Word returns a UNC file location similar to the following:
	
	  \\ServerName\ShareName\FileName
	
	However, when you use the DontUseUNC registry switch, Word returns a drive
	mapping similar to the following:
	
	  E:\ShareName\FileName
	
	NOTE: The DontUseUNC switch does not work with earlier versions of Word. It only
	works with Microsoft Word 97 Service Release 1 or later. The switch also does
	not affect the Link field, the path to an attached Template, or the Visual Basic
	Editor, which is a separate program. In the Visual Basic Editor, if a reference
	is made to a template on a mapped network drive through the References command
	on the Tools menu, it stores the path with the UNC information rather than with
	a mapped drive letter.
	
	MORE INFORMATION
	================
	
	By design, when you save a document or change a setting to a location specified
	with a drive letter, Microsoft Word converts the setting from a location
	containing a logical drive letter to a UNC location. When you use the DontUseUNC
	registry switch, the following new created/attached paths contain the logical
	drive letter instead of using the UNC path:
	
	- The FileName field when the \p switch is used.
	
	- The IncludePicture field.
	
	To add the DontUseUNC registry switch, use either of the following methods.
	
	Method 1: Change the Registry
	-----------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	IMPORTANT: Quit all instances of Word, including WordMail, before you follow
	these steps.
	
	To change the DontUseUNC registry setting, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Locate the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Options
	
	4. Double-click the Options key.
	
	  If an entry exists in the right pane named DontUseUNC, skip to step 7.
	
	  NOTE: Use steps 5 through 6 only when you are adding the DontUseUNC option to
	  the registry.
	
	5. With the Options key selected, point to New on the Edit menu, and then click
	  DWORD Value. This inserts a new option named New Value #1.
	
	6. In the right pane of the Registry Editor window, do either of the following:
	
	   - If New Value #1 is selected:
	
	     a. Press DELETE on the keyboard to delete the option name New Value #1.
	
	     b. Type "DontUseUNC" (without the quotation marks), and then press ENTER.
	
	        This renames the new option to the correct DontUseUNC name.
	
	-or-
	
	   - If New Value #1 is not selected:
	
	     a. Click to select New Value #1.
	
	     b. On the Edit menu, click Rename.
	
	     c. Type "DontUseUNC" (without the quotation marks), and then press ENTER.
	        This renames the new option to the correct DontUseUNC name.
	
	7. With DontUseUNC selected, click Modify on the Edit menu.
	
	8. In the Value Data box, type "1" (without the quotation marks).
	
	  This setting disables the use of UNC and forces Word to use a logical drive
	  letter.
	
	  NOTE: Setting Value Data to 0 or deleting the DontUseUNC key resets Word to
	  the default and allows it to resolve file locations using UNC.
	
	Method 2: Use the RegOptions Macro
	----------------------------------
	
	The RegOptions macro is part of the Support8.dot template that ships with Word 97
	SR-1 Enterprise Update. If you used the SR-1 Patch to update Word, you must
	obtain the Support8.dot template separately.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172527 How to Obtain Word 97 for Windows, Service Release 1.
	
	  Q172492 WD: Templates and Wizards Not Included with SR-1 Patch
	
	To use the RegOptions macro, follow these steps:
	
	1. On the Tools menu, click Templates And Add-ins.
	
	2. Click Add. Select the following folder:
	
	  Program Files\Microsoft Office\Office\Macros
	
	3. Select the Support8 template (Support8.dot). Click OK twice.
	
	4. On the Tools menu, point to Macro, and then click Macros.
	
	5. Click to select the RegOptions macro, and then click Run.
	
	6. Click the Word 8.0 Options tab. Click to select DontUseUNC. In the Setting
	  box, type "1" (without the quotation marks). Click OK.
	
	7. Quit and restart Word.
	
	When you reset Word to use UNC by changing the DontUseUNC value from 1 to 0, quit
	all programs, restart Microsoft Windows, and then restart Word.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q145091 WD: Can't Use NoLongNetNames with Word Versions Later Than 6.0
	
	  Q138418 WD: Can't Use UNC Drive for Document Path on Some Networks
	
	  Q136393 How to Modify the Windows Registry
	
	
	Additional query words: sr1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbnetwork kbdta kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : :Service Release 1 (SR-1)
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
