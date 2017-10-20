---
layout: page
title: "Q209077: PRB: CommCtl: No &quot;OK&quot; Received When Using Some Modems"
permalink: /kb/209/Q209077/
---

## Q209077: PRB: CommCtl: No &quot;OK&quot; Received When Using Some Modems

{% raw %}

	Article: Q209077
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB kbGrpDSVBDB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some modems may not respond with an OK in the Input string of the Communications
	control when an AT command has been sent.
	
	CAUSE
	=====
	
	Modems may not respond if the Data Terminal Ready (DTR) signal is low. You may
	need to raise the DTR signal before opening the Communications port.
	
	Note that the Communication control only checks the DTREnable property when the
	port is being opened. If the DTREnable property is set to True after opening the
	port, the DTR signal does not change until the port is closed and reopened.
	
	RESOLUTION
	==========
	
	To get the modem to respond with an OK, set the DTREnable property of the
	Communication control to True prior to opening the communications port.
	
	NOTE: This will not necessarily work for all modems.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. From the Project menu, choose Components. In the Components dialog box, click
	  the Controls tab, then select the Microsoft CE Comm Control.
	
	3. Place a command button (named Command1), a text box (named Text1) and a Comm
	  control (named Comm1) on Form1.
	
	4. Paste the following code into Form1:
	
	     Option Explicit
	     Dim InBuff
	
	     Private Sub Comm1_OnComm()
	         If Comm1.CommEvent = comEvReceive Then
	            InBuff = InBuff & Comm1.Input
	            Text1.Text = InBuff
	         End If
	     End Sub
	
	     Private Sub Command1_Click()
	         Comm1.RTSEnable = True
	         Comm1.Settings = "9600,n,8,1"
	         Comm1.RThreshold = 1
	         Comm1.SThreshold = 1
	         Comm1.CommPort = 2
	         Comm1.PortOpen = True
	         Comm1.Output = "AT" & vbCrLf
	     End Sub
	
	     Private Sub Form_Unload(Cancel As Integer)
	         Comm1.PortOpen = False
	     End Sub
	
	5. Run the project on the device.
	
	RESULTS: The OK does not come back from the modem.
	
	REFERENCES
	==========
	
	Microsoft eMbedded Visual Basic 3.0 Online Help
	
	Microsoft Windows CE Toolkit for Visual Basic 6.0 Online Help
	
	Additional query words: kbdse vbce evb vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
