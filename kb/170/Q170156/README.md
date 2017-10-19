---
layout: page
title: "Q170156: INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues"
permalink: /kb/170/Q170156/
---

## Q170156: INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues

	Article: Q170156
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbreadme kbRegistry kbVBp kbVBp600 kbVS600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below includes the documentation and workarounds for Visual
	Basic 6.0. This information can also be found in the README.htm file that ships
	with Visual Basic 6.0 on the Visual Basic 6.0 CD-ROM. Please see the REFERENCES
	section of this article for a list of the Microsoft Knowledge Base articles
	relating to the Visual Basic 6.0 readme.
	
	Following is a list of all parts of the readme file:
	
	Part 1.  Important Issues - Please Read First!
	Part 2.  Data Access Issues and DataBinding Tips.
	Part 3.  Control Issues.
	Part 4.  Language Issues.
	Part 5.  Samples Issues.
	Part 6.  Wizard Issues.
	Part 7.  Error Message Issues.
	Part 8.  WebClass Designer Issues.
	Part 9.  DHTML Page Designer Issues.
	Part 10. Extensibility Issues.
	Part 11. Miscellaneous Issues.
	Part 12. Microsoft Transaction Server (MTS) Issues.
	Part 13. Dictionary Object.
	Part 14. Visual Component Manager.
	Part 15. Application Performance Manager.
	
	MORE INFORMATION
	================
	
	Building and Debugging MTS Components in Visual Basic 6.0:
	
	Visual Basic 6.0 supports the debugging of Microsoft Transaction
	Server (MTS) components, but there are several issues to keep in
	mind. The following issues apply only to MTS components running
	in the debugger.
	
	Windows NT 4.0 SP4 Required
	---------------------------
	
	MTS debugging support requires Windows NT 4.0 Service Pack 4
	(SP4) or later. MTS debugging is not supported under Windows 95
	or Windows 98.
	
	MTSTransactionMode Property
	---------------------------
	
	Visual Basic 6.0 introduces a new MTSTransactionMode property on
	classes that allows you to set the Microsoft Transaction Server
	(MTS) transaction support required for the class. The values for
	this property are equivalent to the property in the MTS explorer.
	However, the names of these properties in the Visual Basic IDE
	are not exactly the same as the names used in the MTS explorer.
	The mapping of names is as follows:
	
	  VB Property Value                Option in MTS Explorer
	
	  0 - NotAnMTSObject               N/A
	  1 - NoTransactions               Does not support transactions
	  2 - RequiresTransaction          Requires a transaction
	  3 - UsesTransaction              Supports transactions
	  4 - RequiresNewTransaction       Requires a new transaction
	
	The Transaction attributes of a class are imported into MTS only
	if the component is added to a Package with the Add File utility.
	If the component is brought into a package via the registered
	component list, the MTS attributes are not reflected in MTS
	Explorer.
	
	Enabling MTS Debugging
	----------------------
	
	To debug MTS components with Visual Basic 6.0, set the
	MTSTransactionMode property to a value other than 0-
	NotAnMTSObject. When you hit the F5 key to begin debugging,
	Visual Basic will now activate your component inside of the
	Microsoft Transaction Server run-time.
	
	Single Client, Server, and Thread
	---------------------------------
	
	Debugging is supported only for a single client and a single MTS
	server component at a time operating on a single thread. For
	situations requiring multiple clients or MTS servers or multiple
	threads, you should debug the Visual Basic component in the
	Visual C++ development environment. For details on debugging
	Visual Basic components in the Visual C++ environment, see the
	Visual C++ documentation.
	
	Build Requirements for Debugging
	--------------------------------
	
	To build and debug an MTS component in Visual Basic, you must
	build your component into a DLL and set binary compatibility on
	the project. If you do not set binary compatibility and you add
	interfaces to, or remove them from the component, these changes
	may not be detected by MTS.
	
	Debugging Limitations on Class_Initialize and Class_Terminate -
	---------------------------------------------------------------
	Events
	------
	
	You should not put code in the Class_Initialize and
	Class_Terminate events of an MTS component that attempts to
	access the object or its corresponding context object. The Visual
	Basic run-time environment calls Class_Initialize before the
	object and its context are activated, so any operations that
	Class_Initialize attempts to perform on the object or its object
	context will fail. Similarly, the object and its context are
	deactivated before Class_Terminate is called, so operations that
	this method attempts on the object and its context will also
	fail.
	
	You should not set a breakpoint in the Class_Terminate event of
	an MTS component. When the debugger reaches the breakpoint, it
	will attempt to activate the object, an attempt that will fail
	and cause Visual Basic to stop.
	
	Watching MTS Objects
	--------------------
	
	During debugging, do not watch object variables returned from the
	MTS run-time, including return values from SafeRef,
	GetObjectContext, CreateInstance, and other functions that return
	objects wrapped by MTS.
	
	To simulate the run-time environment more effectively, the
	Microsoft Transaction Server run-time pauses operation each time
	that Visual Basic breaks in the debugger. Internally, Visual
	Basic makes method calls on objects that are being watched in the
	debugger. Because the MTS run-time is paused as you look at watch
	variables, the calls that Visual Basic makes to these objects may
	fail.
	
	If you do add MTS-wrapped objects to the watch window or watch
	via other means, it may cause an inconsistent state to be
	detected by MTS and the process will be terminated.
	
	Registration and Debugging
	--------------------------
	
	The debugging facilities in Visual Basic allow an MTS component
	to be debugged without being installed in the MTS explorer. When
	you start debugging, Visual Basic will automatically call into
	MTS to run your component in the MTS run-time.
	
	Depending on your debugging requirements, you may also want to
	install your component into the MTS explorer. There are a few
	issues to keep in mind when doing this. If you make changes in
	the Visual Basic IDE in your component's interfaces, class names,
	project names, transactional support or other settings, there may
	be mismatches between the configuration data in the MTS explorer
	and the actual configuration running in the Visual Basic
	debugger. It is also possible that the component could be
	launched in MTS while you are debugging it. Further, if you
	export a package while you are debugging a component in the
	package, MTS will treat the Visual Basic development environment
	as the component.
	
	These problems can be avoided by making sure the component to be
	debugged is not registered in the MTS explorer. As noted later in
	this section, if you change the configuration of an installed
	component in the debugger, you may have to remove and reinstall
	the component.
	
	Component Changes Made During Debugging
	---------------------------------------
	
	In Visual Basic, you can modify transactional attributes on an
	MTS component during debugging. Visual Basic does not register
	these changes in the MTS explorer. If during debugging you make a
	source code change that requires Visual Basic to generate a new
	CLSID or ProgID or that changes the transactional attribute of
	any MTS class, you must use MTS Explorer to delete and reinstall
	the package containing the class. If you have set binary
	compatibility for the component, you will be warned that changes
	have occurred.
	
	Starting Debugger While a Component is Running in MTS
	-----------------------------------------------------
	
	If you are running a component outside the debugger and then
	decide to begin debugging, an instance of the component may still
	be running in MTS when you start it in the debugger. MTS will
	detect this condition and attempt to silently shut down the
	instance it controls. To avoid this problem, remove the component
	from the MTS explorer before you begin debugging.
	
	Debugging Unregistered MTS Components An MTS component can run in
	the Visual Basic debugger without having been registered in the
	MTS catalog. In this case, the component will not be visible in
	the MTS Explorer. It is preferable to debug components that are
	not registered, as it avoids a number of problems discussed
	elsewhere in this section.
	
	Deployment and Debugging
	------------------------
	
	To properly deploy an MTS component, you need to build the
	component as a DLL, be sure the component is not running in any
	debug session, and then run the Package and Deployment Wizard.
	The component can be open in Visual Basic, but it cannot be
	active in a debug session.
	
	MTS Components in Debugger Run as if in Library Package
	-------------------------------------------------------
	
	The MTS run-time environment treats Visual Basic components being
	debugged as if they belong to a library package, even if the
	components are registered with MTS as belonging to a server
	package. Library packages do not support component tracking, role
	checking, or process isolation.
	
	Because MTS components being debugged behave as if they are in a
	library package, you cannot do security debugging in the Visual
	Basic development environment. Remote activation of the debugged
	component will use the security attributes of Visual Basic.
	
	Remote activation of a component running in the MTS run-time
	environment (mtx.exe), however, will use the security attributes
	set up for the particular package in the MTS explorer. To debug
	security issues, you should use the Visual C++ development
	environment.
	
	Component Failure Causes Visual Basic to Stop Running
	-----------------------------------------------------
	
	An MTS component being debugged runs in the same process as the
	Visual Basic development environment, so a component failure will
	also cause Visual Basic to stop running. Also, the MTS run-time
	environment automatically shuts down the run-time process when it
	detects an inconsistent state internally. In these cases, MTS
	will display a dialog box explaining the situation, the Visual
	Basic window will disappear, and an event will be recorded in the
	Windows NT system log. Check the Windows NT Event Viewer as well
	as other topics in this document for possible explanations of the
	problem.
	
	No Support for Transacted Web Classes
	-------------------------------------
	
	Transacted Visual Basic Web Classes are not supported in Visual
	Basic 6.0.
	
	RunWithoutContext Registry Key Is Ignored
	-----------------------------------------
	
	Visual Basic 6.0 ignores the RunWithoutContext registry key. This
	key is no longer needed with Visual Basic 6.0's integrated
	debugging of MTS objects, as the functionality provided by the
	context object is now available during debugging.
	
	Using IObjectControl
	--------------------
	
	If you need to execute code during startup and shutdown of your
	MTS object, you should implement the IObjectControl interface
	(from the Microsoft Transaction Server Type Library) and use the
	Activate and Deactivate functions. These functions are called by
	the MTS run-time during startup and shutdown of your object.
	Using the IObjectControl functions is preferable to using
	Class_Initialize and Class_Terminate due to the limitations
	described below.
	
	You can place code that accesses the object context in the
	Activate and Deactivate functions. However, due to the way that
	the MTS run-time activates objects, you should not put
	breakpoints on IObjectControl::Deactivate or
	IObjectControl::CanBePooled.
	
	Debugger May Reactivate Objects Released by MTS
	-----------------------------------------------
	
	Visual Basic 6.0 may reactivate MTS objects while you are
	debugging single-step through a client. Because of the way that
	Visual Basic 6.0 discovers information about objects, this is
	expected behavior. For example, consider the following code:
	
	  Dim x as object
	  Set x = CreateObject("MyApp.Class")
	  x.Test
	  Set x = Nothing
	
	If the x.Test method calls SetComplete, MTS immediately frees x
	from memory, but x has not yet been set to Nothing. When x.Test
	returns, the Visual Basic debugger calls QueryInterface on x for
	the IProvideClassInfo interface. The context wrapper associated
	with x creates a new instance of MyApp.Class to service the
	QueryInterface call. As a result, you will see this uninitialized
	object in the debugger after x.Test has returned. This object
	appears only in the debugger and is removed by the subsequent
	instruction to set x to Nothing.
	
	What are the differences between using Visual Basic's "New" operator,
	Visual Basic's CreateObject API, or GetObjectContext.CreateInstance?
	---------------------------------------------------------------------
	
	If a Microsoft Transaction Server (MTS) component calls "New" to
	instantiate another component in its same DLL, Visual Basic uses its own
	internal class instantiation mechanism. It will not use Component Object
	Model (COM), and thus the component will not run under MTS.
	
	CreateObject, just like GetObjectContext.CreateInstance, maps to
	CoCreateInstance, which uses MTS due to the registry entries for MTS
	components. However, context will not flow in the CreateObject case. This
	means it will not be possible for a parent MTS component, such as a
	business object, to enlist the (data) components it creates in the same
	transaction.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170164 INFO: VB 6.0 Readme Part 1: Important Issues [ASCII 150] Read First!
	
	  Q170163 INFO: VB 6.0 Readme Part 2: Data Access/ Databinding Issues
	
	  Q170162 INFO: VB 6.0 Readme Part 3: Control Issues
	
	  Q170161 INFO: VB 6.0 Readme Part 4: Language Issues
	
	  Q170160 INFO: VB 6.0 Readme Part 5: Samples Issues
	
	  Q170158 INFO: VB 6.0 Readme Part 7: Error Message Issues
	
	  Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	  Q190249 INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	  Q170154 INFO: VB 6.0 Readme Part 10: Extensibility Issues
	
	  Q170157 INFO: VB 6.0 Readme Part 11: Miscellaneous Issues
	
	  Q170156 INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues
	
	  Q191792 INFO: VB 6.0 Readme Part 13: Dictionary Object
	
	  Q191791 INFO: VB 6.0 Readme Part 14: Visual Component Manager
	
	  Q191790 INFO: VB 6.0 Readme Part 15: Application Performance Explorer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbreadme kbRegistry kbVBp kbVBp600 kbVS600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
