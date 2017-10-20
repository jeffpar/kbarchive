---
layout: page
title: "Q176951: HOWTO: Use Events to Generate Asynchronous Callbacks"
permalink: /kb/176/Q176951/
---

## Q176951: HOWTO: Use Events to Generate Asynchronous Callbacks

{% raw %}

	Article: Q176951
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In asynchronous processing, the method that starts a task is returned
	immediately without waiting for a result. The client can continue to do what it
	was originally doing while the task is completed. The server needs a way to
	notify the client asychronously when the task is done. One way of doing this is
	to create an event that the client will handle.
	
	MORE INFORMATION
	================
	
	Following is a small code sample demonstrating how a client application can
	start another server application and wait for its completion notification via an
	event. Clicking the Start button on the client's form starts up an instance of
	the server and returns immediately. The server can then begin some long
	calculation or other work. Upon completion of the task, the server will fire the
	Notify event. The client receives this event and responds accordingly.
	
	Server Application
	------------------
	
	The server application is an ActiveX .exe file consisting of one class module
	(clsTimer) and one standard module. Set the instancing property of the Class
	module to Single Use. In the Project Properties dialog box, make sure that the
	Startup Object is set to None:
	
	clsTimer code
	-------------
	
	       Event Notify(ByVal somenum As Double)
	
	       Public Sub StartTimer()
	           Call BeginTimer(Me)  'Start the timer
	       End Sub
	
	       Public Sub Notifyme(ByVal anum As Double)
	           RaiseEvent Notify(anum)  'Create an event with the result
	       End Sub                      'as a parameter
	
	       Public Sub StopTimer()
	           Call EndTimer
	       End Sub
	
	       Private Sub Class_Terminate()
	           Call EndTimer  'Make sure the timer is stopped
	       End Sub
	
	Standard module code:
	---------------------
	
	       Global timerid As Long
	       Dim thetimer As clsTimer
	
	       Public Declare Function SetTimer Lib "user32" _
	               (ByVal hwnd As Long, _
	               ByVal nIDEvent As Long, _
	               ByVal uElapse As Long, _
	               ByVal lpTimerFunc As Long) As Long
	
	       Public Declare Function KillTimer Lib "user32" _
	               (ByVal hwnd As Long, _
	               ByVal nIDEvent As Long) As Long
	
	       Public Sub EndTimer()
	           Dim retval As Long
	           retval = KillTimer(0, timerid)
	       End Sub
	
	       Public Sub BeginTimer(ByRef Timerobj As clsTimer)
	           Set thetimer = Timerobj
	           timerid = SetTimer(0, 0, 1, AddressOf TimerProc)
	       End Sub
	
	       Public Sub TimerProc(ByVal hwnd As Long, ByVal umsg As Long, _
	           ByVal idEvent As Long, ByVal dwtime As Long)
	
	           Dim counter As Long
	           Dim theanswer As Double
	
	           KillTimer 0, timerid  'Stop the timer
	
	           For counter = 1 To 15000000  'Do some work here
	               theanswer = theanswer + counter
	           Next counter
	           thetimer.Notifyme (theanswer)  'Work is done. Pass the result
	       End Sub                            'as a parameter.
	
	Client Application
	------------------
	
	The client application is a Standard .exe file consisting of one class module
	(clsNotify) and one Form. The form has a Listbox control (lstTimes) and a
	CommandButton (cmdStart).
	
	Make sure you add a reference to your server application in your client project:
	
	Class Module code:
	------------------
	
	       Public WithEvents obj As clsTimer
	
	       Private Sub Class_Terminate()
	           Set obj = Nothing
	       End Sub
	
	       Private Sub obj_Notify(ByVal somenum As Double)
	           Form1.lstTimes.AddItem somenum
	           obj.StopTimer
	           Set obj = Nothing  'Shut down the server when it has completed
	       End Sub                'the task.
	
	       Public Sub startit()
	           Set obj = New clsTimer
	           obj.StartTimer
	       End Sub
	
	Form Code:
	----------
	
	       Dim notifyobject As clsNotify
	
	       Private Sub cmdStart_Click()
	           notifyobject.startit
	       End Sub
	
	       Private Sub Form_Load()
	           Set notifyobject = New clsNotify
	       End Sub
	
	Additional query words: callback kbVBp500 kbVBp600 kbActiveX kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
