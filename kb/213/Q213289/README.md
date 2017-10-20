---
layout: page
title: "Q213289: Err Msg: &quot;Directory File Needed for Initialization Could Not...&quot;"
permalink: /kb/213/Q213289/
---

## Q213289: Err Msg: &quot;Directory File Needed for Initialization Could Not...&quot;

{% raw %}

	Article: Q213289
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send packages to a Systems Management Server client, the following
	error message appears on the desktop of the client:
	
	  %systemdrive%\WINNT\MS\SMS\Clicomp\Apa\Bin\Pea32.exe
	  %systemdrive%\temp\. A temporary file needed for initialization could not be
	  created or could not be written to. Make sure that the directory path exists,
	  and disk space is available. Choose 'Close' to terminate the application.
	
	MORE INFORMATION
	================
	
	This message usually appears when the client has run out of disk space, which
	causes the 16-bit subsystem to fail.
	
	To prevent this error, ensure that the client has enough disk space before you
	send the package.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
