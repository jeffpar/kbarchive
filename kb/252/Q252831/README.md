---
layout: page
title: "Q252831: SMSINST: Iterative Use Of Get Temporary Filename Can Cause Error"
permalink: kb/252/Q252831/
---

## Q252831: SMSINST: Iterative Use Of Get Temporary Filename Can Cause Error

	Article: Q252831
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Systems Management Server (SMS) Installer Script Editor to
	assign a temporary file name (Get Temporary Filename into <variablename>),
	the generated SMS Installer program can cause an "Access violation" error
	message similar to:
	
	  The instruction at <xxx> referenced memory at <yyy>. The memory
	  could not be "read".
	
	CAUSE
	=====
	
	This behavior can occur if the Get Temporary Filename script action is used
	within a loop. For example, the following sample script generates the error
	message:
	
	  Set Variable COUNT to 1
	  While COUNT Not Equal 200 do
	     Get Temporary Filename into MYFILE
	     Set variable COUNT to %COUNT% (Increment)
	  End Block
	
	For small loop iterations (less than 130), the problem does not occur.
	
	WORKAROUND
	==========
	
	Do not use the Get Temporary Filename script action in a loop that is likely to
	iterate beyond 130 times.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.91.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
