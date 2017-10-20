---
layout: page
title: "Q134295: Computer May Hang with Cyrix Processor and ACC2066 Chip Set"
permalink: /kb/134/Q134295/
---

## Q134295: Computer May Hang with Cyrix Processor and ACC2066 Chip Set

{% raw %}

	Article: Q134295
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbhw win95 kbHardware
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 on a computer with a Cyrix processor and the
	ACC2066 chip set by ACC MICRO, your computer may stop responding (hang)
	unexpectedly, or you may receive an error message similar to the following
	message on a blue screen:
	
	  Fatal Error at 0028:c0027900 in vxd VFAT(01) + 000019d8
	
	When you receive such an error message, the computer hangs. You may also
	encounter random system hangs and random errors in programs.
	
	CAUSE
	=====
	
	According to ACC MICRO, the ACC2066 chip set properly supports burst writes to
	the processor, but it does not properly support burst writes back out. This
	causes your computer to hang.
	
	NOTE: The ACC2066 chip set is found primarily in laptop computers.
	
	RESOLUTION
	==========
	
	If you do not know which type of processor is installed in your computer,
	consult your computer documentation before proceeding. Do not perform the
	following steps unless you are certain that your computer has a Cyrix processor
	and that this is the problem.
	
	Use the following steps to disable 16-byte write burst cycles:
	
	1. Copy the Wb16off.exe file from disk 1 of your original Windows 95 disks or
	  the Win95 folder on your Windows 95 CD-ROM to the Windows\System folder.
	
	2. Use any text editor (such as Notepad) to open the Autoexec.bat file.
	
	3. Add the following line as the first line in the Autoexec.bat file:
	
	  c:\windows\system\wb16off.exe
	
	4. Save and then close the Autoexec.bat file.
	
	5. Restart your computer.
	
	NOTE: Disabling 16-byte write burst cycles may result in a slight loss of
	performance. This change in performance may not be noticeable.
	
	
	Additional query words: crash winbook packet burst mode
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbhw win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
