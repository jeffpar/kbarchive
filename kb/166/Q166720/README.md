---
layout: page
title: "Q166720: FIX: ATL Object Wizard Dialog Box Comes Up Empty"
permalink: kb/166/Q166720/
---

## Q166720: FIX: ATL Object Wizard Dialog Box Comes Up Empty

	Article: Q166720
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbwizard kbATL kbVC500bug kbVC600fixkbbuglist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access the Active Template Library (ATL) Object Wizard dialog box from
	the menu option Insert/New ATL Object, the dialog box comes up empty with no
	wizards available.
	
	CAUSE
	=====
	
	When Visual C++ is installed, all ATL Object Wizards are registered in the
	registry under "HKEY_CURRENT_USER\Software\Microsoft\ATLWizard." Settings under
	HKEY_CURRENT_USER are not visible if you login under a different user. If you
	install Visual C++ under one user and login as another, you will not see any
	available Wizards in the ATL Object Wizard dialog box.
	
	RESOLUTION
	==========
	
	Other user logins that need to use Visual C++ on the same computer need to have
	the same registry settings under
	"HKEY_CURRENT_USER\Software\Microsoft\ATLWizard". Here are the steps to do
	this:
	
	1. Login under the account that installed Visual C++.
	
	2. Run REGEDIT.
	
	3. Select "HKEY_CURRENT_USER\Software\Microsoft\ATLWizard."
	
	4. Export this entry to a file by picking Registry/Export Registry File from the
	  menu.
	
	5. Login as the other user who will use Visual C++.
	
	6. Double-click the .REG file to merge it with the registry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	Additional query words: kbatl210bug kbvc500bug kbatl300fix kbvc600fix
	
	======================================================================
	Keywords          : kbsetup kbwizard kbATL kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
