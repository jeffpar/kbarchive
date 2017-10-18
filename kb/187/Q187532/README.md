---
layout: page
title: "Q187532: HOWTO: Use the Remote Tools Installed with VBCE"
permalink: kb/187/Q187532/
---

## Q187532: HOWTO: Use the Remote Tools Installed with VBCE

	Article: Q187532
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows CE Toolkit for Visual Basic 6.0 (VBCE) provides a number of tools
	that help developers work with a connected Windows CE device. These tools
	include:
	
	- Control Manager
	- Heap Walker
	- Process Viewer
	- Spy
	- Registry Editor
	- Zoom
	
	The Windows CE Platform SDK's also contains these tools.
	
	This article briefly describes how to use these tools. Most of them require a
	connected device. The Control Manager, Registry Editor, and OS Viewer can work
	with both the Emulator and the Remote Device.
	
	MORE INFORMATION
	================
	
	Control Manager
	---------------
	
	The Control Manager is used to install/uninstall ActiveX controls in both the
	Emulator and the Remote Device. Before a VBCE application can use an ActiveX
	control, that control must be registered. The Control Manager automates this
	process. See the REFERENCES section of this article for more information.
	
	To install a control:
	
	1. On the Windows CE menu in Visual Basic, click Control Manager.
	
	2. From the list of available controls, select the control you wish to install.
	
	3. On the Control menu, click Install to Target to install the control.
	
	Heap Walker
	-----------
	
	Heap Walker enables you to view detailed information about heap IDs and flags for
	processes that are running on the Remote Device. It is a useful tool for
	detecting memory leaks. It allows you to view the blocks of memory used by a
	program in three views:
	
	- Process List
	- Heap List
	- Memory Dump
	
	When Heap Walker is started, the following columns of information are displayed
	in the Process List:
	
	- Heap ID - used by Heap Walker to uniquely identify heaps.
	- Process - the ID number of the process.
	- Process ID - the descriptive name of the process.
	- Flag - the name of the flag associated with a specific heap. Each process has
	  one default heap, indicated by HF32_DEFAULT
	
	Double-clicking on a Heap ID in the Process List window will show the Heap List
	window for that Heap:
	
	- Address - the address of the start of the heap block.
	- BlockSize - the size, in bytes, of the heap block.
	- Flags - Free means the memory block is not used. Fixed means the memory block
	  has a fixed (unmovable) location.
	
	Double-clicking on a memory address bring up a Memory Dump window. Each row of a
	memory dump represents up to 16 bytes of data:
	
	- Address - the memory address of the heap.
	- Hex - the hex values for the 16 bytes of memory at that address.
	- ASCII - the ANSI representation of the values shown in hex.
	
	The name of the client program for Heap Walker is CEHWCLI.EXE.
	
	Process Viewer
	--------------
	
	Process Viewer provides three views, but all in one window:
	
	- Processes
	- Threads
	- Modules
	
	The Process List shows the following information:
	
	- Process - shows the process name.
	- PID - shows the process ID.
	- Base Priority - the base priority of threads created by the process.
	- # Threads - number of threads started by the process.
	- Base Addr - the load address of the EXE.
	- Access Key - A bit array that allows permission to see that address space.
	- Window - the caption of the main windows associated with that process.
	
	Select a process to view the threads associated with it. The Thread List shows
	the following information:
	
	- Thread ID - the ID of the thread.
	- Current PID - the ID of the process where the thread is executing.
	- Thread Priority - the priority of the thread.
	- Access Key - a bit array defining all the processes it can see.
	
	The Module List shows the information about the modules associated with the
	selected process:
	
	- Module - the name of the module.
	- Module ID - the ID of the module.
	- Proc Count - usage count in the context of the selected process.
	- Global Count - total usage count for all processes.
	- Base Addr - base address.
	- Base Size - size of the module in bytes.
	- hModule - handle to the module.
	- Full Path - path and name of the module.
	
	The name of the client program for Process Viewer is CEPWCLI.EXE. A running
	process can be stopped by selecting the process and clicking the red "X" on the
	Process Viewer toolbar. Process viewer is useful for seeing what .dll files are
	used by a program or whether any instances of PVB.EXE are running without
	visible windows.
	
	Spy
	---
	
	Spy is used to watch Window messages being passed to the forms and controls in
	VBCE programs. When Spy is started, a list of Windows is retrieved from the
	device. To see the messages for a particular Window, select the Window in the
	Windows List and press the Messages button on the Spy toolbar or choose Messages
	from Spy's File menu. This will open the Messages window.
	
	The name of the client program for Spy is CESPYCLI.EXE. Spy can assist in
	debugging by providing an overall view of the Windows messages being sent.
	
	Registry Editor
	---------------
	
	The Windows CE Registry Editor functions much like REGEDIT on the desktop. The
	registry can be viewed and changed in the emulator or in the remote device.
	
	Zoom
	----
	
	Windows CE Zoom downloads a bitmap of the H/PC screen. You can save the bitmap,
	copy it to the clipboard, or zoom in or out to view it differently. Multiple
	bitmaps can be opened at the same time.
	
	The name of the client program for Zoom is CEZCLI.EXE. Zoom can help communicate
	design decisions, development problems, or other information to non-H/PC users.
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	Tool Help Library under Windows SDK Base Services - General Library
	
	Windows CE Programmer's Guide: HEAPENTRY32, HEAPLIST32, PROCESSENTRY32,
	THREADENTRY32, MODULEENTRY32
	
	Windows CE Platform SDK
	
	Additional query words: wce vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
