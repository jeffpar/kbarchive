---
layout: page
title: "Q161246: PPT: Sample Code to Get Input From an Office Assistant Balloon"
permalink: kb/161/Q161246/
---

## Q161246: PPT: Sample Code to Get Input From an Office Assistant Balloon

	Article: Q161246
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
	
	This article contains a sample Microsoft Visual for Applications macro (Sub
	procedure) that brings up the Office Assistant and then prompts you to make a
	selection. Five different animation choices are available. Once a radio button
	is clicked, the Assistant performs the animation. This code can be used as a
	starting point for creating Help systems with Microsoft Office.
	
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
	
	     Sub GetInput()
	
	        ' Declare variables.
	        Dim AssistantName As String
	        Dim IsVisible As Boolean
	        Dim Result As Byte
	        Dim ball as Balloon
	
	        ' For error trapping.
	        On Error Resume Next
	        Err.Clear
	
	        ' Get the name of the current assistant.
	        AssistantName = Assistant.Name
	
	        ' If the Assistant is not visible make visible.
	        If Assistant.Visible = False Then
	           Assistant.Visible = True
	           IsVisible = False
	        Else
	           IsVisible = True
	        End If
	
	        ' Create a balloon for the assistant.
	        Set Ball = Assistant.NewBalloon
	
	        With Ball
	
	           ' Add heading and question.
	           .Heading = "Hi! I Am " & AssistantName
	           .text = "Which Animation would you like me to perform?"
	
	           ' Add radio button choices for animation selection.
	           .Labels(1).text = "Appear"
	           .Labels(2).text = "Disappear"
	           .Labels(3).text = "Empty Trash"
	           .Labels(4).text = "Artsy"
	           .Labels(5).text = "Thinking"
	
	           ' Sets the BalloonType Property.
	           .BalloonType = msoBalloonTypeButtons
	
	           ' Make the balloon modal, this is the default.
	           .Mode = msoModeModal
	
	           ' Add a cancel button to the balloon, OK is default.
	           .Button = msoButtonSetCancel
	
	        End With
	
	        ' Loop until cancel is selected.
	        Do
	
	           ' Show the Balloon
	           Result = Ball.Show
	
	           ' If Cancel button selected, end the macro.
	           If Err <> 0 Then
	
	              ' If the assistant was not visible close the assistant.
	              If IsVisible = False Then
	                 Assistant.Visible = False
	              Else
	                 ' Set to idle.
	                 Assistant.Animation = msoAnimationIdle
	              End If
	
	              End
	           End If
	
	           ' Perform the animation.
	           Select Case Result
	              Case 1
	                 Assistant.Animation = msoAnimationAppear
	              Case 2
	                 Assistant.Animation = msoAnimationDisappear
	              Case 3
	                 Assistant.Animation = msoAnimationEmptyTrash
	              Case 4
	                 Assistant.Animation = msoAnimationGetArtsy
	              Case 5
	                 Assistant.Animation = msoAnimationThinking
	              Case Else
	                 MsgBox "An Error Occurred"
	                 End
	           End Select
	
	           ' Update the heading.
	           Ball.Heading = "Please Make a Selection"
	
	        Loop
	
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
	
	Additional query words: 97 8.00 ppt8 ppt8.0 office assistant help clippit powerpup genius talk say thought balloon tips&tricks modify customize user
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
