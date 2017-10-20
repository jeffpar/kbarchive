---
layout: page
title: "Q237804: BUG: Deploying Shadow Files to a Live Web Site Fails"
permalink: /kb/237/Q237804/
---

## Q237804: BUG: Deploying Shadow Files to a Live Web Site Fails

{% raw %}

	Article: Q237804
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbInternet kbSSafe500bug kbSSafe600bug kbIIS kbGrpDSSSafe kbiis400bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files shadowed to a live Web site don't get updated.
	
	You may not get any error messages or you may get:
	
	  Error "File <path being shadowed to> is already open"
	
	CAUSE
	=====
	
	IIS 4.0 caches files to speed up Web requests. This caching keeps the file open
	for a period of 30 to 60 seconds. During this time, if a shadow occurs, that
	file is locked and cannot be updated.
	
	
	RESOLUTION
	==========
	
	This issue will be resolved in the next major release of IIS version 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem occurs because IIS 4 locks the file open in the Web browser. The
	shadow command cannot write to the file because the file has a handle already
	open. If the shadow command is attempted 60 seconds later, it will succeed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Visual SourceSafe Administrator, create a shadow folder for any Visual
	  SourceSafe project that is a Web site on an IIS 4.0 server. Select the Set
	  read-only flag for all files checkbox.
	
	2. Shadow files to the Web site.
	
	3. Open one of the shadowed files in a Web browser through the URL, like
	  "http://webserver/test.htm".
	
	4. Check out and edit that file in Visual SourceSafe using any editor, such as
	  Microsoft Notepad.
	
	5. Check the file back in.
	
	REFERENCES
	==========
	
	  Q184956 Problems Deleting Files Under Internet Information Server
	
	  Q138344 HOWTO: Set Up a Shadow Dir in Visual SourceSafe Administrator
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbInternet kbSSafe500bug kbSSafe600bug kbIIS kbGrpDSSSafe kbiis400bug 
	Technology        : kbSSafeSearch kbiisSearch kbAudDeveloper kbiis400 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
