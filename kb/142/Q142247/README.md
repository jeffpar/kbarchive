---
layout: page
title: "Q142247: FIX: Application Error Occurs When Printing a Large Project"
permalink: /kb/142/Q142247/
---

## Q142247: FIX: Application Error Occurs When Printing a Large Project

{% raw %}

	Article: Q142247
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbnokeyword kbide kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing a large 32-bit Visual Basic project under the Windows NT 3.51 operating
	system generates an application error that closes Visual Basic. This behavior
	occurs if the Visual Basic program is running under the Windows NT 3.51
	operating system whether you print the project to a printer or a file.
	
	RESOLUTION
	==========
	
	To print a large Visual Basic project from Windows NT 3.51, print the sections
	individually rather than as one large piece.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual Basic
	version 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	Step to Reproduce Behavior
	--------------------------
	
	1. Start the 32-bit version of the Visual Basic 4.0 under the Window NT 3.51
	  operating system or if it is already running, click New Project on the File
	  menu.
	
	2. Load the Visdata project located in the \Program Files\Microsoft Visual
	  Basic\Samples\visdata directory. To load this project:
	
	  a. From the File menu, click the Open Project menu item. The Open Project
	     dialog box appears.
	
	  b. Go to the \Program Files\Microsoft Visual Basic\Samples\visdata directory.
	
	  c. Click the VISDATA.VBP file name.
	
	  d. Click the OK button to close the Open Project dialog box and load the
	     project.
	
	3. From the File menu, click the Print menu item. The Print dialog box appears.
	
	4. In the Print dialog box, click the Project option button and the Code and
	  Form as Text check boxes.
	
	5. Click OK to close the Print dialog box and begin printing. An application
	  error occurs, and Visual Basic ends.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbide kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbOSWinSearch kbOSWinNT351 kbVB400Search kbVB400 kbOSWinNTSearch
	Version           : WINDOWS:4.0; winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
