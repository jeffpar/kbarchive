---
layout: page
title: "Q150317: Memory Leak Using Compaq Insight Agents with SCSI Tape Drives"
permalink: kb/150/Q150317/
---

## Q150317: Memory Leak Using Compaq Insight Agents with SCSI Tape Drives

	Article: Q150317
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
	
	When you use Compaq's Insight Agent (versions 2.60b or 2.61b) on a Compaq
	Proliant server in which a SCSI tape drive is installed, the server will
	eventually run out of memory.
	
	RESOLUTION
	==========
	
	This problem is corrected by applying Compaq's Softpaq number SP1486, available
	from Compaq at 1-800-386-2172.
	
	MORE INFORMATION
	================
	
	To apply the Softpaq:
	
	1. Place the SP1486 file in a new directory.
	
	2. Run the Softpaq utility provided by Compaq to decompress the SP1486 file.
	  (This will result in the following files: PATCH.EXE, 60B-60C.RTP and
	  61B-61C.RTP.)
	
	3. Copy these three files to the location of the Compaq Insight Agents. (This is
	  by default %SystemRoot%\SYSTEM32\CPQMGMT.)
	
	4. Stop the simple network management control protocol (SNMP) Service by typing
	  the following command at the command prompt:
	
	  "NET STOP SNMP /Y" (without the quotation marks)
	
	5. Run the PATCH utility to update the version of the Insight Agents you have
	  installed. It is important to run the PATCH utility using the current .rtp
	  file for your version of Insight Agent.
	
	  If you have version 2.60b, run:
	
	  PATCH 60B-60C.RTP
	
	  If you have version 2.61B, run:
	
	  PATCH 61B-61C.RTP
	
	6. Restart the Compaq Insight Agent by typing the following at the command
	  prompt:
	
	  "NET START CPQMGMT" (without the quotation marks)
	
	  (This will automatically start the SNMP services.)
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party information.
	
	Additional query words: Compaq memory leak tape SCSI Insight Manager
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
