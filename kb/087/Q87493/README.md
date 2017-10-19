---
layout: page
title: "Q87493: BUG: Setup CreateProgmanItem Does Not Overwrite Item"
permalink: /kb/087/Q87493/
---

## Q87493: BUG: Setup CreateProgmanItem Does Not Overwrite Item

	Article: Q87493
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Setup Toolkit for Windows, when the setup script calls the
	CreateProgmanItem() subroutine to replace an existing item in a Microsoft
	Windows Program Manager group with cmo% set to cmoOverwrite and with szOther$
	set to a nonempty string, the setup driver does not replace the existing item.
	Instead, it creates a new item.
	
	CAUSE
	=====
	
	_MSTEST, the setup driver spawned by SETUP.EXE, incorrectly forms the name of
	the item to overwrite if szOther$ is not an empty string. This prevents _MSTEST
	from finding an item in the group with the specified name, and it creates a new
	item.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a bug in version 3.1 of the Setup Toolkit for
	Windows. If the setup script must specify the icon file, icon resource index, x
	and y icon position, or working directory, and if it is unacceptable to
	potentially have two items of the same name in a group, the groups must be
	manipulated through a dynamic data exchange (DDE) conversation with Program
	Manager. Add a function that initiates and manages a DDE conversation with
	Program Manager to MCUISTF.DLL and call the function from the setup script.
	
	MORE INFORMATION
	================
	
	Windows 3.0 does not support the cmoOverwrite command option flag for the
	CreateProgmanItem() subroutine.
	
	Additional query words: buglist3.10 3.10 MSSetup tool kit
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
