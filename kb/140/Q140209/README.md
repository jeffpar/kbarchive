---
layout: page
title: "Q140209: Opening Sample Scripts with Batch.exe Causes Errors"
permalink: /kb/140/Q140209/
---

## Q140209: Opening Sample Scripts with Batch.exe Causes Errors

{% raw %}

	Article: Q140209
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening a sample script file with the Windows 95 Batch Setup tool (Batch.exe)
	may cause unexpected results. The sample scripts included with the Windows 95
	Resource Kit and on the Windows 95 CD-ROM cannot be opened in the Batch.exe
	tool.
	
	CAUSE
	=====
	
	The sample scripts are incompatible with Batch.exe. These scripts are
	incomplete, and they contain comments explaining the different sections of the
	files.
	
	RESOLUTION
	==========
	
	You cannot open the sample scripts with Batch.exe. You can open any file that
	was created with Batch.exe itself.
	
	MORE INFORMATION
	================
	
	The Readme.txt file in the Scripts folder states that you can use any text
	editor or Batch.exe to open the sample scripts. However, if you try to open a
	sample script with Batch.exe, you receive error messages.
	
	You can use the Windows 95 Batch Setup tool to help automate Windows 95 Setup by
	creating an .inf file that is used by Setup. Batch.exe is located in the
	Admin\Nettools\Netsetup folder on the Windows 95 CD-ROM. You can install this
	tool using the Add/Remove Programs tool in Control Panel. You can also install
	Batch.exe as part of the Windows 95 Resource Kit.
	
	The sample scripts are located in the Admin\Reskit\Samples\Scripts folder on the
	Windows 95 CD-ROM. You can copy these files to your hard disk. They can also be
	installed from the Windows 95 Resource Kit.
	
	REFERENCES
	==========
	
	For information about creating batch setup files with Batch.exe, please see the
	online Help system in the Windows 95 Batch Setup tool.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
