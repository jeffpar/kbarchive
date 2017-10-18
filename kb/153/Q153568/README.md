---
layout: page
title: "Q153568: HOWTO: Optimize Remote OLE Automation Performance"
permalink: kb/153/Q153568/
---

## Q153568: HOWTO: Optimize Remote OLE Automation Performance

	Article: Q153568
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Remote OLE Automation involves cross-machine calls across a network, which can
	really slow things down, so it is important to keep a few things in mind while
	making such remote calls. This article lists the ways in which you could
	optimize the performance of your remote calls.
	
	MORE INFORMATION
	================
	
	First, always use Early Binding. This reduces the number of calls between
	objects by about 50%. This can make a big performance difference when remoting
	objects (especially over RAS). The only time you should use late binding is if
	you do not know ahead of time what the object is that you will be connecting
	to.
	
	Second, when calling methods on objects, create a method that accepts 'n' number
	of parameters than exposing 'n' properties on the object, setting each, and then
	calling the method. This is faster because the OLE call is the more expensive
	part in terms of execution time. Passing relatively large amounts of data within
	the call works well. The one limitation to keep in mind while doing this is that
	if you are using a 16-bit object, you can't pass more than 64k of data at one
	time.
	
	Additional query words: kbVBp400 kbdse kbDSupport kbVBp kbAutomation
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
