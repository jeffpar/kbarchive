---
layout: page
title: "Q244823: BUG: Numeric Hostnames Use Winsock Control Resolve Improperly"
permalink: /kb/244/Q244823/
---

## Q244823: BUG: Numeric Hostnames Use Winsock Control Resolve Improperly

{% raw %}

	Article: Q244823
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbCtrl kbSDKPlatform kbSDKWin32 kbVBp500 kbVBp600 kbDSupport kbGrpDSNet
	Last Modified: 24-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a computer has a hostname that is all numerals, or if the local computer name
	is all numerals, the Winsock Control will not function properly in two cases:
	
	- If you attempt to connect to a hostname that is all numerals, the name will
	  not be resolved to a real IP Address, therefore the connection will never be
	  made.
	
	- If the local computer's hostname is all numerals, the LocalIP property
	  returns what appears to be an invalid IP Address.
	
	If the local computer name is a numeric name, the Winsock Control LocalIP
	property returns an incorrect IP address. It will actually return the numeric
	named in dotted notation versus doing a real-name lookup on the name.
	
	For example, if a computer name is named "1234567" then LocalIP returns
	0.18.214.135. This potentially breaks applications when you use the bind method
	on the LocalIP property in certain situations.
	
	The reason for having a computer name of all numerals is for large installations
	that use it as a serial number. This is not a problem on Windows 2000 since it
	does not allow numeric computer names, however it would present a problem if
	trying to connect to a host with a numeric name.
	
	CAUSE
	=====
	
	The Winsock Control tries to intelligently resolve names by using the
	inet_ntoa() Winsock API call to first try converting the name into an IP
	Address. If that succeeds, normal name resolution through gethostbyname() is
	bypassed.
	
	The Winsock API inet_ntoa() call given a value returns the dotted notation of the
	value. Therefore, a numeric hostname or local computer name will not get
	resolved to its true IP Address, but rather a dotted representation of the
	numeric name. So for example, if a computer is named "1234567", inet_ntoa()
	returns 0.18.214.135.
	
	RESOLUTION
	==========
	
	The only resolution is to use non-numeric hostnames or computer names with the
	Winsock Control, or use the Winsock API to resolve the names through the Winsock
	API SDK calls gethostname()/gethostbyname().
	
	For additional information on using these calls in Visual Basic, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q160215 HOWTO: Obtain the Host IP Address Using Windows Sockets
	
	  Q154512 SAMPLE: WINSOCK.EXE Getting HostAddress Using Windows Sockets
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Some customer installations name the computers according to an asset tag or
	serial number that is all numerals. It is in these cases the problem manifests
	itself.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the Network Identification tab of the Network Control Panel, set the
	  computer name to all numerals (for example, "1234567")
	
	2. Using Visual Basic, create a new project.
	
	3. Add the Winsock Control as a component and place on the main form.
	
	4. Add the following to the form's code module:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	    MsgBox Winsock1.LocalIP
	  End Sub
	
	5. Run the program and you will notice the program displays the wrong Local IP
	  Address
	
	REFERENCES
	==========
	
	For more information, please refer to:
	
	- Microsoft Visual Basic Documentation for the Winsock Control
	
	- Platform SDK: Windows Sockets Version 2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbCtrl kbSDKPlatform kbSDKWin32 kbVBp500 kbVBp600 kbDSupport kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
