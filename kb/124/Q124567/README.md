---
layout: page
title: "Q124567: LPR.EXE Command Can Pass Control Characters to an LPD Server"
permalink: kb/124/Q124567/
---

## Q124567: LPR.EXE Command Can Pass Control Characters to an LPD Server

	Article: Q124567
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows NT 3.5, the LPR command (LPR.EXE) can be used to send a file directly
	to an LPD server without using Print Manager. The LPR command usually defaults
	to the 'f' control character, which tells the LPD server to format the incoming
	file, taking out any extraneous ASCII control characters.
	
	MORE INFORMATION
	================
	
	It is possible to send a different control character to an LPD server through
	the LPR.EXE command by using the following parameter
	
	  -oX
	
	where X is the control character that will be passed to the LPD server.
	
	The following command is an example of using the Windows NT LPR command to send a
	file to a UNIX LPD server and have the file formatted as a PostScript print
	job:
	
	  LPR -S 100.10.10.10 -P printq -oo c:\test.txt
	
	  NOTE: If the -o parameter is used without a control character, LPR will
	  send an 'l' control character to the LPD server, instructing it not to
	  format the print job.
	
	Control characters coming from an LPR client instruct an LPD server on how to
	handle the incoming print job (or data file). Not all LPD servers implement all
	control characters, contact the manufacturer of the LPD server to verify what
	control characters are supported.
	
	For additional information on LPR.EXE, type the following at a Windows NT command
	prompt:
	
	  LPR /?
	
	For additional information on control characters and LPR/LPD, refer to RFC1179,
	which is the standard for TCP/IP Printing.
	
	NOTE: LPR through the Windows NT Print Manager by default uses the 'l' control
	character, which tells the LPD server not to format the print job. This is
	necessary because a Windows NT printer driver has already formatted the job. LPR
	through the Print Manager can be configured in the Registry; for information on
	doing this, please see the following article in the Microsoft Knowledge Base:
	
	  Q121786: LPR and LPD Registry Entries for TCP/IP Printing
	
	The UNIX product discussed here is manufactured by Novell, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
