---
layout: page
title: "Q135699: PRB: In Windows NT Visual FoxPro DIR Command Differs"
permalink: /kb/135/Q135699/
---

## Q135699: PRB: In Windows NT Visual FoxPro DIR Command Differs

	Article: Q135699
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In certain cases, the DIRECTORY or DIR command in Visual FoxPro returns a value
	different from that returned by the same command, in the same case, in FoxPro
	version 2.x for Windows.
	
	One such case is when running Visual FoxPro under Windows NT. The difference
	occurs when the default is set to a subdirectory on a remote share with a
	network drive/directory combination, and then the default is changed back to the
	local drive. Visual FoxPro sees the remote share's root as the "current"
	directory of the remote drive, while FoxPro for Windows sees the directory set
	by the SET DEFAULT command as the current directory of the remote drive.
	
	CAUSE
	=====
	
	Visual FoxPro relies on the operating system to provide identification of the
	"current" directory for each drive. Windows NT does not keep a list of the
	current directory for each drive. FoxPro for Windows retains a variable defining
	the default directory settings for drives.
	
	
	WORKAROUND
	==========
	
	Developers need to be aware of this behavior and compensate for it in the design
	of the application if necessary.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This behavior can be demonstrated by using two computers, one of which is running
	Windows NT version 3.5 or later (Workstation or Server). Both computers must be
	on a common network.
	
	1. On the Windows NT computer, load both FoxPro version 2.6a for Windows and
	  Visual FoxPro for Windows 3.0.
	
	2. Create three table (.dbf) files, each with a memo (.fpt) file. Name one
	  Parent and the other two child1 and child2.
	
	3. On the second computer's hard drive, create a first-level directory named
	  Asample. Under it, create a subdirectory named Subdir. Share Asample.
	
	4. Copy the child1 and child2 tables and their memo files to C:\Asample\Subdir.
	
	5. Copy the Parent table and its memo file to C:\Asample
	
	6. Connect the Windows NT computer to the remote share. For example, in the
	  Windows NT File Manager, on the Drive menu, click Connect Network Drive. In
	  the path edit box of the Connect Network Drive dialog box, enter:
	
	  " \\<name of remote computer>\Asample" (without the quotation marks)
	
	7. Note the drive letter assigned to the remote drive. For the purposes of this
	  article assume the letter is E, so the remote share is E:
	
	8. Start FoxPro for Windows and enter the following commands in the Command
	  window:
	
	     SET DEFAULT TO E:\subdir
	     SET DEFAULT TO C:
	     DIR E:            && Make a note of the values and their appearance
	     DIR E:*.*         && Also note the values and their appearance
	
	9. Quit FoxPro for Windows. Start Visual FoxPro.
	
	10. In Visual FoxPro's Command window, issue the commands shown in step 8.
	
	Visual FoxPro sees the root of the remote drive as the current directory once the
	default directory is no longer on the remote drive.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
