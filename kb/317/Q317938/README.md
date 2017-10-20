---
layout: page
title: "Q317938: PRB: &#42;Source Control cache is not always updated when it should"
permalink: /kb/317/Q317938/
---

## Q317938: PRB: &#42;Source Control cache is not always updated when it should

{% raw %}

	Article: Q317938
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Source control operations fail when the status of source control has not been
	updated in Visual Studio.
	
	Examples of this behavior occur in the following scenarios:
	
	- After you enable multiple checkouts, Visual Studio does not allow you to
	  perform multiple checkouts.
	
	- When you click Get Latest Version after another user has recently updated a
	  file, Visual Studio does not provide the latest copy of the file.
	
	CAUSE
	=====
	
	Visual Studio has cached an out-of-date source control server state.
	
	RESOLUTION
	==========
	
	Close and then reopen Visual Studio to refresh the source control cache.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Scenario 1: Visual Studio Does Not Allow Multiple Checkouts After You Enable
	Multiple Checkouts
	
	1. In Visual SourceSafe Administrator, disable multiple checkouts. To do this,
	  on the Tools menu, click Options and then disable multiple checkouts on the
	  General tab.
	
	2. In Visual Studio, add an entire solution to source control. To do this, on
	  the File menu, click Source Control, and then click Add Solution to Source
	  Control.
	
	3. In Visual SourceSafe Explorer, use a different user to check out one of the
	  files in the solution that you added in step 2.
	
	  When you attempt to check out the same file in Visual Studio, the operation
	  fails.
	
	4. In Visual SourceSafe Administrator, enable multiple checkouts. To do this, on
	  the Tools menu, click Options and then enable multiple checkouts on the
	  General tab.
	
	When you attempt to check out the same file in Visual Studio, sometimes the
	checkout fails unexpectedly, as if the Multiple Checkouts option is still
	disabled.
	Scenario 2: Get Latest Version of a File That Another User Recently Checked In
	
	1. User1 checks in a file.
	
	2. User2 clicks Get Latest Version of the same file.
	
	The expected behavior is that User2 now has the version that User1 just checked
	in. However, sometimes the file can appear unchanged to User2.
	
	Additional query words: SourceSafe source control caching cache get latest multiple checkout fail
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
