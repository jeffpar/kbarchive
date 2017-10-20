---
layout: page
title: "Q322846: Telnet Client Does Not Send CRLF When Expected"
permalink: /kb/322/Q322846/
---

## Q322846: Telnet Client Does Not Send CRLF When Expected

{% raw %}

	Article: Q322846
	Product(s): Microsoft Windows NT
	Version(s): 2.2 OEM Only,2.3 OEM Only,3.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.2 OEM Only, 2.3 OEM Only, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set the Telnet Client to send CRLF (Carriage Return Line Feed), it
	sends only CR.
	
	WORKAROUND
	==========
	
	To resolve this issue, set the Telnet Client to send CRLF after you establish a
	Telnet session. To do this, follow these steps:
	
	1. Start the Telnet Client.
	
	2. Open a Telnet session to a Telnet server.
	
	3. Press CTRL+] to switch to command mode.
	
	4. Type "set crlf" (without the quotation marks).
	
	5. Press ENTER to return to session mode.
	
	Now the Telnet Client will send both CR and LF to the server. However, you will
	not be able to open another session in the present Telnet session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Until the Telnet connection is established (that is, until the authentication is
	over), the Telnet session requires only CR, irrespective of the CRLF setting.
	
	If you set the CRLF option before authentication, the Telnet Client will send LFs
	when they are not appropriate. For example, after you type a user name and press
	ENTER, the following sequence is sent:
	
	  Username+CR+LF
	
	The following sequence should be sent:
	
	  Username+CR
	
	The result is that the password now becomes "LF+password", which causes the logon
	process to be unsuccessful.
	
	Additional query words: solar coaster solarcoaster interix
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300 kbWinServiceUNIX220OEM
	Version           : :2.2 OEM Only,2.3 OEM Only,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
