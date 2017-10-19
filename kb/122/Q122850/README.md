---
layout: page
title: "Q122850: PC Win: Err Msg: ...While Loading the Spelling Dictionary"
permalink: /kb/122/Q122850/
---

## Q122850: PC Win: Err Msg: ...While Loading the Spelling Dictionary

	Article: Q122850
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do a spell check in versions 3.0, 3.0b, or 3.2 of Microsoft Mail for
	Windows, you can receive the following error:
	
	  An error has occurred while loading the spelling dictionary.
	
	CAUSE
	=====
	
	1. The most common cause of this problem is a difference between the label
	  defined in the MSMAIL.INI file and the label used in the WIN.INI file.
	
	  The following example shows the entries for the two files:
	
	     MSMAIL.INI
	     [MS Proofing Tools]
	     Spelling=Spelling 1033,0
	     Custom Dict=Custom Dict (Mail)
	
	     WIN.INI
	     [MS Proofing Tools]
	     Spelling (Mail) 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPEL2.DLL,
	                            C:\WINDOWS\MSAPPS\PROOF\MSSP2_EN.LEX
	     Custom Dict (Mail)=C:\MSMAIL\CUSTOM.DIC
	
	  NOTE: In the above WIN.INI examples, the Spelling entry should be on one line.
	
	2. Another cause of this error can be more than one Spelling or Custom Dict
	  statement in the WIN.INI [MS Proofing Tools] section. Sometimes when you
	  install an application, the installation will append new information to this
	  section. As a result, the installation can create two or more references to
	  the spell checker.
	
	3. Finally, some applications, notably Microsoft Office, use what are called
	  universal naming convention (UNC) connections. As a result, the installation
	  replaces the statement below in the WIN.INI,
	
	     Spelling 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPELL.DLL,
	     C:\WINDOWS\MSAPPS\PROOF\MSSP_AM.LEX
	
	  with the following statement:
	
	     Spelling 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPELL.DLL,
	     \\SERVER\SHARE\PROOF\MSSP_AM.LEX
	
	RESOLUTION
	==========
	
	1. The labels that the MSMAIL.INI point to in the WIN.INI must be exact or you
	  will receive this error message. The labels in the MSMAIL.INI are everything
	  after the equal (=) sign. The dynamic link library (DLL) and the dictionary
	  (LEX) files should exist in the specified subdirectories.
	
	2. The labels in the MSMAIL.INI and WIN.INI must be the same. Check the WIN.INI
	  for duplicate Spelling or Custom Dict entries.
	
	3. If you have a Novell network, the use of UNC connections is not accepted. To
	  resolve this problem, change the following part of this statement,
	
	     \\SERVER\SHARE\PROOF\MSSP_AM.LEX
	
	  to a persistent connection,
	
	     M:\path\filename
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q92805 PC Win: Spelling and Custom Dict Entries in WIN.INI
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
