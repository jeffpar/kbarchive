---
layout: page
title: "Q199114: SMS: How to Configure Traveling Mode on Client Computers"
permalink: /kb/199/Q199114/
---

## Q199114: SMS: How to Configure Traveling Mode on Client Computers

{% raw %}

	Article: Q199114
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbClient kbConfig _IK964 kbServer kbsms200 kbsms200bug kbsmsUtil kbRe
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Traveling mode on client computers.
	
	MORE INFORMATION
	================
	
	If you are using a client computer that is running Systems Management Server
	(SMS) 2.0 that is connected to a new SMS 2.0 site, if the computer's assignment
	has been changed, you may receive one of the following messages:
	
	  SMS - Traveling Mode
	
	  Systems Management Server has detected that this computer is a traveling
	  machine. A request has been made to assign this machine to site site code.
	  Would you like to continue with this operation?
	
	  -and-
	
	  SMS - Traveling Mode
	
	  Systems Management Server has detected that this computer is a traveling
	  machine. A request has been made to deassign this machine from site site
	  code. Would you like to continue with this operation?
	
	If you are an administrator, you may want to suppress these messages on the
	client in some environments.
	
	How to Set the Traveling Mode Flag on the Client
	------------------------------------------------
	
	You can use the client to enable or disable Traveling-mode behavior. To set
	Traveling mode:
	
	1. On the client, open Control Panel, and then double-click Systems Management.
	
	2. Click the General tab, and then click to select the "This computer connects
	  to the network from different locations".
	
	SMS 2.0 Service Pack 2 (SP2) includes the Chktravl.bat and Clitravl.exe
	utilities, which are located in the SMS SP2 Support folder. The Clitravl.exe
	file calls Clitravl.exe to verify the Traveling mode configuration of a client.
	Clitravl.exe can also be called separately without the use of the Chktravl.bat
	file. Both of these files use the following command-line parameters; however you
	must use capital letters in all of these parameters for the parameter to be
	recognized by Clitravl.exe:
	
	- /TRAVEL=ON: Enables Traveling mode on the client.
	
	- /TRAVEL=OFF: Disables Traveling mode on the client.
	
	- /PROMPT=ON: Enables Traveling mode prompting on the client.
	
	- /PROMPT=OFF: Disables Traveling mode prompting on the client.
	
	You can use either the Chktravl.bat or Clitravl.exe utilities to get a report on
	the current Traveling mode configuration of the client. Note that you cannot run
	these utilities silently.
	
	
	Additional query words: prodsms travel Clitravl Chktravl bat exe
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbClient kbConfig _IK964 kbServer kbsms200 kbsms200bug kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
