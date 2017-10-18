---
layout: page
title: "Q257643: WD97: Spelling, Grammar Not Available in Word Running on Win2000"
permalink: kb/257/Q257643/
---

## Q257643: WD97: Spelling, Grammar Not Available in Word Running on Win2000

	Article: Q257643
	Product(s): Word 97 for Windows
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbenv kbdta kbproof
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to use the spelling or grammar features in Microsoft Word 97,
	nothing happens and you do not receive an error message. Also, all of the
	options on the Spelling and Grammar tabs in the Tools dialog box are unavailable
	(dimmed). (To view the Spelling and Grammar tabs, click Options on the Tools
	menu.)
	
	CAUSE
	=====
	
	This problem occurs with users who are members of the local Users group if the
	Users group does not have sufficient permissions to the following registry
	keys:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools\Spelling
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools\Grammar
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: You must be an administrator or have administrative rights to perform this
	procedure.
	
	To correct this problem, set up sufficient permissions in the Windows 2000
	registry. To do this, follow these steps:
	
	1. Quit Word. Quit Microsoft Outlook if you are using Word as your e-mail
	  editor.
	
	2. Click Start and then click Run. In the Open box, type "Regedt32.exe" (without
	  the quotation marks) and then click OK.
	
	3. Select the first registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools\Spelling
	
	4. On the Security menu, click Permissions.
	
	5. Click Advanced.
	
	6. In the Permissions Entries box, click the Users group, and then click the
	  View/Edit button.
	
	7. Click to select the Allow check box for the Set Value and Create Subkeys
	  permissions.
	
	8. Click OK twice.
	
	9. Repeat steps 3 through 8 for the second registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools\Grammar
	
	10. Quit Registry Editor.
	
	The Spelling and Grammar features will be available (not dimmed) and will work as
	expected the next time you start Word.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows 2000.
	
	Additional query words: spellcheck office97 off97 wd97 word 97 user spell spelling grammar grammer check checker unavailable dim dimmed gray grayed grey greyed win2k proofing dictionary windows 2000
	
	======================================================================
	Keywords          : kbenv kbdta kbproof 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :2000
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
