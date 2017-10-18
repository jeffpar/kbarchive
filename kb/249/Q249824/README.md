---
layout: page
title: "Q249824: BUG: VOLTRACK Is Erroneously Unloaded After 255 Device Additions"
permalink: kb/249/Q249824/
---

## Q249824: BUG: VOLTRACK Is Erroneously Unloaded After 255 Device Additions

	Article: Q249824
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	VOLTRACK is unloaded and may cause Windows to display a blue screen after 255
	device additions and removals.
	
	CAUSE
	=====
	
	VOLTRACK keeps a count of the number of devices it is attached to in an internal
	byte-size variable. This variable is incremented in response to a AEP_CONFIG_DCB
	command, but is not decremented. After 255 additions and removals, the byte
	overflows and VOLTRACK is unloaded in response to a AEP_BOOT_COMPLETE command
	from IOS. This can cause driver memory to be overwritten and can cause system
	instability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95,98,98 Second Edition
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
