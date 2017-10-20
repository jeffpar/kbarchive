---
layout: page
title: "Q169135: SMSINST: &quot;The File Does Not Contain a Valid Header&quot; Error"
permalink: /kb/169/Q169135/
---

## Q169135: SMSINST: &quot;The File Does Not Contain a Valid Header&quot; Error

{% raw %}

	Article: Q169135
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a graphic file specified under the "Installation Interface
	Attribute," the following message appears:
	
	  The graphic file does not contain a valid header. Please check if this is a
	  valid bitmap file.
	
	CAUSE
	=====
	
	The Systems Management Server Installer does not allow you to compile graphics
	files other than bitmap (.bmp) files. This is by design.
	
	WORKAROUND
	==========
	
	To work around this problem, convert the graphic file to a bitmap before
	compiling it.
	
	
	Additional query words: prodsms SMS
	
	======================================================================
	Keywords          : kbnetwork smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
