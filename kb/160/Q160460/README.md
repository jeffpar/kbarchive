---
layout: page
title: "Q160460: GPF in Administrator Tool During Remote Control of Netscape"
permalink: /kb/160/Q160460/
---

## Q160460: GPF in Administrator Tool During Remote Control of Netscape

{% raw %}

	Article: Q160460
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbtshoot kbusage kbsmsAdmin smsadmin smsremtshoot kbRemoteProgkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you remotely control a computer running Windows 95 that is using Netscape
	Navigator 3.0, and the current web page has animated pictures, the Systems
	Management Server 1.2 Administrator Tool will generate a general protection
	fault (GPF) error when trying to view the animated pictures.
	
	CAUSE
	=====
	
	This problem is caused when a compressed animated bitmap stream is transmitted
	to the Systems Management Server Administrator Tool, but the tool cannot
	properly handle the stream of animated pictures being updated to it. Static
	bitmaps, GIFs and JPGs will display correctly.
	
	WORKAROUND
	==========
	
	To work around this problem, either use Netscape Navigator 2.0 or Microsoft
	Internet Explorer 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	Additional query words: prodsms 1.20
	
	======================================================================
	Keywords          : kb3rdparty kbtshoot kbusage kbsmsAdmin smsadmin smsremtshoot kbRemoteProg kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}
