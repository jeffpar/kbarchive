---
layout: page
title: "Q147654: HOWTO: Get or Create a Unique Audio CD Volume Label"
permalink: /kb/147/Q147654/
---

## Q147654: HOWTO: Get or Create a Unique Audio CD Volume Label

{% raw %}

	Article: Q147654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Part of the Multimedia standard calls for all Audio CDs to have a unique volume
	identifier following a specific (suggested) format of:
	
	  XXXX-#####
	
	XXXX is the alpha vendor code, and ##### is a five-digit unique number for the
	CD. This information is stored on the inner track of the CD and is also usually
	etched on the inner edge of the inside ring of the CD. Not all manufacturers
	have a unique volume identifier, nor do all follow this standard volume label
	format. Although this is a standard, at this time the MultiMedia Application
	Programming Interface (API) does not have a built-in function that will retrieve
	this information. This article shows you how to retrieve or create this
	information programmatically.
	
	MORE INFORMATION
	================
	
	In order to retrieve the unique volume identifier from the CD, you need to call
	MSCDEX directly. The information on how to do this is contained within the
	MSCDEX 2.20 specification.
	
	Because some manufacturers aren't including this unique identifier on their CDs,
	Microsoft recommends that you create a unique volume identifying number based on
	the track information already included on the CD. The following example shows
	you how.
	
	Step-by-Step Example
	--------------------
	
	This example shows a method for creating a unique number to identify an audio CD
	based on track information. The purpose of this number is to make it possible
	for Visual Basic programs to recognize a loaded CD and retrieve information from
	it.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a text box (Text1) and a Microsoft Multimedia control (MMControl1) to
	  Form1.
	
	3. Place the following code in the Form_Load event of Form1:
	
	        Private Sub Form_Load ()
	        Dim DiskID As Long
	        Dim Track As Integer
	        ' Initialize CD:
	        mmcontrol1.DeviceType = "CDAudio"
	        mmcontrol1.Command = "open"
	        ' Make unique number based on tracks and tracklength:
	        DiskID = mmcontrol1.Tracks
	        For Track = 1 To mmcontrol1.Tracks
	        mmcontrol1.Track = Track
	        DiskID = DiskID + mmcontrol1.TrackLength  ' Add 4-byte TrackLength
	        DiskID = DiskID + mmcontrol1.Length       ' Add 4-byte CD Length
	        Next Track
	        ' Set text to unique value:
	        Text1.Text = DiskID
	        End Sub
	
	4. Load a CD.
	
	5. Start the program, or press the F5 key.
	
	6. The Text1 box should have a unique identifying number for the CD.
	
	NOTE: Before starting the program, a CD must be inserted and ready to play.
	Therefore, you should add code to detect when a CD has been inserted and then
	run the above code.
	
	REFERENCES
	==========
	
	For more information, see the MultiMedia Programmer's Reference, CDAudio
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbMM kbVBp kbdsd kbDSupport
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
