---
layout: page
title: "Q163268: PPT: Sample Code to Change the Zoom Percentage"
permalink: kb/163/Q163268/
---

## Q163268: PPT: Sample Code to Change the Zoom Percentage

	Article: Q163268
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
	
	This article contains a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that reduces the zoom percentage to one-half of the current zoom
	percentage, and then provides an option to restore the original zoom setting.
	
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
	
	Sample Visual Basic Procedure
	-----------------------------
	
	     Sub ChangeView()
	
	        ' The smallest percentage you can use is 10%.
	        Const MinViewPercent As Long = 10
	
	        ' The largest percentage you can use is 400%.
	        Const MaxViewPercent As Long = 400
	
	        ' Stores the results of the MsgBox selection.
	        Dim lResult As Long
	
	        Dim lCurrentViewPercentage As Long
	        Dim lNewViewPercentage As Long
	
	        ' Get the current view percentage.
	        lCurrentViewPercentage = ActiveWindow.View.Zoom
	
	        ' Calculate a new view by dividing the old view by 2.
	        lNewViewPercentage = (lCurrentViewPercentage / 2)
	
	        ' Check to see if OK to change the percentage. If you apply a view
	        ' percentage less then 10, a run-time error results. This code
	        ' ensures a valid zoom is assigned.
	        If lNewViewPercentage >= MinViewPercent Then
	
	           ' Assign the calculated percentage to the zoom percentage.
	           ActiveWindow.View.Zoom = lNewViewPercentage
	
	        Else
	
	           ' If percentage goes out of range set to minimum level.
	           ActiveWindow.View.Zoom = MinViewPercent
	
	        End If
	
	        ' See whether a change was made to the zoom percentage.
	        If lCurrentViewPercentage = ActiveWindow.View.Zoom Then
	
	           ' No change was made.
	           MsgBox "No change was made. Your zoom percentage is already " _
	           & "set to the minimum percentage.", vbInformation, _
	           "Minumin Already Set"
	
	        Else
	
	           ' A change to the zoom percentage was made.
	           ' Option to restore the original zoom percentage.
	           lResult = MsgBox("The zoom percentage was changed to " _
	                     & ActiveWindow.View.Zoom & "%. " _
	                     & "Do you want to restore your original " _
	                     & "zoom percentage of " & lCurrentViewPercentage _
	                     & "%?", vbYesNo, "Restore Original Percentage")
	
	           ' See whether they clicked the Yes button.
	           If lResult = vbYes Then
	              ActiveWindow.View.Zoom = lCurrentViewPercentage
	           End If
	
	        End If
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro"
	(without the quotation marks), click Search, and then click to view "Create a
	macro in Visual Basic Editor."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to run a macro" (without
	the quotation marks), click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe vb macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
