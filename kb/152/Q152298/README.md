---
layout: page
title: "Q152298: BUG: Conflict with Fax Software when Receiving a Fax"
permalink: /kb/152/Q152298/
---

## Q152298: BUG: Conflict with Fax Software when Receiving a Fax

{% raw %}

	Article: Q152298
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbnokeyword kbHWMAC kbvfp
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Global Village and other fax software that ships with many PowerMacs may cause
	the system software or Visual FoxPro to lock up when a fax is received.
	
	WORKAROUND
	==========
	
	If you have fax modem software installed, disable background or auto- receive
	functionality to avoid conflicts with Visual FoxPro.
	
	There may be other non-background intensive fax software that will not lock- up
	Visual FoxPro when a fax is received.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	With Global Village:
	
	1. Install Global Village modem/fax software version 2.5.5.
	
	2. Install FoxPro 2.6 Mac or Visual FoxPro for the Macintosh.
	
	3. Turn on Fax software so that it will receive faxes.
	
	4. Start FoxPro.
	
	5. Send a fax to that machine.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
