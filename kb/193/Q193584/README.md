---
layout: page
title: "Q193584: FIX: Files Always Opened with Default Visual SourceSafe Viewer"
permalink: kb/193/Q193584/
---

## Q193584: FIX: Files Always Opened with Default Visual SourceSafe Viewer

	Article: Q193584
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600fix kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a text file from Visual SourceSafe Explorer, the default Visual
	SourceSafe viewer opens the file, even though you set the correct path for your
	desired editor in "Editor for viewing files".
	
	CAUSE
	=====
	
	The path for the executable file in the "Editor for viewing files" contains a
	space. For example:
	
	  C:\Program Files\Accessories\wordpad.exe
	
	NOTE: To see the path, click Options under the Tools menu and then looking for
	the "Editor for viewing files" text box on the General Tab.
	
	RESOLUTION
	==========
	
	Type quotes around the path name if it contains a space in it. For example:
	
	  "C:\Program Files\Accessories\wordpad.exe" "%1"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual SourceSafe version
	6.0.
	
	MORE INFORMATION
	================
	
	Visual SourceSafe Explorer allows you to customize your settings to view files.
	You can type the exact path to the executable file of your editor in the "Editor
	for viewing files" text box. When you try to view a file by selecting View File
	from the Edit menu, Visual SourceSafe uses the "Editor for viewing files" path
	to locate the .exe. However, if that path contains a space, the file is opened
	in the default Visual SourceSafe viewer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual SourceSafe Explorer.
	
	2. Go to the Tools menu and click Options. The General Tab appears in the
	  Options dialog box.
	
	3. If you are using a Windows 95 computer, type the following in the "Editor for
	  viewing files" text box:
	
	  c:\Program Files\Accessories\WordPad.exe
	
	  If you are using a Windows NT computer, type the following in the "Editor for
	  viewing files" text box:
	
	  c:\Program files\Windows NT\Accessories\WordPad.exe
	
	4. Click OK.
	
	5. Add a file to $/.
	
	6. Right-click on the file, and click View File.
	
	RESULT: Instead of WordPad, the file is opened in the default Visual SourceSafe
	viewer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600fix kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
