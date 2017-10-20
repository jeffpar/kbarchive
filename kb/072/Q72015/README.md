---
layout: page
title: "Q72015: Redirection of PRINT Does Not Redirect All Error Messages"
permalink: /kb/072/Q72015/
---

## Q72015: Redirection of PRINT Does Not Redirect All Error Messages

{% raw %}

	Article: Q72015
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the MS-DOS PRINT command is issued and redirected to a file, error messages
	(if any) are not always directed to the specified file.
	
	MORE INFORMATION
	================
	
	The distinction between which errors are and are not redirected in MS-DOS might
	be between an error message as opposed to a status message. An error message is
	considered important and, therefore, is always directed to the screen, whereas a
	status message can be read later with no harm done.
	
	To re-create this behavior, do the following:
	
	1. Set up the print queue by typing "PRINT" (without the quotation marks) at the
	  MS-DOS prompt.
	
	2. Specify the printer port you are using. The following message will appear on
	  the screen:
	
	  Resident part of PRINT installed
	  PRINT Queue is empty
	
	3. Type the following at the MS-DOS prompt
	
	  " print testfile.txt > savefile.txt " (without the quotation marks)
	
	  where TESTFILE.TXT and SAVEFILE.TXT have not yet been created.
	
	4. Press ENTER. The following is displayed on the screen:
	
	  File not found-C:\DOS\TESTFILE.TXT
	
	5. List the contents of SAVEFILE.TXT by typing the following at the MS-DOS
	  prompt:
	
	  " type savefile.txt " (without the quotation marks)
	
	  The following message appears:
	
	  PRINT queue is empty
	
	Earlier versions of MS-DOS printed nothing to the screen. However, the following
	error message would appear in the SAVEFILE.TXT file:
	
	  File not found-C:\DOS\TESTFILE.TXT
	  PRINT queue is empty
	
	The "File not found-C:\DOS\TESTFILE.TXT" error message is directed to different
	places in the different versions. This is only one example.
	
	This also occurs with the COPY command. For more information, query on the
	following words here in the Microsoft Knowledge Base:
	
	  " redirection and copy and command " (without the quotation marks)
	
	Additional query words: 6.22 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
