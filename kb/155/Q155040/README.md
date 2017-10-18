---
layout: page
title: "Q155040: Debugging WINS Event ID 4288"
permalink: kb/155/Q155040/
---

## Q155040: Debugging WINS Event ID 4288

	Article: Q155040
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Wins Administrator or Winscl.exe to backup a WINS database, you may
	get an error message indicating that the database cannot be backed up. Wins will
	also post Event ID 4288 in the System Log.
	
	  Event ID: 4288
	  Source: WINS
	  Type: Error
	  Description: WINS Encountered an error during backup of the database to the
	  directory.
	
	RESOLUTION
	==========
	
	There may be multiple causes for this problem. Use the following steps to assist
	in determining the root cause. For example, the Wins event message may have the
	following hex data:
	
	  00002589 FFFFFDFC
	
	Perform the following steps to extract and analyze the WINS error code:
	
	1. Check the hex data's second double-word (DWORD), that always indicates the
	  error code. In this example, the error code is FDFC. Your error code may be
	  different.
	
	2. Take the 2s complement of the error code, that is 516, and then check out the
	  error status in the Jet header file. In this example, error 516 maps to
	  JET_errLoggingDisabled. This indicates that the Wins backup failed because
	  logging is disabled.
	
	2s Complement
	-------------
	
	The 2s Complement is a method for storing negative numbers such as these error
	conditions in WINS. To determine the 2s complement of the number in the example,
	follow these steps:
	
	1. Start Calculator (Calc.exe).
	
	2. On the View menu, click Scientific, and then click Hex.
	
	3. Type FDFC, click Xor, and then click FFFF.
	
	4. Click =, click +, and then click 1.
	
	5. Click =, and then click Dec to convert the result to decimal.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q168595
	  TITLE : Debugging WINS Event ID 4224
	
	  ARTICLE-ID: Q124617
	  TITLE : JETPACK.EXE Error Codes and Messages for Windows NT 3.5
	
	  ARTICLE-ID: Q172570
	  TITLE : Jetpack Error Codes for Windows NT 4.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
