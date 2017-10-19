---
layout: page
title: "Q168411: FIX: VS97 Per-File Switch at Project Level Silently Deleted"
permalink: /kb/168/Q168411/
---

## Q168411: FIX: VS97 Per-File Switch at Project Level Silently Deleted

	Article: Q168411
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500bug kbVC600fix kbGrpDSToolskbbuglist
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual Studio 97 object model user applies a switch to a project and that
	switch is valid "per-file only" (such as the /h switch on MIDL), then Developer
	Studio does not return an error and the switch is not saved when the project is
	saved.
	
	RESOLUTION
	==========
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	There is no facility in the Developer Studio 97 automation object model to add
	settings on a per-file basis. Some settings can only be applied at the file
	level. Therefore, some settings cannot be set through Developer Studio
	automation.
	
	Visual Studio 6.0 supplies new Automation methods that provide this
	functionality.
	
	REFERENCES
	==========
	
	Visual Studio Online Documentation: search on the following methods of the
	Configuration object:
	
	- AddFileSettings
	
	- RemoveFileSettings
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
