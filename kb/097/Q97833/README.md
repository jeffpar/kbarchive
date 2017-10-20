---
layout: page
title: "Q97833: Restoring Previous Version of MS-DOS After Uninstall Fails"
permalink: /kb/097/Q97833/
---

## Q97833: Restoring Previous Version of MS-DOS After Uninstall Fails

{% raw %}

	Article: Q97833
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses restoring a previous version of MS-DOS when the Uninstall
	disk does not work. The following situations are covered:
	
	- You Have Not Removed DoubleSpace
	
	- You Have Already Removed DoubleSpace But Cannot Use Uninstall
	
	- How to Return to MS-DOS 5.0 If Uninstall Fails
	
	- How to Return to a Version of MS-DOS Earlier Than MS-DOS 5.0
	
	MORE INFORMATION
	================
	
	You Have Not Removed DoubleSpace
	--------------------------------
	
	If you have not removed DoubleSpace, carry out the procedure in section 7.6 of
	the README.TXT file or query on the following words in the Microsoft Knowledge
	Base to find an article with instructions for removing DoubleSpace and
	preserving your files:
	
	  " remove and doublespace and preserve " (without the quotation marks)
	
	You Have Already Removed DoubleSpace But Cannot Use Uninstall
	-------------------------------------------------------------
	
	If you have already removed DoubleSpace but cannot use the Uninstall program, you
	may still have some hidden DoubleSpace files in the root directory of drive C.
	To remove these files type "deltree /y c:\dblspace.*" (without the quotation
	marks) at the MS-DOS command prompt and then press ENTER. Also, use MS-DOS
	Editor to remove any DEVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE commands from the
	CONFIG.SYS file. After doing so, restart the computer with the Uninstall disk in
	drive A.
	
	How to Return to MS-DOS 5.0 If Uninstall Fails
	----------------------------------------------
	
	If you have not installed DoubleSpace, carry out the procedure on page 179 of the
	"Microsoft MS-DOS 6 User's Guide" to restore MS-DOS 5.0. If this procedure does
	not work, or if you have installed DoubleSpace, carry out the following
	procedure:
	
	NOTE: Use this procedure only if you are restoring MS-DOS 5.0. If your previous
	version of MS-DOS is earlier than 5.0, do not use this procedure.
	
	1. To remove DoubleSpace and save your files, carry out the procedure in section
	  7.6 of the README.TXT file, which is in the directory that contains your
	  MS-DOS files (usually C:\DOS).
	
	2. Use the SETVER command to specify to the Setup program that your computer
	  uses MS-DOS 5.0. For example, type the following at the MS-DOS command
	  prompt:
	
	  " setver setup.exe 5.00 " (without the quotation marks)
	
	3. Remove the read-only attribute from the COMMAND.COM file on drive C by typing
	  "attrib c:\command.com -r" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	4. Restart your computer by pressing CTRL+ALT+DEL.
	
	5. Run the MS-DOS 5.0 Setup program.
	
	How to Return to a Version of MS-DOS Earlier Than MS-DOS 5.0
	------------------------------------------------------------
	
	To return to a version of MS-DOS earlier than MS-DOS 5.0, carry out the following
	procedure:
	
	1. If you have repartitioned your hard disk drive, you may be unable to see your
	  partitions when you start your computer with a previous version of MS-DOS. If
	  this is the case, you must do the following:
	
	  a. Back up your data.
	
	  b. Repartition your drive(s).
	
	  c. Format your drives. Be sure to use the /S parameter when you format drive
	     C.
	
	  d. Restore your data.
	
	2. If you did not repartition your drive(s) after you installed MS-DOS 6.0,
	  restart your computer with a system disk from your previous version of MS-DOS
	  in drive A.
	
	3. If you can see all your partitions (using the DIR command), use the SYS
	  command to transfer the MS-DOS system files to drive C. For example, type
	  "sys a: C:" (without the quotation marks) at the MS-DOS command prompt and
	  then press ENTER.
	
	4. If the SYS command fails because it cannot find room on drive C, you can do
	  the following:
	
	   - Use a third-party utility (such as Norton Utilities by Symantec) to make
	     drive C bootable.
	
	  -or-
	
	   - Use the FORMAT command with the /S parameter to reformat drive C and
	     transfer the MS-DOS system files. For example, type "format c: /s"
	     (without the quotation marks) at the MS-DOS command prompt and then press
	     ENTER.
	
	  WARNING: Using the FORMAT command erases all the files on drive C. If you back
	  up your hard disk prior to formatting it, be sure to use a backup utility
	  that is compatible with your earlier version of MS-DOS.
	
	5. Copy all the MS-DOS program files from the original MS-DOS disks to the
	  directory that contains your MS-DOS files (usually \DOS).
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
