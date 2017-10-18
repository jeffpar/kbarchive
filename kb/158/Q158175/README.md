---
layout: page
title: "Q158175: HOWTO: Determine the Differences Between DoEvents and Sleep"
permalink: kb/158/Q158175/
---

## Q158175: HOWTO: Determine the Differences Between DoEvents and Sleep

	Article: Q158175
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the differences between the Visual Basic DoEvents
	
	  function and the Sleep() Windows API function.
	
	MORE INFORMATION
	================
	
	DoEvents is a Visual Basic function that yields execution so the operating
	system can process other events. This function cleans out the message loop and
	executes any other pending business in the Visual Basic runtime. Upon completing
	the pending business execution, the function calls the Sleep function with zero
	(0) as the argument so that the remaining time slice can be used to check the
	queue.
	
	The Sleep 32-bit API function is a subset of the DoEvents function. The Visual
	Basic program calling the function and the Visual Basic runtime executable and
	interactions with Windows are immediately put to sleep by this function. The
	programs remain inactive for the time in milliseconds specified in the Sleep
	argument.
	
	The Sleep function allows you to specify the amount of time your applications are
	inactive. The DoEvents function returns control to the Visual Basic program
	after the operating system has finished processing the events in its queue and
	all keys in the SendKeys queue have been sent.
	
	Additional query words: Sleep DoEvents kbVBp kbdsd kbDSupport kbVBp400 kbVBp500 kbVBp600 KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
