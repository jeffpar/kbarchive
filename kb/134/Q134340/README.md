---
layout: page
title: "Q134340: Font Display Problems Using Systems Management Server Helpdesk"
permalink: /kb/134/Q134340/
---

## Q134340: Font Display Problems Using Systems Management Server Helpdesk

{% raw %}

	Article: Q134340
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server remote control functions on a Windows
	95 client computer, some TrueType fonts and glyphs may not appear correctly.
	
	This problem occurs when you use Windows 95 Plus! Pack Themes.
	
	CAUSE
	=====
	
	This problem is caused by a limitation in the helpdesk software. Some themes
	alter the font used in the window title bar and other desktop items. Systems
	Management Server does not correctly displaying these on the console
	(QuickWindows Viewer).
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Windows 95 desktop themes. All other
	helpdesk and diagnostic functions are operational.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem was corrected in the latest US Service Pack for
	Systems Management Server. For information on obtaining this update, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: sms prodsms help desk quick
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
