---
layout: page
title: "Q173667: Cannot Use MSN E-mail Service with Pocket Inbox"
permalink: /kb/173/Q173667/
---

## Q173667: Cannot Use MSN E-mail Service with Pocket Inbox

{% raw %}

	Article: Q173667
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,2.0,2.1,2.12,2.5,2.51,2.52,2.6,3.0 Professional Edition,5.0,5.1
	Operating System(s): 
	Keyword(s): kbinterop kbmsn
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6, 5.0, 5.1 
	- Microsoft Windows CE versions 1.0, 2.0, 2.1, 2.12, 3.0 Professional Edition for the Handheld PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot send or receive e-mail on MSN, The Microsoft Network, using a
	Handheld PC (H/PC) running Microsoft Windows CE.
	
	CAUSE
	=====
	
	The MSN e-mail servers use secure authentication to encrypt messages that are
	sent and received by an e-mail client. Windows CE includes an e-mail client that
	does not use secure authentication and therefore cannot send or receive e-mail
	through the MSN e-mail servers.
	
	WORKAROUND
	==========
	
	To work around this issue, you can configure a Hot Mail account to send and
	receive messages from an MSN e-mail account using Pocket Internet Explorer. Go
	to:
	
	  Q231404 - How to Check MSN E-mail on Windows CE HPC Device
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. 2.50 2.60
	
	======================================================================
	Keywords          : kbinterop kbmsn 
	Technology        : kbMSNSearch kbWinCESearch kbWinCE100HPC kbWinCE200HPC kbWinCE210HPC kbWinCE212HPC kbWinCEPro300HPC kbMSN510 kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:1.0,2.0,2.1,2.12,2.5,2.51,2.52,2.6,3.0 Professional Edition,5.0,5.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
