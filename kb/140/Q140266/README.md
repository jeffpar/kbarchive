---
layout: page
title: "Q140266: 5250 Applet Causes GP Fault when Entering AS/400 Host Editor"
permalink: /kb/140/Q140266/
---

## Q140266: 5250 Applet Causes GP Fault when Entering AS/400 Host Editor

{% raw %}

	Article: Q140266
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to work with AS/400 electronic mail or documents, the SNA
	Server 2.1 and 2.11 5250 applets can encounter a General Protection Fault (GPF)
	or application exception error. This problem occurs with the Windows 3.x and
	Windows NT 5250 applets on SNA Server 2.1, and the Windows NT 5250 applet on SNA
	Server 2.11.
	
	CAUSE
	=====
	
	The problem is caused by the AS/400 interfacing with the applet as if it is a
	host terminal. Therefore, when you try to work with mail or documents, the
	AS/400 tries to use the Host Editor (as opposed to PC Text Assist or the Adapted
	word processor). The 5250 applet does not support this mode.
	
	RESOLUTION
	==========
	
	An update to the 5250 applet is available which prevents the application
	exception from occurring. Instead, a blank screen appears now at which point you
	must press the F3-key to return to the previous AS/400 screen. This causes an
	internal error on the document you are trying to access.
	
	To avoid this problem, you need to configure your AS/400 OfficeVision environment
	to default to the Adapted word processor instead of PC Text Assist. In addition
	to this change, an update to the 5250 applet is necessary, since the AS/400
	still tries to use the Host editor, but if that fails, then drops to Adapted.
	
	Microsoft has updated the following files to correct this problem:
	
	  Windows NT:  <snaroot>\SYSTEM\WIN5250.EXE
	               <snaroot>\SYSTEM\SNASRV.EXE
	  Windows 3.x: <sna.win>\WIN5250.EXE
	               <sna.win>\SNASRV.EXE
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.10 2.11 rumba office vision
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
