---
layout: page
title: "Q141547: FIX: Visual SourceSafe Help System Searches for Wrong HLP File"
permalink: kb/141/Q141547/
---

## Q141547: FIX: Visual SourceSafe Help System Searches for Wrong HLP File

	Article: Q141547
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600fix
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Visual SourceSafe is started and an invalid user name is entered, the "User
	not found" dialog box appears. If you click the Help button or press the F1 key,
	the appropriate Visual SourceSafe Help file is not called.
	
	When Help is invoked from the User Not Found dialog box, one of the following
	occurs:
	
	- You are prompted with this question:
	
	  Cannot find the ...\SSEXP.HLP file. Do you want to try to find this file
	  yourself?
	
	  NOTE: This file is not installed with Visual SourceSafe 4.0.
	
	- The following error message appears and a blank Windows Help screen appears.
	
	  Cannot find Help file
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual SourceSafe
	version 6.0 for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
