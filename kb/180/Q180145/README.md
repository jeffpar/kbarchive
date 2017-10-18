---
layout: page
title: "Q180145: WD97: &quot;Not Enough Memory&quot; Error When Printing from Photo Editor"
permalink: kb/180/Q180145/
---

## Q180145: WD97: &quot;Not Enough Memory&quot; Error When Printing from Photo Editor

	Article: Q180145
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Photo Editor 97 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you print from Microsoft Photo Editor, you may receive one of the following
	errors:
	
	  Not enough memory.
	
	  -or-
	
	  Insufficient memory to complete operation.
	
	CAUSE
	=====
	
	The Microsoft Photo Editor registry keys may be damaged.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To regenerate the Photo Editor Registry Option settings, follow these steps:
	
	1. Quit all programs.
	
	2. Click the Windows Start button, and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	4. Go to the following registry subkey:
	
	  HKey_Current_User\Software\Microsoft\Photo Editor\3.0\File Options
	
	5. Click the registry subkey to select it. On the Registry menu, click Export
	  Registry File, type a file name, and then click Save.
	
	6. On the Edit menu, click Delete.
	
	7. Go the following registry subkey:
	
	  HKey_Current_User\Software\Microsoft\Photo Editor\3.0\Microsoft Photo Editor
	
	8. Click the registry subkey to select it. On the Registry menu, click Export
	  Registry File, type a file name, and then click Save.
	
	9. On the Edit menu, click Delete and then quit the Registry Editor.
	
	When you restart Photo Editor, new settings will be stored in the File Options
	and Microsoft Photo Editor registry subkeys.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta word8 word97 
	Technology        : kbWordSearch kbHomeProdSearch kbPowerPtSearch kbWord97 kbWord97Search kbZNotKeyword2 kbPowerPt97Search kbPhotoEd97
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
