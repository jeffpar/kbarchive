---
layout: page
title: "Q134367: PRB: &quot;Too Many Files&quot; Open in FoxPro for Macintosh"
permalink: /kb/134/Q134367/
---

## Q134367: PRB: &quot;Too Many Files&quot; Open in FoxPro for Macintosh

{% raw %}

	Article: Q134367
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When several users are running a FoxPro for Macintosh application and using
	tables stored on a server, it is possible to receive the message:
	
	  Too many files open
	
	CAUSE
	=====
	
	This indicates that there are not enough file handles on the server for the
	number of users and files that are open. This usually happens when the server is
	another Macintosh connected to through the AppleTalk services provided with the
	System Software. The absolute limit of file handles on a Macintosh is 342. Note
	that each user that opens a file on a server uses another file handle.
	
	WORKAROUND
	==========
	
	The following are suggestions that may help reduce the number of file handles
	being used on the server:
	
	1. Place the application the local hard drive (on each workstation).
	
	2. Use the TMPFILES setting in the CONFIG.FPM file to make sure that temporary
	  files are going to the local hard drive (of each workstation).
	
	3. Change the application so that tables and other files are only open as long
	  as they are needed, instead of keeping them open throughout the application.
	
	Another option is to upgrade to a server operating system that will support a
	higher limit of open files, such as AppleShare Pro, Novell Netware, or Microsoft
	Windows NT.
	
	MORE INFORMATION
	================
	
	The following information was provided by Apple Developer Support on the maximum
	number of File Control Blocks (FCBs) available in the Macintosh Operating System
	File Manager, and therefore, the number of files that can be open at one time.
	This information only applies to System 7.x.
	
	"While System 7 increases the number of FCBs as required, there is an absolute
	limit imposed by the File Manager. This limit is 342 FCBs and is documented in
	Inside Macintosh, File p. 2-81:
	
	'The initial size of the FCB buffer is determined by the system startup
	information stored on a volume. Beginning in system software version 7.0, the
	File Manager attempts to resize the FCB buffer whenever the existing buffer is
	filled.
	
	You can find the (http://support.microsoft.com/download/support/mslfiles/the)
	beginning of any particular FCB by adding the size of all preceding FCBs to the
	size of the FCB buffer length word (that is, 2). This offset from the head of
	the FCB buffer is used as the file reference number of the corresponding open
	file. Because the current size of an FCB is 94 bytes, the first few valid file
	reference numbers are 2, 96, 190, 284, 378, 472, and so on. The maximum size of
	an expandable FCB buffer is 32,535 bytes, so there is an absolute limit of 342
	FCBs in the FCB buffer.' "
	
	Additional query words: 3.00b VFoxMac 2.50b 2.50c FoxMac
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
