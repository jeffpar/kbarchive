---
layout: page
title: "Q214726: Err Msg: &quot;A Specified Logon Session Does Not Exist&quot; with Telnet"
permalink: /kb/214/Q214726/
---

## Q214726: Err Msg: &quot;A Specified Logon Session Does Not Exist&quot; with Telnet

{% raw %}

	Article: Q214726
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Telnet to map a drive letter to a network share, the procedure may
	not work and the following error message may be displayed:
	
	  A specified logon session does not exist. It may already have been
	  terminated.
	
	NOTE: This problem does not affect Telnet sessions for which the user
	authentication method is clear text.
	
	CAUSE
	=====
	
	This issue occurs when you open a Telnet session to a computer running Windows
	NT Server using the NTLM authentication method. You cannot then, from within the
	Telnet session, connect to network resources using your implied user
	credentials. You must explicitly specify your credentials when making network
	connections from within the Telnet session.
	
	There is no mechanism in Windows NT to perform delegation of security (pass
	through) for network logon attempts.
	
	For example, if you log on to the network using NTLM from computer A to computer
	B, and then type "net use" at a command prompt to connect to computer C from
	computer B, the connection is not made. The reason is that computer B has an
	incomplete user token (it does not have your password), so the logon attempt to
	computer C does not work. This behavior is rooted in NTLM being a
	challenge/response protocol, and as such, it avoids sending your password across
	the network.
	
	RESOLUTION
	==========
	
	To work around this problem, always type your network credentials when you make
	network attachments from within a Telnet session.
	
	For example:
	
	  net use * \\servername\sharename /u:domainname\username password
	
	STATUS
	======
	
	This behavior is by design and inherent with the limitation of the NTLM
	authentication protocol.
	
	
	Additional query words: SFU
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix
	Version           : :; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
