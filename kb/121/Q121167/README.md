---
layout: page
title: "Q121167: GP Fault Occurs &amp; Keyboard Is Remapped w/ProofReader &amp; Word 6"
permalink: /kb/121/Q121167/
---

## Q121167: GP Fault Occurs &amp; Keyboard Is Remapped w/ProofReader &amp; Word 6

	Article: Q121167
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the ProofReader utility in Microsoft Word version 6.0 for
	Windows, the following error messages are displayed:
	
	- An error has occurred in your application. If you choose Ignore, you should
	  save your work in a new file. If you close, your application will terminate.
	
	-and-
	
	- Application Error: Winword caused a General Protection fault in module
	  S3640.DRV at 0003:0FD2
	
	The keyboard is remapped for every keyboard entry in all text-based applications.
	
	CAUSE
	=====
	
	The problem with keyboard mapping occurs because the CTRL+N combination is used
	in both Microsoft Word version 6.0 for Windows and Windows Sound System version
	2.0 ProofReader. Word uses the CTRL+N function for starting a new document. In
	ProofReader, the CTRL+N combination is used to begin proofreading a range of
	selected items. ProofReader does not fully release the CTRL key to Word, nor
	does it properly refresh the function of the CTRL key. As a result, it seems as
	if the CTRL key is locked, making it possible for all CTRL functions to occur.
	
	If the CTRL key is pressed in Word after ProofReader has proofread a document,
	the CTRL functions are released back to Word successfully without the GP fault,
	application error, or remapping problems.
	
	RESOLUTION
	==========
	
	To correct this problem, press the CTRL key immediately after ProofReader has
	completed proofreading the selected text in the Word document.
	
	If you receive the GP fault and application error messages, reboot Windows to
	correct the keyboard mappings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Sound System versions
	2.0 and 2.0a. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The keyboard remapping does not effect the MS-DOS environment. The keyboard
	mapping operates correctly after exiting Windows. Additionally, the mappings are
	correct in MS-DOS virtual machines (VMs). However, when you return to the
	Windows environment the mappings are still incorrect. You must restart Windows
	to correct the problem.
	
	Additional query words: 2.00 wss snd winword 6.0 2.0 2.0a gp fault app err interop proof reader gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200 kbWinSoundSys200a
	
	=============================================================================
	
