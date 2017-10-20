---
layout: page
title: "Q139377: SNA Server Win3x Banyan Client Displays Incorrect Username"
permalink: /kb/139/Q139377/
---

## Q139377: SNA Server Win3x Banyan Client Displays Incorrect Username

{% raw %}

	Article: Q139377
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a username of 17 or more characters in the SNA Server Win3.x Banyan
	logon dialog box, the dialog box truncates the actual username to 16 characters
	and then appends the domain name to the end. This causes the client to fail with
	error 546. The user can correct the username once the dialog box appears.
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  LMCLI.DLL
	  IPCLI.DLL
	  NWCLI.DLL
	  BVCLI.DLL
	  WDMOD.DLL
	  WLOGTR.DLL
	  WNAP.EXE
	
	The fix increases the username field to 32 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
