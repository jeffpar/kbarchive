---
layout: page
title: "Q205738: OFF97: Multiple General Tabs in New File Dialog Box"
permalink: /kb/205/Q205738/
---

## Q205738: OFF97: Multiple General Tabs in New File Dialog Box

{% raw %}

	Article: Q205738
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbtemplate word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you click New on the File menu, more than one General tab may appear.
	
	CAUSE
	=====
	
	You have a folder named General located in your User Templates or Workgroup
	Templates folder.
	
	Note: This problem may occur even after you delete the General folder.
	
	To check where your User Templates or Workgroup Templates folder is located, do
	one of the following:
	
	- In Microsoft Word: On the Tools menu, click Options and then click the File
	  Locations tab.
	
	  -or-
	
	- In Microsoft Office: Right-click on a blank area of the Office toolbar. On
	  the shortcut menu, click Customize and then click the Settings tab.
	
	By default, the User Templates location is C:\Program Files\Microsoft
	Office\Templates folder, and the Workgroup Templates location is blank.
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To correct this problem, use the following steps.
	
	1. Quit all Office programs.
	
	2. Right-click Start and then on the shortcut menu, click Explore.
	
	3. Open your User Templates or Workgroup Templates folder. For example, open
	  C:\Program Files\Microsoft Office\Templates
	
	4. Delete the General folder. If you have files located in the General folder,
	  be sure to move those files to a different location before you delete the
	  General folder.
	
	5. On the File menu, click Close to quit the Windows Explorer.
	
	6. Click Start and then click Run.
	
	7. In the Open box, type regedit and then click OK.
	
	8. Delete the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Common\FileNewGroups
	
	9. On the Registry menu, click Exit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbtemplate word8 word97 
	Technology        : kbWordSearch kbExcelSearch kbPowerPtSearch kbWord97 kbWord97Search kbPowerPt97 kbZNotKeyword2 kbExcel97Search kbPowerPt97Search kbZNotKeyword3 kbExcelWinSearch
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
