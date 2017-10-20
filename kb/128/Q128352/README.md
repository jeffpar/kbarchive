---
layout: page
title: "Q128352: Print Job to LPR Printer Does Not Print"
permalink: /kb/128/Q128352/
---

## Q128352: Print Job to LPR Printer Does Not Print

{% raw %}

	Article: Q128352
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
	
	SYMPTOMS
	========
	
	When you print from a computer running Microsoft Network Client for MS-DOS or
	Windows for Workgroups version 3.11 to a Line Printer Remote (LPR) protocol
	printer that is connected to a Windows NT Line Printer Daemon (LPD) server, the
	print job does not print and the following is written to the system log:
	
	  Event ID: 2001
	  Source: LPR Print Monitor
	  Type: Warning
	  Description: Cannot Reach the Destination.
	
	CAUSE
	=====
	
	This problem occurs if you do not have proper permissions to write to the
	subdirectory, because the LPR command (LPR.EXE) needs to write a temporary file
	to the %SystemRoot%\SYSTEM32 subdirectory on the Windows NT computer.
	
	The Everyone group has Change permission by default. If the Administrator removes
	this right for the \SYSTEM32 subdirectory, the above error message appears.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Log on as one of the Administrators on the client computer.
	
	- Grant the user on the client computer Change permissions to the
	  %SystemRoot%\SYSTEM32 subdirectory on the Windows NT computer.
	
	  NOTE: Change permission is the default security for the System32 directory.
	  The problem described above occurs when an administrator has changed the
	  default permissions. Access to the Windows NT directory tree is protected by
	  share permissions. Directory permissions are a secondary level of security.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q133488: LPR Printing Fails After Setting Up Security
	  Q137912: File Permissions on \SYSTEM32 Affect All Subdirectories
	  Q138593: Unable to Print to WinNT LPR Printers after Applying SP2
	
	Additional query words: prodnt viewer wfw nc nts
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
