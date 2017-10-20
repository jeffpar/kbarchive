---
layout: page
title: "Q231652: PRB: Paste Fails in the VC IDE After Installing NT 4.0 SP4"
permalink: /kb/231/Q231652/
---

## Q231652: PRB: Paste Fails in the VC IDE After Installing NT 4.0 SP4

{% raw %}

	Article: Q231652
	Product(s): Microsoft C Compiler
	Version(s): 4.0 SP4,5.0,6.0
	Operating System(s): 
	Keyword(s): kbEditor kbide kbOSWinNT400bug kbVC500bug kbVC600bug kbVisID100 kbVJ100 kbVJ110 kbVS97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Service Pack 4 for NT 4.0 you may temporarily lose the Paste
	functionality of the Visual C++ editor. The copied text can be seen in the
	Clipboard when this problem occurs. This problem is intermittent.
	
	CAUSE
	=====
	
	This problem may be due to the changes in the heap manager allocation pattern
	after installing NT 4.0 Service Pack 4 (SP4).
	
	RESOLUTION
	==========
	
	You can add the Visual C++ executable, MSDEV.exe, to the Image File Execution
	Options list in the registry. See the directions in the Resolution section of
	the following article in the Microsoft Knowledge Base:
	
	  Q195009 Application Access Violation or Hang After Applying SP4
	
	Adding MSDEV.exe to this list causes the SP4 heap manager to revert to SP3 and
	earlier allocation patterns for Visual C++. This has been shown to fix the paste
	problems some users experience.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEditor kbide kbOSWinNT400bug kbVC500bug kbVC600bug kbVisID100 kbVJ100 kbVJ110 kbVS97 kbDevStudio MSGRAPH kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0 SP4,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
