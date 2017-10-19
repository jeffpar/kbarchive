---
layout: page
title: "Q184247: BUG: FileListBox Display Inconsistent Between Windows 95 &amp; NT 4"
permalink: /kb/184/Q184247/
---

## Q184247: BUG: FileListBox Display Inconsistent Between Windows 95 &amp; NT 4

	Article: Q184247
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbListBox kbVBp kbVBp500bug kbVBp600bug kbOSWin98 kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a FileListBox has its Pattern property set to "*." there is a discrepancy
	between how Windows 95 and other versions of Windows display the files. On
	Windows 2000, Windows NT and Windows 98, only files without extensions are
	displayed. However, on Windows 95, all files are shown.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a standard EXE project. Form1 is created by default.
	
	2. Place a FileList box (File1) on Form1.
	
	3. Place a CommandButton on Form1 and place the following code in the click
	  event:
	
	  File1.Path = "c:\" ' folder that contains files without extensions.
	  File1.Pattern = "*."
	
	4. Press the F5 key to run the application on Windows 95, and note that all the
	  files are displayed in the FileListBox. Run the same application on Windows
	  NT 4.0 or Windows 2000, and note that only files without extensions are
	  displayed in the FileListBox. If you run the same application on Windows Me,
	  "NULL" is displayed in a FileListBox.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q196141 PRB: Problems Using Intrinsic File System Controls
	
	Additional query words:
	
	======================================================================
	Keywords          : kbListBox kbVBp kbVBp500bug kbVBp600bug kbOSWin98 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
