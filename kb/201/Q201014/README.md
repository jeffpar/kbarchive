---
layout: page
title: "Q201014: PRB: Blocking Occurs When You Call a VB ActiveX EXE from ASP"
permalink: /kb/201/Q201014/
---

## Q201014: PRB: Blocking Occurs When You Call a VB ActiveX EXE from ASP

	Article: Q201014
	Product(s): Internet Information Server
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbASP kbVBp600 kbGrpDSCom kbDSupport kbiis400
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Active Server Pages 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you instantiate an ActiveX EXE component from Active Server Pages (ASP) in
	page scope only, by default, all requests to the component are serialized to a
	single thread. This may cause contention and blocking.
	
	CAUSE
	=====
	
	Visual Basic 6.0 only supports Single-threaded or Apartment-threaded objects. By
	default, ActiveX EXE projects are set to the Apartment threading model. Thus, a
	Visual Basic ActiveX EXE is subject to the rules that COM imposes on
	single-threaded apartment (STA) objects.
	
	If an object that runs in an STA is called concurrently by multiple clients
	(regardless of their threading model), COM synchronizes access to the object by
	posting window messages to the component's message queue. As a result, the
	object only receives one call each time it retrieves and dispatches a
	COM-related message.
	
	Although this interference implies some performance penalty, it allows
	applications that support different threading models to work together. Thus, all
	possible combinations of client and out-of-process component interoperability
	are supported.
	
	RESOLUTION
	==========
	
	By default, the Instancing property of a Visual Basic ActiveX EXE is set to
	MultiUse. Therefore, only one server process is created using the STA model.
	Because Visual Basic only supports Single-threaded and STA objects, you cannot
	use either Free-threading or Both-threading to create multi-threaded objects.
	However, you can achieve concurrent execution as follows:
	
	- Increase the number of threads in the thread pool.
	- In the Visual Basic project properties, set the "Thread by object" option.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Performance Monitor (PerfMon) to monitor the following counters:
	
	   - Active Server Pages object
	
	      - Requests Queued
	
	      - Requests Executing
	
	      - Sessions Total
	
	   - Process object (for the ActiveX EXE process)
	
	      - Thread Count
	
	2. If you are using a single computer as your client, make sure that you have
	  two instances of Internet Explorer (Iexplore.exe) running. This ensures that
	  you have two separate client processes.
	
	3. Create a Visual Basic ActiveX EXE named ThreadWaitProject.exe with one class
	  named ThreadTest. Accept the default values of the threading model in the
	  project properties, and implement the following function:
	
	  Private Declare Function GetCurrentThreadId Lib "kernel32" () As Long
	  Private Declare Sub Sleep Lib "kernel32" (ByVal dwMilliseconds As Long)
	
	  Function ThreadWait(nSeconds As Long) As Long
	      Sleep nSeconds * 1000
	      ThreadWait = GetCurrentThreadId
	  End Function
	
	4. Create an ASP page named Threadwait_vb_exe.asp, and paste the following
	  script:
	
	  <%
	  Option Explicit
	  DIM NSec
	
	  Sub TestEXE
	  response.write "<H1>OOP VB EXE Threadwait</H1>"
	  Dim objTest
	  Set objTest = Server.CreateObject("ThreadWaitProjectEXE.ThreadSleep")
	  Response.Write "StartTime: " & Now & "<BR>"
	  Response.Write "ThreadID: " & objTest.ThreadWait(10) & "<BR>"
	  Response.Write "EndTime: " & Now & "<BR>"
	  Response.write "Session ID: " & Session.SessionId & "<BR>"
	  Set objTest = Nothing
	  End Sub
	
	  TestEXE
	  %>
	
	5. From two distinct clients (see step 2), request the ASP page
	  Threadwait_vb_exe at the same time. Both requests share the same ThreadID,
	  and the start and end times of both requests are serialized (that is, the
	  second request starts only after the first request finishes). You can use
	  PerfMon (see step 1) to see that one request is queued while the other is
	  being executed. When you apply the resolution, the ThreadIDs differ for the
	  two requests.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbVBp600 kbGrpDSCom kbDSupport kbiis400 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbASPsearch kbZNotKeyword6 kbiis400 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
