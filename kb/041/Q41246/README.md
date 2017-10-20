---
layout: page
title: "Q41246: How to Use Environment Variable Substitution in Batch Files"
permalink: /kb/041/Q41246/
---

## Q41246: How to Use Environment Variable Substitution in Batch Files

{% raw %}

	Article: Q41246
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
	
	A feature new to the Microsoft MS-DOS packaged product is the ability to use
	environment variables in batch files.
	
	These variables can be referenced by surrounding the variable with percent
	symbols (%). This procedure is known as environment variable substitution.
	However, this ability is not present at the COMMAND.COM command line, only
	within a batch file.
	
	MORE INFORMATION
	================
	
	A batch file might have the following line:
	
	  SET PATH=c:\dos\bin;c:\dos\etc;%PATH%.
	
	%PATH% is an environment variable whose value is taken from the current
	environment and appended to the new PATH definition. If this is done at the
	command line by typing the following line, the PATH environment variable's value
	is not substituted, so the existing PATH will not get appended to the new PATH
	("%PATH%" would be appended instead).
	
	   SET PATH=c:\dos\binp;c:\os2\binp;%PATH%
	
	The ability to use environment variable substitution is not restricted to
	existing MS-DOS environment variable names. Any variable that is defined in the
	environment can be extended using the method above.
	
	If the variable specified by the SET command is not defined in the environment,
	the variable stays the same if used at the prompt, and is replaced by a null
	expression if used in a batch file.
	
	For example, type the following command in which XYZZY is an undefined
	environment variable:
	
	  " SET ONE=%XYZZY%;TWO
	  SET" (without the quotation marks)
	
	The commands result in the following if used at the command-line prompt:
	
	  one=%XYZZY%;TWO
	
	The commands result in the following if used in a batch file:
	
	  ONE=;TWO
	
	Additional query words: 6.22 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
