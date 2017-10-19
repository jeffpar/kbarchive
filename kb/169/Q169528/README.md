---
layout: page
title: "Q169528: FP97: NTLM Authentication Error Opening/Publishing FrontPage Web"
permalink: /kb/169/Q169528/
---

## Q169528: FP97: NTLM Authentication Error Opening/Publishing FrontPage Web

	Article: Q169528
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194035.
	
	SYMPTOMS
	========
	
	When you open or publish a FrontPage Web on a Microsoft Personal Web Server or
	Microsoft Internet Information Server (IIS) you receive the following error
	message:
	
	  HTTP 1.0 500 server error (-2146893042).
	
	  -or-
	
	  NTLM authentication failed code -2146893055
	
	CAUSE
	=====
	
	This message appears when Microsoft Windows NT Challenge/Response security does
	not receive the Web author's log on identification.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps.
	
	Step 1. Enable Windows NT Challenge/Response Authentication
	-----------------------------------------------------------
	
	To enable Windows NT Challenge/Response Authentication, install the Client for
	Microsoft Networks and set it as your primary network client. To do this, follow
	these steps:
	
	1. On the Windows Start menu, point to settings, and then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click the Configuration tab.
	
	4. Click Add.
	
	5. In the "Select Network Component Type" dialog box, click Client. Click Add.
	
	6. From the Manufacturers list, select Microsoft. From the Network Clients list,
	  select "Client for Microsoft Networks." Click OK.
	
	7. From the Primary Network Logon list, select "Client for Microsoft Networks."
	
	8. Click the Identification tab.
	
	9. Fill in the Computer Name and Workgroup boxes, and then click OK.
	
	10. If you are prompted to restart Windows, click Yes.
	
	Step 2. Configure Dial-Up Networking
	------------------------------------
	
	1. Double-click My Computer.
	
	2. Double-click Dial-Up Networking.
	
	3. Right-click the connectoid for your Internet service provider, and then click
	  Properties.
	
	4. Click Server Type.
	
	5. Click Logon To Network.
	
	6. Click to clear the Require Encrypted Password check box.
	
	7. Click OK.
	
	Complete these additional steps if your are using a Windows NT Server running
	IIS:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click the Services icon.
	
	3. In the Service list, verify that Server and Workstation are listed and that
	  their Status is Started.
	
	Additional query words: NTLM 2146893042
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
