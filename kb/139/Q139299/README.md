---
layout: page
title: "Q139299: FIX: Ampersand (&amp;) Appears as Underscore (_) in the Explorer"
permalink: /kb/139/Q139299/
---

## Q139299: FIX: Ampersand (&amp;) Appears as Underscore (_) in the Explorer

	Article: Q139299
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual SourceSafe Explorer displays a project or file name with an
	underscore (_) character. It appears to be a shortcut but does not provide
	shortcut functionality. The MS-DOS command line shows an ampersand (&)
	character instead.
	
	RESOLUTION
	==========
	
	Do not use files or projects that contain the ampersand (&) character. If
	there are items that appear this way in the SourceSafe Explorer, then you can
	easily rename the items by clicking Rename on the File menu. Give the file the
	same name without the ampersand (&) character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual SourceSafe 5.0.
	
	MORE INFORMATION
	================
	
	The way the ampersand (&) character in Visual SourceSafe works is different
	in the SourceSafe Explorer from the way it works on the command line. In the
	SourceSafe Explorer, the ampersand (&) character translates into the
	underscore (_) character. In most Windows programming languages, the ampersand
	(&) character is used to define a shortcut key to an item. In Visual
	SourceSafe, the same appears to happen, but no shortcut is available. The MS-DOS
	command line interprets this character differently and returns the item as a
	literal ampersand (&) character in the string.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the SourceSafe Explorer. create a project $/My&Project.
	
	2. Notice the ampersand has changed to an underscore under the P in MyProject.
	  This appears to be a standard Windows shortcut.
	
	3. Press CTRL+P. Notice that nothing happens. The shortcut for MyProject is not
	  active even though there appears to be a valid shortcut defined.
	
	4. Open an MS-DOS command window.
	
	5. Type the following on the command line:
	
	  " SS DIR $/ " (without the quotation marks)
	
	6. Notice that the MyProject project shows up as My&Project on the command
	  line.
	
	This might occur on files as well as projects. The file may be renamed from the
	Visual SourceSafe Explorer to eliminate this problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
