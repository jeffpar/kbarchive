---
layout: page
title: "Q262466: Windows 95 RAS Clients Cannot Connect to Windows NT Server"
permalink: kb/262/Q262466/
---

## Q262466: Windows 95 RAS Clients Cannot Connect to Windows NT Server

	Article: Q262466
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Windows 95-based client attempts to connect to a Windows
	NT-based server using encryption, the client may receive the following error
	message:
	
	  No domain server was available to validate your password. You may not be able
	  to gain access to some network resources.
	
	The following event ID may also appear in the event log:
	
	  Event ID: 8006
	  Description: The browser has received an illegal datagram from the remote
	  computer "<Windows 95 client name>" to name "<Server name>" on
	  transport "<Transport name>". The data is the datagram.
	
	If the Enable Encryption check box is selected for the Windows 95-based client
	connection, the problem does not occur.
	
	CAUSE
	=====
	
	Under certain circumstances, Windows NT and Windows 95 may lose synchronization
	when you are using encryption. This causes the client and the server to use
	different keys.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date    Time   Size     File name    Platform
	  ---------------------------------------------
	  5/8/00  9:47p   59,920  Ndiswan.sys  Intel
	  5/8/00  9:45p  108,592  Ndiswan.sys  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you obtain a network trace of the unsuccessful connection, you may note
	malformed packets originating from the client.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
