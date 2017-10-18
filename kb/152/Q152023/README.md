---
layout: page
title: "Q152023: Locating Resources to Study Automation"
permalink: kb/152/Q152023/
---

## Q152023: Locating Resources to Study Automation

	Article: Q152023
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.5,3.51,4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbole kbProgramming kbAutomation kbOSWinNT kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSW
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Automation allows a client application to call methods or properties of a server
	application. This article provides pointers to resources for studying Automation
	using the Windows Software Developer Kit (SDK).
	
	MORE INFORMATION
	================
	
	Books
	-----
	
	The following books provide a good introduction to implementing OLE automation
	using the Windows SDK:
	
	1. Inside COM by Dale Rogerson. A good, practical guide for all COM users.
	  Microsoft Press. ISBN# 1-57231-349-8.
	
	  Give particular attention to Chapter 11: "Dispatch Interfaces and Automation."
	
	2. Inside Visual C++ by David J. Kruglinski. This fourth edition is a good
	  overall explanation of the capabilities of Visual C++. Microsoft Press. ISBN#
	  1-57231-565-2.
	
	  Read Chapter 24: "Automation."
	
	3. OLE Automation Programmer's Reference - Creating Programmable 32-bit
	  applications. Microsoft Press. ISBN 1-55615-851-3.
	
	  Read the following chapters for an introduction of automation servers and
	  clients:
	
	  Chapter 1: "Overview of OLE Automation."
	  Chapter 2: "Exposing OLE Automation Objects."
	  Chapter 3: "Accessing OLE Automation Objects."
	
	  This book references the HELLO, LINES, BROWSE, and BROWSEH samples that ship
	  with the Win32 SDK and the 32-bit Visual C++ compiler.
	
	4. Inside OLE - second edition by Kraig Brockschmidt. Microsoft Press. ISBN
	  1-55615-843-2.
	
	  The following chapters provide information about OLE automation:
	
	  Chapter 14: "OLE Automation and Automation Objects."
	  Chapter 15: "OLE Automation Controllers and Tools."
	  Chapter 3 : "Type Information."
	  Chapter 4 : "Connectable Objects."
	
	Samples
	-------
	
	Samples available from the Microsoft Download Center are indicated by the Q
	number and the Title of the article pointing to the sample. All other samples
	can be obtained from the Win32 SDK and the 32-bit Visual C++ compiler. All
	samples are 32-bit unless otherwise indicated.
	
	Servers
	-------
	
	- HELLO - Simple EXE-based automation server. This is a good sample to use to
	  learn how to create your first automation server.
	
	- LINES - A more complex EXE-based automation server that also implements
	  collections.
	
	- BROWSEH - An inproc (DLL-based) automation server.
	
	- SIMPAUTO - A simple EXE-based, 16-bit automation server. (See the Microsoft
	  Knowledge Base article:
	
	  Q107981 SAMPLE: Simple OLE Automation Object Sample)
	
	- AUTODLL - A simple inproc (DLL-based), 16-bit automation server. See the
	  Microsoft Knowledge Base article:
	
	  Q107982 SAMPLE: OLE Automation Inproc Object
	
	- DISPCALC, DISPCALC2, SPOLY, and SPOLY2 are other servers that ship with the
	  Win32 SDK. These are older samples and should be looked at only after you
	  have seen the others previously mentioned in this section.
	
	Clients
	-------
	
	- HELLCTRL - Client that controls the server using vtbl-binding.
	
	- BROWSE - Client that controls server using late-binding. The invhelp.cpp and
	  invhelp.h files contain helper functions that make it easy to write clients
	  for any server.
	
	- DISPDEMO - Client that controls server using late-binding.
	
	- AUTOCTRL - 16-bit automation client that uses late-binding. See the Microsoft
	  Knowledge Base article:
	
	  Q106080 SAMPLE: OLE Automation Controller Sample
	
	NOTE: Clients can also be easily written using Visual Basic.
	
	Type Library Browsers
	---------------------
	
	- TIBROWSE - Simple type library browser that demonstrates the use of ITypeLib
	  and ITypeInfo.
	
	- BROWSEH - More complex type library browser.
	
	Type Library Builders
	---------------------
	
	- TYPEBLD - Demonstrates how to use ICreateTypeLib and ICreateTypeInfo to
	  create a type library. See the Microsoft Knowledge Base article:
	
	  Q131105 SAMPLE: TYPEBLD: How to Use ICreateTypeLib & ICreateTypeInfo
	
	Safe Arrays
	-----------
	
	- SAFEARAY - Demonstrates the use of safe arrays. See the Microsoft Knowledge
	  Base article:
	
	  Q131086 SAMPLE: SAFEARAY: Use of Safe Arrays in Automation
	
	- BINARY - Demonstrates the use of safe arrays to transfer binary data. See the
	  Microsoft Knowledge Base article:
	
	  Q131046 SAMPLE: BINARY: Transfer Binary Data Using OLE Automation
	
	Optional and Variable Number of Arguments
	-----------------------------------------
	
	- OPTARG - Demonstrates the use of optional and variable number of arguments.
	  See the Microsoft Knowledge Base article:
	
	  Q131052 SAMPLE: OPTARG: Optional Parameters with Automation
	
	Collections
	-----------
	
	- LINES - Implements collections.
	
	- COLLECT - 16-bit sample that demonstrates how to implement collections.
	
	MultiLingual Servers
	--------------------
	
	- MULTLING - Server that implements properties and methods in three languages.
	  See the Microsoft Knowledge Base article:
	
	  Q107698 SAMPLE: Multilingual OLE Automation Object
	
	REFERENCES
	==========
	
	For additional information about Automation, please click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q196776 FAQ: Office Automation Using Visual C++
	
	  Q181473 HOWTO: Use OLE Automation from a C Application Rather Than C++
	
	  Q194656 HOWTO: Do 16-Bit Automation in C++ Using VC 1.52
	
	  Q216686 HOWTO: Automate Excel From C++ Without Using MFC or #import
	
	  Q216388 FILE: B2CSE.exe Converts Visual Basic Automation Code to Visual C++
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbProgramming kbAutomation kbOSWinNT kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin kbOSWin95 kbOSWin98 kbOSWinNT400sp4 kbGrpDSCom kbDSupport kbOLE200 kbwebcontent 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :3.5,3.51,4.0,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
