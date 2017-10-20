---
layout: page
title: "Q160566: SMS: PCM Command Line and &quot;Cannot Find File&quot; Error"
permalink: /kb/160/Q160566/
---

## Q160566: SMS: PCM Command Line and &quot;Cannot Find File&quot; Error

{% raw %}

	Article: Q160566
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Package Command Manager (PCM) attempts to run a command, and the command
	line points to a specific drive letter (for example, Q:\App1), a dialog box
	appears with the following error message:
	
	  Cannot find the file <filename>. Make sure that the file exists on your
	  system and that the path and filename are correct.
	
	CAUSE
	=====
	
	Package Command Manager is looking for the file in the package, not in the
	specified location.
	
	WORKAROUND
	==========
	
	To work around this problem, place the file referred to in the command line in
	the package. Do not specify a path in the command line properties of the
	package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbusage kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
