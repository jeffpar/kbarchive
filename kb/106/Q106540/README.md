---
layout: page
title: "Q106540: Scenes 1.0: Cannot Install the After Dark Module"
permalink: /kb/106/Q106540/
---

## Q106540: Scenes 1.0: Cannot Install the After Dark Module

{% raw %}

	Article: Q106540
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you choose Custom Installation for Microsoft Scenes, you cannot install the
	After Dark module. The After Dark option in the Custom Installation dialog box
	is unavailable (dimmed).
	
	CAUSE
	=====
	
	The Microsoft Scenes setup program searches the AD_PREFS.INI file in the Windows
	directory for a PATH= line to determine where After Dark is installed. If the
	AD_PREFS.INI is not present or there is no PATH= line in the AD_PREFS.INI file,
	the After Dark module is not installed.
	
	RESOLUTION
	==========
	
	AD_PREFS.INI is an initialization file that is created and used by After Dark.
	If this file does not exist in the Windows directory, you can create one using a
	text editor, such as the MS-DOS Editor or Windows Notepad. This file should
	contain the following:
	
	  [After Dark]
	  path=c:\<directory>\ 
	
	Where <directory> is the path to your After Dark directory. Save this file
	to your Windows directory as AD_PREFS.INI.
	
	If the file already exists in the Windows directory, add the PATH= line as shown
	above.
	
	MORE INFORMATION
	================
	
	After Dark is manufactured by Berkeley Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For more information on the AD_PREFS.INI file or After Dark, contact Berkeley
	Systems technical support at (510) 549-2300.
	
	Additional query words: grayed out dim dimmed ad berkley express installation greyed msscenes screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
