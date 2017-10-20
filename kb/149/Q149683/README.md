---
layout: page
title: "Q149683: PCM Appears Blank on Startup When &quot;Offer After&quot; Not Expired"
permalink: /kb/149/Q149683/
---

## Q149683: PCM Appears Blank on Startup When &quot;Offer After&quot; Not Expired

{% raw %}

	Article: Q149683
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Windows Package Command Manager (PCM) may display itself with a blank list of
	package items when initialized. Everything appears to operate normally, but the
	user may not understand why PCM displayed itself when there are no packages
	available to install.
	
	CAUSE
	=====
	
	If a package is distributed to a client, regardless of the value of the "offer
	after" time/date, PCM will consider the package to be in a pending state.
	
	The behavior listed above will occur when there are no other packages pending
	that have expired "offer after" time/dates. PCM will read the client's
	instruction (*.ins) file during initialization and during its scheduled polling
	intervals. If it detects that there are packages pending, it will display its
	window.
	
	PCM will then enumerate the packages listed in the client's INS file, and if the
	"offer after" date has expired, it will display the packages in the window. If
	no packages have expired "offer after" time/dates, the PCM window will appear
	blank.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem was corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
