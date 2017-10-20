---
layout: page
title: "Q88760: Caere OmniPage with Windows"
permalink: /kb/088/Q88760/
---

## Q88760: Caere OmniPage with Windows

{% raw %}

	Article: Q88760
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Caere Corporation has two versions of OmniPage that are Windows 3.0, 3.0a, and
	3.1 compatible: OmniPage 386 and OmniPage Professional version 2.0. Both
	versions are full-feature optical character recognition (OCR) packages. OmniPage
	Professional contains two additional modules:
	
	- OmniSpell (Spell checker utility)
	
	- OmniDraft (allows OmniPage to recognize dot matrix fonts)
	
	According to OmniPage technical support, anytime you are upgrading from one
	version of OmniPage to another version, you should delete the existing version
	first (after saving any data files).
	
	Using OmniPage 386
	------------------
	
	There are no known problems using OmniPage 386 with Windows 3.0 and 3.0a. You
	must use OmniPage version 3.2 if you are using Windows 3.1.
	
	
	Using OmniPage Professional Version 2.0
	---------------------------------------
	
	You must use OmniPage Professional version 2.0 or later if you are running
	Windows 3.1. Using earlier versions causes general protection (GP) faults during
	the character-recognition stage of scanning.
	
	When you run Windows, OmniPage Professional version 2.0 may cause a general
	protection (GP) fault (in Windows 3.1) or an Unrecovable Application Error (UAE)
	(in Windows 3.0 and 3.0a) during a find and replace operation, if the Find
	Backwards option is selected. Shortly before you receive the GP fault, the
	replace operation repeats continuously.
	
	Caere Corporation should be contacted for an upgrade if this problem occurs.
	
	If random problems occur while using an ATI video driver, a patch may be
	required. This patch may be obtained from OmniPage technical support.
	
	OmniPage and OmniPage Professional are manufactured by Caere Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	
	Additional query words: gpf 3.00a 3.00 3.11 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
