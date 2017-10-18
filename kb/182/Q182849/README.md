---
layout: page
title: "Q182849: PPT: Code to Detect if PowerPoint is Running on a Macintosh"
permalink: kb/182/Q182849/
---

## Q182849: PPT: Code to Detect if PowerPoint is Running on a Macintosh

	Article: Q182849
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbdta kbdtacode kbmacroexample KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an example of how to detect if your code is running on a
	Macintosh. The sample macro uses the OperatingSystem property, included with the
	PowerPoint 98 object model, to determine this.
	
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
	
	    ' **********************************************************************
	     '
	     ' FUNCTION:
	     '    RunningOnMac() As Boolean
	     '
	     ' PURPOSE:
	     '    Detects if you are running on a Macintosh computer.
	     '
	     ' ARGUMENTS:
	     '    None
	     '
	     ' RETURNS:
	     '    True - You are running on a Macintosh computer.
	     '    False - You are not running on a Macintosh computer.
	     '
	     ' **********************************************************************
	     Function RunningOnMac() As Boolean
	
	        ' Get the Operating System string.
	        Dim strOs As String
	        strOs = Application.OperatingSystem
	
	        ' Check if the string Mac is part of the Os string.
	        If InStr(1, strOs, "Mac", vbBinaryCompare) > 0 Then
	           RunningOnMac = True
	        Else
	           RunningOnMac = False
	        End If
	
	     End Function
	
	The following example shows how to use the RunningOnMac function:
	
	     Sub main()
	
	        ' Test if you are on a Macintosh computer.
	        If RunningOnMac Then
	
	           ' Enter Macintosh-specific code here.
	           MsgBox "Running on a Macintosh"
	
	        Else
	
	           ' Enter Windows-specific code here.
	           MsgBox "Running on Windows"
	         End If
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: mac_ppt ppt98 ppt_98 powerpoint 8.00 mac_powerpt powermac powerpt vba vbe os 8.01 MacOs OS8
	
	======================================================================
	Keywords          : kbcode kbProgramming kbdta kbdtacode kbmacroexample KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC
	Issue type        : kbhowto
	
	=============================================================================
	
