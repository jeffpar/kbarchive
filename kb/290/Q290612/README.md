---
layout: page
title: "Q290612: BUG: Event ID: 5 &quot;Error While Reading Default Settings&quot;"
permalink: /kb/290/Q290612/
---

## Q290612: BUG: Event ID: 5 &quot;Error While Reading Default Settings&quot;

	Article: Q290612
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinDNA kbGrpDSSIE kbDSupport kbiis400 kbiis500 kbWin2000PreSP2Fix kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart the computer or the IISAdmin service, the following event
	appears in the event log:
	
	  Event Type: Error
	  Event Source: Active Server Pages
	  Event Category: None
	  Event ID: 5
	  Description:
	  Error: Error while reading default settings. please do regsvr32 asp.dll..
	
	CAUSE
	=====
	
	This event is logged because the installed version of the Asp.dll file is
	searching for a metabase key that does not exist. However, the metabase key does
	not need to exist because Asp.dll uses a default value. Asp.dll logs this event
	log entry to recommend that you reregister Asp.dll as an overly precautious
	troubleshooting step.
	
	RESOLUTION
	==========
	
	This event log entry is completely harmless and can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in Windows 2000 Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinDNA kbGrpDSSIE kbDSupport kbiis400 kbiis500 kbWin2000PreSP2Fix kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
