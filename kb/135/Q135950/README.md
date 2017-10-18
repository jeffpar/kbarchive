---
layout: page
title: "Q135950: Not All MS Plus! Files Installed in Specified Custom Folder"
permalink: kb/135/Q135950/
---

## Q135950: Not All MS Plus! Files Installed in Specified Custom Folder

	Article: Q135950
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to install Microsoft Plus! for Windows 95 in a custom folder,
	only a portion of the Microsoft Plus! files are placed in that folder. Many of
	the files are placed in the Program Files\Plus! folder.
	
	CAUSE
	=====
	
	You can specify a custom folder for the Microsoft Plus! files early in the Setup
	process. If you do not specify a custom folder, the Microsoft Plus! files are
	installed in the Program Files\Plus! folder.
	
	You can also specify a custom folder for each of the following components by
	clicking the Change Folder button for each component:
	
	- System Agent
	
	- Internet Tools
	
	- Desktop Themes
	
	- 3D Pinball
	
	If you change the folder for a component, only that component is affected. Even
	if you change the folder for all four components, several files are installed in
	the Program Files\Plus! folder.
	
	RESOLUTION
	==========
	
	Run Microsoft Plus! Setup again and choose the Remove All option. Then, run
	Setup again and specify a custom folder the first time you are offered the
	opportunity to do so.
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	
	=============================================================================
	
