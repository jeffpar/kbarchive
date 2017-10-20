---
layout: page
title: "Q313874: SMSINST: SMS Installer Does Not Overwrite Identical Files"
permalink: /kb/313/Q313874/
---

## Q313874: SMSINST: SMS Installer Does Not Overwrite Identical Files

{% raw %}

	Article: Q313874
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 smsinst
	Last Modified: 11-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMS Installer may not overwrite a file as you instruct it to if the same file
	exists on a client computer.
	
	CAUSE
	=====
	
	To alleviate excessive network traffic, a binary comparison is performed instead
	of simply overwriting the file.
	
	MORE INFORMATION
	================
	
	SMS Installer performs a binary comparison of the files that are to be replaced.
	SMS Installer does not replace files that are identical on the client, even if
	you choose always to overwrite in the script. This decision was made based on
	the network traffic that occurs when identical files are copied. The binary
	comparison ensures that files are skipped only if they are identical on the
	client.
	
	If the cyclical redundancy check (CRC) determines that the files are exactly the
	same, the file is skipped. This cuts down on network traffic and essentially
	allows installations to continue where they left off after interrupted
	installations. The end result is exactly the same as in the previous version of
	SMS Installer in all cases. The only difference is in the text in the log files.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
