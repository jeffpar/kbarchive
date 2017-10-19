---
layout: page
title: "Q198788: XADM: Using a Batch File for Isinteg with Alltests"
permalink: /kb/198/Q198788/
---

## Q198788: XADM: Using a Batch File for Isinteg with Alltests

	Article: Q198788
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to allow Exchange Server administrators to
	schedule an Isintetg -fix -pri -test alltests to run during a specified time
	without needing to input the 'y' at the prompt. Because information store
	databases can be rather large, Exchange Server administrators may need to start
	Isinteg -fix -test alltests late in the evening and be finished in the morning.
	Using a batch file will allow Isinteg to run without user input.
	
	NOTE: It is not recommended to create a batch file to run Isinteg on a regular
	basis.
	
	MORE INFORMATION
	================
	
	This method of running Isinteg allows the Exchange Server administrator to get
	past the Isinteg prompt which states, "Press 'y' to continue to do all tests,
	any other key to quit."
	
	However, when you run the batch file, you may notice it sits at the following
	prompt: "Press 'y' to continue to do all tests, any other key to quit," waiting
	for someone to press 'y'.
	
	In order to get the 'y' to be read after the batch file, use the following syntax
	in the first batch file:
	
	  "Isinteg -fix -pri -test alltests <y.bat" (without the quotation marks)
	
	Create an additional batch file and simply enter 'y' (without the quotes) into
	the second batch file. In the above example, the second batch file is called
	"y.bat". When running the command there will be a slight delay but the 'y' will
	be entered and Isinteg should begin to run.
	
	Another way to do the same thing without using an additional file is to type the
	following:
	
	  "echo y | isinteg -pri -fix -test alltests" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
