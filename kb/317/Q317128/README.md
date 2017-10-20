---
layout: page
title: "Q317128: &quot;Error Loading Driver&quot; Err Msg Accessing Display Properties"
permalink: /kb/317/Q317128/
---

## Q317128: &quot;Error Loading Driver&quot; Err Msg Accessing Display Properties

{% raw %}

	Article: Q317128
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you open Control Panel and then double-click the Display icon, you may
	receive the following error message:
	
	  Error loading driver.
	
	You may be unable to open the Display Properties dialog box.
	
	CAUSE
	=====
	
	This behavior can occur if your computer contains a corrupted or incompatible
	third-party PropertySheetHandlers registry key. The registry key may become
	corrupted or incompatible if you install or upgrade a third-party display
	driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, export and then remove third-party PropertySheetHandlers
	registry keys. To do this, follow these steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Navigate to the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion \Controls
	  Folder\Display\shellex\PropertySheetHandlers
	
	4. On the Registry menu, click Export Registry File.
	
	5. In the "File name" box, type "propertysheethandlers registry key" (without
	  the quotation marks), and then click Save.
	
	  NOTE: You can undo the registry changes that follow by double-clicking the
	  "propertysheethandlers registry key.reg" file.
	
	6. Click the PLUS (+) sign next to the PropertySheetHandlers subkey to expand
	  it.
	
	7. Under the PropertySheetHandlers subkey, click the <chipset> CPL
	  Extension subkey, where <chipset> is the chipset of your display
	  adapter. For example, if you have an SIS chipset-based display adapter, click
	  the SIS CPL Extension registry key.
	
	8. On the Edit menu, click Delete.
	
	9. When you receive a message that prompts you to confirm the key deletion,
	  click Yes.
	
	10. Under the PropertySheetHandlers subkey, click the PlusPack CPL Extentsion
	  subkey.
	
	11. On the Edit menu, click Delete.
	
	12. When you receive a message that prompts you to confirm the key deletion,
	  click Yes.
	
	13. On the Registry menu, click Exit.
	
	14. Restart the computer.
	
	15. Reinstall the drivers for your display adapter.
	
	  NOTE: If this issue occurred after you upgraded your display drivers, attempt
	  to install an earlier driver with which you did not experience the behavior.
	
	MORE INFORMATION
	================
	
	For information about how to contact computer hardware manufacturers, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
