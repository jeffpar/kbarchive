---
layout: page
title: "Q170602: Cannot Browse the Internet Using Proxy Server on ZAK Client"
permalink: kb/170/Q170602/
---

## Q170602: Cannot Browse the Internet Using Proxy Server on ZAK Client

	Article: Q170602
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to the Internet using a proxy server on a Zero
	Administration Kit (ZAK) client, you may receive the following error message:
	
	  Internet Explorer cannot open the Internet site http://<Internet site>.
	  The site was not found. Make sure the address is correct, and try again.
	
	CAUSE
	=====
	
	The proxy settings for your ZAK client may not be configured correctly.
	
	RESOLUTION
	==========
	
	Configure the proxy settings in the policy file for your ZAK client. The policy
	file resides on the ZAK server. To modify the policy file, use the following
	steps:
	
	1. Log on to the ZAK server (this is the primary domain controller for the
	  network) as the domain administrator.
	
	2. Start Policy Editor (Poledit.exe), and then open the Ntconfig.pol file in the
	  following folder:
	
	     %SystemRoot%\System32\Repl\Import\Scripts
	
	3. Double-click the icon for the user group to which the ZAK client user
	  belongs. By default, this icon is labeled either AppUsers or TaskUsers.
	
	4. Double-click Windows, and then click the Internet Settings check box to
	  select it.
	
	  NOTE: There is a policy listed above this policy that is titled "Set the
	  values for your proxy server." Proxy server settings configured in this
	  policy have no effect on the ZAK client. You must configure proxy server
	  settings for the ZAK client in the Windows policy, as indicated above.
	
	
	5. Under Settings For Internet Settings, type a value in the Proxy Server box
	  using the following format:
	
	  http://<proxy server>:<port>
	
	6. You can also specify addresses for which the proxy server setting should be
	  overridden. By default, the proxy server setting is overridden only for
	  addresses located on your local area network (or intranet). To add a specific
	  address or set of addresses that should override the proxy server setting,
	  add a semicolon, and then the address, as in the following example:
	
	  <local>;www.microsoft.com;*.<myserver>.com
	
	7. Click the Proxy Enable check box to select it, and then click OK.
	
	8. Save the file, and then quit Policy Editor.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : 1.0
	
	=============================================================================
	
