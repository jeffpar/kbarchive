---
layout: page
title: "Q271787: PRB: Application.Lock and Application.UnLock Hangs IIS 5.0"
permalink: /kb/271/Q271787/
---

## Q271787: PRB: Application.Lock and Application.UnLock Hangs IIS 5.0

	Article: Q271787
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbASP kbCOMPlus kbMTS kbVBp kbGrpDSASP kbDSupport
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify Application variables from within a component that is called
	from an Active Server Pages (ASP) page, your server may stop responding (hang).
	The code in the component that causes the problem resembles the following:
	
	  Application.Lock
	  Application("myvar") = "hello world"
	  Application.UnLock
	
	CAUSE
	=====
	
	Code that is embedded in the Application.Lock and Application.UnLock methods
	provides protection in a multi-user environment. With the introduction of COM+,
	Internet Information Server (IIS) 5.0 takes advantage of the Thread-Neutral
	Apartment (NA) when accessing the Application object. As a result, when you
	explicitly call Application.Lock and Application.UnLock from within a component,
	under certain scenarios you might encounter a deadlock scenario that causes the
	server to stop responding. This problem is most commonly seen when ASP
	intrinsics are marshalled back and forth between the IIS server and the COM+
	Application server. The following two scenarios may cause the server to hang:
	
	- When you debug a Microsoft Visual Basic component from the Visual Basic
	  Integrated Development Envrionment (IDE).
	
	- When you call a component that is running as a Server application in COM+.
	
	RESOLUTION
	==========
	
	The Application.Lock and Application.UnLock methods are not needed to assign a
	single Application variable because the methods are called internally.
	
	If you need to assign multiple Application variables within the same
	Application.Lock and Application.UnLock methods from your component, your
	component must run in the same process as the caller, or you must modify your
	logic to only include a single assignment. For example, the following code
	
	  Application.Lock
	  Application("myvar1") = "hello"
	  Application("myvar2") = "world"
	  Application.UnLock
	
	could be modified to work around this issue as follows:
	
	  Dim array(1)
	  array(0) = "hello"
	  array(1) = "world"
	  Application("myvar") = array
	
	NOTE: This is only one example. There are numerous ways that you can change your
	logic to work around this issue.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create a new ActiveX DLL project.
	
	2. Add a reference to the following libraries:
	
	  COM+ Services Type Library
	  Microsoft Active Server Pages Object Library
	
	3. Add the following code to the class module:
	
	  Implements ObjectControl
	
	  Private oContext As ObjectContext
	  Private oApplication As ASPTypeLibrary.Application
	
	  Private Sub ObjectControl_Activate()
	      Set oContext = GetObjectContext()
	      Set oApplication = oContext("Application")
	  End Sub
	
	  Private Sub ObjectControl_Deactivate()
	      Set oContext = Nothing
	      Set oApplication = Nothing
	  End Sub
	
	  Private Function ObjectControl_CanBePooled() As Boolean
	      ObjectControl_CanBePooled = False
	  End Function
	
	  Public Sub IISHang()
	
	      oApplication.Lock
	          oApplication("test") = "World"  '<= App HANGS here
	      oApplication.UnLock
	
	  End Sub
	
	4. Compile the DLL and register the component with COM+. Make sure that the COM+
	  package's Activation type is set to Server application.
	
	5. Create a new ASP page and paste the following code:
	
	  <%
	      Dim obj
	      Set obj = Server.CreateObject("Project1.Class1")
	      Call obj.IISHang()
	      Set obj = nothing
	  %>
	
	6. Run the ASP page to cause the server to stop responding.
	
	
	Additional query words: IIS5 HANG Application LOCK UNLOCK VB COM+
	
	======================================================================
	Keywords          : kbASP kbCOMPlus kbMTS kbVBp kbGrpDSASP kbDSupport 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
