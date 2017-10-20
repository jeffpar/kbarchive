---
layout: page
title: "Q183195: WD97: Opening an Equation Editor Object Gives Error Message"
permalink: /kb/183/Q183195/
---

## Q183195: WD97: Opening an Equation Editor Object Gives Error Message

{% raw %}

	Article: Q183195
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to open a Microsoft Equation Editor version 3.0 object using
	the Open option rather than the Edit option, after several tries, the following
	error message appears:
	
	  Word cannot edit the Microsoft Equation 3.0.
	
	NOTE: When you double-click to edit an equation, you are using the Edit option.
	
	WORKAROUND
	==========
	
	
	
	
	
	To work around this problem, double-click the object to edit it.
	
	-or-
	
	Using the Registry Editor, delete the registry key that allows you to open
	Equation Editor objects. When you delete the following key, Open does not appear
	on the menu when you click on the Equation Editor object and select Edit.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To delete the registry key, follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button and click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks), and click OK.
	
	4. Locate the following key by double-clicking the appropriate folders:
	
	  HKEY_CLASSES_ROOT\ClsID\{0002CE02-0000-0000-C000-000000000046}\verb\1
	
	5. Click Delete on the Edit menu to delete the key.
	
	6. Click Yes when you are prompted to confirm the deletion.
	
	7. Quit the Registry Editor and restart Word.
	
	You now are allowed to use only the Edit mode to edit Equation Editor objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem has been corrected in
	Equation Editor 3.01, which is the version of Equation Editor that ships with
	Office 2000 and Word 2000.
	
	Additional query words: inline
	
	======================================================================
	Keywords          : kberrmsg kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
