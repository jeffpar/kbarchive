---
layout: page
title: "Q225094: RPC Named Pipe Server App Encounters Invalid Handle Exceptions"
permalink: /kb/225/Q225094/
---

## Q225094: RPC Named Pipe Server App Encounters Invalid Handle Exceptions

{% raw %}

	Article: Q225094
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program using the remote procedure call (RPC) named pipe server transport
	encounters an excessive amount of invalid handle exceptions when attempting to
	close a remote connection. The RPC program does not stop responding (hang)
	because of the structured exception handling surrounding the RPC call, but may
	affect performance and the logic of the server program.
	
	CAUSE
	=====
	
	This problem occurs because the Windows NT RPC Named Pipe Server transport is
	inadvertently receiving an RPC fault over the network. This fault is reported as
	an invalid handle because of a problem with identifying the client session.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	This problem may cause the Spooler service (Spoolss.exe) to encounter excessive
	invalid handle exceptions, which can be observed by running the process under a
	debugger. The exceptions negatively affect the service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
