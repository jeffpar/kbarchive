---
layout: page
title: "Q72360: &quot;Packed File Corrupt&quot; Error Message"
permalink: /kb/072/Q72360/
---

## Q72360: &quot;Packed File Corrupt&quot; Error Message

{% raw %}

	Article: Q72360
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an .EXE file that has been "packed" using the EXEPACK utility or the
	/EXEPACK linker option may result in the following error message even though the
	packed file is intact:
	
	  Packed file corrupt
	
	CAUSE
	=====
	
	This behavior is a result of an error in the code that unpacks the .EXE file.
	You can determine if this is the cause of your problem by starting a new copy of
	COMMAND.COM. To do this, type "command" (without the quotation marks) at the
	MS-DOS prompt and press ENTER. (It may be necessary to repeat this several
	times.) Then try to run your program.
	
	NOTE: This error is more likely to occur with MS-DOS version 5.0 and later
	because it is capable of freeing up more conventional memory.
	
	WORKAROUND
	==========
	
	If the method above is successful, you may resolve the problem in a more
	permanent fashion by increasing the FILES and BUFFERS in your CONFIG.SYS file.
	
	If you are running MS-DOS 5.0 or later, you can resolve this problem by loading
	MS-DOS low (by adding the DOS=LOW command to the CONFIG.SYS file) or by using
	LOADFIX. LOADFIX ensures that a program is loaded above the first 64K of
	conventional memory. For example, to ensure that a program file named TEST.EXE
	is loaded above 64K, type the following:
	
	  " loadfix test.exe " (without the quotation marks)
	
	For more information on LOADFIX, see the version 5.0 "Microsoft MS-DOS Getting
	Started" guide. Or, if you are using version 6.0 or 6.2, type the following at
	the MS-DOS command prompt:
	
	  " HELP LOADFIX " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	This problem occurs because of a problem in the EXEPACK.EXE utility and the
	LINK.EXE linker utility when the /EXEPACK switch is used. Each will cause the
	executable file to be compressed or packed by removing repeating sequences of
	identical bytes, allowing the program to occupy less disk space. The program
	will then load for execution more quickly.
	
	Because of an error in the unpacking algorithm, the error message "Packed file
	corrupt" may occur when the packed program is loaded into memory before the
	first 64K boundary. By spawning additional copies of COMMAND.COM or increasing
	your FILES and BUFFERS sizes, you will increase the amount of space MS-DOS
	occupies in memory. This forces the program to load above the first 64K
	boundary. This problem was corrected in version 5.1 of the linker.
	
	This error message may also result if the EXEPACK utility is fooled into creating
	a packed file with the same name as the .EXE file. For example, if the current
	directory is C:\BIN and you type the following (the syntax for EXEPACK is
	"EXEPACK <exe_file> <packed_file>"), the resulting packed file will
	probably be corrupt:
	
	  exepack c:\bin\test.exe test.exe
	
	REFERENCES
	==========
	
	More information on EXEPACK.EXE and LINK.EXE can be found in the "The MS-DOS
	Encyclopedia," published by Microsoft Press.
	
	
	Additional query words: 6.22 2.11 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a LOAD FIX online help 5.00 5.00a 6.00 6.20 6.21 "Packed File is Corrupt"
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
