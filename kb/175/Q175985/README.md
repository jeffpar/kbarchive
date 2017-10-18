---
layout: page
title: "Q175985: FIX: Installing DAO SDK Outside of &#92;DEVSTUDIO May Cause Problems"
permalink: kb/175/Q175985/
---

## Q175985: FIX: Installing DAO SDK Outside of &#92;DEVSTUDIO May Cause Problems

	Article: Q175985
	Product(s): Microsoft C Compiler
	Version(s): winnt:3.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbVC500fix kbVC600fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, version 3.5, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the DAO 3.5 SDK in a directory path outside of the default for
	DevStudio and give the name of that directory an extension, that is, \Daosdk.00,
	then the settings for both the Include and Lib paths within Visual C++ are
	cleared.
	
	This bug is reproducible only if the new destination directory name includes an
	extension (".00" for example) AND is outside the DevStudio directory.
	
	CAUSE
	=====
	
	This bug is caused by a problem with an InstallShield registry function where a
	period (.) in the path causes the function to truncate the string it's supposed
	to be writing.
	
	RESOLUTION
	==========
	
	Uninstall the DAO SDK using Control Panel/Add Remove Programs. The default
	directories for Visual C++ will be restored. Reinstall the DAO SDK within the
	DevStudio directory, or without using an extension in the target installation
	directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual C++ 5.0. Verify that the default Include and Library
	  directories are listed in the Tools\Options dialog box, Directories Tab. Then
	  close Visual C++ 5.0.
	
	2. Execute Daosdk.35\....\Retail\Disk1\Setup.
	
	3. In the second screen, change the destination directory to C:\DataAcc.00.
	  Click Yes to the "Create new dir?" prompt.
	
	4. Click Custom Install, then all options in the last two dialog boxes. Allow
	  setup to complete.
	
	5. Restart Visual C++ 5.0, and recheck the Include and Library directories in
	  the Tools\Options dialog box, Directories Tab.
	
	RESULT: All original directories confirmed in step 1 are gone, with the new
	directory specified in step 3 in their place.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbVC500fix kbVC600fix 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : winnt:3.5,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
