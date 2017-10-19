---
layout: page
title: "Q138345: PRB: Error &quot;File &lt;filename&gt; Not Found&quot; When Adding Files"
permalink: /kb/138/Q138345/
---

## Q138345: PRB: Error &quot;File &lt;filename&gt; Not Found&quot; When Adding Files

	Article: Q138345
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the error "File <filename> Not Found" when individually
	adding files to Visual SourceSafe when those files have names that contain
	spaces.
	
	CAUSE
	=====
	
	Visual SourceSafe may not correctly reference the file in the Add Files dialog
	box. This is due to the fact that filenames with spaces must be enclosed in
	quotation marks in Windows 95 and Windows NT. Visual SourceSafe may not properly
	add these quotation marks under certain circumstances.
	
	RESOLUTION
	==========
	
	When adding files that have spaces in the names, select the file with the mouse
	in the file list or enclose the filename in quotation marks in the File Name
	text box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create two files the names of which both contain spaces. Make sure these two
	  files are the only files in the directory.
	
	2. Select (highlight) a project in Visual SourceSafe, and press CTRL+A to add
	  files.
	
	3. In the Add Files dialog box, select the directory where these two files
	  reside.
	
	4. Select the first file, and click Add.
	
	5. Add a comment if you want, and click OK.
	
	6. In the Add Files dialog box, click the Add button again. The file is
	  highlighted in the list box as well as in the text box. Notice that the file
	  is not enclosed in quotation marks.
	
	7. Click OK when the "File <filename> Not Found" error messages appears.
	
	8. Click the file in the list box. Notice that Visual SourceSafe places
	  quotation marks around the filename.
	
	9. Click Add.
	
	RESULT: The file is added without errors.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
