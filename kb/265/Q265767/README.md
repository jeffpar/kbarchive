---
layout: page
title: "Q265767: HOWTO: Use the Remote Tools Installed with eMbedded Visual Basic"
permalink: /kb/265/Q265767/
---

## Q265767: HOWTO: Use the Remote Tools Installed with eMbedded Visual Basic

{% raw %}

	Article: Q265767
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbDSupport
	Last Modified: 25-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft eMbedded Visual Basic (eVB) version 3.0 provides a number of tools
	that help developers work with a connected Windows CE HPC Pro device, Windows CE
	PsPC device, and Windows CE Pocket PC device. These tools include:
	
	- Heap Walker
	- Process Viewer
	- Registry Editor
	- File Viewer
	- Spy
	- Zoom
	- Configuration Platform Manager
	- Control manager
	- Application Install Wizard
	
	This article briefly describes the use of these tools. Most of them require a
	connected device. To locate these tools, select the Tools and Remote Tools menu
	in the eVB integrated development environment (IDE). The first time you run a
	tool, a remote client is downloaded to the device and a connection is started
	from the desktop. Subsequent launches initialize a direct connection
	automatically.
	
	MORE INFORMATION
	================
	
	Heap Walker
	-----------
	
	Heap Walker displays detailed information about heap identifiers and flags for
	processes that are currently running on a device. Use Heap Walker to determine
	whether an application is releasing all the memory that it allocates. It allows
	you to view the blocks of memory that are used by a program in these views:
	
	- Process List
	- Heap List
	
	When Heap Walker is started, the following columns of information are displayed
	in the Process List view:
	
	- Heap ID - used by Heap Walker to uniquely identify heaps.
	- Process ID - the ID number of the process.
	- Process - the descriptive name of the process.
	- Flag - the name of the flag associated with a specific heap. Each process has
	  one default heap indicated by HF32_DEFAULT.
	
	Double-click on a Heap ID in the Process List window to view the Heap List window
	for that Heap:
	
	- Address - the address of the start of the heap block.
	- BlockSize - the size, in bytes, of the heap block.
	- Flags - Free means the memory block is not used. Fixed means the memory block
	  has a fixed (unmovable) location.
	
	Double-click on a memory address to bring up a Memory Dump window. Each row of a
	memory dump represents up to 16 bytes of data:
	
	- Address - the memory address of the heap.
	- Hex - the hex values for the 16 bytes of memory at that address.
	- ASCII - the ANSI representation of the values shown in the hex column.
	
	Process Viewer
	--------------
	
	Process Viewer enables you to view detailed information about processes and
	threads that are running on a target device. It displays a list of running
	processes, thread identifiers, and modules. You can use the Process Viewer's
	toolbar to refresh the display of running processes or to terminate a selected
	process. Double-click on any process to populate the Threads and Module windows
	with the information associated with that process. Process Viewer provides three
	views in individual horizontal panes in one window:
	
	- Processes
	- Threads
	- Modules
	
	The Process pane shows the following information:
	
	- Process - the process name.
	- PID - the process ID.
	- Base Priority - the base priority of threads created by the process.
	- # Threads - number of threads started by the process.
	- Base Addr - the load address of the .exe.
	- Access Key - a bit array that allows permission to see that address space.
	- Window - the caption of the main windows that are associated with that
	  process.
	
	Select a process to view the threads associated with it. The Thread pane shows
	the following information:
	
	- Thread ID - the ID of the thread.
	- Current PID - the ID of the process where the thread is executing.
	- Thread Priority - the priority of the thread.
	- Access Key - a bit array defining all the processes it can see.
	
	The Module pane shows the information about the modules associated with the
	selected process:
	
	- Module - the name of the module.
	- Module ID - the ID of the module.
	- Proc Count - usage count in the context of the selected process.
	- Global Count - total usage count for all processes.
	- Base Addr - base address.
	- Base Size - size of the module in bytes.
	- hModule - handle to the module.
	- Full Path - path and name of the module.
	
	The name of the client program for Process Viewer is Cepwcli.exe. A running
	process can be stopped by selecting the process and clicking the red X on the
	Process Viewer toolbar. Process viewer is useful for seeing what DLL files are
	used by a program or whether any instances of PVB.exe are running without
	visible windows.
	
	Registry Editor
	---------------
	
	Registry Editor lets you edit Windows CE system registries and add, delete, and
	modify registry keys on Windows CE-based devices. The Windows CE system registry
	resides in the object store on the remote device. The Remote Registry Editor
	enables you to manage the registry on a Windows CE device from your desktop
	computer.
	
	File Viewer
	-----------
	
	File Viewer is similar to the desktop Windows Explorer. It displays a
	hierarchical view of the folders on a Windows CE device on your desktop
	computer. You can delete files, view file properties, and browse for files on
	multiple remote devices or on your desktop computer.
	
	Spy
	---
	
	Spy displays messages that are received by application windows running on a
	remote device. When you start Spy and choose a device, the desktop computer
	connects to a remote spy client in the device, and the dialog box shows a list
	of the windows that are open on that device. You can run only one instance of
	Spy at any one time, showing information about one Windows CE-based device.
	Toolbar buttons, other than the Connect button, become active once you are
	connected to a remote device.
	
	Zoom
	----
	
	Zoom displays images from the screen of a remote device on your desktop computer.
	When you start Zoom and choose a device, the desktop computer connects to a
	remote zoom client in the device and downloads a bitmapped screen image from the
	target device. You can then use the various features, such as zoom in, zoom out,
	resize screen image, save, or copy image. You can run only one instance of Zoom
	at a time, showing information about one Windows CE-based device.
	
	Configuration Platform Manager
	------------------------------
	
	Configuration Platform Manager is the communication technology that is used by
	all Windows CE development tools to download files and debug them on a target
	platform. Configuration Platform Manager has two components, the target-side
	component, which resides on the target device, and the host-side component,
	which resides on the developer?s desktop computer.
	
	Control Manager
	---------------
	
	Control Manager enables you to install and uninstall custom ActiveX controls on a
	device or emulator. Additionally, the Control Manager provides an easy interface
	for copying and registering controls for your project. You can also use the
	Control Manager to confirm that the ActiveX controls you use in your application
	exist on your target device before you run the application. Following are the
	steps to install a control:
	
	1. On the Tools and Remote Tools menu, click Control Manager.
	
	2. Select the target environment in which you want to install the control.
	
	3. From the list of available controls, select the control you want to install.
	
	4. On the Control menu, click Install to Target to install the control.
	
	Application Install Wizard
	--------------------------
	
	The Application Install Wizard allows you to create a setup package so that you
	can deploy your eMbedded Visual Basic project to the target device later. You
	must compile the eMbedded Visual Basic project prior to running the wizard. The
	installation program contains all of the necessary compiled files and control
	files to run your application in the device.
	
	REFERENCES
	==========
	
	For more information, see the online Help for eVB 3.0,
	
	Additional query words: Cepwcli PVB
	
	======================================================================
	Keywords          : kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
