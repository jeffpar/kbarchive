---
layout: page
title: "Q162959: PPT: Sample Code to Get PowerPoint's Build Number"
permalink: /kb/162/Q162959/
---

## Q162959: PPT: Sample Code to Get PowerPoint's Build Number

	Article: Q162959
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains sample Microsoft Visual Basic for Applications macros (Sub
	procedures) that obtain the build number of Microsoft PowerPoint.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Method 1: Use the Immediate Window
	----------------------------------
	
	1. On the Tools menu, point to Macro, and then click Visual Basic Editor.
	
	2. On the View menu, click Immediate Window.
	
	3. Type the following text into the Immediate Window edit window:
	
	  " ? Application.build" (without the quotation marks)
	
	4. Press Enter.
	
	  The build number is displayed on the next line of the Immediate Window.
	
	Method 2: Use a Visual Basic for Applications Module
	----------------------------------------------------
	
	1. On the Tools menu, point to Macro, and then click Macros.
	
	2. In the Macro Name box, type "GetBuildNumber" (without the quotation marks).
	
	3. Click Create.
	
	4. In the Visual Basic Editor, between the Sub GetBuildNumber() and End Sub
	  lines, type the following statement:
	
	  " MsgBox Application.Build" (without the quotation marks)
	
	  NOTE: Type the code on a blank line. If you type your code after an apostrophe
	  ('), the code is ignored.
	
	  Your code should look like this:
	
	         Sub GetBuildNumber()
	            MsgBox Application.Build
	         End Sub
	
	5. On the Run menu, click Run Sub/User Form.
	
	  The build number is displayed in a message box.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
