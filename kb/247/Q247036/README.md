---
layout: page
title: "Q247036: HOWTO: Add Sound to Form Using the Microsoft Multimedia Control"
permalink: /kb/247/Q247036/
---

## Q247036: HOWTO: Add Sound to Form Using the Microsoft Multimedia Control

{% raw %}

	Article: Q247036
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbContainer kbCtrl kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 19-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to add sound, or .wav files, to a form.
	
	MORE INFORMATION
	================
	
	Although you can use the SET BELL TO command to play a waveform file, you do not
	have control over the file once it starts. That is, you cannot stop, pause, or
	resume the waveform file. By using the Microsoft Multimedia Control version 6,
	you can play a waveform file when the form is opened or whenever you wish to add
	sound.
	
	Because you have control over the waveform file, it is not necessary to have the
	Multimedia control visible. All actions can be controlled through code.
	
	1. In the Tools menu, under Options, click the Controls tab. Click ActiveX
	  Controls, scroll down the list and select Microsoft Multimedia Control
	  version 6, and then click OK.
	
	2. Create a new form.
	
	3. On the Form Controls toolbar, click the View Classes button, and then select
	  ActiveX Controls.
	
	4. Click the Multimedia control and add it to the form.
	
	5. Select the Multimedia control and change the Name property to MCI. Change the
	  Visible property to .F.
	
	6. Open the Init event of the Multimedia control and add the following code:
	
	  * Set properties needed by MCI to open.
	  THISFORM.MCI.NOTIFY = .T.		&& Pause
	  THISFORM.MCI.WAIT = .T.
	  THISFORM.MCI.Shareable = .F.
	  THISFORM.MCI.DeviceType = "WaveAudio"
	  THISFORM.MCI.RecordEnabled = .T.
	  THISFORM.MCI.RecordMode = 0
	  THISFORM.MCI.StopEnabled = .T.
	  THISFORM.MCI.FileName = GETFILE("wav")
	
	  * Open the MCI WaveAudio device.
	  THISFORM.MCI.COMMAND = "Open"
	  THISFORM.MCI.COMMAND = "Play"
	
	7. Add a Command button and change the caption to "Stop" (without the quotation
	  marks).
	
	8. In the click event of the Stop button, add this code:
	
	  IF THIS.CAPTION="Stop"
	  	THISFORM.MCI.COMMAND = "Stop"
	  	THIS.CAPTION="Restart"
	  ELSE
	  	THISFORM.MCI.COMMAND = "Play"
	  	THIS.CAPTION="Stop"
	  ENDIF
	
	9. In the Destroy event of the form, add this code:
	
	  THISFORM.MCI.COMMAND = "Close"
	
	10. Add another Command button and change the caption to "Rewind" (without the
	  quotation marks).
	
	11. In the click event of the Rewind button, add this code:
	
	  THISFORM.MCI.COMMAND = "Seek"
	  THISFORM.MCI.COMMAND = "Play"
	
	This is just to show how you can replay the waveform file.
	
	Run the form. If you have a valid waveform file, enter the path and name in the
	Thisform.MCI.FileName property in the Init event of the control instead of using
	the GETFILE() function. Click on the Stop button to stop the waveform file, then
	click on the Restart button to resume playing the waveform file at the same
	position.
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbContainer kbCtrl kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
