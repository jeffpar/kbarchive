---
layout: page
title: "Q122400: Using SMS to Share Document Files with PGC"
permalink: kb/122/Q122400/
---

## Q122400: Using SMS to Share Document Files with PGC

	Article: Q122400
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server version 1.0 was not designed to share
	documents that were associated with Systems Management Server shared
	applications. For example, by current design, a Systems Management Server shared
	version of Microsoft Word (MSWord) cannot open a Systems Management Server
	shared document. The following error message usually appears in this situation:
	
	  Unable to open file <filename>.
	
	This happens whenever a drive letter is required. With Windows NT systems, using
	the Runs With UNC Name attribute allows the document to load properly.
	
	MORE INFORMATION
	================
	
	Any Systems Management Server shared program item requires the Appstart utility
	(APPSTART) to be ran. If a shared program item has a command line like
	SHAREME.DOC, and Requires Drive Letter is specified, Systems Management Server
	is unable to open the document file.
	
	This is because APPSTART is ran twice during the process; first to launch
	SHAREME.DOC, and second to launch MSWord. APPSTART then quits the first instance
	of itself and continues. This removes the first environment and the associated
	drive letter assigned to the SHAREME.DOC path.
	
	For example, APPSTART assigns a driver letter <G:>, and runs
	G:\SHAREME.DOC. Windows then associates the *.DOC file with MSWord and attempts
	to launch it. If a Systems Management Server version of MSWord is installed on
	the system, Windows then launches APPSTART a second time to start the shared
	version of MSWord. APPSTART detects that it is already running and shuts down
	the first instance, removing the drive connection to SHAREME.DOC. APPSTART then
	connects a new drive letter <H:> for MSWord and runs the command line
	H:\WINWORD.EXE G:\SHAREME.DOC. Because drive G has been disconnected by
	APPSTART, MSWord generates an error message that the file could not be opened.
	
	A partial workaround is to configure the shared document with the Runs With UNC
	Name attribute, and distribute to Windows NT and Windows 95 clients only. Like
	the above scenario, the second instance of APPSTART quits the first instance,
	removing the drive location. However, Windows NT and Windows 95 allow universal
	naming convention (UNC) network path names, and when MSWord runs, the command
	line is:
	
	  H:\WINWORD \\<SMS Server>\SHAREME.DOC.
	
	This forces Windows NT and Windows 95 to open a new UNC connection to the
	SHAREME.DOC.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
