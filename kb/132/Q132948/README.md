---
layout: page
title: "Q132948: HOWTO: Integrate Custom DDX /DDV in 32-bit ClassWizard Interface"
permalink: /kb/132/Q132948/
---

## Q132948: HOWTO: Integrate Custom DDX /DDV in 32-bit ClassWizard Interface

	Article: Q132948
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbClassWizard kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual C++ 32-bit Edition, versions 2.0 and above, allow users to
	integrate customized DDX and DDV routines into the ClassWizard interface. The
	Microsoft Foundation Class Library (MFC) Technical Note 26 (TN026) describes
	this feature.
	
	MORE INFORMATION
	================
	
	TN026 describes how users can integrate their own DDX and DDV routines into the
	Class Wizard interface. For Visual C++ version 2.x, this is accomplished by
	adding an [ExtraDDX] section and its appropriate entries to the APSTUDIO.INI
	file in the Windows NT root directory. For Visual C++ version 4.0, this is
	accomplished by adding the necessary entries to either the [General Info]
	section of a particular project's .CLW file or in the [ExtraDDX] section of the
	DDX.CLW file in the \MSDEV\BIN directory. The required format for entries of
	both sections, [ExtraDDX] and [General Info] is clearly specified.
	
	TN026 recommends that if a user plans to use the customized DDX and DDV routines
	in many projects, they should add the appropriate entries to the [ExtraDDX]
	section of the Visual C++ version 2.x APSTUDIO.INI file or the the Visual C++
	version 4.0 DDX.CLW file. TN026 further recommends that if a user of Visual C++
	version 4.0 plans to create these custom routines for just a few projects, then
	it is better to just modify the [GeneralInfo] section of the .CLW files for the
	particular projects.
	
	By default, APSTUDIO.INI and DDX.CLW are not created. To do so, simply use a text
	editor and add the [ExtraDDX] section or the [GeneralInfo] section,
	respectively, as discussed above. APSTUDIO.INI must be placed into the Windows
	NT root directory; DDX.CLW must be placed in the %MsDevDir%\BIN directory, where
	%MsDevDir% is the full path to the installation directory of Visual C++ version
	4.0.
	
	REFERENCES
	==========
	
	Please see Technical Note 26 for information on the [ExtraDDX] section and its
	entries.
	
	Additional query words: kbinf
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbClassWizard kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:2.0,2.1,2.2,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
