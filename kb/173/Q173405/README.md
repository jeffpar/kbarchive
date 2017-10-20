---
layout: page
title: "Q173405: PRB: Misleading Message When Checking Out Older File Version"
permalink: /kb/173/Q173405/
---

## Q173405: PRB: Misleading Message When Checking Out Older File Version

{% raw %}

	Article: Q173405
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to check out an older version of a file from the command line
	you receive the following message:
	
	  <filename> is pinned to an older version.
	  Unpin this file or perform a rollback before attempting to check it out.
	
	In versions 4.x, the message has different wording, but is also misleading:
	
	  You are using an old version of <filename>, and cannot change it.
	  Rollback to make that version the most recent if you need to change it.
	
	CAUSE
	=====
	
	Because checking out older versions creates a merge scenario (that is, the older
	version of a file is checked out and when it is eventually checked back in), it
	must merge with the most current version. Before this can happen, Visual
	SourceSafe must assume multiple checkouts is enabled. If it isn't, you receive
	the message.
	
	RESOLUTION
	==========
	
	You must enable the option to "Allow multiple checkouts" from the Visual
	SourceSafe Admin utility before you try to check out older file versions. To do
	this, implement the following steps:
	
	1. From the Tools menu, select Options.
	
	2. Select the "Allow multiple checkouts" check box.
	
	3. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Admin program and make sure "Allow multiple checkouts" check box is
	  not selected.
	
	2. From the command line type:
	
	  " ss checkout $/<project name>/<filename> -v1" (without the
	  quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
