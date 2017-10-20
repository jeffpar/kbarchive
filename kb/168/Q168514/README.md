---
layout: page
title: "Q168514: XFOR: Rasphone.pbk Cannot Be Accessed"
permalink: /kb/168/Q168514/
---

## Q168514: XFOR: Rasphone.pbk Cannot Be Accessed

{% raw %}

	Article: Q168514
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 02-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open the Dial-up Connections tab of the Internet Mail Server
	(IMS) the following error message may appear:
	
	  The Remote Access Service (RAS) phone book cannot be opened. It must be
	  accessible and in the system directory as \ winnt \ system32 \ ras \
	  rasphone.pbk.
	
	CAUSE
	=====
	
	The IMS is unable to locate the Rasphone.pbk file located in the %System
	root%\System32\ras\rasphone.pbk or the file is corrupt.
	
	RESOLUTION
	==========
	
	1. Ensure that the Rasphone.pbk file is not corrupt by using the dial-up
	  networking.
	
	2. Dial from the RAS Phone Book entry; on the Start menu, click Programs, and
	  then click Accessories and then click Dial-Up Networking.
	
	3. Verify that the Rasphone.pbk file is located in the following directory:
	
	  %System root%\System32\ras\
	
	  This can be done using File Manager or Windows Explorer.
	
	4. Ensure that the %System root% (normally the WINNT subdirectory) is shared as
	  Admin$. It should be shared as Admin$ by default.
	
	MORE INFORMATION
	================
	
	Clicking the Dial-up Connection tab in the IMS property starts the Imcadmin.dll,
	which attempts to open the file located in:
	
	  \\server\admin$\system32\ras\rasphone.pbk
	
	Additional query words: remote access
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
