---
layout: page
title: "Q121011: ProofReader Repeats Single Number or Does Not Initiate Volume"
permalink: kb/121/Q121011/
---

## Q121011: ProofReader Repeats Single Number or Does Not Initiate Volume

	Article: Q121011
	Product(s): Miscellaneous Windows Products
	Version(s): 1.00 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the ProofReader utility in a Microsoft Word document
	containing a Microsoft Excel embedded object and you choose the Selected Range
	or On Entry command, ProofReader either does not initiate any volume (although
	the pointer flashes as if sound interrupts are being attempted), or it selects
	one number in the selected field and repeats the same number in a loop.
	
	CAUSE
	=====
	
	The ProofReader option found in the Excel toolbar is actually the file
	PROOF.XLA. The above symptoms occur because this file is not properly initiated
	when it is started from an embedded or linked Excel object in another
	application.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Use the full ProofReader utility in Windows Sound System version 2.0 as
	  follows:
	
	  1. Start ProofReader from the icon found in the Windows Sound System group.
	
	  2. Minimize ProofReader.
	
	  3. Select the range to be proofread by typing CTRL+N or choosing Selected
	     Range from the Proof menu.
	
	-or-
	
	- Start Microsoft Excel as the first application with the active Proof menu
	  (ProofReader-PROOF.XLA). Use the following steps:
	
	  1. Start Excel with PROOF.XLA.
	
	  2. Minimize Excel.
	
	  3. Start the application containing the embedded or linked Excel object.
	
	  4. Select the embedded or linked Excel object.
	
	  In Excel, the Proof command becomes available and works correctly provided
	  that the PROOF.XLA Excel session is still open and minimized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Sound System versions
	1.0 and 2.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 2.00 snd systm windows wndows
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys200
	Version           : 1.00 2.00
	
	=============================================================================
	
