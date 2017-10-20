---
layout: page
title: "Q146642: How to Undelete a File Deleted by the Project Manager"
permalink: /kb/146/Q146642/
---

## Q146642: How to Undelete a File Deleted by the Project Manager

{% raw %}

	Article: Q146642
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro's Project Manager has a Remove button that once pressed asks:
	
	  Do you want to remove the file from the project or delete it from the disk?
	
	If you tell Visual FoxPro to delete the file, the file is marked for deletion in
	the standard MS-DOS fashion under Windows 3.11 or Windows 95, thus removing the
	first charter of the file's name and allowing new files to use that disk space.
	
	MORE INFORMATION
	================
	
	If you are using Windows 3.1 and MS-DOS 6.22, you can use the Undelete.exe
	program that came with MS-DOS to undelete the file. Earlier versions of MS-DOS
	that have an UNDELETE command may also enable you to retrieve your deleted file.
	See your MS-DOS documentation for more details. Other Utilities that provide
	undelete utilities may also work to restore your deleted files, see the
	documentation for your installed software. Do not install any new software, save
	any files, or do any type of action that will write information to your hard
	disk. This will maximize your chances of retrieving your deleted files.
	
	If you are using Windows 95, and delete a file that you did not intend to delete
	from your hard disk, create an MS-DOS 6.22 boot disk, and copy Undelete.exe to
	that floppy disk. You will need to find a computer with MS-DOS 6.22 as the
	operating system so that you can create a boot disk using FORMAT A: /S, and copy
	the Undelete.exe to that disk. Once you have the floppy disk, insert in drive
	A:, and boot your computer using the boot disk. Press ENTER for the date, and
	press ENTER for the time.
	
	For example, to use the Undelete.exe of MS-DOS 6.22, type the following at the A:
	prompt:
	
	  " A:>undelete c:\vfp\*.* " (without the quotation marks)
	
	You will have to provide the first letter of each file you wish to undelete.
	Remember that many files consist of more that one file, for example a form
	consists of an .scx and a .sct file. See File Extensions and File Types in
	Visual FoxPro's Help file for a listing of the extensions that Visual FoxPro
	uses.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
