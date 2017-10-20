---
layout: page
title: "Q183680: FP97: Text in Dialog Box Appears in the Wrong Language"
permalink: /kb/183/Q183680/
---

## Q183680: FP97: Text in Dialog Box Appears in the Wrong Language

{% raw %}

	Article: Q183680
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194447.
	
	SYMPTOMS
	========
	
	When you close FrontPage Editor while you have unsaved pages open, a dialog box
	in a language other than English may appear.
	
	CAUSE
	=====
	
	This behavior occurs if Mfc40loc.dll is installed on your computer.
	
	RESOLUTION
	==========
	
	Rename the Mfc40loc.dll file. To rename this file, follow these steps.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. Close FrontPage Explorer and FrontPage Editor.
	
	2. On the Windows Start menu, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type "Mfc40loc.dll" (without the quotation marks). In the
	  Look in box, select the hard disk where you installed Windows. Click Find
	  Now.
	
	4. Select the Mfc40loc.dll file in the Results pane.
	
	5. On the File menu, click Rename.
	
	6. Rename the file to Mfc40loc.old and press ENTER.
	
	MORE INFORMATION
	================
	
	Mfc40.dll is the Microsoft Foundation Class library and is required for
	FrontPage to run. Mfc40loc.dll provides localized (foreign language) text
	strings for several dialog boxes. If this file is present, FrontPage uses the
	localized text strings within this file.
	
	Additional query words: mfc40loc.dll 97 localize local
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
