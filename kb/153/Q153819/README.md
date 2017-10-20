---
layout: page
title: "Q153819: SMS PCM: &quot;General File Transfer Error&quot; Distributing Netscape"
permalink: /kb/153/Q153819/
---

## Q153819: SMS PCM: &quot;General File Transfer Error&quot; Distributing Netscape

{% raw %}

	Article: Q153819
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you distribute Netscape for installation at a workstation using a "Run
	Command on a Workstation" package, the following error message appears:
	
	  General File Transfer Error
	
	CAUSE
	=====
	
	The Setup process loses connection to the distribution server during file
	transfer.
	
	RESOLUTION
	==========
	
	To correct this problem, use the "-SMS" (without quotation marks) parameter with
	Setup.exe on the command line of a Systems Management Server package. This
	forces an active connection between the client to the distribution server and
	allows Setup.exe to run on remote computers.
	
	Additional query words: prodsms pgc internet web
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
