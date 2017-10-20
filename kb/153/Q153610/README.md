---
layout: page
title: "Q153610: PGC Defaults to Wrong Drive Mode After Period of Inactivity"
permalink: /kb/153/Q153610/
---

## Q153610: PGC Defaults to Wrong Drive Mode After Period of Inactivity

{% raw %}

	Article: Q153610
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbother kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	On a Windows 3.1/LAN Manager client, Program Group Control (PGC) launches
	Solitaire as a shared application by establishing a connection using the next
	available drive letter, even if the drive mode for this sharing package is set
	up for "Runs with UNC name" or "Requires Specific Drive Letter." This result
	occurs only after you wait 10 to 15 minutes after launching any other PGC shared
	package. If the Specified Drive package is launched sooner, the expected results
	do occur correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbother kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
