---
layout: page
title: "Q158469: INFO: Time Difference in Checking Out vs. Getting File in Source"
permalink: kb/158/Q158469/
---

## Q158469: INFO: Time Difference in Checking Out vs. Getting File in Source

	Article: Q158469
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbGrpDSMDAC kbDSupport
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 4.0a 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe operates more slowly when it checks out a file than when it
	gets a file. This is especially evident in the Visual SourceSafe integration
	with other products.
	
	MORE INFORMATION
	================
	
	Following are the steps that Visual SourceSafe goes through when it checks out a
	file. The order of the steps depends on the system configuration and the user's
	actions, so these steps may not occur in this exact order:
	
	1. Your user rights are verified to make sure that you have the proper access
	  rights for the operation.
	
	2. Visual SourceSafe checks to see if the file is currently checked out by you
	  or any other user.
	
	3. If someone has the file checked out already, the multiple checkouts setting
	  is selected. (This applies only to text files because binary files cannot be
	  set up for multiple checkouts.) If the other user currently has the file
	  checked out and is checking the file out again to the same directory, the
	  operation fails. If the other user currently has the file checked out and is
	  checking the file out again to a different directory, the operation works.
	
	4. If Visual SourceSafe verifies that you can check the file out, then the log
	  file is written with a checkout record for you.
	
	5. The Status.dat file is updated.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q130270 BUG: SourceSafe Reports a Date/Time of 1/1/70
	
	
	6. Visual SourceSafe looks for a Replace_Writable variable and, depending on
	  that setting, will skip the file, replace the file, or merge the file.
	
	7. A GET happens.
	
	This procedure causes the checkout operation to go much slower than when
	SourceSafe gets a file. Following are the steps that Visual SourceSafe goes
	through when it gets a file:
	
	1. Your user rights are checked to see if you have the proper access rights for
	  the operation.
	
	2. Visual SourceSafe looks for a Replace_Writable variable and, depending on
	  that setting, skips the file, replaces the file, or merges the file.
	
	3. A GET happens.
	
	Most users of Visual SourceSafe are running over a local area network; the
	network file I/O and data transfer slow down the checkout operation even more.
	Note that users of Microsoft Visual FoxPro see a larger delay due to the
	intermediate text files that are generated from the FoxPro binary files. This
	step does not occur in Visual Basic or Visual C++.
	
	Additional query words: kbdss
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbGrpDSMDAC kbDSupport 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,4.0a,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
