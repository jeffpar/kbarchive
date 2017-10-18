---
layout: page
title: "Q142310: How to Redirect Print Jobs If Print Device Is Not Available"
permalink: kb/142/Q142310/
---

## Q142310: How to Redirect Print Jobs If Print Device Is Not Available

	Article: Q142310
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a print device is temporarily out of service or it is not available for an
	extended period of time, print jobs that are submitted to the printer are on
	hold. Windows NT does not include a feature that automatically redirects print
	jobs to another printer of the same type. This article explains how you can
	redirect print jobs to another printer.
	
	MORE INFORMATION
	================
	
	To redirect print jobs of a specific printer, do one of the following:
	
	- If Windows NT recognizes either a local or network printer, change the Print
	  To entry in Print Manager to the new printer.
	
	  -or-
	
	- If Windows NT does not recognize a network printer, but you do know the share
	  name of the network printer, type the following at the MS-DOS command
	  prompt:
	
	  "net use LPTx: \\<Computer name>\<Printer name>" (without the
	  quotation marks)
	
	  In Print Manager, change the Print To entry to the redirected port LPTx (where
	  x is the printer port number).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
