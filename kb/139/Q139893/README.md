---
layout: page
title: "Q139893: Win95 Client Setup Puts SnaTcp Registry Key in Wrong Place"
permalink: /kb/139/Q139893/
---

## Q139893: Win95 Client Setup Puts SnaTcp Registry Key in Wrong Place

	Article: Q139893
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
	
	During setup of the Win95 SNA Client, Setup adds the SnaTcp key under the
	HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  \Software\Microsoft\SnaBase
	
	However, the TCP/IP .DLL file expects the key under the following subkey:
	
	  \Software\Microsoft\SnaBase\Parameters
	
	RESOLUTION
	==========
	
	Install the fix mentioned below.
	
	The SNA Server Windows 95 Setup script has been modified to create the SnaTcp key
	under the HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  \Software\Microsoft\SnaBase\Parameters
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 win95 registry
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
