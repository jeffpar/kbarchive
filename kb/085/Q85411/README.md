---
layout: page
title: "Q85411: MS-DOS 5.0a Upgrade README.TXT: Documentation"
permalink: /kb/085/Q85411/
---

## Q85411: MS-DOS 5.0a Upgrade README.TXT: Documentation

	Article: Q85411
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5.0a Upgrade
	README.TXT file.
	
	MORE INFORMATION
	================
	
	7. DOCUMENTATION CORRECTIONS AND ADDITIONS
	------------------------------------------
	
	7.1 New CV.COM for CodeView:
	
	Users of CodeView versions 3.0 to 3.13 should use the program CV.COM to start
	CodeView. For more details, see the section on CodeView in the file
	APPNOTES.TXT.
	
	7.2 Documentation Corrections:
	
	The following is a correction to the Microsoft MS-DOS Getting Started manual:
	
	Page 66 (steps 6 and 7 of the procedure):
	
	  To determine whether you have the correct version of EMM386.EXE, disregard
	  the file dates (as stated in steps 6 and 7 of the procedure). Instead, to
	  check which version of EMM386 you are using:
	
	1. Quit Windows, if you are using it.
	
	2. Type "EMM386" (without the quotation marks) at the command prompt.
	
	  MS-DOS displays the version of EMM386 you are using.
	
	3. If the message indicates you are using version 4.33 or later, you are using
	  the correct version. If you are using a version earlier than 4.33, expand and
	  copy the newer version included with MS-DOS 5.0 by following step 7 of the
	  procedure in Getting Started.
	
	Page 77 (Lotus 1-2-3 version 3.1 won't start)
	
	  The information in this section also applies to Lotus 1-2-3 version 3.0.
	
	The following are corrections to the Microsoft MS-DOS User's Guide and
	Reference:
	
	FORMAT Command:
	
	  If you can't use the FORMAT command to format an unformatted disk, try using
	  the /u switch.
	
	MIRROR Command:
	
	  You cannot use the MIRROR command with a network drive or any drive you
	  created by using the ASSIGN, SUBST, or JOIN command.
	
	UNDELETE Command:
	
	Do not use the UNDELETE command in the following circumstances:
	
	- When other programs are active.
	
	- With the LOAD= command or the Shift+Enter key combination in Windows or
	  MS-DOS Shell.
	
	- With Task Swapper in MS-DOS Shell.
	
	UNFORMAT Command:
	
	  The UNFORMAT /p switch is not compatible with the /j switch.
	
	RAMDRIVE.SYS Device Driver:
	
	  Valid values for the RAMDrive DiskSize parameter are 4 through 32767.
	
	The following is a correction to the command-line Help:
	
	COMP /? Help:
	
	  Online help for the COMP command /d switch should state that the default
	  format is hexadecimal.
	
	7.3 Hercules Display Adapter (MSHERC.COM)
	-----------------------------------------
	
	If you use MS-DOS Editor or QBasic with a Hercules display adapter, include the
	MSHERC.COM command in your AUTOEXEC.BAT file.
	
	7.4 QBasic "On Error" Command
	-----------------------------
	
	Online help for Microsoft QBasic incorrectly states that ON ERROR RESUME NEXT is
	a valid statement. The correct syntax is as follows:
	
	  ON ERROR GOTO <LINE/LABEL>
	
	Additional query words: 5.00a update noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500a
	Version           : :5.0a
	
	=============================================================================
	
