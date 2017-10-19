---
layout: page
title: "Q75634: Percent Signs Stripped from Batch File Text"
permalink: /kb/075/Q75634/
---

## Q75634: Percent Signs Stripped from Batch File Text

	Article: Q75634
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using a percent sign (%) in a batch file requires that two percent signs (%%) be
	specified.
	
	For example, the command to display "5%" from a batch file would be :
	
	  ECHO 5%%
	
	MORE INFORMATION
	================
	
	MS-DOS uses %1, %2, ... %9 as replaceable command line parameters. For example,
	before executing the command ECHO %1, %1 will be replaced with the first
	parameter passed to the batch file. %0 is replaced with the command used to
	execute the batch file.
	
	A single percent sign on a line is treated as a "nul" character in a batch file.
	For example:
	
	  ECHO %     is processed as ECHO
	  ECHO a%b   is processed as ECHO ab
	
	If a command contains two percent signs, MS-DOS will treat any characters between
	them as an environment variable to be expanded. For example, if the SET command
	shows that the current environment variables are
	
	  COMSPEC=C:\COMMAND.COM
	  PATH=C:\DOS
	  PROMPT=$P$G
	  B=C
	
	then
	
	  ECHO %PATH%     is processed as ECHO C:\DOS
	  ECHO a%b%       is processed as ECHO aC
	  ECHO a%b b%a    is processed as ECHO aa
	
	If there are no characters between the two percent signs, one percent sign is
	stripped off and the other will remain. This is why a FOR command that echos the
	name of each file with a .COM extension would be
	
	  FOR %V IN (*.COM) DO ECHO %V
	
	but if the same command is placed in a batch file, the following is required:
	
	  FOR %%V IN (*.COM) DO ECHO %%V
	
	Reference(s):
	
	"Microsoft MS-DOS Batch File Quick Reference," Microsoft Press.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
