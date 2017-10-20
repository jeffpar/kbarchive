---
layout: page
title: "Q156278: SMS: Error -39 in File Cpackage.cpp"
permalink: /kb/156/Q156278/
---

## Q156278: SMS: Error -39 in File Cpackage.cpp

{% raw %}

	Article: Q156278
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a package from a Package Command Manager (PCM) window on a
	Macintosh client, you receive the following error message:
	
	  Error -39 in File Cpackage.cpp, Line 570 eofErr.
	  End of File
	  Command Failed to Execute
	
	  Error -39 in FileCTable.cpp, Line 198 eofErr.
	  End of File.
	
	Also, if you use Resedit to examine the Macintosh file, it will not have a
	resource fork.
	
	CAUSE
	=====
	
	Renaming a Macintosh file to comply with the 8.3 naming convention and then
	sending it out as a package causes the Systems Management Server Scheduler
	service not to require the Windows NT file system (NTFS) when distributing the
	file. Without this requirement, the resource fork is lost.
	
	When the Scheduler creates a package for distribution, it checks for files with
	long filenames. If such a file is detected, the Scheduler sets a flag requiring
	NTFS for the package destination. The despooler should not attempt to distribute
	the package when it detects the flag. For more information on this behavior, see
	the following article in the Microsoft Knowledge Base:
	
	  Q139589 Distribution of Files with Long Filenames Require NTFS
	
	WORKAROUND
	==========
	
	To work around this problem, do not rename Macintosh files using the 8.3 naming
	format.
	
	MORE INFORMATION
	================
	
	For more information on this error, see the following article in the Microsoft
	Knowledge Base:
	
	  Q152338 PCMMac Error -39 in File Cpackage.cpp
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
