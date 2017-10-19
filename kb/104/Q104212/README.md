---
layout: page
title: "Q104212: Sound System Err Msg: Cannot Find &quot;&lt;path&gt;&#92;PROOF.XLA&quot;"
permalink: /kb/104/Q104212/
---

## Q104212: Sound System Err Msg: Cannot Find &quot;&lt;path&gt;&#92;PROOF.XLA&quot;

	Article: Q104212
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting Excel on a computer that has Windows Sound System installed with
	the Excel Proofing option, you may receive the following error message
	
	  Cannot Find
	  "<path>\PROOF.XLA"
	
	where <path> is the path to the location of PROOF.XLA (usually this will be
	C:\EXCEL\LIBRARY).
	
	This error message occurs if PROOF.XLA cannot be found in the location shown in
	the error message.
	
	RESOLUTION
	==========
	
	Determine the location of PROOF.XLA on your system. PROOF.XLA is located on
	C:\EXCEL\LIBRARY by default. However, sometimes when Excel has been moved or
	reinstalled into a new directory, this file may be missing or in a new location.
	If PROOF.XLA is not on the system, you will want to perform a custom
	installation of Windows Sound System as follows:
	
	1. Double-click the Windows Sound System Setup icon in the Windows Sound System
	  program group.
	
	2. Choose Continue until the screen with the buttons Board, Check, and Software
	  appears. Choose the Software button.
	
	3. Choose OK.
	
	4. Choose Continue.
	
	5. Choose Custom and choose just the Proofreader option (it will also force you
	  to install the system software).
	
	6. Choose the Install button. The path to your Excel directory is displayed (if
	  you would like a different path, you can change it now).
	
	7. Choose Continue and it will prompt you for a disk and complete setup.
	
	The problem should now be resolved.
	
	If you are still getting the error when starting Excel, do the following:
	
	1. Make sure PROOF.XLA is located in the directory mentioned in the error
	  message and, if so, move PROOF.XLA to the appropriate directory.
	
	-or-
	
	2. Edit EXCEL4.INI (if you are using Excel version 4.0) or EXCEL.INI if you are
	  using an earlier version of Excel (both files are in the Windows directory).
	
	3. Correct the path mentioned in the OPEN statement. The line will appear as
	  follows:
	
	     OPEN#=/F <path>\PROOF.XLA
	
	  The following are definitions of this statement:
	
	   - The OPEN=/F line loads custom functions into the Paste Function list.
	
	   - The # is just a digit that is dependent on how many other macros are being
	     run when Excel is started.
	
	   - <path>\PROOF.XLA is the location of the PROOF.XLA file.
	
	Additional query words: 1.0 1.0a 2.0 proofing error
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
