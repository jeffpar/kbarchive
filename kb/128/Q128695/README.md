---
layout: page
title: "Q128695: Err Msg: Could Not Read the File C:&#92;TABWORKS&#92;DEFAULT.TWF"
permalink: /kb/128/Q128695/
---

## Q128695: Err Msg: Could Not Read the File C:&#92;TABWORKS&#92;DEFAULT.TWF

{% raw %}

	Article: Q128695
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.1 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows, you receive the following error message:
	
	  Could not read the file C:\TABWORKS\DEFAULT.TWF
	
	CAUSE
	=====
	
	This error occurs when you are using TabWorks instead of Program Manager as the
	Windows shell and there is a problem with the DEFAULT.TWF file. The file may be
	missing or damaged, or it may have been moved to another directory.
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around this problem:
	
	Method 1
	--------
	
	Use Program Manager instead of TabWorks for the Windows shell. To do so, quit
	Windows and edit the SYSTEM.INI file. Change the SHELL= line to read:
	
	  shell=progman.exe
	
	Method 2
	--------
	
	Rebuild the default TabWorks book so that tabs and icons appear correctly. To do
	so, follow these steps:
	
	1. From the TabWorks File menu, choose New Book. When you are prompted to save
	  changes to untitled, choose No.
	
	2. When you are prompted "Do you wish to create tabs from your existing Program
	  Manager groups?" choose Yes. TabWorks creates a new default book.
	
	3. If the fonts in the new book are legible, skip this step. If the fonts are
	  not legible, change the tab font by choosing Options, then Font, then Tab
	  Font.
	
	4. Quit Windows. When you are prompted for a name for the new file, name it
	  anything but DEFAULT.TWF (but make sure to give the file a .TWF extension).
	  The name of the new file replaces the reference to DEFAULT.TWF in the
	  [Binder] section of the TABWORKS.INI file.
	
	5. Restart Windows.
	
	MORE INFORMATION
	================
	
	TabWorks is software published by Xerox and sold through Compaq that replaces
	Program Manager as the Windows shell. A TabWorks book is a saved file containing
	the information that formats and sorts groups (or "tabs") and icons within the
	tabs. The DEFAULT.TWF file stores the information that loads the default book
	when TabWorks starts. This file is located in the TabWorks directory and is
	referenced in the TABWORKS.INI file.
	
	A new version of TabWorks, version 1.1, is available from Compaq. The new version
	automatically creates a backup DEFAULT.TWF file in case the original one is
	damaged.
	
	For more information about TabWorks, contact XSoft.
	
	  XSoft (a division of Xerox Corporation)
	  3400 Hillview Ave.
	  Palo Alto, CA 94304
	
	  Technical Support: (800) 909-4446
	  Sales Information: (800) 428-2995
	
	TabWorks is manufactured by Xerox Corporation, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin310 kbWFW310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
