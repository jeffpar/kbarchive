---
layout: page
title: "Q171843: BUG: Winsock Control Leaks Memory When Unloaded"
permalink: kb/171/Q171843/
---

## Q171843: BUG: Winsock Control Leaks Memory When Unloaded

	Article: Q171843
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbCtrl kbSDKPlatform kbVBp500bug kbVBp600bug kbWinsock kbGrpDSVB kbGrpD
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Winsock control may cause the system to lose memory and system resources,
	eventually causing the system to stop responding due to running out of memory.
	
	CAUSE
	=====
	
	System resources are not properly replenished when a Winsock control is unloaded
	from memory. If your application often loads and unloads a Winsock control, you
	may eventually experience this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: You should save your work in any open applications before following these
	steps.
	
	1. Create a new "Standard EXE" project. Form1 is created by default.
	
	2. Choose Components from the Project menu and select "Microsoft Winsock Control
	  5.0."
	
	3. Add a Winsock control (Winsock1) to Form1.
	
	4. Set the Index property of the Winsock1 control to 0.
	
	5. Add the following code to Form1.
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Do
	              Load Winsock1(1)
	              Unload Winsock1(1)
	              DoEvents ' Does not solve problem, but allows
	                       ' idle time so you can stop application.
	           Loop
	        End Sub
	
	6. Start the project.
	
	At this point, you can view the Performance tab of the System Properties window
	to watch how system resources diminish while the application runs. The System
	Properties window is available by clicking the System icon in the Windows 95,
	Windows 98, or Windows Me Control Panel. Depending on the version of the Winsock
	control you are using, the version shipped with Visual Studio Service Pack 2
	takes much longer to drain the system resources than the original version
	shipped with Visual Basic 5.0. Visual Studio Service Pack 3 does not have an
	updated control and still ships the Visual Studio Service Pack 2 version of the
	control.
	
	Workaround
	----------
	
	You can load a fixed number of Winsock controls, or a Winsock control array, on
	program load and only unload them on program shutdown to work around the memory
	leak problem. This approach is similar to implementing a Winsock server in SDK
	using a fixed-sized thread pool and is a more scalable solution than loading a
	new Winsock control to handle each new client connection. Under the one control
	per request model, if there are a large number of clients making connections to
	the server at the same time, the server will soon have too many threads to
	function at all.
	
	Having a fixed "pool" of Winsock controls can ensure that the server functions
	properly under a relatively heavy load. A large number of simultaneous client
	connections will not be able to bring down a server machine. If there are unused
	controls left in the Winsock control pool when a client connection request comes
	in, you will assign one control from the pool to handle the client request.
	After the client request is served, the control is "returned" to the pool. If a
	client request comes in and all controls in the pool have been assigned out at
	the moment, you will have to choose to either have the client wait until there
	are available free controls in the pool, or accept the connection request right
	away, send a busy message, and then close the socket.
	
	If you are planning a server that could experience really heavy loads, the
	Winsock control may not be the best tool to use. You should consider overlapped
	socket I/O with Windows NT I/O Completion Port in a C/C++ SDK program.
	
	Additional query words: gdi
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbCtrl kbSDKPlatform kbVBp500bug kbVBp600bug kbWinsock kbGrpDSVB kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
