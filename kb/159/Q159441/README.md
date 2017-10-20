---
layout: page
title: "Q159441: FP97: Dialog Boxes Show Incorrect Desktop If Running NT 4.0"
permalink: /kb/159/Q159441/
---

## Q159441: FP97: Dialog Boxes Show Incorrect Desktop If Running NT 4.0

{% raw %}

	Article: Q159441
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use FrontPage Editor or FrontPage Explorer and Windows NT 4.0, the
	default user's desktop may be displayed rather than your logon desktop in the
	following dialog boxes:
	
	FrontPage Editor
	----------------
	
	- Open (on the File menu, click Open)
	
	- Save As (on the File menu, click Save As)
	
	FrontPage Explorer
	------------------
	
	- Add File to Import List
	
	- Browse for Folder
	
	- Export Selected As
	
	RESOLUTION
	==========
	
	To force these dialog boxes to display your logon desktop, use the following
	steps:
	
	1. Repeat the operation which produces one of the dialog boxes referred to
	  above.
	
	2. Use the dialog box to open the following directory:
	
	  %USERPROFILE%\desktop
	
	To find the proper value for the USERPROFILE variable on your system, type "SET"
	(without the quotation marks) and press ENTER at the Windows NT command prompt.
	
	NOTE: To use the Windows NT command prompt, point to Programs on the Start menu,
	and then click Command Prompt.
	
	Once you have focused the FrontPage Editor dialog box on the correct desktop, it
	will remain focused there until you exit the FrontPage Editor. Once you have
	focused the FrontPage Explorer Add file to Import List dialog box on the correct
	folder, it will remain focused there until you exit the FrontPage Explorer. The
	"Browse for Folder" dialog box does not retain the setting of the last folder
	location you browsed to.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was corrected in Microsoft
	FrontPage 98 for Windows.
	
	MORE INFORMATION
	================
	
	This problem occurs only when you start FrontPage Editor or FrontPage Explorer
	from the toolbar buttons within FrontPage Explorer or FrontPage Editor.
	
	The Open and Save As dialog boxes will display the correct desktop if you start
	FrontPage Explorer or FrontPage Editor from a shortcut, if you double-click the
	executable file, or if you start either program from the Windows NT command
	prompt.
	
	NOTE: This problem does not occur if you are using Windows 95.
	
	To use the Save As dialog box, click Save As on the File menu in FrontPage
	Editor, and then click As File.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbenv kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
