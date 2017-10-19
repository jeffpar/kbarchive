---
layout: page
title: "Q236394: WD97: Proofing Tools Do Not Function As Expected"
permalink: /kb/236/Q236394/
---

## Q236394: WD97: Proofing Tools Do Not Function As Expected

	Article: Q236394
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may experience the following problems with the proofing tools in Microsoft
	Word 97:
	
	- The thesaurus does not suggest any synonyms for any words.
	
	  -or-
	
	- Word stops responding (hangs) after you try to use the spelling checker.
	
	-or-
	
	You may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive an error message similar to the following:
	
	  WINWORD caused an invalid page fault in module MSSP232.DLL at 0137:307effe8
	
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To resolve these problems, use one of the following methods.
	
	Method 1: Delete Proofing Tools Registry Key and Proofing Tools Folder, Run Office Setup to Reinstall:
	
	1. Close all running programs, including the Office Shortcut Bar, and turn off
	  any antivirus software.
	
	2. Click Start and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks) and then click
	  OK.
	
	4. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools
	
	5. Select the folder Proofing Tools.
	
	6. On the Edit menu, click Delete.
	
	7. Click Yes to confirm the deletion.
	
	8. Close the Registry Editor.
	
	9. Right-click Start and then click Explore.
	
	10. Locate the following folder:
	
	  C:\Program Files\Common Files\Microsoft Shared
	
	11. Back up any files with a .dic extension before performing the next step.
	  Select the Proof folder. On the File menu, click Delete.
	
	12. Close Windows Explorer.
	
	13. Click Start, point to Settings, and then click Control Panel.
	
	14. In Control Panel, double-click the Add/Remove Programs icon.
	
	15. On the Install/Uninstall tab, click Microsoft Office 97.
	
	  If you are using a stand-alone version of one of the Office programs, click
	  the appropriate product in the list. Then click Add/Remove.
	
	  NOTE: For Microsoft Windows 2000, follow these steps:
	
	  a. In the Add/Remove Programs window, click Change/Remove Programs.
	
	  b. In the list of installed programs, click Microsoft Office 97 and then
	     click Remove.
	
	16. When the Maintenance Mode screen appears, click Reinstall.
	
	This procedure repeats the last installation to restore missing files and
	settings. You then need to reapply the SR-1 or SR-2 update.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	Method 2: Modify the Registry to Change the Value of the Thesaurus in the Data Key:
	
	1. Quit all programs.
	
	2. Click Start and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks) and then click
	  OK.
	
	4. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools\Thesaurus
	  \1033\Normal
	
	5. Double-click Dictionary and then change the value from msth_am.lex to
	  msthbus.lex.
	
	
	Additional query words: dictionary thesaurus spell check spellcheck no words wd97 hang response
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
