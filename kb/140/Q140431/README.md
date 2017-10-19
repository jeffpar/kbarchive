---
layout: page
title: "Q140431: Compression Agent Detects Errors Even After Running ScanDisk"
permalink: /kb/140/Q140431/
---

## Q140431: Compression Agent Detects Errors Even After Running ScanDisk

	Article: Q140431
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to recompress a disk with Compression Agent, you may receive one of
	the following error messages:
	
	  - Compression Agent cannot recompress this drive because it contains errors
	  that must first be repaired. Click Help, carry out the instructions for
	  repairing the errors, and then try again.
	
	  - Compression Agent could not finish recompressing the drive because there
	  was an error. ID No: CMPAGENT103
	
	The same error message may occur again even if you run ScanDisk and correct the
	errors on the disk before running Compression Agent again.
	
	CAUSE
	=====
	
	This behavior can occur if the compressed drive contains unreliable clusters
	that ScanDisk cannot detect.
	
	RESOLUTION
	==========
	
	Configure ScanDisk to detect disk timeouts while performing a surface scan, and
	then run ScanDisk from a command prompt. To do so, follow these steps:
	
	1. Click the Start button, click Shut Down, click the "Restart the computer in
	  MS-DOS mode" option, and then click Yes.
	
	2. Type the following line, and then press ENTER:
	
	  edit c:\windows\command\scandisk.ini
	
	3. Add the following line to the [Environment] section of the file:
	
	  ScanTimeOut=On
	
	4. Save the Scandisk.ini file, and then exit the editor.
	
	5. Type the following line and then press ENTER to run ScanDisk:
	
	  scandisk
	
	  Run a surface scan when ScanDisk prompts you to do so.
	
	6. Repair any errors that ScanDisk finds.
	
	7. When ScanDisk is finished, type "exit" (without the quotation marks) and then
	  press ENTER.
	
	8. Run Compression Agent again.
	
	MORE INFORMATION
	================
	
	The "ScanTimeOut=On" entry causes ScanDisk to detect disk timeouts while
	performing a surface scan. This allows ScanDisk to detect marginal clusters that
	are not reliable enough to store data. These clusters are detected by
	Compression Agent when you attempt to recompress your files, but they are not
	normally detected by ScanDisk.
	
	
	Additional qeury words: 95
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
