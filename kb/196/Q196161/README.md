---
layout: page
title: "Q196161: XADM: Cannot Install Key Management Server in Site"
permalink: /kb/196/Q196161/
---

## Q196161: XADM: Cannot Install Key Management Server in Site

{% raw %}

	Article: Q196161
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Key Management (KM) Server in a site that may
	already have had KM Server installed in it, the following error message may be
	displayed:
	
	  WARNING! There is already a KM Server installed in this Site on server
	  <servername>.
	  There can only be one KM Server per site. You must remove the existing KM
	  Server before you can install a new one.
	
	If you click OK, Key Manager does not complete the installation on the server.
	
	CAUSE
	=====
	
	The server named in the error message was either removed from the site, or KM
	Server was installed on it and was not properly removed by the Setup program.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Make sure you have a backup copy of a directory in the site.
	
	2. Start the Exchange Server Administrator program in raw mode. At a command
	  prompt type the following:
	
	  c:\exchsrvr\bin\admin.exe /r
	
	3. Click to open the Site container of the site that you want to install KM
	  Server to, then click the Configuration container.
	
	4. Click the CA object, and on the Edit menu, click Delete RAW Object.
	
	5. Click the Site Encryption Configuration object under the Configuration
	  object, and open File, Raw Properties (press SHIFT+ENTER).
	
	6. On the Object Attributes menu, click KM-Server.
	
	7. In the Edit Value list, click the Distinguished Name for the server that was
	  named in the error message that had KM Server installed on it at one time.
	
	  For example:
	
	  /o=Organization/ou=Site/cn=Configuration/cn=Servers/cn=SERVERNAME
	
	8. Press the DELETE key, and then click Remove so that both the Edit value and
	  Attribute value are blank.
	
	9. Click OK.
	
	10. Close the Exchange Server Administrator program in RAW Mode.
	
	11. Proceed with the KM Server setup.
	
	MORE INFORMATION
	================
	
	This article assumes that you do not have a backup of your advanced security
	data and that you want to install and use the KM Server with new security
	information.
	
	Additional query words: Removing Installing setup error KMS
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
