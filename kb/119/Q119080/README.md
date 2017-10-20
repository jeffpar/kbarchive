---
layout: page
title: "Q119080: WinPopUp Msg: There Has Been a Failure of the Network"
permalink: /kb/119/Q119080/
---

## Q119080: WinPopUp Msg: There Has Been a Failure of the Network

{% raw %}

	Article: Q119080
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following intermittent WinPopUp message appears after you print to a network
	printer shared by a Windows NT Advanced Server or a Windows for Workgroups
	server:
	
	  There has been a failure of the network.
	
	The print job prints properly.
	
	CAUSE
	=====
	
	This behavior has been observed in the following environments:
	
	- Running Windows for Workgroups with the IPX/SPX Compatible Transport with
	  NetBIOS.
	
	- Running Windows for Workgroups with the IPX/SPX Compatible Transport with
	  NetBIOS and TCP/IP.
	
	- Running Windows for Workgroups with the IPX/SPX Compatible Transport with
	  NetBIOS and NetBEUI.
	
	- Running Windows for Workgroups with the IPX/SPX Compatible Transport with
	  NetBIOS and NetBEUI and TCP/IP.
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable the WinPopUp utility:
	
	1. In the Control Panel window of Windows for Workgroups, choose the Network
	  icon.
	
	2. In the Network Settings dialog box, choose the Startup button.
	
	3. Under Startup Options, clear the Enable WinPopUp check box, and then choose
	  OK.
	
	4. Restart Windows for Workgroups.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups 3.11.
	This problem was corrected in Windows for Workgroups files available on the
	Windows NT 3.5 Server CD.
	
	Additional query words: prodnt wfw wfwg 3.10 3.11 ntas error err msg winapp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW310 kbWFW311
	Version           : 3.11
	
	=============================================================================
	

{% endraw %}
