---
layout: page
title: "Q245159: FIX: SendData Only Works Over the Latest Connection"
permalink: kb/245/Q245159/
---

## Q245159: FIX: SendData Only Works Over the Latest Connection

	Article: Q245159
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbCtrl kbSDKPlatform kbSDKWin32 kbVBp500 kbVBp600 kbWinsock kbDSupport kbGrpD
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For a 32-bit Visual Basic application with multiple Winsock Control objects that
	maintain TCP connections to other socket applications, SendData() only works
	over the most recently established connection. This behavior is reproducible on
	versions prior to and include Microsoft Visual Studio SP3.
	
	CAUSE
	=====
	
	The event messages associated with each SendData() are flushed from the message
	queue by the latest socket connection. This causes data to queue up and with no
	event messages available to start the data send process for previous
	connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	To reproduce the problem assuming an application maintains an array of three
	Winsock Control objects, each of controls has established a connection with its
	peer side over TCP. Label the connections as C1, C2, and C3 based on the order
	the connections are established, with C3 as the most recently established
	connection. If you attempt to do the following:
	
	     Private Sub cmdSendData_Click()
	         Dim i As Long
	         For i = 1 To iIndex
	             If (socks(i).State = sckConnected) Then
	                 socks(i).SendData txtSendData.Text
	             End If
	         Next i
	     End Sub
	
	Only the peer side of C3 connection get the messages. If you disconnect C3, the
	peer side of C2, which becomes the most recent connection at the time, will
	start to receive messages intended for it.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q183987 PRB: SendData Method Generates Error 40006
	
	Additional query words: mswinsck.ocx sp4
	
	======================================================================
	Keywords          : kbnetwork kbCtrl kbSDKPlatform kbSDKWin32 kbVBp500 kbVBp600 kbWinsock kbDSupport kbGrpDSNet kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
