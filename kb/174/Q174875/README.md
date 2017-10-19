---
layout: page
title: "Q174875: FIX: Bogus &quot;File is exclusively checked out&quot; Error"
permalink: /kb/174/Q174875/
---

## Q174875: FIX: Bogus &quot;File is exclusively checked out&quot; Error

	Article: Q174875
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400bug kbSSafe500bug kbVS97sp2fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0a, 5.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the error message "File <filename> is exclusively checked out"
	when attempting to check out a file that is not currently checked out.
	
	RESOLUTION
	==========
	
	Install Visual Studio 97 Service Pack 3 for Visual SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	This behavior occurs when you are using a mixture of SourceSafe versions 4.0a
	and 5.0 clients accessing the same database and multiple checkouts is not
	enabled.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the SourceSafe version 5.0 Admin, and deselect the "Allow Multiple
	  Checkouts" box on the General tab from Tools, Options.
	
	2. Run the SourceSafe version 5.0 Explorer, and check out a file.
	
	3. Run the SourceSafe version 4.0a Explorer, and check in the same file from
	  step 2.
	
	4. Repeat step 2, and note that you receive a message saying that the file is
	  exclusively checked out.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David de
	Groot, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400bug kbSSafe500bug kbVS97sp2fix 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbSSafe400a kbSSafe500 kbVS97 kbVS97Search
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
