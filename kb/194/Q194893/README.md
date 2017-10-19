---
layout: page
title: "Q194893: BUG: Help System Closes After Closing Printer Properties Window"
permalink: /kb/194/Q194893/
---

## Q194893: BUG: Help System Closes After Closing Printer Properties Window

	Article: Q194893
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp400bug kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB
	Last Modified: 30-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to print a topic from the Visual Basic Help file, you access
	the Printer Properties dialog. The Help system closes unexpectedly when you
	close the Printer Properties window, and the topic is not printed. This problem
	occurs in the Visual Basic development environment or when using the ShowHelp
	method of the Common Dialog Control. This problem occurs only on Windows 95,
	Windows 98, or Windows Me.
	
	RESOLUTION
	==========
	
	The workarounds for this problem are limited. Launching Help by using the
	WinHelp function from the Win32 API results in the same problem. It is possible
	to avoid this problem by starting WinHelp32.EXE and specifying a Help file using
	the Shell() function. However, there is no way to specify a Help Topic when
	using Shell().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Visual Basic 6.0 is listed in the "Applies to" section of this article. It is
	important to note that version 6.0 will exhibit this problem only when a Help
	file designed for the WinHelp system is opened; for example, when opening the
	Visual Basic 5.0 Help file in Visual Basic 6.0. Because Visual Basic 6.0 uses a
	different Help file system, this problem does not apply to Visual Basic 6.0 when
	using files created with the new HTML file format.
	
	The following section uses the Menu selections available in Visual Basic 5.0. The
	menu options in Visual Basic 4.0 are slightly different, although the same
	problem does occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic on a computer running Windows 95/98.
	
	2. Click the Cancel button when the New Project window appears.
	
	3. Select Microsoft Visual Basic Help Topics from the Help menu.
	
	4. Click on any topic and then click the Display button on the Help Topics
	  window.
	
	5. With the Help topic displayed, choose Print Topic from the Options menu.
	
	6. When the Print dialog displays, click on the Printer Properties button.
	
	7. Close the Printer Properties window by clicking on OK or Cancel. The Help
	  system shuts down at this point, and the topic is not printed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp400bug kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
