---
layout: page
title: "Q317022: DNS Resolution Fails with System Log Event ID 453 and 7053"
permalink: /kb/317/Q317022/
---

## Q317022: DNS Resolution Fails with System Log Event ID 453 and 7053

{% raw %}

	Article: Q317022
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): ocsso
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Microsoft Windows NT 4.0 Server-based computer may be unable to resolve
	Fully Qualified Domain Names (FQDNs), and you may notice the following recurring
	events in the Event Viewer System Log:
	
	  Event ID: 453
	  DNS Server sendto () function failed. The data is in error.
	
	  -and-
	
	  Event ID 7053: (Error) DNS_EVENT_SENDTO_CALL_FAILED DNS Server sendto()
	  function failed. The data is the error.
	
	CAUSE
	=====
	
	This behavior can occur if the Domain Name Service (DNS) cache file (Cache.dns)
	is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Cache.dns file with a new copy from the
	%SYSTEMROOT%\System32\DNS\SAMPLES folder. To do this, follow these steps:
	
	1. Stop the DNS Server service. To do this, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "cmd" (without the quotation marks), and then click
	     OK.
	
	  c. At the command prompt, type "net stop dns" (without the quotation marks),
	     and then press ENTER. The following message appears:
	
	The Microsoft DNS Server service is stopping.
	The Microsoft DNS Server service was stopped successfully.
	
	  d. Type "exit" (without the quotation marks), and then press ENTER.
	
	2. Start Windows Explorer, and then browse to the following folder, where
	  <drive>: is the drive on which Windows is installed:
	
	  <drive>:\WINNT\system32\Dns\Samples
	
	3. In the right pane of the Windows Explorer window, right-click Cache.dns, and
	  then click Copy on the shortcut menu that appears.
	
	4. Browse to the following folder:
	
	  <drive>:\WINNT\system32\Dns
	
	5. In the right pane of the Windows Explorer window, right-click Cache.dns, and
	  then click Delete on the shortcut menu that appears.
	
	6. On the Confirm File Delete message that appears, click Yes.
	
	7. On the Edit menu, click Paste.
	
	  The copied Cache.dns file is pasted into the DNS folder.
	
	8. Quit Windows Explorer.
	
	9. Start the DNS Server service. To do this, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "cmd" (without the quotation marks), and then click
	     OK.
	
	  c. At the command prompt, type "net start dns" (without the quotation marks),
	     and then press ENTER. The following message appears:
	
	The Microsoft DNS Server service is starting.
	The Microsoft DNS Server service was started successfully.
	
	  d. Type "exit" (without the quotation marks), and then press ENTER.
	
	Additional query words:
	
	======================================================================
	Keywords          : ocsso 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
