---
layout: page
title: "Q315639: BUG: Problems When You Automatically Check Out Files"
permalink: /kb/315/Q315639/
---

## Q315639: BUG: Problems When You Automatically Check Out Files

	Article: Q315639
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	- Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you work with the Visual Studio resource editors and source control, you
	may experience problems and unexpected behaviors when you automatically check
	files out of Visual SourceSafe from within the .NET integrated development
	environment (IDE).
	
	RESOLUTION
	==========
	
	To resolve this issue, be sure to manually check out any files that you want to
	open or edit with the resource editors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When used with source control, the Visual Studio resource editors (which are
	used to edit .rc files, .res files, resources in executable files, stand-alone
	images, and binary files) should be used only with files that have been manually
	checked out of Visual SourceSafe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbVSNETPro kbSSafe600C kbVSNETSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
