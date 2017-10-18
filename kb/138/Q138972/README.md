---
layout: page
title: "Q138972: FIX: LNK4076: Invalid Incremental Status File"
permalink: kb/138/Q138972/
---

## Q138972: FIX: LNK4076: Invalid Incremental Status File

	Article: Q138972
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVC410fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Each time a particular project is built, the linker issues this warning:
	
	  LINK: "warning LNK4076: invalid incremental status file <Project>.ilk":
	  linking nonincrementally
	
	Following this warning, the linker performs a full link.
	
	CAUSE
	=====
	
	The message is generated when the project's .ilk file has been corrupted. The
	most likely cause of this is stopping a build during the link phase by clicking
	Stop Build on the Build menu.
	
	RESOLUTION
	==========
	
	Use either of the following resolutions:
	
	- Delete the .ilk file. This will cause a non-incremental link next time.
	  Linking will be incremental thereafter.
	
	-or-
	
	- Perform a rebuild all. This will delete the .ilk file prior to the build.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	The .ilk file contains information for incremental linking. When you stop the
	build during the link phase, this file is truncated to 0 bytes. When the linker
	recognizes the corrupted .ilk file, it displays the warning and performs a
	complete link. However it does not delete the corrupted file.
	
	The presence of the corrupted .ilk file prevents the creation of a new file with
	the correct information during the full link. Therefore, it is necessary to
	delete the file manually to reinstate incremental linking.
	
	Additional query words: kbVC400bug 4.00 4.10 3.00 3.10 alwaysupdate dskbsweep
	
	======================================================================
	Keywords          : kbVC410fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
