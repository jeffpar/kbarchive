---
layout: page
title: "Q280305: MultiMedia: Troubleshooting IPF and Exception Errors (Part 1)"
permalink: kb/280/Q280305/
---

## Q280305: MultiMedia: Troubleshooting IPF and Exception Errors (Part 1)

	Article: Q280305
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Picture It! Photo Premium 2001 
	- Microsoft Picture It! Publishing 2001 Platinum 
	- Microsoft Works Suite 2001 
	- Microsoft Reader, version 1.5 
	- Microsoft MapPoint 2001 
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part 1 of a series of two Microsoft Knowledge Base articles that
	present a systematic approach to eliminating invalid page fault (IPF) and
	exception error messages in Microsoft Home Products.
	
	For additional information and troubleshooting steps, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q280302 MultiMedia: Troubleshooting Invalid Page Fault (IPF) and Exception
	  Errors (Part 2)
	
	MORE INFORMATION
	================
	
	The following topics are covered in part 1 of this article:
	
	  
	  What are the types of errors that may appear?
	
	  Getting clues from the error message.
	
	  Getting clues from when the error occurs.
	
	What Are the Types of Errors That May Appear?
	---------------------------------------------
	
	There are three general types of error messages you may encounter when running or
	starting Microsoft Home Products. They are:
	
	  
	  Exception errors
	
	  Illegal operation errors
	
	  Kernel errors
	
	Exception Errors:
	
	An exception error signifies that something unexpected has happened within the
	Windows environment, typically an improper memory access. For example, an
	application or a Windows component might read or write to a memory location that
	has not been allocated to it (memory that it does not "own"), potentially
	overwriting and corrupting other program code in that area of memory.
	
	Fatal exception errors are typically of the form:
	
	  A fatal exception <XY> has occurred at xxxx:xxxxxxxx
	
	where <XY> represents the actual processor exception from 00 to 0F. The
	xxxx:xxxxxxxx represents the <code segment pointer>:<actual address
	where the exception occurred>.
	
	Fatal exception errors are codes returned by a program in the following cases:
	
	- Access to an illegal instruction is encountered.
	- Invalid data or code is accessed.
	- The privilege level of an operation is invalid.
	
	When any of these occurs, the processor returns an exception to the operating
	system, which in turn is handled as a fatal exception error. In many cases the
	exception is non-recoverable, and the system must be restarted or shut down,
	depending on the severity of the error.
	
	For additional information about fatal exception errors, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q150314 What Are Fatal Exception Errors
	
	Illegal Operation Errors:
	
	Illegal operation errors are typically of the form:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, the following error message appears:
	
	  <Program> caused an invalid page fault in module <module name> at
	  <address>.
	
	where <Program> refers to the program you are using and <module name>
	refers to another program or component of a program and <address> is the
	area of memory where the problem occurred.
	
	After you click OK, the program is shut down.
	
	When an invalid page fault occurs, an unexpected event occurs in Windows. An
	invalid page fault typically indicates that a program improperly attempted to
	use random access memory; for example, when a program or a Windows component
	reads or writes to a memory location that is not allocated to it. When this
	occurs, the program can potentially overwrite and corrupt other program code in
	that area of memory.
	
	For additional information about illegal operation errors, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q82710 Causes of General Protection Faults and Troubleshooting Tips
	
	Kernel Errors:
	
	Kernel errors are invalid page faults that occur between an application and
	Windows. A typical error message is similar to the following example:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  <Program> caused an invalid page fault in module Kernel32.dll at
	  <address>.
	
	After you click OK, the program is shut down.
	
	For additional information about troubleshooting kernel errors, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q218853 OFF2000: Troubleshooting Office Kernel32.dll Errors Under Windows 98
	
	  Q218873 OFF2000: Troubleshooting Office Kernel32.dll Errors Under Windows 95
	
	Getting Clues from the Error Message
	------------------------------------
	
	The first clue to the cause of an IPF is in the IPF error message that is
	displayed. The error message is similar to:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, the following error message appears:
	
	  <Program> caused an invalid page fault in module <module name> at
	  <address>
	
	After you click Close, the program is shut down.
	
	Note the module name that is listed. For example, is the module name a printer
	driver file, a video driver file, a sound card device, an antivirus program, or
	some other non-product component? If you can gather clues about the component
	that is causing the IPF, then you can target the specific cause of the problem.
	
	If the module name does not sound familiar or if you are unsure which component
	it is a part of, you can query in the Microsoft Knowledge Base on the module
	name. You can search the Microsoft Support Web site from the following Web
	address:
	
	  http://support.microsoft.com/?pr=kbinfo
	  (http://support.microsoft.com/?pr=kbinfo)
	
	After you get to the Search Support page, use query parameters specific to your
	error message. For example, if you received an invalid page fault in module
	"UNKNOWN", use the following parameters to query for information:
	
	1. In the Search (KB) box, select the name of your game.
	
	2. In the "For solutions containing" box, type "ipf in module unknown".
	
	3. In the Using box, select "All the words entered".
	
	NOTE: If you do not see the Using box, click Show Options.
	
	For additional information about contacting Microsoft Technical Support, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q280302 MultiMedia: Troubleshooting Invalid Page Fault (IPF) and Exception
	  Errors (Part 2)
	
	Getting Clues from When the Error Occurs
	----------------------------------------
	
	Sometimes, noting when the error occurs can help determine the cause of the
	problem. For example, does the error occur when starting or running the game?
	The goal is to find clues to the cause of the problem and resolve it quickly by
	trying the most likely solutions first.
	
	Determining the Scope of the Problem:
	
	A key part of troubleshooting IPFs is to determine how widespread the problem is.
	Try to answer the following questions:
	
	  
	  Is the problem reproducible (can you make it happen whenever you want), or does it occur at random?
	
	  Does the problem only occur in one game or in other applications as well?
	
	  Are there specific, known issues causing this problem?
	
	  Does the problem only occur at a particular time, such as when starting or running the program or when getting online?
	
	  Does the IPF happen during installation of the program?
	
	The following sections discuss each question and possible resolutions.
	
	Is the Problem Reproducible?
	
	Can you make the error occur again in a reasonable amount of time? To solve an
	IPF, try a solution and then attempt to make the IPF occur again. If the error
	goes away, you can assume you have solved the problem. If the error still
	occurs, you need to continue troubleshooting the problem.
	
	If the error is not easily reproducible, try each solution one at a time. After
	you try one solution, go back to the game and work with the program for a while
	until you feel comfortable that the problem has been solved.
	
	If the problem has not been solved, try another possible solution. Along the way,
	keep track of the solutions you have tried and their results. Remember, if the
	IPF occurs when you do specific things in the game, you may get some clues about
	which solutions to try first.
	
	Does the Problem Occur in Other Applications?
	
	If the problem occurs in other applications, most likely the problem is not with
	a specific program you are running but with Windows, a component of Windows, or
	a piece of software that is running in the background. Although some of the
	troubleshooting tips and possible solutions in this article may help, the focus
	of this article is to resolve IPFs that are in the game.
	
	Are There Specific, Known Issues Causing This Problem?
	
	Some known issues with games may cause IPFs under specific circumstances. For
	more information about specific causes of IPFs in these programs, query on the
	following words in the Microsoft Knowledge Base:
	
	  ipf <program name>
	
	where <program name> is the name of the game program in which the IPF
	occurs.
	
	For additional information about finding articles in the Microsoft Knowledge
	Base, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q129725 Obtaining Knowledge Base Articles on the World Wide Web
	
	If none of the articles in the Microsoft Knowledge Base describes your problem,
	please continue troubleshooting your problem using the information in this
	article.
	
	Does the Problem Only Occur at a Particular Time?
	
	For example, does the problem occur when you start the program or does the
	problem occur when you run the program or run the program Online?
	
	Does the IPF happen during installation of the program?
	
	For additional information about how to troubleshoot CD-ROM read errors, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Errors
	
	If the game fails to start correctly, continue troubleshooting using the steps in
	the following article:
	
	  Q280302 MultiMedia: Troubleshooting Invalid Page Fault (IPF) and Exception
	  Errors (Part 2)
	
	Additional query words: kbimu homegame msgame ipf application error errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWorksSearch kbHomeMMsearch kbEncartaSearch kbExpediaSearch kbPictureItSearch kbReaderSearch kbMapptSearch kbEncartaEncycSearch kbMapPoint2001 kbReader150 kbEncartaReference2001
	Version           : :1.5
	Issue type        : kbhowto
	
	=============================================================================
	
