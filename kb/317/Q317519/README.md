---
layout: page
title: "Q317519: PRB: Incorrect Time and Date in .resx File Added from VS .NET"
permalink: kb/317/Q317519/
---

## Q317519: PRB: Incorrect Time and Date in .resx File Added from VS .NET

	Article: Q317519
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	   - Microsoft Visual Studio.NET (2002), Academic Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An incorrect time and date stamp appear in the Visual SourceSafe Explorer for a
	.resx file that is added from Visual Studio .NET.
	
	CAUSE
	=====
	
	The .resx file is copied from a template, which may have an earlier date. The
	last modification date appears in Solution Explorer, instead of the current time
	stamp.
	
	RESOLUTION
	==========
	
	Visual SourceSafe updates the date during the next modification:
	
	1. Check out the file (the default name of the file is UserControl1.cs).
	
	2. Modify the file, and then check in the file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a control library.
	
	2. Add the project to Visual SourceSafe.
	
	3. In Visual SourceSafe Explorer, note the date that is associated with the
	  .resx file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
