---
layout: page
title: "Q308102: PRB: End of Line Errors Can Occur If UTF8 Files are Interpreted"
permalink: /kb/308/Q308102/
---

## Q308102: PRB: End of Line Errors Can Occur If UTF8 Files are Interpreted

	Article: Q308102
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your file may become corrupt and may contain extra carriage return and line feed
	charaters if both of the following conditions exist:
	
	- The file contains UTF8 characters that are outside of the ASCII range.
	
	- The code page of the system is a multibyte character set (MBCS) code page
	  (such as a Japanese code page).
	
	CAUSE
	=====
	
	When Visual SourceSafe adjusts line endings or merges text, the
	misinterpretation of characters results in extra carriage return and line feed
	characters that corrupt the file.
	
	RESOLUTION
	==========
	
	To resolve this issue, mark the file as binary. Note that when you mark the file
	as binary, you cannot perform multiple checkouts. Whether you mark the file as
	binary depends on your situation and whether you require the multiple checkout
	option.
	
	If either of the following conditions is true, do not mark the file as binary:
	
	- The UTF8 files contain only ASCII characters.
	
	- The UTF8 files contain more characters than just ASCII characters, but the
	  code page of your system is not MBCS.
	
	If your UTF8 files contain more than just ASCII characters, and if you work in an
	MBCS code page, use one of the following methods:
	
	- After you add the file to Visual SourceSafe, right-click the file, click
	  Properties, and then click Binary in the Type list. If you click Binary, you
	  cannot perform multiple checkouts.
	
	- Do not use UTF8, and use MBCS to store your .xml files. To change the
	  encoding on a file, use the Save As command in the Visual SourceSafe Editor
	  as follows:
	  1. In the Visual SourceSafe Editor, double-click the file, and then click
	     Edit.
	  2. On the File menu, click Save As, and then select a different encoding
	     option from the list.
	
	     NOTE: You may also need to adjust the encoding tag at the top of the file.
	     For example, if the file is an .xml or an .html file, the header may
	     contain a specific Encoding equals statement.
	
	If the Visual SourceSafe copy of the file becomes corrupt, delete the file from
	Visual SourceSafe, and then add the file as binary.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch kbSSafe600C
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
