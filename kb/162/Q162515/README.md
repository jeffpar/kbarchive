---
layout: page
title: "Q162515: &quot;-B&quot; Is Printed at End of TN3270 Print Job"
permalink: /kb/162/Q162515/
---

## Q162515: &quot;-B&quot; Is Printed at End of TN3270 Print Job

	Article: Q162515
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A hyphen and the letter B (-B) are printed at the end of a TN3270 print job.
	
	CAUSE
	=====
	
	The TN3270 Server is sending down a WCC byte to the emulator (with the unlock
	keyboard byte enabled). This would be appropriate for a display session in order
	to give the emulator direction to send more data back to the host. However,
	because this is a printer session, the emulator instead interprets this byte as
	data and prints it.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. A fix was made to the TN3270 Server to not send
	this byte sequence over printer sessions at the end of the print job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	2.11 Service Pack 1.
	
	
	A supported fix is now available for SNA Server 2.11 SP1, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
