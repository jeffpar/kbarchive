---
layout: page
title: "Q181089: INFO: Dialog Box Appears Even When No Conflicts Exist"
permalink: /kb/181/Q181089/
---

## Q181089: INFO: Dialog Box Appears Even When No Conflicts Exist

{% raw %}

	Article: Q181089
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you check in a file, the following dialog box is displayed even if there
	are no conflicts:
	
	  Have any conflicts in <filename> been properly resolved?
	
	CAUSE
	=====
	
	Visual SourceSafe does not know whether there are any conflicts or not. The
	program recognizes that it is in a merge situation and the user is prompted to
	resolve any possible conflicts. This is a safety mechanism and if there are no
	conflicts the user should always select Yes.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a text file to use for testing and name the file Test.txt.
	
	2. In Visual SourceSafe have User1 check out and make changes to the Test.txt
	  file.
	
	3. Next, have a Guest user check out the Test.txt file.
	
	4. Now have User1 check in Test.txt.
	
	5. After User1 checks in Test.txt, have the Guest to use "Get" to obtain the
	  latest version of the file.
	
	6. The Guest now checks in the latest version of Test.txt and the dialog box
	  appears.
	
	  This behavior is by design and there is not a way to disable this feature.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
