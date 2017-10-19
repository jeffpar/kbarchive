---
layout: page
title: "Q95016: PROFS: &quot;System Abend 155&quot; Installing Gateway on Host"
permalink: /kb/095/Q95016/
---

## Q95016: PROFS: &quot;System Abend 155&quot; Installing Gateway on Host

	Article: Q95016
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to PROFS, version 2.1b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to install the Microsoft Mail Gateway to PROFS on the MS-Gate VM ID
	on the host system fails immediately after you initiate the install command.
	When this error occurs, VM generates the following error message:
	
	  Generating National Language Support. DMS Abend 148T system abend 155 called
	  from 3020628 reason code 0000000
	
	CAUSE
	=====
	
	The abend 155 error has three major causes:
	
	- The PROFS gateway VM ID is not properly linked to the system disk that
	  contains the VM Assembler. The assembler is required to process commands in
	  several PROREXX modules used by the install program.
	
	- An assembler other than the IBM VM assembler is installed on the system. The
	  alternative assembler causes an incompatibility conflict with the IBM CONVERT
	  command in the PROREXX module of the INSTALL EXEC.
	
	- The version of the VM operating system installed on the computer is not
	  compatible with the IBM CONVERT command in the PROREXX module of the INSTALL
	  EXEC.
	
	RESOLUTION
	==========
	
	To resolve the first cause of this error, the VM administrator must give the
	MS-Gate ID access to the VM system disk that contains the assembler.
	
	To resolve the second cause of this error, the VM administrator must install the
	IBM VM assembler and give the MS-Gate ID access to it.
	
	To resolve the third cause of this error, replace the IBM CONVERT command line in
	the PROREXX module of the INSTALL EXEC with the following line:
	
	  GENCMD PROREXX ( USER OUTMODE F )
	
	Additional query words: 2.10b Installation PROREXX Assembler ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS210b
	Version           : :2.1b
	
	=============================================================================
	
